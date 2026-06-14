"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  Shield, 
  Droplets, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Check, 
  ChevronDown, 
  ChevronUp,
  ArrowRight, 
  User, 
  FileText,
  Car,
  Compass,
  ArrowUpRight
} from 'lucide-react';

export default function VinayakaCarWash() {
  // Navigation Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Before/After Slider State
  const [sliderPosition, setSliderPosition] = useState(50);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // Detailing Process Active Step
  const [activeStep, setActiveStep] = useState(0);

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    vehicleModel: '',
    packageType: 'Ceramic Coating',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (bookingForm.name && bookingForm.phone) {
      setFormSubmitted(true);
    }
  };

  // Process Steps data
  const processSteps = [
    {
      title: "Decontamination",
      description: "A dual-stage wash followed by a complete clay bar treatment to remove chemical fallout, tar, and iron particles embedded in the clear coat."
    },
    {
      title: "Paint Correction",
      description: "Precision machine compounding and polishing to eliminate swirl marks, light scratches, and oxidation, restoring optical clarity to the paint."
    },
    {
      title: "Surface Preparation",
      description: "An isopropyl alcohol (IPA) wipe-down to strip polishing oils and ensure a completely bare surface for maximum ceramic bonding."
    },
    {
      title: "Coating Application",
      description: "Hand-application of premium 9H nano-ceramic coating, curated under temperature-controlled infra-red curing lamps."
    }
  ];

  // Services data
  const services = [
    {
      id: "01",
      title: "Signature Craft wash",
      description: "Beyond a standard wash. We execute a 24-step pure water decontamination process utilizing dual-bucket grit guards, pH-neutral luxury shampoos, and compressed air drying.",
      duration: "2 - 3 Hours",
      price: "₹1,499"
    },
    {
      id: "02",
      title: "Paint Correction & Polish",
      description: "A meticulous multi-stage machine polishing process to permanently eliminate up to 90% of paint defects, swirls, and micro-marring, yielding a mirror finish.",
      duration: "1 - 2 Days",
      price: "₹6,999"
    },
    {
      id: "03",
      title: "9H Nano Ceramic Coating",
      description: "Apply a permanent, ultra-hydrophobic silica shield that guards your paint against UV rays, acid rain, bird droppings, and light scratches with an deep wet gloss.",
      duration: "2 Days",
      price: "₹14,999"
    },
    {
      id: "04",
      title: "Bespoke Interior Detailing",
      description: "Complete extraction of carpets, steam cleaning of leather surfaces, pH-balanced conditioning, and nano-coating dashboard trim for absolute interior hygiene.",
      duration: "6 - 8 Hours",
      price: "₹4,499"
    }
  ];

  // Pricing Packages
  const packages = [
    {
      name: "Enthusiast Detail",
      price: "₹9,999",
      period: "For Sedans / Hatchbacks",
      desc: "Perfect entry-level restoration and surface protection package.",
      features: [
        "Single-Stage Paint Correction (swirl removal)",
        "1-Year Nano Ceramic sealant on paint",
        "Deep wheel arches and rim cleanup",
        "Express interior vacuum & steam clean",
        "All window glass hydrophobic treatment"
      ],
      tag: "Popular"
    },
    {
      name: "Vinayaka Sovereign 9H",
      price: "₹24,999",
      period: "For SUVs / Luxury Cars",
      desc: "Our flagship multi-layered ceramic armor for ultimate long-term gloss.",
      features: [
        "Three-Stage Paint Correction (95% scratch removal)",
        "3-Year Double-Layer 9H Ceramic Coating",
        "Wheel face & caliper ceramic coating",
        "Bespoke leather restoration & coating",
        "Engine bay detailing & plastic preservation",
        "Free 6-month maintenance top-up"
      ],
      tag: "Elite Choice"
    },
    {
      name: "Ultimate PPF Armor",
      price: "₹89,999",
      period: "Complete Vehicle Protection",
      desc: "Self-healing paint protection film (TPU) for absolute stone chip defence.",
      features: [
        "180-Micron Premium Self-Healing TPU Film",
        "Full body panel wrap (including wrapped edges)",
        "5-Year manufacturer warranty against yellowing",
        "Ultra-hydrophobic top-coating",
        "Free inspection every 12 months"
      ],
      tag: "Maximum Shield"
    }
  ];

  // FAQs
  const faqs = [
    {
      q: "What makes Vinayaka's wash process different from local car washes?",
      a: "Most local washes use hard borewell water and harsh detergents that strip waxes and cause swirl marks. Vinayaka uses soft, filtered water, pH-balanced professional wash compounds, and a two-bucket wash system with grit guards. Every wash is executed by trained detailing technicians who understand clear coat safety."
    },
    {
      q: "How long does a 9H Ceramic Coating service take?",
      a: "A professional ceramic coating is not just 'applying liquid'. It requires extensive decontamination, multi-stage paint correction, and infra-red curing. A premium application takes a minimum of 36 to 48 hours in our dust-free booth."
    },
    {
      q: "What is the warranty and maintenance policy on coatings?",
      a: "Our Sovereign 9H package includes a 3-Year warranty. To maintain the hydrophobic properties, we recommend a maintenance inspection and top-up wash every 6 months, which we offer at a heavily subsidized cost at our Attapur center."
    },
    {
      q: "Is Paint Protection Film (PPF) better than Ceramic Coating?",
      a: "PPF (Paint Protection Film) is a thick physical urethane barrier that protects against actual rock chips, key scratches, and minor parking scuffs. Ceramic Coating is a micro-thin chemical liquid layer that provides extreme gloss, UV protection, and self-cleaning attributes but will not stop rock chips. For maximum protection, many clients choose PPF on high-impact front zones and Ceramic on the rest."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "The Swiss minimalist approach Vinayaka takes is reflected in their workshop. Spotless floors, brilliant white lighting, and absolute silence while they polish. My black Fortuner looks deeper and glossier than the day I bought it from the showroom. Attapur finally has a true detailing studio.",
      author: "Aditya Reddy",
      vehicle: "Toyota Fortuner Legend",
      rating: 5
    },
    {
      quote: "Meticulous work. I booked their Sovereign 9H package for my BMW 3-Series. They documented every swirl mark under LED inspection lamps and kept me updated on WhatsApp with photos. The craftsmanship is flawless. Highly recommended.",
      author: "Dr. Srinivas Rao",
      vehicle: "BMW 330i M Sport",
      rating: 5
    },
    {
      quote: "Outstanding interior detailing. They cleaned areas I didn't even know could be cleaned. The steam sanitization removed a stubborn musty smell from the monsoons completely. Truly premium.",
      author: "Meera Sen",
      vehicle: "Hyundai Ioniq 5",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#0A1128] font-sans antialiased selection:bg-[#0066FF] selection:text-white">
      {/* Top Banner - Subtle Utility */}
      <div className="bg-[#0A1128] text-white py-3 px-4 text-xs tracking-[0.15em] uppercase text-center font-semibold border-b border-white/10">
        Craftsmanship-first Car Detailing Studio • Attapur, Hyderabad
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#0A1128]/10 transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <span className="font-black text-2xl tracking-[0.25em] text-[#0A1128] uppercase">
                VINAYAKA
              </span>
              <span className="h-4 w-[1px] bg-[#0A1128]/20 hidden sm:block"></span>
              <span className="text-xs font-bold tracking-widest text-[#0066FF] uppercase hidden sm:block">
                CRAFT STUDIO
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              <a href="#about" className="text-xs font-bold uppercase tracking-widest text-[#0A1128]/70 hover:text-[#0A1128] transition-colors">Philosophy</a>
              <a href="#services" className="text-xs font-bold uppercase tracking-widest text-[#0A1128]/70 hover:text-[#0A1128] transition-colors">Services</a>
              <a href="#comparison" className="text-xs font-bold uppercase tracking-widest text-[#0A1128]/70 hover:text-[#0A1128] transition-colors">Before/After</a>
              <a href="#packages" className="text-xs font-bold uppercase tracking-widest text-[#0A1128]/70 hover:text-[#0A1128] transition-colors">Packages</a>
              <a href="#faq" className="text-xs font-bold uppercase tracking-widest text-[#0A1128]/70 hover:text-[#0A1128] transition-colors">FAQ</a>
            </nav>

            {/* Action CTA */}
            <div className="hidden md:flex items-center">
              <a 
                href="#book" 
                className="inline-flex items-center justify-center px-6 py-3 border border-[#0A1128] text-xs font-bold uppercase tracking-widest text-white bg-[#0A1128] hover:bg-[#0066FF] hover:border-[#0066FF] transition-all duration-300"
              >
                Book Inspection
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden p-2 text-[#0A1128] focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-0.5 bg-[#0A1128] mb-1.5 transition-all"></div>
              <div className="w-6 h-0.5 bg-[#0A1128] mb-1.5 transition-all"></div>
              <div className="w-6 h-0.5 bg-[#0A1128] transition-all"></div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#0A1128]/10 bg-white px-6 py-8 space-y-6 shadow-xl">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold uppercase tracking-wider text-[#0A1128]"
            >
              Philosophy
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold uppercase tracking-wider text-[#0A1128]"
            >
              Services
            </a>
            <a 
              href="#comparison" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold uppercase tracking-wider text-[#0A1128]"
            >
              Before/After
            </a>
            <a 
              href="#packages" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold uppercase tracking-wider text-[#0A1128]"
            >
              Packages
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold uppercase tracking-wider text-[#0A1128]"
            >
              FAQ
            </a>
            <a 
              href="#book" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-4 bg-[#0A1128] text-white text-xs font-bold uppercase tracking-widest"
            >
              Book Inspection
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Typographic Thesis */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0066FF]"></span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0A1128]/60">
                  Attapur detailing Studio
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0A1128] leading-[0.95]">
                Purity <br className="hidden sm:inline" />
                in wash. <br />
                Art in detail.
              </h1>
              <p className="text-lg text-[#64748B] max-w-xl font-normal leading-relaxed">
                We reject the fast-paced conveyor belt wash. At Vinayaka, we treat paint preservation as a discipline. Filtered soft water, dual-bucket isolation grids, and master polishing craftsmen.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#packages" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#0A1128] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#0066FF] transition-all duration-300"
                >
                  Explore Studio Packages
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a 
                  href="#book" 
                  className="inline-flex items-center justify-center px-8 py-4 border border-[#0A1128]/20 text-xs font-bold uppercase tracking-widest text-[#0A1128] hover:bg-[#0A1128]/5 transition-all"
                >
                  Request Consultation
                </a>
              </div>

              {/* Minimal Trust Accents */}
              <div className="grid grid-cols-3 gap-6 pt-12 border-t border-[#0A1128]/10 max-w-lg">
                <div>
                  <div className="text-2xl font-black text-[#0A1128]">100%</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#64748B] font-bold">Filtered Water</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#0A1128]">9H</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#64748B] font-bold">Ceramic Shield</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#0A1128]">8+ Yrs</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#64748B] font-bold">Studio Service</div>
                </div>
              </div>
            </div>

            {/* Premium Navy Block Module */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#0B132B] text-white p-10 lg:p-12 space-y-8 shadow-2xl relative overflow-hidden">
                {/* Subtle Geometric Graphic */}
                <div className="absolute right-0 top-0 w-32 h-32 border-r border-t border-white/10 opacity-30 transform translate-x-8 -translate-y-8"></div>
                
                <h3 className="text-xl font-bold uppercase tracking-wider border-b border-white/10 pb-4">
                  Today's Inspection
                </h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-white">Audi A6 E-Tron</h4>
                      <p className="text-xs text-white/50">Mythos Black Metallic</p>
                    </div>
                    <span className="px-3 py-1 bg-white/10 text-[10px] font-bold uppercase tracking-widest rounded-none">
                      Active PPF Wrap
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs text-white/70">
                      <span>Paint Correction Phase</span>
                      <span>Level 3 Complete</span>
                    </div>
                    <div className="w-full bg-white/10 h-1">
                      <div className="bg-[#0066FF] h-full w-[85%]"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Compass className="w-5 h-5 text-[#0066FF]" />
                    <span className="text-xs font-bold uppercase tracking-wider">Pillar 120, Attapur</span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Drop by our clean-room inspection bay. We use microscopic paint depth gauges to analyze your clear coat health.
                  </p>
                </div>

                <a 
                  href="#book"
                  className="flex items-center justify-between w-full py-4 px-6 bg-[#0066FF] text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#0A1128] transition-all duration-300"
                >
                  <span>Book Free Paint Diagnosis</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Philosophy / Core Value Section */}
      <section id="about" className="bg-[#0A1128] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#0066FF] block mb-4">
                THE CRAFTSMANSHIP ETHOS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight">
                Not a wash. <br />
                A restorative treatment.
              </h2>
            </div>
            <div>
              <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
                Local car washes recycle dirty water and use hard bristles that carve thousands of micro-scratches into your clear coat. We operate on a master-apprentice model. Every car is hand-treated with pure filtered soft water, dual-bucket grit isolation, and professional premium chemicals imported from Germany.
              </p>
              
              {/* Process Grid */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">Dust-Free Booth</h4>
                  <p className="text-xs text-white/50">Clean-room atmosphere for ceramic bonding, preventing particulate contamination.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">Soft Water Wash</h4>
                  <p className="text-xs text-white/50">Zero calcium deposits or scale marks. Only pure spot-free water touches the panels.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-24 lg:py-32 border-b border-[#0A1128]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-6">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0066FF] block mb-3">
                STUDIO DISCIPLINE
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0A1128]">
                Bespoke Detailing Services
              </h2>
            </div>
            <p className="text-[#64748B] max-w-md">
              We focus on absolute surface correction and paint preservation. Here is what we offer at our state-of-the-art Attapur facility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {services.map((svc) => (
              <div 
                key={svc.id} 
                className="group border border-[#0A1128]/10 p-10 hover:border-[#0A1128] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-mono font-bold text-[#0066FF]">{svc.id}</span>
                    <span className="text-xs uppercase tracking-widest text-[#64748B] font-semibold">
                      Est. Time: {svc.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[#0A1128]">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-[#0A1128]/10 flex justify-between items-center">
                  <span className="text-lg font-black text-[#0A1128]">
                    {svc.price} <span className="text-xs text-[#64748B] font-normal">onwards</span>
                  </span>
                  <a 
                    href="#book"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#0066FF] group-hover:text-[#0A1128] transition-colors"
                  >
                    Configure Service
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Signature Element: Interactive Before/After Comparison */}
      <section id="comparison" className="bg-[#F8F9FA] py-24 lg:py-32 overflow-hidden border-b border-[#0A1128]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Description Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0066FF] block">
                PROOF OF CRAFT
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0A1128] leading-[0.95]">
                Restore <br />
                The luster.
              </h2>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Swirl marks and spider webbing scatter light, making your car look dull and grey. Our multi-stage machine correction cuts down the damaged clear coat microscopically to leave a clean, level reflection layer.
              </p>
              
              <div className="p-6 bg-white border border-[#0A1128]/10 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1128]">
                  How to test paint health:
                </h4>
                <ul className="space-y-2 text-xs text-[#64748B]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></span>
                    Examine panels under direct sunlight or LED light.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></span>
                    Run a hand inside a plastic sandwich bag over the paint.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></span>
                    If it feels rough, it needs decontamination & correction.
                  </li>
                </ul>
              </div>
            </div>

            {/* Interactive Slider Column */}
            <div className="lg:col-span-7 flex flex-col items-center">
              {/* Slider Container */}
              <div className="relative w-full max-w-[600px] aspect-[4/3] select-none overflow-hidden shadow-2xl border border-[#0A1128]/25 bg-neutral-200">
                {/* BEFORE IMAGE (Bottom Layer) */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=1000')` // A rugged dirty car metal surface representation
                  }}
                >
                  {/* Fake Dirty Overlay to simulate swirls/dirt */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="text-center text-white/80 p-4">
                      <span className="text-xs uppercase tracking-widest font-mono bg-red-600/80 px-3 py-1 text-white font-bold">
                        Swirls, Scratches & Oxidized
                      </span>
                    </div>
                  </div>
                </div>

                {/* AFTER IMAGE (Top Layer, Width controlled by state) */}
                <div 
                  className="absolute inset-0 bg-cover bg-center overflow-hidden transition-all duration-75"
                  style={{ 
                    width: `${sliderPosition}%`,
                    backgroundImage: `url('https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=1000')`, // A pristine shiny polished car hood
                  }}
                >
                  {/* Clean mirror finish visualization */}
                  <div className="absolute inset-0 min-w-[600px] w-full h-full bg-gradient-to-tr from-[#0066FF]/10 to-transparent">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs uppercase tracking-widest font-mono bg-green-600/80 px-3 py-1 text-white font-bold">
                        Pristine 9H Glass Finish
                      </span>
                    </div>
                  </div>
                </div>

                {/* Slider Handle Divider Line */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-25"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#0A1128] shadow-lg flex items-center justify-center">
                    <span className="text-[10px] font-bold text-[#0A1128]">↔</span>
                  </div>
                </div>
              </div>

              {/* Slider Control Input */}
              <div className="w-full max-w-[600px] mt-6 px-4">
                <label htmlFor="range-slider" className="sr-only">Before and After slider control</label>
                <input 
                  id="range-slider"
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sliderPosition} 
                  onChange={(e) => setSliderPosition(e.target.value)}
                  className="w-full accent-[#0066FF] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] uppercase font-bold tracking-wider text-[#64748B] mt-2">
                  <span>← Swipe Left for Before</span>
                  <span>Swipe Right for After →</span>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive detailing process step-by-step */}
          <div className="mt-24 pt-16 border-t border-[#0A1128]/10">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#0066FF] mb-12 text-center">
              THE 4-STAGE RESTORATION WORKFLOW
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 border transition-all duration-300 cursor-pointer ${
                    activeStep === idx 
                      ? 'border-[#0A1128] bg-[#0A1128] text-white' 
                      : 'border-[#0A1128]/10 hover:border-[#0A1128]/40 bg-white'
                  }`}
                  onClick={() => setActiveStep(idx)}
                >
                  <span className={`text-xs font-mono font-bold block mb-4 ${
                    activeStep === idx ? 'text-[#0066FF]' : 'text-[#64748B]'
                  }`}>
                    STAGE 0{idx + 1}
                  </span>
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-2">{step.title}</h4>
                  <p className={`text-xs leading-relaxed ${
                    activeStep === idx ? 'text-white/70' : 'text-[#64748B]'
                  }`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Packages */}
      <section id="packages" className="bg-[#0A1128] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#0066FF] block">
              INVEST IN VALUE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
              Detailing & Protection Plans
            </h2>
            <p className="text-white/60 font-light max-w-xl mx-auto">
              Flat rates with complete transparency. We don't hide costs behind upsell calls. Choose the package that suits your level of enthusiasm.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div 
                key={idx}
                className="bg-[#0B132B] border border-white/10 p-10 flex flex-col justify-between relative hover:border-[#0066FF] transition-all duration-300"
              >
                {pkg.tag && (
                  <span className="absolute top-0 right-10 -translate-y-1/2 bg-[#0066FF] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                    {pkg.tag}
                  </span>
                )}
                
                <div className="space-y-6">
                  <span className="text-xs uppercase tracking-widest text-white/50 block font-semibold">
                    {pkg.period}
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed font-light">
                    {pkg.desc}
                  </p>
                  
                  <div className="py-6 border-y border-white/10">
                    <span className="text-4xl font-black tracking-tight">{pkg.price}</span>
                    <span className="text-xs text-white/50 block mt-1">Inclusive of GST</span>
                  </div>

                  <ul className="space-y-4 pt-4">
                    {pkg.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-3 text-xs text-white/80">
                        <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-10">
                  <a
                    href="#book"
                    onClick={() => {
                      setBookingForm({
                        ...bookingForm,
                        packageType: pkg.name
                      });
                    }}
                    className="block w-full py-4 text-center border border-white/20 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-[#0A1128] hover:border-white transition-all duration-300"
                  >
                    Select Plan
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xs text-white/50">
              *Not sure which package fits? We carry out electronic paint thickness inspections to recommend the safest correction stage.
            </p>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24 lg:py-32 border-b border-[#0A1128]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0066FF] block">
              PATRON VOICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0A1128]">
              The Detailing Standard
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="p-8 border border-[#0A1128]/10 flex flex-col justify-between hover:border-[#0A1128] transition-all"
              >
                <div className="space-y-6">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#0066FF] text-[#0066FF]" />
                    ))}
                  </div>
                  
                  <p className="text-xs text-[#64748B] italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#0A1128]/10">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#0A1128]">
                    {t.author}
                  </h4>
                  <span className="text-[10px] text-[#64748B] font-bold uppercase tracking-widest">
                    {t.vehicle}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="bg-[#F8F9FA] py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0066FF] block">
              KNOWLEDGE BASE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0A1128]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border-b border-[#0A1128]/10 pb-6"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex justify-between items-center w-full text-left py-4 focus:outline-none group"
                >
                  <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0A1128] group-hover:text-[#0066FF] transition-colors">
                    {faq.q}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#0066FF]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#0A1128]/50 group-hover:text-[#0066FF]" />
                  )}
                </button>
                
                {openFaq === idx && (
                  <div className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-3xl animate-slide-up">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Booking Form and Contact Details */}
      <section id="book" className="bg-white py-24 lg:py-32 border-t border-[#0A1128]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Studio Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0066FF] block">
                VISIT THE STUDIO
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0A1128] leading-[0.95]">
                Let's discuss <br />
                Your project.
              </h2>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Vinayaka Car Wash operates a secure, dust-free facility located right on the Attapur Inner Ring Road, easily accessible for clients from Rajendranagar, Mehdipatnam, and Gachibowli.
              </p>

              <div className="space-y-6 pt-6 border-t border-[#0A1128]/10">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#0066FF] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1128]">Address</h4>
                    <p className="text-xs text-[#64748B] mt-1">
                      Pillar 120, Inner Ring Road, Attapur, Hyderabad, Telangana - 500048
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#0066FF] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1128]">Phone</h4>
                    <p className="text-xs text-[#64748B] mt-1">+91 91234 56789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#0066FF] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1128]">Hours</h4>
                    <p className="text-xs text-[#64748B] mt-1">Monday – Sunday: 9:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Booking Module */}
            <div className="lg:col-span-7 bg-[#F8F9FA] p-10 lg:p-12 border border-[#0A1128]/10">
              <h3 className="text-xl font-black uppercase tracking-tight text-[#0A1128] mb-2">
                Book detailing slot
              </h3>
              <p className="text-xs text-[#64748B] mb-8">
                Reserve your inspection slot. We will test your paint with electronic depth gauges and provide a customized quote.
              </p>

              {formSubmitted ? (
                <div className="bg-[#0A1128] text-white p-8 text-center space-y-4">
                  <Sparkles className="w-8 h-8 mx-auto text-[#0066FF]" />
                  <h4 className="text-lg font-bold uppercase tracking-wider">Appointment Registered</h4>
                  <p className="text-xs text-white/70">
                    Thank you, {bookingForm.name}. A detailing supervisor will call you within 30 minutes to confirm your slot for {bookingForm.packageType}.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="inline-block mt-4 text-xs font-bold uppercase tracking-wider text-[#0066FF] hover:text-white"
                  >
                    Register another vehicle
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-[#0A1128]">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 w-4 h-4 text-[#64748B]" />
                        <input 
                          type="text" 
                          required
                          placeholder="Aditya Reddy"
                          value={bookingForm.name}
                          onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 bg-white border border-[#0A1128]/10 text-xs text-[#0A1128] placeholder-[#64748B]/50 focus:border-[#0066FF] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-[#0A1128]">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 w-4 h-4 text-[#64748B]" />
                        <input 
                          type="tel" 
                          required
                          placeholder="+91 XXXXX XXXXX"
                          value={bookingForm.phone}
                          onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 bg-white border border-[#0A1128]/10 text-xs text-[#0A1128] placeholder-[#64748B]/50 focus:border-[#0066FF] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-[#0A1128]">
                        Vehicle Model *
                      </label>
                      <div className="relative">
                        <Car className="absolute left-3 top-3.5 w-4 h-4 text-[#64748B]" />
                        <input 
                          type="text" 
                          required
                          placeholder="Fortuner / BMW 3-Series"
                          value={bookingForm.vehicleModel}
                          onChange={(e) => setBookingForm({...bookingForm, vehicleModel: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 bg-white border border-[#0A1128]/10 text-xs text-[#0A1128] placeholder-[#64748B]/50 focus:border-[#0066FF] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-[#0A1128]">
                        Detailing Service *
                      </label>
                      <select 
                        value={bookingForm.packageType}
                        onChange={(e) => setBookingForm({...bookingForm, packageType: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-[#0A1128]/10 text-xs text-[#0A1128] focus:border-[#0066FF] focus:outline-none transition-colors appearance-none"
                      >
                        <option>Signature Craft Wash</option>
                        <option>Paint Correction</option>
                        <option>Ceramic Coating</option>
                        <option>TPU PPF Wrap</option>
                        <option>Interior Restorative Detail</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#0A1128]">
                      Custom Requirements / Notes (Optional)
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3.5 w-4 h-4 text-[#64748B]" />
                      <textarea 
                        rows="3"
                        placeholder="Explain any heavy swirl marks, paint chips, water spots or leather staining..."
                        value={bookingForm.message}
                        onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-[#0A1128]/10 text-xs text-[#0A1128] placeholder-[#64748B]/50 focus:border-[#0066FF] focus:outline-none transition-colors resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-[#0A1128] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#0066FF] transition-all duration-300"
                  >
                    Confirm Booking Request
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1128] text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <span className="font-black text-xl tracking-[0.25em] uppercase text-white block">
                VINAYAKA
              </span>
              <p className="text-xs text-white/50 leading-relaxed max-w-xs">
                Premium car wash and detailing studio located in Attapur, Hyderabad. Dedicated to Swiss-precision craftsmanship and paint preservation since 2018.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">Services</h4>
              <ul className="space-y-2 text-xs text-white/60">
                <li><a href="#services" className="hover:text-white transition-colors">Craft Wash</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Paint Polish</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Ceramic Coating</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">PPF Installation</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">Studio</h4>
              <ul className="space-y-2 text-xs text-white/60">
                <li><a href="#about" className="hover:text-white transition-colors">Our Ethos</a></li>
                <li><a href="#comparison" className="hover:text-white transition-colors">Before/After</a></li>
                <li><a href="#packages" className="hover:text-white transition-colors">Pricing Details</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="p-2 border border-white/10 hover:border-white text-white/60 hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="p-2 border border-white/10 hover:border-white text-white/60 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.008 3.74.051 1 .045 1.526.208 1.887.348.479.185.822.407 1.182.767.36.36.582.702.767 1.182.14.361.303.886.348 1.887.043.957.051 1.282.051 3.74s-.008 2.784-.051 3.74c-.045 1-.208 1.526-.348 1.887-.185.479-.407.822-.767 1.182-.36.36-.702.582-1.182.767-.361.14-.886.303-1.887.348-.957.043-1.282.051-3.74.051s-2.784-.008-3.74-.051c-1-.045-1.526-.208-1.887-.348-.479-.185-.822-.407-1.182-.767-.36-.36-.582-.702-.767-1.182-.14-.361-.303-.886-.348-1.887-.043-.957-.051-1.282-.051-3.74s.008-2.784.051-3.74c.045-1 .208-1.526.348-1.887.185-.479.407-.822.767-1.182.36-.36.702-.582 1.182-.767.361-.14.886-.303 1.887-.348.957-.043 1.282-.051 3.74-.051zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" /></svg>
                </a>
              </div>
              <p className="text-[10px] text-white/40">
                Studio visits are by appointment only to maintain a clean room dust-free environment.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-[10px] text-white/40 gap-4">
            <p>&copy; {new Date().getFullYear()} Vinayaka Car Wash Attapur. All rights reserved.</p>
            <p>Designed with Swiss typography principles.</p>
          </div>

        </div>
      </footer>
    </div>
  );
}

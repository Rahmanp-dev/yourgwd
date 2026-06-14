"use client";

import React, { useState } from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  Zap, 
  Flame, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  User,
  Car,
  Compass,
  Star,
  Activity,
  Plus
} from 'lucide-react';

export default function GoMechanicAttapur() {
  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Before/After State
  const [showAfter, setShowAfter] = useState(true);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    vehicleModel: '',
    packageType: 'Ceramic Coating (9H)',
    additions: []
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Custom Detailing Builder
  const [selectedServices, setSelectedServices] = useState(['Ceramic Coating']);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (bookingForm.name && bookingForm.phone && bookingForm.vehicleModel) {
      setFormSubmitted(true);
    }
  };

  const toggleServiceSelection = (svc) => {
    if (selectedServices.includes(svc)) {
      setSelectedServices(selectedServices.filter(item => item !== svc));
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  // Pricing calculations
  const calculateTotal = () => {
    let base = 0;
    if (selectedServices.includes('Tephlon Wax')) base += 4499;
    if (selectedServices.includes('Ceramic Coating')) base += 12999;
    if (selectedServices.includes('Full TPU PPF')) base += 74999;
    if (selectedServices.includes('Interior Resto')) base += 3499;
    if (selectedServices.includes('Alloy Polish')) base += 1999;
    return base;
  };

  // Services list
  const services = [
    {
      title: "Hardcore Steam Wash",
      desc: "High-pressure industrial steam cleaning. Obliterates grease, tar, and mud from wheel arches, underbody, and engine bay.",
      price: "₹1,299",
      speed: "90 Mins"
    },
    {
      title: "Paint Correction Stage 2",
      desc: "Rotary machine correction removing 85% of scratches, paint scaling, oxidation, and bird dung burn marks.",
      price: "₹5,499",
      speed: "1 Day"
    },
    {
      title: "Diamond 9H Ceramic",
      desc: "Double coat diamond silica shield. Ultra slickness, extreme gloss rating, and chemical resistance.",
      price: "₹12,999",
      speed: "36 Hrs"
    },
    {
      title: "TPU Self-Healing PPF",
      desc: "Heavy-duty 190-micron TPU film. Anti-scratch, gravel protection, and paint self-healing in direct heat.",
      price: "₹74,999",
      speed: "3 Days"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "These guys don't mince words. They showed me the clear coat scratches under their diagnostic lights and quoted a flat rate. No hidden fees. The 9H coating is absolutely top class. Dirt just slides off my Thar now.",
      author: "Vikram Malhotra",
      vehicle: "Mahindra Thar 4x4",
      accentBg: "bg-[#FACC15]"
    },
    {
      quote: "Exceptional paint correction at GoMechanic Attapur. My white Harrier had yellow water spots from borewell water. They did a multi-stage compound clean and returned it looking factory new. Absolute value for money.",
      author: "Sai Kumar Goud",
      vehicle: "Tata Harrier",
      accentBg: "bg-white"
    },
    {
      quote: "No-nonsense detailing. Standard pricing printed on the wall, no sales talk. The interior steam decontamination was super thorough. Highly recommend to everyone in Attapur.",
      author: "Mohammed Rizwan",
      vehicle: "Honda City",
      accentBg: "bg-[#FACC15]"
    }
  ];

  // FAQs
  const faqs = [
    {
      q: "What is GoMechanic's detailing warranty structure?",
      a: "Our ceramic coatings come with a 2-Year or 5-Year replacement warranty, backed by digital activation certificates. Any loss of hydrophobicity is covered by a free maintenance layer application."
    },
    {
      q: "Why are GoMechanic prices lower than boutique detailing studios?",
      a: "We procure chemical products, PPF rolls, and polishers in bulk across 100+ workshops nationwide. This lets us pass direct-to-consumer savings of up to 40% to our vehicle owners in Attapur."
    },
    {
      q: "Can I track my detailing work progress?",
      a: "Yes! Every vehicle in our workshop is logged on our system. You receive real-time photo and video updates on WhatsApp at every stage: wash, compound paint correction, coating, and infrared oven curing."
    },
    {
      q: "How long does a PPF (Paint Protection Film) wrap take?",
      a: "A full wrap requires complete dismantling of door handles, mirrors, and badges to ensure seamless edge wrapping. This takes 3 full days to ensure zero peeling under high-pressure washes."
    }
  ];

  return (
    <div className="min-h-screen bg-[#18181B] text-black font-sans antialiased selection:bg-[#FACC15] selection:text-black">
      {/* Top Warning Strip */}
      <div className="bg-[#FACC15] text-black py-2 px-4 border-b-4 border-black text-xs font-mono font-bold tracking-wider uppercase flex justify-between items-center overflow-hidden">
        <div className="flex gap-8 animate-pulse">
          <span>// GOMECHANIC DETAILED WORKSHOP //</span>
          <span className="hidden sm:inline">LOCATED AT PILLARS 130-131 ATTAPUR</span>
          <span>UPFRONT PRICE ASSURANCE</span>
        </div>
        <span className="font-mono bg-black text-[#FACC15] px-2 py-0.5 text-[10px]">LIVE STATUS: OPEN</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#18181B] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 bg-[#FACC15] border-4 border-black px-4 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all">
              <Wrench className="w-6 h-6 stroke-[2.5]" />
              <span className="font-mono font-black text-lg tracking-tighter">
                GOMECHANIC.ATTAPUR
              </span>
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-6 font-mono text-sm text-white">
              <a href="#services" className="hover:bg-[#FACC15] hover:text-black border-2 border-transparent hover:border-black px-3 py-1.5 transition-all">SERVICES</a>
              <a href="#customizer" className="hover:bg-[#FACC15] hover:text-black border-2 border-transparent hover:border-black px-3 py-1.5 transition-all">COST ESTIMATOR</a>
              <a href="#comparison" className="hover:bg-[#FACC15] hover:text-black border-2 border-transparent hover:border-black px-3 py-1.5 transition-all">BEFORE/AFTER</a>
              <a href="#packages" className="hover:bg-[#FACC15] hover:text-black border-2 border-transparent hover:border-black px-3 py-1.5 transition-all">PACKAGES</a>
              <a href="#faq" className="hover:bg-[#FACC15] hover:text-black border-2 border-transparent hover:border-black px-3 py-1.5 transition-all">FAQ</a>
            </nav>

            {/* Header CTA */}
            <div className="hidden md:flex">
              <a 
                href="#book" 
                className="bg-red-500 text-white font-mono font-bold text-xs uppercase px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                BOOK DETAILED SLOT
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden bg-[#FACC15] border-4 border-black p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-black"
              aria-label="Toggle Navigation Menu"
            >
              <div className="w-6 h-1 bg-black mb-1"></div>
              <div className="w-6 h-1 bg-black mb-1"></div>
              <div className="w-6 h-1 bg-black"></div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#18181B] border-t-4 border-black p-6 space-y-4">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-white text-black font-mono font-bold py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              SERVICES
            </a>
            <a 
              href="#customizer" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-white text-black font-mono font-bold py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              COST ESTIMATOR
            </a>
            <a 
              href="#comparison" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-white text-black font-mono font-bold py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              BEFORE/AFTER
            </a>
            <a 
              href="#packages" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-[#FACC15] text-black font-mono font-bold py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              PACKAGES
            </a>
            <a 
              href="#book" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-red-500 text-white font-mono font-bold py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              BOOK NOW
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-zinc-900 py-16 lg:py-24 text-white relative overflow-hidden border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Start Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block bg-red-500 text-white border-2 border-black font-mono text-xs font-bold uppercase px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                [ INDUSTRIAL CAR GROOMING ]
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
                RAW QUALITY.<br />
                <span className="bg-[#FACC15] text-black border-4 border-black px-2 inline-block my-2 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                  NO BULLSH*T
                </span><br />
                DETAILING.
              </h1>
              
              <p className="text-lg text-zinc-300 font-mono leading-relaxed max-w-xl">
                We don't do soft-lit showroom aesthetics. We offer raw, certified, power detailing that stops corrosion, corrects paint damage, and seals it with 9H diamond hardness.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#customizer" 
                  className="bg-[#FACC15] text-black font-mono font-bold text-center px-8 py-5 border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                >
                  RUN CALCULATOR
                </a>
                <a 
                  href="#book" 
                  className="bg-zinc-800 text-white font-mono text-center px-8 py-5 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                >
                  TALK TO DETAILED SUPERVISOR
                </a>
              </div>
            </div>

            {/* Industrial Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-black border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(250,204,21,1)]">
                <div className="flex justify-between items-center border-b-4 border-black pb-4 mb-6">
                  <span className="font-mono font-bold text-xs uppercase bg-[#FACC15] border-2 border-black px-2 py-0.5">
                    WORKSHOP LIVE FEED
                  </span>
                  <Activity className="w-5 h-5 text-red-500 animate-pulse" />
                </div>

                <div className="space-y-4">
                  <div className="p-4 border-2 border-black bg-zinc-50">
                    <span className="font-mono text-[10px] text-zinc-500 block">CURRENT VEHICLE UNDER INFRARED CURING</span>
                    <span className="font-bold text-sm block">Mahindra XUV700 (Midnight Black)</span>
                    <span className="font-mono text-xs text-red-500 font-semibold block mt-1">Stage: Curing Coat #2</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 border-2 border-black bg-zinc-50 text-center">
                      <span className="font-mono text-[10px] text-zinc-500 block">HUMIDITY LEVEL</span>
                      <span className="font-mono font-bold text-lg">42% (Optimal)</span>
                    </div>
                    <div className="p-3 border-2 border-black bg-zinc-50 text-center">
                      <span className="font-mono text-[10px] text-zinc-500 block">INSPECTED BY</span>
                      <span className="font-mono font-bold text-sm">Pranav S. (Lead)</span>
                    </div>
                  </div>

                  <div className="bg-[#FACC15] border-2 border-black p-4 text-xs font-mono">
                    <span className="font-bold block uppercase">Attapur Hub Perks:</span>
                    <ul className="list-disc pl-4 mt-2 space-y-1">
                      <li>Free pick & drop within 5km of Ring Road</li>
                      <li>Temperature and moisture-controlled curing chambers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="bg-zinc-100 py-20 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 space-y-4 max-w-3xl">
            <span className="bg-black text-[#FACC15] font-mono text-xs font-bold uppercase px-3 py-1 inline-block">
              [ SERVICES DIRECTORY ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950">
              COMMERCIAL GRADE CARE
            </h2>
            <p className="text-zinc-600 font-mono text-sm max-w-xl">
              We list pricing on the board. No custom upsells based on how expensive your shirt is. Meticulous execution, high-grade tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((svc, idx) => (
              <div 
                key={idx} 
                className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-mono font-black text-xl uppercase tracking-tighter">
                      {svc.title}
                    </h3>
                    <span className="bg-[#FACC15] text-black border-2 border-black font-mono text-xs px-2 py-0.5 font-bold">
                      {svc.speed}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 font-mono">
                    {svc.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t-2 border-dashed border-black flex justify-between items-center">
                  <div>
                    <span className="font-mono text-[10px] text-zinc-500 block">UPFRONT COST</span>
                    <span className="font-mono font-black text-2xl text-red-500">{svc.price}</span>
                  </div>
                  <a 
                    href="#book"
                    className="bg-black text-white hover:bg-[#FACC15] hover:text-black border-2 border-black font-mono font-bold text-xs uppercase px-4 py-2"
                  >
                    SELECT SERVICE
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Signature Element: Interactive Cost Estimator */}
      <section id="customizer" className="bg-white py-20 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Builder Explanation */}
            <div className="lg:col-span-5 space-y-6">
              <span className="bg-black text-white font-mono text-xs font-bold uppercase px-3 py-1 inline-block">
                [ TRANSPARENCY MODULE ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950 leading-none">
                BUILD YOUR OWN CUSTOM DETAIL
              </h2>
              <p className="text-zinc-600 font-mono text-sm leading-relaxed">
                Tired of packages stuffed with filler items? Build a customized detailing package. Check the modules you want, and watch the exact pricing calculate live.
              </p>

              <div className="bg-[#FACC15] border-4 border-black p-6 font-mono text-xs space-y-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-black block uppercase">// THE GUARANTEE</span>
                <p>
                  Prices calculated here are valid at GoMechanic Attapur. We inspect the paint thickness on arrival to verify if paint correction can be safely done.
                </p>
              </div>
            </div>

            {/* Builder Console */}
            <div className="lg:col-span-7 bg-zinc-50 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-mono font-black text-lg uppercase tracking-tight mb-6 border-b-4 border-black pb-4">
                WORKSHOP BILLING CONSOLE
              </h3>

              <div className="space-y-4">
                {[
                  { name: "Tephlon Wax", price: 4499, label: "Teflon Wax Shielding (12-Month Gloss)" },
                  { name: "Ceramic Coating", price: 12999, label: "Double Coat 9H Ceramic (3-Year Protection)" },
                  { name: "Full TPU PPF", price: 74999, label: "180µ TPU Self-Healing PPF (5-Year Film)" },
                  { name: "Interior Resto", price: 3499, label: "Decontamination Steam Clean + Seat Deep Clean" },
                  { name: "Alloy Polish", price: 1999, label: "Alloy Wheel Ceramic Coat & Brake Calliper Dust Cleaning" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    onClick={() => toggleServiceSelection(item.name)}
                    className={`flex justify-between items-center p-4 border-2 border-black cursor-pointer select-none transition-all ${
                      selectedServices.includes(item.name) 
                        ? 'bg-zinc-950 text-white shadow-none translate-x-0.5 translate-y-0.5' 
                        : 'bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 border-2 border-black flex items-center justify-center ${
                        selectedServices.includes(item.name) ? 'bg-[#FACC15]' : 'bg-white'
                      }`}>
                        {selectedServices.includes(item.name) && <Check className="w-3.5 h-3.5 text-black stroke-[3]" />}
                      </div>
                      <span className="font-mono text-xs sm:text-sm font-bold uppercase">{item.label}</span>
                    </div>
                    <span className="font-mono font-black text-xs sm:text-sm">₹{item.price.toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>

              {/* Total Display */}
              <div className="mt-8 p-6 bg-white border-4 border-black flex justify-between items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div>
                  <span className="font-mono text-xs text-zinc-500 uppercase block">Total Estimated Cost</span>
                  <span className="font-mono font-black text-2xl sm:text-3xl text-red-500">₹{calculateTotal().toLocaleString('en-IN')}</span>
                </div>
                <a 
                  href="#book"
                  onClick={() => {
                    setBookingForm({
                      ...bookingForm,
                      packageType: `Custom Plan (₹${calculateTotal()})`,
                      message: `Selected services: ${selectedServices.join(', ')}`
                    });
                  }}
                  className="bg-[#FACC15] text-black font-mono font-bold text-xs uppercase px-6 py-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  BOOK THIS ESTIMATE
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Before/After Gallery Section */}
      <section id="comparison" className="bg-[#18181B] py-20 text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Gallery Interactive Module */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="relative w-full max-w-[600px] aspect-[4/3] border-4 border-black bg-zinc-800 shadow-[8px_8px_0px_0px_rgba(250,204,21,1)] overflow-hidden">
                {/* Images representation */}
                {showAfter ? (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
                    style={{ 
                      backgroundImage: `url('https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=1000')` // clean polished car metal
                    }}
                  >
                    <div className="absolute top-4 right-4 bg-green-500 text-white font-mono font-bold text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      AFTER (9H GLASS COAT)
                    </div>
                  </div>
                ) : (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
                    style={{ 
                      backgroundImage: `url('https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=1000')` // scratched car metal
                    }}
                  >
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center">
                      <span className="font-mono text-xs bg-red-600 text-white font-black px-3 py-1 border-2 border-black">
                        SWIRLED & SCRATCHED PAINT
                      </span>
                    </div>
                    <div className="absolute top-4 left-4 bg-red-500 text-white font-mono font-bold text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      BEFORE INSPECTION
                    </div>
                  </div>
                )}
              </div>

              {/* Action swap button */}
              <div className="mt-8 flex gap-4 w-full max-w-[600px]">
                <button 
                  onClick={() => setShowAfter(false)}
                  className={`flex-1 py-4 font-mono font-bold text-xs border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
                    !showAfter ? 'bg-red-500 text-white' : 'bg-white text-black hover:bg-zinc-100'
                  }`}
                >
                  VIEW DAMAGED PAINT
                </button>
                <button 
                  onClick={() => setShowAfter(true)}
                  className={`flex-1 py-4 font-mono font-bold text-xs border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
                    showAfter ? 'bg-green-500 text-white' : 'bg-white text-black hover:bg-zinc-100'
                  }`}
                >
                  VIEW CORRECTED PAINT
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="lg:col-span-5 space-y-6">
              <span className="bg-[#FACC15] text-black font-mono text-xs font-bold uppercase px-3 py-1 inline-block border-2 border-black">
                [ DIAGNOSTIC REPORT ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
                PERMANENT REFLECTION RESTORATION
              </h2>
              <p className="text-zinc-300 font-mono text-sm leading-relaxed">
                Swirls are tiny scratches created by bad wash cloths. They act like tiny mirrors scattering light in random directions, reducing depth and shine. Our paint correction cuts flat the clear coat. The ceramic layer then seals the surface to prevent new wash scratches.
              </p>
              
              <div className="border-4 border-[#FACC15] p-6 bg-zinc-900 font-mono text-xs text-white">
                <span className="text-[#FACC15] font-black block mb-2">// RESTORATION STATS:</span>
                <ul className="space-y-1">
                  <li>• Scratch Removal Success: 85% - 95%</li>
                  <li>• Gloss Factor Increase: +150 GU</li>
                  <li>• Hydrophobic Water Angle: 115°</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Pricing Packages */}
      <section id="packages" className="bg-zinc-100 py-20 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="bg-black text-[#FACC15] font-mono text-xs font-bold uppercase px-3 py-1 inline-block">
              [ FIXED RATES ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950">
              COMMERCIAL PACKAGES
            </h2>
            <p className="text-zinc-600 font-mono text-sm max-w-xl mx-auto">
              Select one of our bundle packages. Handled by professional technicians at our Attapur hub.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "ECO COAT PACKAGE",
                price: "₹8,999",
                type: "Sedan / Hatch",
                shield: "1-Year Warranty",
                points: [
                  "Single-stage machine buffing",
                  "Eco hydrophobic ceramic coat",
                  "Deep interior clean & shampooing",
                  "Engine bay cleaning & dressing",
                  "Brake caliper washing"
                ],
                bg: "bg-white"
              },
              {
                title: "DIAMOND 9H SHIELD",
                price: "₹18,999",
                type: "SUV / Luxury",
                shield: "3-Year Warranty",
                points: [
                  "Dual-stage compounding paint correction",
                  "Two coats of Diamond 9H Coating",
                  "Alloy wheel face ceramic shielding",
                  "Full interior steam sterilization",
                  "Air vent cleaning & pH leather dressing",
                  "Free maintenance inspection at 12 months"
                ],
                bg: "bg-[#FACC15]",
                highlight: true
              },
              {
                title: "ULTRA TPU PPF WRAP",
                price: "₹69,999",
                type: "Full Car TPU Wrap",
                shield: "5-Year Yellowing Warranty",
                points: [
                  "180-Micron high gloss TPU film",
                  "Self-healing surface properties",
                  "Complete panel edge-tucked wrapping",
                  "Free yearly wrap diagnostic inspect",
                  "High chemical and acid resistance"
                ],
                bg: "bg-white"
              }
            ].map((pkg, idx) => (
              <div 
                key={idx}
                className={`border-4 border-black p-8 flex flex-col justify-between relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${pkg.bg}`}
              >
                {pkg.highlight && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-red-500 text-white font-mono text-[10px] font-bold tracking-widest uppercase px-3 py-1 border-2 border-black">
                    RECOMMENDED
                  </span>
                )}
                
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase block">{pkg.type}</span>
                    <h3 className="font-mono font-black text-xl uppercase tracking-tighter mt-1">{pkg.title}</h3>
                  </div>

                  <div className="py-4 border-y-2 border-dashed border-black">
                    <span className="font-mono font-black text-3xl text-red-500">{pkg.price}</span>
                    <span className="font-mono text-[10px] block mt-1 uppercase text-zinc-700 font-bold">{pkg.shield}</span>
                  </div>

                  <ul className="space-y-3 font-mono text-xs">
                    {pkg.points.map((p, pidx) => (
                      <li key={pidx} className="flex gap-2">
                        <span className="font-bold text-red-500 font-mono">✓</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <a 
                    href="#book"
                    onClick={() => {
                      setBookingForm({
                        ...bookingForm,
                        packageType: pkg.title
                      });
                    }}
                    className="block w-full text-center py-4 bg-black text-white font-mono font-bold text-xs uppercase border-2 border-black hover:bg-white hover:text-black transition-colors"
                  >
                    CHOOSE PLAN
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials (Post-it Neo-brutalism Style) */}
      <section className="bg-zinc-900 text-white py-20 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="bg-[#FACC15] text-black font-mono text-xs font-bold uppercase px-3 py-1 inline-block border-2 border-black">
              [ REAL CUSTOMERS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              WHAT ATTAPUR SAYS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className={`border-4 border-black p-8 text-black shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] flex flex-col justify-between ${t.accentBg}`}
              >
                <p className="font-mono text-xs leading-relaxed italic">
                  "{t.quote}"
                </p>
                
                <div className="mt-6 pt-4 border-t-2 border-dashed border-black">
                  <h4 className="font-mono font-black uppercase text-sm">{t.author}</h4>
                  <span className="font-mono text-[10px] text-zinc-600 block">{t.vehicle}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="bg-zinc-100 py-20 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <span className="bg-black text-[#FACC15] font-mono text-xs font-bold uppercase px-3 py-1 inline-block">
              [ SERVICE MANUAL ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex justify-between items-center w-full text-left font-mono font-black text-sm uppercase tracking-tight"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-red-500 stroke-[3]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-black stroke-[3]" />
                  )}
                </button>
                
                {openFaq === idx && (
                  <div className="mt-4 pt-4 border-t-2 border-dashed border-black font-mono text-xs text-zinc-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact & Map Booking Section */}
      <section id="book" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Info Block */}
            <div className="lg:col-span-5 space-y-6">
              <span className="bg-black text-white font-mono text-xs font-bold uppercase px-3 py-1 inline-block">
                [ SERVICE STATION ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950 leading-none">
                MEET US IN THE GARAGE
              </h2>
              <p className="text-zinc-600 font-mono text-sm leading-relaxed">
                Our workshop is located opposite the Toyota showroom in Attapur. Drop by for a free walk-in paint depth measurement and consultation.
              </p>

              <div className="space-y-4 pt-6 border-t-4 border-black font-mono text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                  <div>
                    <span className="font-bold block">ADDRESS:</span>
                    <p className="text-zinc-600 mt-1">Pillars 130-131, Main Ring Road, Attapur, Hyderabad, Telangana - 500048</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-red-500 shrink-0" />
                  <div>
                    <span className="font-bold block">HELPLINE:</span>
                    <p className="text-zinc-600 mt-1">+91 98765 01234 (Free Booking line)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-500 shrink-0" />
                  <div>
                    <span className="font-bold block">TIMINGS:</span>
                    <p className="text-zinc-600 mt-1">Daily 08:30 AM to 09:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brutalist Booking Form */}
            <div className="lg:col-span-7 bg-[#FACC15] border-4 border-black p-8 lg:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-mono font-black text-xl uppercase tracking-tighter mb-2">
                SCHEDULE DETAILING UNIT
              </h3>
              <p className="font-mono text-xs text-zinc-800 mb-8 border-b-2 border-black pb-4">
                Enter your details to block a ceramic/PPF bay slot. A workshop supervisor will call you within 15 minutes.
              </p>

              {formSubmitted ? (
                <div className="bg-black text-white p-8 border-4 border-black text-center space-y-4">
                  <Flame className="w-8 h-8 mx-auto text-[#FACC15]" />
                  <h4 className="font-mono font-black text-lg">RESERVATION FILED</h4>
                  <p className="font-mono text-xs text-zinc-300">
                    We've registered your booking for {bookingForm.vehicleModel} ({bookingForm.packageType}). A technician is preparing your bay slot. Expect a call shortly.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="font-mono text-xs text-[#FACC15] underline"
                  >
                    FILE ANOTHER VEHICLE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-mono text-xs font-bold uppercase block">
                        YOUR NAME:
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="Vijay Rao"
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                        className="w-full px-4 py-3 border-4 border-black bg-white text-black font-mono text-xs outline-none focus:bg-zinc-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-xs font-bold uppercase block">
                        MOBILE NUMBER:
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                        className="w-full px-4 py-3 border-4 border-black bg-white text-black font-mono text-xs outline-none focus:bg-zinc-50"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-mono text-xs font-bold uppercase block">
                        VEHICLE MAKE/MODEL:
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="Thar / Fortuner / Innova"
                        value={bookingForm.vehicleModel}
                        onChange={(e) => setBookingForm({...bookingForm, vehicleModel: e.target.value})}
                        className="w-full px-4 py-3 border-4 border-black bg-white text-black font-mono text-xs outline-none focus:bg-zinc-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-xs font-bold uppercase block">
                        DETAILING PLAN:
                      </label>
                      <select 
                        value={bookingForm.packageType}
                        onChange={(e) => setBookingForm({...bookingForm, packageType: e.target.value})}
                        className="w-full px-4 py-3 border-4 border-black bg-white text-black font-mono text-xs outline-none font-bold"
                      >
                        <option>Eco Coat Package</option>
                        <option>Diamond 9H Shield</option>
                        <option>Ultra TPU PPF Wrap</option>
                        <option>Paint Correction Stage 2</option>
                        <option>Hardcore Steam Wash</option>
                        <option>Custom Plan (Calculated)</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-black text-[#FACC15] font-mono font-black text-xs uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                  >
                    DEPLOY BOOKING REQUEST
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <span className="font-mono font-black text-lg tracking-tight bg-[#FACC15] text-black px-2 py-0.5 inline-block">
                GOMECHANIC.ATTAPUR
              </span>
              <p className="font-mono text-xs text-zinc-400 leading-relaxed">
                Industrial-grade detailing workshop in Hyderabad. No fluff, no premiums. Just raw quality car care that keeps paint looking fresh.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-mono font-bold text-xs uppercase text-[#FACC15]">// PRODUCTS</h4>
              <ul className="font-mono text-xs text-zinc-400 space-y-2">
                <li><a href="#services" className="hover:underline">Eco Coat Protection</a></li>
                <li><a href="#services" className="hover:underline">Diamond 9H Curing</a></li>
                <li><a href="#services" className="hover:underline">TPU PPF Self-Healing</a></li>
                <li><a href="#services" className="hover:underline">Interior Deep Clean</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-mono font-bold text-xs uppercase text-[#FACC15]">// WORKSHOP</h4>
              <ul className="font-mono text-xs text-zinc-400 space-y-2">
                <li><a href="#customizer" className="hover:underline">Cost Estimator</a></li>
                <li><a href="#comparison" className="hover:underline">Before / After</a></li>
                <li><a href="#packages" className="hover:underline">Pricing Packages</a></li>
                <li><a href="#faq" className="hover:underline">FAQs Manual</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-mono font-bold text-xs uppercase text-[#FACC15]">// LEGAL</h4>
              <p className="font-mono text-xs text-zinc-400 leading-relaxed">
                GoMechanic Attapur is an independent franchise workshop operated under certified GoMechanic brand guidelines.
              </p>
              <p className="font-mono text-[10px] text-zinc-500">
                Pillars 130-131, Attapur IRR, Hyderabad, TG
              </p>
            </div>
          </div>

          <div className="pt-8 border-t-2 border-zinc-800 flex flex-col sm:flex-row justify-between items-center font-mono text-[10px] text-zinc-500 gap-4">
            <p>&copy; {new Date().getFullYear()} GoMechanic Attapur. All rights reserved.</p>
            <p>Built with Neo-Brutalist Layout Principles.</p>
          </div>

        </div>
      </footer>
    </div>
  );
}

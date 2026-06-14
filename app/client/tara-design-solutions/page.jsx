"use client";

import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Check, 
  Compass, 
  Feather, 
  Layers, 
  Sun 
} from 'lucide-react';

export default function TaraDesignPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Living Room',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ submitted: false, loading: false, error: 'Please fill out all required fields.' });
      return;
    }
    
    setFormStatus({ submitted: false, loading: true, error: null });
    
    // Simulate API request
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        loading: false,
        error: null
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Living Room',
        message: ''
      });
    }, 1500);
  };

  const portfolioItems = [
    {
      title: 'Wabi-Sabi Living Room',
      category: 'Living Space',
      desc: 'Low-profile textured linen seating, raw stone accent plinths, and hand-plastered walls designed to catch daylight.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      specs: 'Area: 480 sq.ft | Material: Lime plaster, solid ash, linen'
    },
    {
      title: 'Oak Slatted Modular Kitchen',
      category: 'Kitchen',
      desc: 'Handle-less vertical grain oak fronts, dark honned slate countertops, and integrated hidden pantry systems.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      specs: 'Area: 320 sq.ft | Material: Oak wood, slate stone, brass accents'
    },
    {
      title: 'Flush Floor-to-Ceiling Wardrobes',
      category: 'Storage',
      desc: 'Seamless wardrobe walls in textured wash white plaster, built-in soft leather pull tabs, and warm interior cedar lining.',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
      specs: 'Area: 180 sq.ft | Material: Birch ply, textured lacquer, cedar'
    },
    {
      title: 'Warm Indirect Light Scheme',
      category: 'Lighting Design',
      desc: 'Custom Washi paper lanterns combined with soft, concealed LED cove lighting at 2700K to create calm evening shadows.',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
      specs: 'Power: 2.4W/sq.ft | Material: Japanese paper, warm LEDs, oak channels'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Spatial Discovery & Alignment',
      desc: 'We sit in your space to observe natural light pathways, daily routines, and areas of noise. We define the emotional tone before drawing a single line.'
    },
    {
      num: '02',
      title: 'Japandi Fusion Blueprints',
      desc: 'Creating hand-drawn layout concepts that prioritize circulation, negative space (Ma), and organic textures. We present physical plaster, wood, and metal samples.'
    },
    {
      num: '03',
      title: 'Artisanal Realization',
      desc: 'Our master craftsmen build custom timber joints and apply layers of textured plaster. Every detail is installed with millimetric precision for absolute serenity.'
    }
  ];

  const faqs = [
    {
      q: 'What is Japandi Fusion, and how does it differ from standard minimalism?',
      a: 'Japandi Fusion is the intersection of Japanese Wabi-Sabi (embracing imperfection and raw nature) and Scandinavian Hygge (warmth, comfort, and functionality). Unlike cold, sterile modern minimalism, Japandi uses warm plaster textures, organic woods, tactile linens, and low-profile furniture to create spaces that feel both highly architectural and deeply comforting.'
    },
    {
      q: 'Do you design and execute custom furniture, or do we purchase it?',
      a: 'We design and craft approximately 70% of the furniture in-house using local sustainable timbers (ash, oak, teak). This guarantees that the scaling, heights, and grain directions perfectly complement the architecture of the rooms.'
    },
    {
      q: 'How long does a typical full-home design and execution process take?',
      a: 'A comprehensive residential project usually spans 14 to 22 weeks. This includes 6 weeks of architectural drawing and material curation, followed by 8–16 weeks of on-site execution, plaster curing, and custom joinery install.'
    },
    {
      q: 'How do you handle lighting in Japandi spaces?',
      a: 'We prioritize natural daylight as our primary source. For artificial light, we reject harsh overhead downlights. Instead, we engineer multi-layered indirect lighting using warm 2700K LEDs hidden in wall plaster coves, floor-recessed wash lights, and custom hand-made paper lanterns.'
    }
  ];

  return (
    <div className="bg-[#FAF9F5] text-[#2C302E]">
      
      {/* Top Banner Ribbon */}
      <div className="w-full bg-[#2D3130] text-[#FAF9F5] text-center py-2.5 px-4 text-xs tracking-[0.2em] uppercase font-light border-b border-stone-800">
        Free premium interactive website preview created for Tara Design Solutions
      </div>

      {/* Header Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex justify-between items-center h-24">
            
            {/* Logo */}
            <div className="flex flex-col">
              <span className="text-xl font-medium tracking-[0.25em] uppercase text-[#2D3130]">TARA</span>
              <span className="text-[9px] tracking-[0.35em] text-[#8E8270] uppercase font-light -mt-1">Design Solutions</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              <a href="#about" className="text-xs tracking-[0.2em] uppercase text-[#2D3130]/75 hover:text-[#2D3130] transition-colors">Philosophy</a>
              <a href="#portfolio" className="text-xs tracking-[0.2em] uppercase text-[#2D3130]/75 hover:text-[#2D3130] transition-colors">Portfolio</a>
              <a href="#process" className="text-xs tracking-[0.2em] uppercase text-[#2D3130]/75 hover:text-[#2D3130] transition-colors">Process</a>
              <a href="#faq" className="text-xs tracking-[0.2em] uppercase text-[#2D3130]/75 hover:text-[#2D3130] transition-colors">FAQ</a>
              <a href="#contact" className="inline-block border border-[#2D3130]/20 px-6 py-2.5 text-[10px] tracking-[0.25em] uppercase hover:bg-[#2D3130] hover:text-[#FAF9F5] hover:border-[#2D3130] transition-all duration-300">
                Inquire
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-[#2D3130] focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF9F5] border-b border-stone-200 px-6 py-8 space-y-6">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-xs tracking-[0.2em] uppercase text-[#2D3130]/80">Philosophy</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block text-xs tracking-[0.2em] uppercase text-[#2D3130]/80">Portfolio</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block text-xs tracking-[0.2em] uppercase text-[#2D3130]/80">Process</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-xs tracking-[0.2em] uppercase text-[#2D3130]/80">FAQ</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-center border border-[#2D3130] py-3 text-xs tracking-[0.2em] uppercase bg-[#2D3130] text-[#FAF9F5]">
              Inquire
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden border-b border-stone-200/40">
        
        {/* Soft Plaster Circles for Ambient Vibe */}
        <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-[#F3EFE6]/70 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/10 w-[400px] h-[400px] bg-[#E5DFD3]/40 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="inline-flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#8E8270]"></span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E8270] font-medium">Bespoke Residential Architecture</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2D3130] leading-[1.15] font-light">
              The stillness of <br />
              <span className="italic">Japan</span> meets the warmth of <span className="font-normal text-[#8E8270]">Scandinavia</span>.
            </h1>

            <p className="text-sm sm:text-base text-[#5C615E] leading-relaxed max-w-md font-light">
              Crafting silent architectural spaces in Hyderabad. We build homes that honor natural wood grain, hand-layered plaster, and quiet luxury.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a href="#portfolio" className="inline-flex items-center justify-between border border-[#2D3130] bg-[#2D3130] text-[#FAF9F5] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-[#2D3130] transition-all duration-300">
                Explore Portfolio <ArrowRight size={14} className="ml-3" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center border border-stone-300 hover:border-[#2D3130] px-8 py-4 text-xs tracking-[0.2em] uppercase transition-colors">
                Book Consultation
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-10 grid grid-cols-3 gap-6 border-t border-stone-200/60 max-w-md">
              <div>
                <p className="text-xl font-serif text-[#2D3130]">08+</p>
                <p className="text-[9px] tracking-wider uppercase text-[#8E8270]">Years Curation</p>
              </div>
              <div>
                <p className="text-xl font-serif text-[#2D3130]">45+</p>
                <p className="text-[9px] tracking-wider uppercase text-[#8E8270]">Bespoke Homes</p>
              </div>
              <div>
                <p className="text-xl font-serif text-[#2D3130]">100%</p>
                <p className="text-[9px] tracking-wider uppercase text-[#8E8270]">Tailored Joinery</p>
              </div>
            </div>
          </div>

          {/* Hero Image Container with Thin Delicate Border */}
          <div className="lg:col-span-6 relative">
            <div className="border border-stone-300/60 p-3 bg-white/40 shadow-sm rounded-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xs">
                <img 
                  src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&h=1500&q=85" 
                  alt="Minimalist Japandi interior living room by Tara Design Solutions" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            
            {/* Absolute overlay badge with thin borders */}
            <div className="absolute -bottom-6 -left-6 bg-[#FAF9F5] border border-stone-300/80 p-5 hidden md:block max-w-xs shadow-sm">
              <p className="text-[10px] tracking-[0.2em] text-[#8E8270] uppercase font-bold mb-1">DESIGN HIGHLIGHT</p>
              <p className="text-xs text-[#2D3130] leading-relaxed font-light">
                “Ma” — the Japanese aesthetic of empty space, letting raw plaster breathe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us (Philosophy) */}
      <section id="about" className="py-28 lg:py-36 bg-[#F2EFE9]/40 border-b border-stone-200/40 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            <div className="lg:col-span-4 space-y-6">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#8E8270] font-semibold">OUR PHILOSOPHY</p>
              <h2 className="text-3xl lg:text-4xl font-serif text-[#2D3130] font-light leading-tight">
                Quiet luxury, organic textures, and functional warmth.
              </h2>
              <div className="w-12 h-[1px] bg-[#8E8270]"></div>
            </div>

            <div className="lg:col-span-8 space-y-8 text-[#5C615E] font-light text-sm sm:text-base leading-relaxed">
              <p>
                Tara Design Solutions was founded on the belief that a home should be a physical sanctuary from the noise of modern life. We reject sterile modernism and overly decorated luxury. Instead, we seek the middle ground: the quiet elegance of <span className="text-[#2D3130] font-medium">Japandi Fusion</span>.
              </p>
              <p>
                We blend the warm, cozy comfort of Scandinavian hygge with the rustic, natural simplicity of Japanese wabi-sabi. This means every design features soft limestone plaster walls, warm honey-toned ash woods, raw iron fittings, and massive amounts of negative space that let light travel uninterrupted.
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 bg-[#FAF9F5] border border-stone-200 flex items-center justify-center text-[#8E8270]">
                    <Sun size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-[0.15em] uppercase text-[#2D3130] font-semibold mb-1">Chasing Daylight</h4>
                    <p className="text-xs leading-relaxed">Positioning screens, doors, and walls to allow natural light paths to sculpt the room throughout the day.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 bg-[#FAF9F5] border border-stone-200 flex items-center justify-center text-[#8E8270]">
                    <Feather size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-[0.15em] uppercase text-[#2D3130] font-semibold mb-1">Organic Materials</h4>
                    <p className="text-xs leading-relaxed">Only using timbers, stones, and fabrics that age beautifully over time, acquiring depth and stories.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Portfolio */}
      <section id="portfolio" className="py-28 lg:py-36 bg-[#FAF9F5] border-b border-stone-200/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-4">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#8E8270] font-semibold">SELECTED PORTFOLIO</p>
              <h2 className="text-3xl lg:text-5xl font-serif text-[#2D3130] font-light">
                Spaces designed to <span className="italic">breathe</span>.
              </h2>
            </div>
            <p className="text-xs text-[#8E8270] tracking-[0.15em] uppercase mt-4 md:mt-0 font-medium">
              Explore Living, Kitchen, Storage & Lighting
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group flex flex-col space-y-6">
                
                {/* Image Container with delicate hover zoom */}
                <div className="border border-stone-200/80 p-2.5 bg-[#FBFBFA] shadow-xs">
                  <div className="overflow-hidden aspect-[16/10] relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#FAF9F5]/90 border border-stone-200/60 px-3 py-1 text-[8px] tracking-[0.2em] uppercase text-[#2D3130] font-medium">
                      {item.category}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 px-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-serif text-[#2D3130] hover:text-[#8E8270] transition-colors cursor-pointer">{item.title}</h3>
                    <span className="text-[10px] text-[#8E8270] font-mono tracking-widest">{item.specs.split('|')[0].trim()}</span>
                  </div>
                  <p className="text-xs text-[#5C615E] leading-relaxed font-light">
                    {item.desc}
                  </p>
                  <p className="text-[10px] text-[#8E8270] tracking-wider font-light">
                    {item.specs}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Design Process */}
      <section id="process" className="py-28 lg:py-36 bg-[#F2EFE9]/30 border-b border-stone-200/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          
          <div className="max-w-3xl mb-20 space-y-4">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8E8270] font-semibold">THE PROCESS</p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#2D3130] font-light">
              From initial observation to hand-polished finish.
            </h2>
            <p className="text-xs text-[#5C615E] max-w-md leading-relaxed font-light">
              Our methodology ensures that form is born from purpose. We do not rush; we build deliberately.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 border-t border-stone-200/60 pt-16">
            {processSteps.map((step, idx) => (
              <div key={idx} className="space-y-6 relative group">
                <span className="text-4xl lg:text-5xl font-serif italic text-[#D1C5B4] group-hover:text-[#8E8270] transition-colors duration-500">
                  {step.num}
                </span>
                <h3 className="text-lg font-serif text-[#2D3130] font-medium tracking-wide">
                  {step.title}
                </h3>
                <p className="text-xs text-[#5C615E] leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 lg:py-36 bg-[#FAF9F5] border-b border-stone-200/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-20">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8E8270] font-semibold">VOICES</p>
            <h2 className="text-3xl font-serif text-[#2D3130] font-light">
              Reflections from our clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "“The living room is completely transformed. The custom lime plaster captures morning rays and shifts from cream to warm sand as the day closes. Absolutely brilliant work.”",
                author: "Ananya R.",
                location: "Kollur, Hyderabad",
                timbers: "Featured Timber: European Ash"
              },
              {
                quote: "“They turned a generic dark modular kitchen layout into a serene oak and black slate workstation. The handless cabinet craftsmanship is flawless.”",
                author: "Vikram K.",
                location: "Jubilee Hills, Hyderabad",
                timbers: "Featured Timber: Flatted Oak"
              },
              {
                quote: "“What I love most is the silence. The layout, acoustic partitions, and warm indirect lighting coves make returning home feel like walking into a sanctuary.”",
                author: "Nisha & Omar S.",
                location: "Gachibowli, Hyderabad",
                timbers: "Featured Timber: Natural Cedar"
              }
            ].map((t, idx) => (
              <div key={idx} className="border border-stone-200/70 p-8 bg-[#FAF9F5] space-y-6 flex flex-col justify-between hover:shadow-xs transition-shadow">
                <p className="text-xs text-[#5C615E] italic leading-relaxed font-light">
                  {t.quote}
                </p>
                <div className="space-y-1">
                  <h4 className="text-xs font-serif text-[#2D3130] font-bold">{t.author}</h4>
                  <p className="text-[9px] tracking-wider uppercase text-[#8E8270]">{t.location}</p>
                  <p className="text-[8px] text-[#A3998D] italic font-mono pt-1">{t.timbers}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-28 lg:py-36 bg-[#F2EFE9]/20 border-b border-stone-200/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8E8270] font-semibold">ANSWERS</p>
            <h2 className="text-3xl font-serif text-[#2D3130] font-light">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className="border-b border-stone-200 pb-4">
                  <button
                    className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                  >
                    <span className="text-xs sm:text-sm font-serif text-[#2D3130] group-hover:text-[#8E8270] transition-colors pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      size={16} 
                      className={`text-[#8E8270] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                    <p className="text-xs text-[#5C615E] leading-relaxed font-light pl-1 pb-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-28 lg:py-36 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#8E8270] font-semibold">INQUIRIES</p>
              <h2 className="text-3xl lg:text-4xl font-serif text-[#2D3130] font-light leading-tight">
                Let’s begin crafting <br />your sanctuary.
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#5C615E] leading-relaxed font-light max-w-sm">
              We take on a limited count of residential projects per quarter to guarantee direct attention from our lead architects and dedicated wood craftsmen.
            </p>

            <div className="space-y-6 pt-6 border-t border-stone-200/60 max-w-sm">
              <div className="flex gap-4 items-center">
                <MapPin size={16} className="text-[#8E8270] shrink-0" />
                <span className="text-xs text-[#5C615E] font-light">Kollur Main Road, Near ORR Exit 2, Hyderabad</span>
              </div>
              <div className="flex gap-4 items-center">
                <Mail size={16} className="text-[#8E8270] shrink-0" />
                <span className="text-xs text-[#5C615E] font-light">studio@taradesignsolutions.com</span>
              </div>
              <div className="flex gap-4 items-center">
                <Phone size={16} className="text-[#8E8270] shrink-0" />
                <span className="text-xs text-[#5C615E] font-light">+91 98480 22101</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-[#FAF9F5] border border-stone-200 p-8 lg:p-12">
            
            {formStatus.submitted ? (
              <div className="h-full flex flex-col justify-center items-center text-center space-y-6 py-12">
                <div className="w-16 h-16 rounded-full bg-[#FAF9F5] border border-[#8E8270]/40 flex items-center justify-center text-[#8E8270]">
                  <Check size={28} />
                </div>
                <h3 className="text-lg font-serif text-[#2D3130]">Inquiry Submitted</h3>
                <p className="text-xs text-[#5C615E] leading-relaxed max-w-xs font-light">
                  Thank you for reaching out. Our lead designer will contact you within 48 hours to schedule an initial spatial discovery.
                </p>
                <button 
                  onClick={() => setFormStatus({ submitted: false, loading: false, error: null })}
                  className="text-xs tracking-wider uppercase text-[#8E8270] hover:text-[#2D3130] underline transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {formStatus.error && (
                  <div className="bg-red-50 border border-red-100 text-red-700 text-xs px-4 py-3 rounded-xs font-light">
                    {formStatus.error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-wider uppercase text-[#8E8270] block">Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ananya Roy" 
                      className="w-full bg-[#FAF9F5] border border-stone-300/80 px-4 py-3 text-xs focus:outline-none focus:border-[#2D3130] transition-colors text-[#2D3130] font-light placeholder-stone-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-wider uppercase text-[#8E8270] block">Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ananya@example.com" 
                      className="w-full bg-[#FAF9F5] border border-stone-300/80 px-4 py-3 text-xs focus:outline-none focus:border-[#2D3130] transition-colors text-[#2D3130] font-light placeholder-stone-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-wider uppercase text-[#8E8270] block">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 99000 00000" 
                      className="w-full bg-[#FAF9F5] border border-stone-300/80 px-4 py-3 text-xs focus:outline-none focus:border-[#2D3130] transition-colors text-[#2D3130] font-light placeholder-stone-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-wider uppercase text-[#8E8270] block">Primary Interest</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF9F5] border border-stone-300/80 px-4 py-3 text-xs focus:outline-none focus:border-[#2D3130] transition-colors text-[#2D3130] font-light"
                    >
                      <option value="Living Room">Wabi-Sabi Living Room</option>
                      <option value="Modular Kitchen">Modular Kitchen</option>
                      <option value="Wardrobes">Seamless Wardrobes</option>
                      <option value="Lighting">Indirect Lighting</option>
                      <option value="Full Home">Full Home Architecture</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] tracking-wider uppercase text-[#8E8270] block">Your Space Details *</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell us about your space size, location, and the emotional mood you want to achieve..." 
                    className="w-full bg-[#FAF9F5] border border-stone-300/80 px-4 py-3 text-xs focus:outline-none focus:border-[#2D3130] transition-colors text-[#2D3130] font-light placeholder-stone-400 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus.loading}
                  className="w-full border border-[#2D3130] bg-[#2D3130] text-[#FAF9F5] py-4 text-xs tracking-[0.25em] uppercase hover:bg-transparent hover:text-[#2D3130] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {formStatus.loading ? 'Transmitting inquiry...' : 'Send Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D3130] text-[#FAF9F5] py-16 px-6 lg:px-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-stone-800 pb-12">
          
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-lg font-medium tracking-[0.25em] uppercase">TARA</span>
              <span className="text-[8px] tracking-[0.35em] text-[#8E8270] uppercase font-light -mt-1">Design Solutions</span>
            </div>
            <p className="text-xs text-[#FAF9F5]/60 leading-relaxed font-light">
              Bespoke architectural fusion blending Scandinavian function with Japanese minimalism.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#8E8270] font-bold mb-4">PAGES</h4>
            <ul className="space-y-2.5 text-xs text-[#FAF9F5]/70 font-light">
              <li><a href="#about" className="hover:text-[#FAF9F5] transition-colors">Philosophy</a></li>
              <li><a href="#portfolio" className="hover:text-[#FAF9F5] transition-colors">Selected Work</a></li>
              <li><a href="#process" className="hover:text-[#FAF9F5] transition-colors">Methodology</a></li>
              <li><a href="#faq" className="hover:text-[#FAF9F5] transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#8E8270] font-bold mb-4">REPRESENTATIVE NICHES</h4>
            <ul className="space-y-2.5 text-xs text-[#FAF9F5]/60 font-mono">
              <li>Residential Homes</li>
              <li>Minimalist Kitchens</li>
              <li>Linen Lighting</li>
              <li>Custom Oak Joinery</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#8E8270] font-bold mb-4">LEGAL</h4>
            <p className="text-xs text-[#FAF9F5]/60 leading-relaxed font-light">
              © 2026 Tara Design Solutions. All rights reserved. Code and previews comply withTolichowki Healthtech standards.
            </p>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#FAF9F5]/40 tracking-wider">
          <p>Kollur, Hyderabad, Telangana</p>
          <p className="mt-2 sm:mt-0 font-mono">PREVIEW // NOT A LIVE PRODUCTION SITE</p>
        </div>
      </footer>

    </div>
  );
}

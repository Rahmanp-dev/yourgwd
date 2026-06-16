"use client";
import React, { useState } from 'react';
import { 
  Trees, 
  Layers, 
  Compass, 
  Wrench, 
  ShieldCheck, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Sliders, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Home
} from 'lucide-react';

export default function DasosCabinetsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeShowcaseTab, setActiveShowcaseTab] = useState('kitchens');
  
  // Material Planner states
  const [cabinetType, setCabinetType] = useState('kitchen');
  const [baseMaterial, setBaseMaterial] = useState('plywood');
  const [finish, setFinish] = useState('veneer');
  const [runningFeet, setRunningFeet] = useState(10);
  
  // FAQ state
  const [activeFaq, setActiveFaq] = useState(null);

  // Contact form states
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    timeline: '1-month',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  // Dynamic cost calculation based on realistic Hyderabad pricing
  const calculateCost = () => {
    let ratePerFoot = 1800; // base rate
    if (cabinetType === 'kitchen') ratePerFoot = 2400;
    else if (cabinetType === 'wardrobe') ratePerFoot = 3100;
    else if (cabinetType === 'tv-unit') ratePerFoot = 1900;
    else if (cabinetType === 'vanity') ratePerFoot = 1600;

    // Material multiplier
    let materialMultiplier = 1.0;
    if (baseMaterial === 'plywood') materialMultiplier = 1.3; // Gurjan Plywood
    else if (baseMaterial === 'hdhmr') materialMultiplier = 1.1; // HDHMR
    else if (baseMaterial === 'blockboard') materialMultiplier = 1.25; // Oak Blockboard

    // Finish multiplier
    let finishMultiplier = 1.0;
    if (finish === 'veneer') finishMultiplier = 1.4; // Natural Oak Veneer
    else if (finish === 'acrylic') finishMultiplier = 1.25; // Matte Sage Acrylic
    else if (finish === 'laminate') finishMultiplier = 1.0; // Matte Laminate

    const baseCost = ratePerFoot * runningFeet * materialMultiplier * finishMultiplier;
    return Math.round(baseCost);
  };

  const estimatedCost = calculateCost();

  const showcaseData = {
    kitchens: {
      title: "Modular Scandi Kitchens",
      subtitle: "The Hearth of the Home",
      description: "Combining raw oak drawers with soft sage green panels. Our kitchens optimize vertical storage with German lift-up hardware, heavy-duty tandem boxes, and soft-closing blind corner carousels.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      specs: [
        "Base cabinet: 18mm Gurjan Marine Plywood",
        "Drawers: Hettich InnoTech Atira Soft-Close Systems",
        "Counter integration: Seamless quartz or natural stone edge",
        "Aesthetic: Handleless J-pull profiles with concealed LED channels"
      ]
    },
    wardrobes: {
      title: "Spacious Integrated Wardrobes",
      subtitle: "Decluttered Mind, Organized Space",
      description: "Floor-to-ceiling wardrobes featuring integrated warm oak shelving, pull-out trouser racks, built-in sensor-driven LED strip lighting, and soft-touch sliding glass panels framed in matte black anodized aluminum.",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
      specs: [
        "Frame structure: 18mm pre-laminated high-density wood boards",
        "Shutters: 19mm blockboard with natural premium oak veneer finish",
        "Hardware: Hafele 3D adjustable soft-close slide hinges",
        "Accessories: Built-in safety drawer with biometric lock"
      ]
    },
    living: {
      title: "Living & TV Console Units",
      subtitle: "Floating Minimalism",
      description: "Low-profile floating consoles that seamlessly run along your living area walls. Built with beautiful tambour-slatted oak wood detailing to disguise media boxes while retaining infrared remote signal access.",
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80",
      specs: [
        "Front panels: Oak tambour-slatted solid timber segments",
        "Mounting: Heavy-duty wall brackets holding up to 120kg load",
        "Cable routing: Concealed brush-grommet pathways",
        "Finishing: Low-VOC matte polyurethane clear coat"
      ]
    },
    study: {
      title: "Study Spaces & Floating Vanities",
      subtitle: "Focused Calm",
      description: "Custom-configured wall desks and vanity modules built with soft organic curves to maximize spatial flow. Perfect for home offices in modern Attapur apartments.",
      image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80",
      specs: [
        "Desktops: Solid 25mm oak wood block board",
        "Drawer slides: Bottom-mounted soft-close runners",
        "Vanity protection: Extra hydrophobic laminate backing",
        "Curves: Custom CNC routed radiused corners"
      ]
    }
  };

  const testimonials = [
    {
      name: "Ananya Reddy",
      role: "Homeowner, Happy Homes Attapur",
      rating: 5,
      comment: "We wanted a clean, clutter-free look for our 3BHK. Dasos Cabinets delivered exactly what they promised—perfect Scandinavian styling with lovely warm oak textures and high-functioning hardware. The sage green accent kitchen is a hit with everyone who visits!"
    },
    {
      name: "Siddharth Verma",
      role: "Architect, Hyderguda",
      rating: 5,
      comment: "As an architect, I am very picky about tolerances and edge banding. Dasos uses top-tier PUR hotmelt edge banding which makes their cabinet panels 100% moisture-proof. Their German machinery cut is completely seamless. Highly recommended for premium homes."
    },
    {
      name: "Dr. K. Srinivas",
      role: "Resident, Janapriya Utopia",
      rating: 5,
      comment: "The material planner on their website was highly accurate! The consultation process was transparent, and their team finished the installation of our floor-to-ceiling wardrobes in just 3 days without leaving any dust behind."
    }
  ];

  const faqs = [
    {
      q: "Where is the Dasos Cabinets experience center located?",
      a: "Our boutique showroom is located on the main road in Attapur, Hyderabad, near the PVNR Expressway Pillar 125. We have full-scale kitchen modules, wardrobe configurations, and finish samples on display."
    },
    {
      q: "What makes your edge-banding moisture resistant?",
      a: "Unlike standard local carpenters who use hand-applied contact adhesive, we use industrial Edge-Banders with PUR (Polyurethane) Hotmelt adhesives. PUR forms a chemical cross-link bond that is highly resistant to water, heat, and humidity, ensuring your cabinet edges never swell or peel."
    },
    {
      q: "Do you offer customizable inner layouts for wardrobes?",
      a: "Absolutely. Our modular grids allow you to choose custom counts of drawers, saree pull-outs, long coat hanging rails, and biometric safe boxes at no extra cost beyond the base cabinetry material."
    },
    {
      q: "What is your warranty policy?",
      a: "We offer a 10-year warranty on Gurjan Plywood cabinets against termites and delamination, and a lifetime warranty on Hafele and Hettich hardware hinges and runner channels."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#2E3A2F] font-sans selection:bg-[#4F772D] selection:text-white antialiased">
      
      {/* HEADER & NAV */}
      <header className="sticky top-0 bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#E3E7E3] z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="size-10 rounded-xl bg-[#4F772D] flex items-center justify-center text-white transition-transform group-hover:scale-105">
              <Trees size={22} className="stroke-[1.5]" />
            </div>
            <div>
              <span className="font-semibold text-lg tracking-tight block text-[#2E3A2F]">DASOS CABINETS</span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#4F772D] block -mt-1">Scandinavian Precision</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#showcase" className="hover:text-[#4F772D] transition-colors">Showcase</a>
            <a href="#planner" className="hover:text-[#4F772D] transition-colors">Material Planner</a>
            <a href="#journey" className="hover:text-[#4F772D] transition-colors">Design Journey</a>
            <a href="#testimonials" className="hover:text-[#4F772D] transition-colors">Testimonials</a>
            <a href="#faq" className="hover:text-[#4F772D] transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="bg-[#4F772D] text-white hover:bg-[#3d5c22] px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm shadow-[#4F772D]/20 inline-flex items-center gap-2"
            >
              Book Design Consultation
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#2E3A2F]" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E3E7E3] bg-[#FAFAFA] px-6 py-4 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-5 duration-200">
            <a 
              href="#showcase" 
              className="block font-medium hover:text-[#4F772D]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Showcase
            </a>
            <a 
              href="#planner" 
              className="block font-medium hover:text-[#4F772D]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Material Planner
            </a>
            <a 
              href="#journey" 
              className="block font-medium hover:text-[#4F772D]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Design Journey
            </a>
            <a 
              href="#testimonials" 
              className="block font-medium hover:text-[#4F772D]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="block font-medium hover:text-[#4F772D]"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className="block bg-[#4F772D] text-white text-center py-3 rounded-full font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Design Consultation
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-[#E3E7E3]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#4F772D]/10 text-[#4F772D] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={14} className="animate-spin-slow" />
              Now Open in Attapur, Hyderabad
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight">
              Calm. Functional.<br />
              <span className="font-semibold text-[#4F772D]">Scandinavian Cabinets</span><br />
              For Natural Living.
            </h1>
            
            <p className="text-lg text-[#2E3A2F]/80 max-w-lg leading-relaxed">
              We design and manufacture premium modular kitchens and storage systems. Handpicked European wood grains, organic soft-close mechanisms, and moisture-sealed edge-banding. Clean designs that look premium and function forever.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#planner" 
                className="bg-[#4F772D] hover:bg-[#3d5c22] text-white px-8 py-4 rounded-full text-base font-semibold text-center transition-all shadow-md shadow-[#4F772D]/10 flex items-center justify-center gap-3"
              >
                Launch Material Planner
                <Sliders size={18} />
              </a>
              <a 
                href="#showcase" 
                className="bg-[#FFFFFF] border border-[#E3E7E3] hover:border-[#D2B48C] hover:bg-[#FAFAFA] text-[#2E3A2F] px-8 py-4 rounded-full text-base font-semibold text-center transition-all flex items-center justify-center gap-2"
              >
                View Selected Works
              </a>
            </div>

            {/* Micro details */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E3E7E3]">
              <div>
                <span className="block text-2xl font-semibold text-[#4F772D]">100%</span>
                <span className="block text-xs uppercase tracking-wider text-[#2E3A2F]/60 mt-1 font-mono">Gurjan Birch Plywood</span>
              </div>
              <div>
                <span className="block text-2xl font-semibold text-[#4F772D]">10 Years</span>
                <span className="block text-xs uppercase tracking-wider text-[#2E3A2F]/60 mt-1 font-mono">Structural Warranty</span>
              </div>
              <div>
                <span className="block text-2xl font-semibold text-[#4F772D]">48-Hour</span>
                <span className="block text-xs uppercase tracking-wider text-[#2E3A2F]/60 mt-1 font-mono">Clean Install</span>
              </div>
            </div>
          </div>

          {/* Right Image Frame with organic curve overlay */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl shadow-[#2E3A2F]/5 border border-[#E3E7E3] relative bg-stone-100">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
                alt="Scandinavian Minimalist Kitchen Design" 
                className="w-full h-full object-cover"
              />
              
              {/* Bottom organic floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#FFFFFF]/90 backdrop-blur-md p-6 rounded-3xl border border-[#E3E7E3]/60 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#4F772D] block">Featured Layout</span>
                  <span className="font-semibold text-base block mt-0.5 text-[#2E3A2F]">The Stockholm Oak L-Kitchen</span>
                </div>
                <div className="bg-[#4F772D] text-white text-xs px-3.5 py-1.5 rounded-full font-medium">
                  Customizable
                </div>
              </div>
            </div>
            
            {/* Soft decorative blob elements mimicking organic scandi design */}
            <div className="absolute -top-6 -left-6 size-24 rounded-full bg-[#D2B48C]/20 blur-xl -z-10" />
            <div className="absolute -bottom-6 -right-6 size-32 rounded-full bg-[#4F772D]/10 blur-2xl -z-10" />
          </div>

        </div>
      </section>

      {/* SHOWCASE & SERVICES (TABBED PORTFOLIO) */}
      <section id="showcase" className="py-24 bg-white border-b border-[#E3E7E3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#4F772D] block">Portfolio & Modules</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#2E3A2F]">Modular Cabinet Showcase</h2>
            <p className="text-[#2E3A2F]/75">
              Explore our Scandinavian modules. Each setup is custom-fitted to your property coordinates with pristine finishes and high durability.
            </p>
          </div>

          {/* Tabs Nav */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: 'kitchens', label: 'Modular Kitchens' },
              { id: 'wardrobes', label: 'Wardrobes & Closets' },
              { id: 'living', label: 'TV & Living Units' },
              { id: 'study', label: 'Study & Vanity' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveShowcaseTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeShowcaseTab === tab.id
                    ? 'bg-[#4F772D] text-white shadow-sm shadow-[#4F772D]/20'
                    : 'bg-[#FAFAFA] border border-[#E3E7E3] text-[#2E3A2F]/80 hover:border-[#D2B48C]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#FAFAFA] p-8 lg:p-12 rounded-[32px] border border-[#E3E7E3]">
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#4F772D]">
                {showcaseData[activeShowcaseTab].subtitle}
              </span>
              <h3 className="text-3xl font-semibold tracking-tight text-[#2E3A2F]">
                {showcaseData[activeShowcaseTab].title}
              </h3>
              <p className="text-base text-[#2E3A2F]/85 leading-relaxed">
                {showcaseData[activeShowcaseTab].description}
              </p>
              
              <div className="space-y-3 pt-4 border-t border-[#E3E7E3]">
                <span className="text-xs uppercase font-mono tracking-widest text-[#2E3A2F]/60 block mb-2">Technical Standards</span>
                {showcaseData[activeShowcaseTab].specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 size={16} className="text-[#4F772D] mt-0.5 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#4F772D] hover:underline"
                >
                  Inquire about this module layout
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-7">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-[#E3E7E3] bg-stone-100">
                <img 
                  src={showcaseData[activeShowcaseTab].image} 
                  alt={showcaseData[activeShowcaseTab].title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DYNAMIC MATERIAL PLANNER & COST ESTIMATOR */}
      <section id="planner" className="py-24 bg-[#FAFAFA] border-b border-[#E3E7E3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#4F772D] block">Instant Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#2E3A2F]">Interactive Material Planner</h2>
            <p className="text-[#2E3A2F]/75">
              Select your specifications to simulate cost structures based on current raw material pricing in Attapur, Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white p-8 lg:p-12 rounded-[40px] border border-[#E3E7E3] shadow-sm">
            
            {/* Configuration side */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Cabinet Type */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-[#2E3A2F] uppercase tracking-wider font-mono">1. Select Unit Type</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'kitchen', label: 'Kitchen Cabinetry' },
                    { id: 'wardrobe', label: 'Wardrobe System' },
                    { id: 'tv-unit', label: 'TV Console' },
                    { id: 'vanity', label: 'Study/Vanity desk' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setCabinetType(item.id)}
                      className={`p-4 rounded-2xl border text-center transition-all ${
                        cabinetType === item.id
                          ? 'border-[#4F772D] bg-[#4F772D]/5 text-[#4F772D] font-medium shadow-sm'
                          : 'border-[#E3E7E3] hover:border-[#D2B48C] text-[#2E3A2F]'
                      }`}
                    >
                      <span className="block text-sm">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Base Material */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-[#2E3A2F] uppercase tracking-wider font-mono">2. Choose Base Carcass Material</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'plywood', name: 'Gurjan Birch Plywood', desc: '100% boiling water proof, high load' },
                    { id: 'hdhmr', name: 'Premium HDHMR', desc: 'Termite proof, ideal for dry cabinets' },
                    { id: 'blockboard', name: 'Oak Blockboard Core', desc: 'Lightweight core, robust structural stability' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setBaseMaterial(item.id)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        baseMaterial === item.id
                          ? 'border-[#4F772D] bg-[#4F772D]/5 text-[#4F772D] font-medium'
                          : 'border-[#E3E7E3] hover:border-[#D2B48C] text-[#2E3A2F]'
                      }`}
                    >
                      <span className="block text-sm font-semibold">{item.name}</span>
                      <span className="block text-[11px] text-[#2E3A2F]/60 mt-1">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Finish */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-[#2E3A2F] uppercase tracking-wider font-mono">3. Shutters & Finish Selection</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'veneer', name: 'Natural Light Oak Veneer', desc: 'Warm grain timber panels clear-coated' },
                    { id: 'acrylic', name: 'Matte Sage Acrylic', desc: 'Ultra-matte green tone, scratch resistant' },
                    { id: 'laminate', name: 'Super-Matte Laminate', desc: 'Clean, fingerprint resistant finish' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setFinish(item.id)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        finish === item.id
                          ? 'border-[#4F772D] bg-[#4F772D]/5 text-[#4F772D] font-medium'
                          : 'border-[#E3E7E3] hover:border-[#D2B48C] text-[#2E3A2F]'
                      }`}
                    >
                      <span className="block text-sm font-semibold">{item.name}</span>
                      <span className="block text-[11px] text-[#2E3A2F]/60 mt-1">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Slider Width */}
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-semibold text-[#2E3A2F] uppercase tracking-wider font-mono">
                  <span>4. Width / Size (Running Feet)</span>
                  <span className="text-[#4F772D] text-lg font-bold">{runningFeet} ft</span>
                </div>
                <input 
                  type="range" 
                  min="6" 
                  max="30" 
                  value={runningFeet}
                  onChange={(e) => setRunningFeet(parseInt(e.target.value))}
                  className="w-full accent-[#4F772D] h-2 bg-[#FAFAFA] rounded-lg border border-[#E3E7E3] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-[#2E3A2F]/50 font-mono">
                  <span>Min: 6 ft</span>
                  <span>Typical Kitchen: 10 - 15 ft</span>
                  <span>Max: 30 ft</span>
                </div>
              </div>

            </div>

            {/* Results side */}
            <div className="lg:col-span-5 bg-[#FAFAFA] p-8 rounded-3xl border border-[#E3E7E3] flex flex-col justify-between">
              
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#4F772D] block mb-2">Estimate Breakdown</span>
                <h3 className="text-xl font-semibold text-[#2E3A2F] mb-6">Specification Summary</h3>
                
                <div className="space-y-4 text-sm font-medium">
                  <div className="flex justify-between border-b border-[#E3E7E3] pb-2">
                    <span className="text-[#2E3A2F]/60">Module Type:</span>
                    <span className="capitalize text-[#2E3A2F]">{cabinetType} Unit</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E3E7E3] pb-2">
                    <span className="text-[#2E3A2F]/60">Base Carcass:</span>
                    <span className="text-[#2E3A2F]">
                      {baseMaterial === 'plywood' && 'Gurjan Birch Plywood'}
                      {baseMaterial === 'hdhmr' && 'Premium HDHMR'}
                      {baseMaterial === 'blockboard' && 'Oak Blockboard'}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#E3E7E3] pb-2">
                    <span className="text-[#2E3A2F]/60">Finish Type:</span>
                    <span className="text-[#2E3A2F]">
                      {finish === 'veneer' && 'Oak Veneer'}
                      {finish === 'acrylic' && 'Sage Acrylic'}
                      {finish === 'laminate' && 'Matte Laminate'}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#E3E7E3] pb-2">
                    <span className="text-[#2E3A2F]/60">Length Factor:</span>
                    <span className="text-[#2E3A2F] font-mono">{runningFeet} Running Feet</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-[#2E3A2F]/60">Est. Lead Time:</span>
                    <span className="text-[#4F772D] font-mono font-semibold">14-18 Working Days</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E3E7E3] space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#2E3A2F]/50 block font-mono">Estimated Direct Price</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl font-semibold font-mono text-[#4F772D]">₹{estimatedCost.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-[#2E3A2F]/60 font-medium">*Inclusive of GST & Fitting</span>
                  </div>
                </div>

                <a 
                  href="#contact" 
                  className="w-full bg-[#4F772D] hover:bg-[#3d5c22] text-white text-center py-4 rounded-xl font-semibold transition-all shadow-md shadow-[#4F772D]/10 block"
                  onClick={() => {
                    setFormState(prev => ({
                      ...prev,
                      location: `Happy Homes Attapur - Estimated ${cabinetType} (${runningFeet}ft)`
                    }));
                  }}
                >
                  Secure Estimate Pricing & Book Free Layout
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* DESIGN JOURNEY (STEP BY STEP) */}
      <section id="journey" className="py-24 bg-white border-b border-[#E3E7E3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#4F772D] block">How We Work</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#2E3A2F]">Our Seamless Cabinet Journey</h2>
            <p className="text-[#2E3A2F]/75">
              From organic planning to high-precision manufacturing, we ensure a clean, stress-free path to custom cabinetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Step 1 */}
            <div className="space-y-4 bg-[#FAFAFA] p-6 rounded-2xl border border-[#E3E7E3] relative">
              <div className="size-10 rounded-full bg-[#4F772D]/10 text-[#4F772D] flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-semibold text-[#2E3A2F]">Scandinavian Moodboarding</h3>
              <p className="text-sm text-[#2E3A2F]/70 leading-relaxed">
                Sit down with our designers in Attapur. We choose wood grain directions, color pallets, and outline storage volume requirements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-4 bg-[#FAFAFA] p-6 rounded-2xl border border-[#E3E7E3] relative">
              <div className="size-10 rounded-full bg-[#4F772D]/10 text-[#4F772D] flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-semibold text-[#2E3A2F]">3D & VR Verification</h3>
              <p className="text-sm text-[#2E3A2F]/70 leading-relaxed">
                We generate accurate CAD structures and provide a VR layout walk-through. Measure twice, check twice, cut once.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-4 bg-[#FAFAFA] p-6 rounded-2xl border border-[#E3E7E3] relative">
              <div className="size-10 rounded-full bg-[#4F772D]/10 text-[#4F772D] flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="text-lg font-semibold text-[#2E3A2F]">CNC Manufacturing</h3>
              <p className="text-sm text-[#2E3A2F]/70 leading-relaxed">
                Your panels are processed on computerized CNC routers with 0.1mm tolerance. PUR hotmelt edgeband secures complete moisture protection.
              </p>
            </div>

            {/* Step 4 */}
            <div className="space-y-4 bg-[#FAFAFA] p-6 rounded-2xl border border-[#E3E7E3] relative">
              <div className="size-10 rounded-full bg-[#4F772D]/10 text-[#4F772D] flex items-center justify-center font-mono font-bold text-sm">
                04
              </div>
              <h3 className="text-lg font-semibold text-[#2E3A2F]">Dust-Free Installation</h3>
              <p className="text-sm text-[#2E3A2F]/70 leading-relaxed">
                We bring flat-packed modules and assemble them using system screws. No routing, no sanding, no toxic odors. Clean handoff in 48 hours.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-[#FAFAFA] border-b border-[#E3E7E3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#4F772D] block">Happy Homes</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#2E3A2F]">Loved by Hyderabad Families</h2>
            <p className="text-[#2E3A2F]/75">
              Read how we have helped homeowners in Attapur achieve calm, elegant interior environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-[#E3E7E3] flex flex-col justify-between relative shadow-sm">
                
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex gap-1 text-[#D2B48C]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-sm italic text-[#2E3A2F]/85 leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E3E7E3] flex items-center gap-3">
                  <div className="size-10 rounded-full bg-[#4F772D] text-white flex items-center justify-center font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <span className="block font-semibold text-sm text-[#2E3A2F]">{t.name}</span>
                    <span className="block text-[11px] font-mono text-[#4F772D]">{t.role}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-24 bg-white border-b border-[#E3E7E3]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#4F772D] block">Answering Queries</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E3A2F]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index}
                  className="border border-[#E3E7E3] rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-medium bg-[#FAFAFA] hover:bg-[#FAFAFA]/70 transition-all text-[#2E3A2F]"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp size={18} className="text-[#4F772D] shrink-0" />
                    ) : (
                      <ChevronDown size={18} className="text-[#4F772D] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 py-4 bg-white text-sm text-[#2E3A2F]/80 leading-relaxed border-t border-[#E3E7E3] animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Info Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#4F772D] text-white p-8 lg:p-12 rounded-[40px] shadow-lg shadow-[#4F772D]/10">
              
              <div className="space-y-6">
                <span className="text-xs uppercase font-mono tracking-widest text-[#D2B48C] block">Get in Touch</span>
                <h2 className="text-3xl lg:text-4xl font-normal leading-[1.1] text-white">
                  Let's craft your cabinet blueprint.
                </h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  Fill in your property coordinates. Our head designer will arrange a 1-on-1 moodboarding session at our experience center or a site visit to your apartment in Attapur.
                </p>
              </div>

              <div className="space-y-6 border-t border-white/20 pt-8">
                <div className="flex items-center gap-4 text-sm">
                  <MapPin size={20} className="text-[#D2B48C] shrink-0" />
                  <span>Main Road, Near PVNR Expressway Pillar 125, Attapur, Hyderabad - 500048</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <Phone size={20} className="text-[#D2B48C] shrink-0" />
                  <span>+91 85858 58587</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <Mail size={20} className="text-[#D2B48C] shrink-0" />
                  <span>hello@dasoscabinets.com</span>
                </div>
              </div>

              <div className="text-xs text-white/50 font-mono">
                DASOS CABINETRY LTD • PRIVACY POLICY • © 2026
              </div>

            </div>

            {/* Form Panel */}
            <div className="lg:col-span-7 bg-white p-8 lg:p-12 rounded-[40px] border border-[#E3E7E3] flex flex-col justify-center">
              
              {isSuccess ? (
                <div className="text-center space-y-6 py-8">
                  <div className="size-16 rounded-full bg-[#4F772D]/10 text-[#4F772D] flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-[#2E3A2F]">Consultation Booked!</h3>
                    <p className="text-[#2E3A2F]/70 text-sm max-w-md mx-auto">
                      Thank you, {formState.name || 'homeowner'}. Our Chief Designer will contact you on your registered mobile number (+91 {formState.phone}) within the next 4 working hours.
                    </p>
                  </div>
                  <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#E3E7E3] text-left max-w-md mx-auto space-y-3">
                    <span className="block text-xs uppercase font-mono tracking-widest text-[#4F772D] font-bold">What to expect next:</span>
                    <div className="flex gap-2 text-xs text-[#2E3A2F]/80">
                      <span className="font-bold">1.</span>
                      <span>Call within 4 hours to verify apartment layout plans.</span>
                    </div>
                    <div className="flex gap-2 text-xs text-[#2E3A2F]/80">
                      <span className="font-bold">2.</span>
                      <span>Complimentary moodboard shared over WhatsApp.</span>
                    </div>
                    <div className="flex gap-2 text-xs text-[#2E3A2F]/80">
                      <span className="font-bold">3.</span>
                      <span>Site measurement date selection.</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setIsSuccess(false);
                      setFormState({ name: '', phone: '', email: '', location: '', timeline: '1-month' });
                    }}
                    className="text-[#4F772D] font-semibold text-sm hover:underline"
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-semibold text-[#2E3A2F]">Request a Call Back</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#2E3A2F]/70 font-mono">Your Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder="Ananya Reddy"
                        className="w-full px-4 py-3 rounded-xl border border-[#E3E7E3] focus:border-[#4F772D] focus:ring-1 focus:ring-[#4F772D] outline-none text-sm text-[#2E3A2F]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#2E3A2F]/70 font-mono">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                        value={formState.phone}
                        onChange={handleInputChange}
                        placeholder="9848012345"
                        className="w-full px-4 py-3 rounded-xl border border-[#E3E7E3] focus:border-[#4F772D] focus:ring-1 focus:ring-[#4F772D] outline-none text-sm text-[#2E3A2F]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#2E3A2F]/70 font-mono">Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="hello@dasoscabinets.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#E3E7E3] focus:border-[#4F772D] focus:ring-1 focus:ring-[#4F772D] outline-none text-sm text-[#2E3A2F]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="location" className="block text-xs font-semibold uppercase tracking-wider text-[#2E3A2F]/70 font-mono">Project Location / Community in Attapur *</label>
                    <input 
                      type="text" 
                      id="location"
                      name="location"
                      required
                      value={formState.location}
                      onChange={handleInputChange}
                      placeholder="Happy Homes Apartments, Flat 402"
                      className="w-full px-4 py-3 rounded-xl border border-[#E3E7E3] focus:border-[#4F772D] focus:ring-1 focus:ring-[#4F772D] outline-none text-sm text-[#2E3A2F]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="timeline" className="block text-xs font-semibold uppercase tracking-wider text-[#2E3A2F]/70 font-mono">Expected Project Timeline *</label>
                    <select 
                      id="timeline"
                      name="timeline"
                      value={formState.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E3E7E3] focus:border-[#4F772D] focus:ring-1 focus:ring-[#4F772D] outline-none text-sm text-[#2E3A2F] bg-white cursor-pointer"
                    >
                      <option value="immediate">Immediate (Within 2 weeks)</option>
                      <option value="1-month">Within 1 Month</option>
                      <option value="3-months">Within 3 Months</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#4F772D] hover:bg-[#3d5c22] disabled:bg-[#4F772D]/50 text-white font-semibold py-4 rounded-xl transition-all shadow-md shadow-[#4F772D]/10 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="size-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        Transmitting requirements...
                      </>
                    ) : (
                      <>
                        Request Free Site Call & Quote
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-[#2E3A2F]/50 text-center font-mono">
                    *We strictly protect your privacy. No marketing spam. Direct developer communication only.
                  </p>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2E3A2F] text-white border-t border-[#E3E7E3]/10 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-[#4F772D] flex items-center justify-center text-white">
                <Trees size={18} />
              </div>
              <span className="font-semibold text-base tracking-tight text-white">DASOS CABINETS</span>
            </div>
            <p className="text-white/60 text-xs leading-relaxed">
              Crafting premium minimalist Scandinavian modular cabinet layouts for custom residential projects.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D2B48C] font-mono">Hyderabad Areas Served</h4>
            <ul className="text-xs text-white/70 space-y-2 font-mono">
              <li>Attapur High Road</li>
              <li>Hyderguda & Rajendranagar</li>
              <li>Happy Homes Community</li>
              <li>Janapriya Utopia Complex</li>
              <li>Suncity & Bandlaguda</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D2B48C] font-mono">Modular Design Library</h4>
            <ul className="text-xs text-white/70 space-y-2">
              <li><a href="#showcase" className="hover:underline">Modular Kitchens</a></li>
              <li><a href="#showcase" className="hover:underline">Sliding Wardrobes</a></li>
              <li><a href="#showcase" className="hover:underline">Floating TV Consoles</a></li>
              <li><a href="#showcase" className="hover:underline">Calming Study Tables</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D2B48C] font-mono">Direct Technical Contact</h4>
            <p className="text-xs text-white/70 leading-relaxed font-mono">
              Experience Center: Opp Pillar 125, PVNR Expressway, Attapur, Hyderabad.<br />
              Developer Desk: +91 85858 58587
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-mono gap-4">
          <div>
            © 2026 Dasos Cabinets Hyderabad. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Terms of Fitting</a>
            <a href="#" className="hover:text-white">PUR Banding Standards</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

"use client";

import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Menu, 
  X, 
  Settings, 
  ShieldAlert, 
  Activity, 
  Phone, 
  Mail, 
  MapPin, 
  Check, 
  Layers, 
  Wrench, 
  Eye, 
  Hammer 
} from 'lucide-react';

export default function MetalAndMorePage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    alloy: 'Structural Carbon Steel',
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
      setFormStatus({ submitted: false, loading: false, error: 'ERROR_REQUIRED_FIELDS_MISSING' });
      return;
    }
    
    setFormStatus({ submitted: false, loading: true, error: null });
    
    // Simulate industrial API transmission
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
        alloy: 'Structural Carbon Steel',
        message: ''
      });
    }, 1500);
  };

  const portfolioItems = [
    {
      code: 'MTL-STAIR-09',
      title: 'Suspended Steel Staircase',
      category: 'METALWORK',
      desc: 'Floating 12mm carbon steel tread plates welded directly to a central structural H-beam. Chemical blackened finish.',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      specs: 'LOAD_CAPACITY: 450KG/m² | ALLOY: ASTM A36 Steel'
    },
    {
      code: 'CONC-CTR-03',
      title: 'Monolithic Concrete Bar Counter',
      category: 'BRUTALIST FURNITURE',
      desc: 'Glass-fiber reinforced concrete cast on-site. Diamond ground, exposed aggregate pores, and acid-etched seal.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      specs: 'COMPRESSIVE_STRENGTH: 45MPa | WEIGHT: 1.2 Tons'
    },
    {
      code: 'GATE-MESH-22',
      title: 'Slatted Iron Mesh Partitions',
      category: 'SPATIAL SEPARATORS',
      desc: 'Heavy industrial gauge wire mesh framed in raw angle iron with visible heavy-duty hinge mechanisms.',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
      specs: 'MESH_SPACING: 25mm | COATING: Polyurethane Raw Matte Clear'
    },
    {
      code: 'LGT-CONDUIT-05',
      title: 'Exposed Rig Conduit Lighting',
      category: 'LIGHTING RIGS',
      desc: 'Galvanized iron conduit channels routed across raw slabs supplying custom brass cage incandescent bulb fixtures.',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
      specs: 'VOLTAGE: 230V | MOUNTING: Ceiling Hilti Anchors'
    }
  ];

  const processSteps = [
    {
      step: '01',
      phase: 'METALLURGIC SCHEMATICS',
      title: 'Load Calculations & CAD Drawings',
      desc: 'We draft raw engineering layouts specifying iron thickness, weld-seam lengths, and anchor points. No fluff; strictly structural.'
    },
    {
      step: '02',
      phase: 'FABRICATION & WELDING',
      title: 'MIG/TIG Fusion & Plaster Casts',
      desc: 'Custom metal profiles are cut, ground, and fused in our industrial workshop. Concrete molds are built with heavy timber formwork.'
    },
    {
      step: '03',
      phase: 'ANCHORING & LOAD-TEST',
      title: 'Grinding, Treatment & Structural Fitting',
      desc: 'We anchor assemblies directly into masonry using chemical Hilti bolts. Weld surfaces are ground flat, leaving raw heat discolors exposed.'
    }
  ];

  const faqs = [
    {
      q: 'Do you leave weld marks and raw rust spots exposed in the final design?',
      a: 'Yes. Our design system embraces structural honesty. We grind welds flat for safety but do not hide the heat discolors from TIG/MIG welding. For rusted steel elements, we chemically arrest the rust at a specific visual state and seal it under an industrial-grade matte polyurethane clear coat.'
    },
    {
      q: 'Are custom metal stairs and concrete countertops suitable for standard apartments?',
      a: 'We perform structural load assessments for every project. A monolithic concrete counter can weigh up to 800kg; where structural slabs cannot handle this, we fabricate lightweight cellular concrete cores wrapped in ultra-thin micro-cement sheets to match the aesthetic without the weight.'
    },
    {
      q: 'What type of metal treatment do you apply to prevent aggressive rust?',
      a: 'We use premium rust-arresting polymers (Owatrol oils) and matte polyurethane coatings. For outdoor items, we sandblast to white metal followed by zinc-rich primer and black epoxy powder coating.'
    },
    {
      q: 'Can you match custom specifications for commercial restaurant bar designs?',
      a: 'Absolutely. We specialize in custom beer rigs, heavy steel mesh display grids, overhead gantry storage, and heavy-duty steel bar stools anchored to floor plates. We comply with commercial safety guidelines.'
    }
  ];

  return (
    <div className="bg-[#121212] text-[#E4E4E7]">
      
      {/* Top Banner Ribbon */}
      <div className="w-full bg-[#FAF9F5] text-black text-center py-2 px-4 text-xs uppercase font-extrabold border-b-4 border-black">
        ⚠️ PREVIEW PAGE // DESIGN SYSTEM: INDUSTRIAL BRUTALISM // FABRICATED FOR METAL & MORE INTERIORS
      </div>

      {/* Header Navigation */}
      <nav className="sticky top-0 z-50 bg-[#121212]/95 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Group */}
            <div className="flex items-center gap-3 border-r-4 border-black pr-6 py-2">
              <div className="w-10 h-10 bg-[#F97316] text-black font-black flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                M&M
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-sm uppercase tracking-tighter text-white">METAL & MORE</span>
                <span className="text-[10px] text-[#F97316] uppercase tracking-widest font-bold font-mono">INTERIORS</span>
              </div>
            </div>

            {/* Desktop Stark Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-xs uppercase hover:text-[#F97316] hover:underline decoration-2 transition-all">/ABOUT_US</a>
              <a href="#portfolio" className="text-xs uppercase hover:text-[#F97316] hover:underline decoration-2 transition-all">/WORKS</a>
              <a href="#process" className="text-xs uppercase hover:text-[#F97316] hover:underline decoration-2 transition-all">/PROCESS</a>
              <a href="#faq" className="text-xs uppercase hover:text-[#F97316] hover:underline decoration-2 transition-all">/FAQ_DAT</a>
              <a href="#contact" className="bg-[#F97316] text-black font-extrabold px-6 py-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all">
                WELD_INQUIRY
              </a>
            </div>

            {/* Mobile Stark Menu Toggle */}
            <button className="md:hidden p-2 border-2 border-black bg-[#282828] text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Stark Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1c1c1c] border-t-4 border-black px-6 py-8 space-y-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase text-zinc-300">/ABOUT_US</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase text-zinc-300">/WORKS</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase text-zinc-300">/PROCESS</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase text-zinc-300">/FAQ_DAT</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-center bg-[#F97316] text-black font-black py-3 border-2 border-black shadow-[3px_3px_0px_0px_#000]">
              WELD_INQUIRY
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-16 px-4 md:px-8 border-b-4 border-black bg-[#161616]">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#F97316]/5 rounded-full filter blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 border-2 border-dashed border-[#F97316] px-3 py-1.5 bg-[#282828]">
              <Activity size={14} className="text-[#F97316] animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#F97316]">SPEC: STRUCTURAL METALWORK</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-white">
              RAW IRON.<br />
              CONCRETE.<br />
              <span className="text-[#F97316] underline decoration-4 decoration-black">NO COMPROMISE.</span>
            </h1>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
              Industrial Chic and Neo-Brutalist architectural solutions for retail spaces, dark lofts, and structural cafes in Hyderabad. We turn heavy H-beams and raw aggregate into structural statements.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a href="#portfolio" className="inline-flex justify-between items-center bg-[#F97316] text-black font-extrabold uppercase text-xs px-8 py-4 border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
                VIEW_ACTIVE_PROJECTS <ArrowRight size={14} className="ml-3" />
              </a>
              <a href="#contact" className="inline-flex justify-center items-center bg-[#282828] text-white font-extrabold uppercase text-xs px-8 py-4 border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-[#3a3a3a] transition-colors">
                REQUEST_LOAD_TEST
              </a>
            </div>

            {/* Tech Specs Grid */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t-4 border-black max-w-lg">
              <div className="border-r-2 border-black">
                <p className="text-xs text-zinc-500">// ALLOY</p>
                <p className="text-sm font-bold text-white font-mono">ASTM A36</p>
              </div>
              <div className="border-r-2 border-black">
                <p className="text-xs text-zinc-500">// FINISH</p>
                <p className="text-sm font-bold text-white font-mono">Owatrol Black</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500">// STRENGTH</p>
                <p className="text-sm font-bold text-white font-mono">45 MPa Conc</p>
              </div>
            </div>
          </div>

          {/* Hero Image Block */}
          <div className="lg:col-span-5 relative">
            <div className="border-4 border-black bg-[#282828] p-3 shadow-[8px_8px_0px_0px_#F97316]">
              <div className="relative aspect-square overflow-hidden border-2 border-black">
                <img 
                  src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&h=800&q=85" 
                  alt="Industrial loft steel rafters by Metal & More Interiors" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="mt-3 bg-black text-[#F97316] font-mono text-[9px] py-1.5 px-3 uppercase text-center font-extrabold tracking-widest">
                UNIT ID: IND-L-09 // SECTOR_TOLICHOWKI
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-[#1c1c1c] border-b-4 border-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Info Side */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-[10px] text-[#F97316] font-bold tracking-widest">// ARCHITECTURAL_PHILOSOPHY</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold uppercase text-white leading-tight">
                WE DO NOT HIDE THE STRUCTURE. WE CELEBRATE IT.
              </h2>
              
              <div className="h-[2px] bg-[#F97316] w-24"></div>
              
              <p className="text-xs leading-relaxed text-zinc-400">
                At Metal & More Interiors, we build for people who respect structural integrity. Founded in Hyderabad, we reject synthetic finishes and wood substitutes. We deal strictly in raw elements: cold-rolled structural iron, structural mesh plates, copper conduits, and solid concrete poured in-situ.
              </p>
              <p className="text-xs leading-relaxed text-zinc-400">
                Our approach is deeply influenced by Neo-Brutalism: letting structural bolts remain visible, showcasing the seams where two metal profiles fuse, and letting the raw texture of sand and aggregate dictate the surfaces. We design lofts, micro-breweries, gyms, and modern industrial residences.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="border-l-4 border-[#F97316] pl-4 py-1">
                  <h4 className="text-xs font-bold uppercase text-white">VISIBLE WELD SEAMS</h4>
                  <p className="text-[10px] text-zinc-500 leading-normal mt-1">We grind welds smooth for tactile safety, but leave the heat colors intact as an indicator of hand craftsmanship.</p>
                </div>
                <div className="border-l-4 border-[#F97316] pl-4 py-1">
                  <h4 className="text-xs font-bold uppercase text-white">POLYURETHANE SEAL</h4>
                  <p className="text-[10px] text-zinc-500 leading-normal mt-1">Every raw metal sheet is treated chemically to prevent scaling rust, then sealed under matte industrial finishes.</p>
                </div>
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-5 border-4 border-black p-6 bg-[#282828] space-y-6 shadow-[6px_6px_0px_0px_#000]">
              <div className="flex items-center gap-2 text-[#F97316]">
                <Wrench size={16} />
                <h3 className="text-xs uppercase font-extrabold">FABRICATION_METRICS</h3>
              </div>
              <ul className="space-y-3 font-mono text-xs border-t border-zinc-700 pt-4">
                <li className="flex justify-between">
                  <span className="text-zinc-500">MIG Welding Standard:</span>
                  <span className="text-white">AWS D1.1 Compliant</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-500">Concrete Casting:</span>
                  <span className="text-white">Grade M30 & M45</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-500">Structural Anchors:</span>
                  <span className="text-white">Hilti Adhesive RE 500</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-500">Iron Surface Finish:</span>
                  <span className="text-white">Cold-Rolled Matte Clear</span>
                </li>
              </ul>
              <div className="bg-black/40 p-4 border border-zinc-700">
                <p className="text-[10px] text-zinc-500 font-mono">// WELDING_SUPERVISOR_NOTE</p>
                <p className="text-[11px] italic text-[#F97316] mt-1 font-mono">
                  "We believe that structural joints are the primary art form of a building."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Portfolio */}
      <section id="portfolio" className="py-24 bg-[#121212] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b-4 border-black">
            <div className="space-y-2">
              <p className="text-[10px] text-[#F97316] font-bold tracking-widest">// SPECIFIC_WORKS_PORTFOLIO</p>
              <h2 className="text-3xl lg:text-4xl font-black uppercase text-white">THE METALWORK SHOWCASE</h2>
            </div>
            <p className="text-xs font-mono text-[#F97316] mt-4 md:mt-0 bg-[#282828] px-3 py-1.5 border-2 border-black">
              INDEXED: STAIRCASE // CONCRETE // PARTITIONS // CONDUIT
            </p>
          </div>

          {/* Stark 4-column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, idx) => (
              <div key={idx} className="border-4 border-black bg-[#1c1c1c] flex flex-col justify-between shadow-[6px_6px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#f97316] transition-all duration-300">
                
                {/* Image Section */}
                <div className="relative aspect-[16/9] overflow-hidden border-b-4 border-black">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#F97316] text-black font-extrabold text-[9px] px-2.5 py-1 border border-black uppercase font-mono">
                    {item.code}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase text-[#F97316] font-extrabold tracking-wider font-mono">{item.category}</span>
                    <span className="text-[9px] text-zinc-500 font-mono">SPECS_OK</span>
                  </div>
                  <h3 className="text-lg font-black uppercase text-white">{item.title}</h3>
                  <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="bg-black/60 p-3 border border-zinc-800 text-[10px] font-mono text-[#F97316] tracking-wider uppercase">
                    {item.specs}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Design Process */}
      <section id="process" className="py-24 bg-[#1c1c1c] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-2">
            <p className="text-[10px] text-[#F97316] font-bold tracking-widest">// INDUSTRIAL_PIPELINE</p>
            <h2 className="text-3xl font-black uppercase text-white">THE FABRICATION PROTOCOL</h2>
            <p className="text-xs text-zinc-400">Our execution roadmap follows rigorous industrial standards. No shortcuts, strictly monitored.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="border-4 border-black bg-[#282828] p-8 space-y-4 relative shadow-[4px_4px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#F97316] transition-all">
                <div className="absolute top-4 right-4 text-3xl font-black font-mono text-[#FAF9F5]/10">
                  [{step.step}]
                </div>
                <span className="text-[9px] font-bold text-[#F97316] font-mono uppercase border border-[#F97316]/30 px-2 py-0.5 bg-black/40">
                  {step.phase}
                </span>
                <h3 className="text-sm font-black uppercase text-white tracking-wide pt-2">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#121212] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto mb-16">
            <p className="text-[10px] text-[#F97316] font-bold tracking-widest">// CLIENT_ATTESTATION</p>
            <h2 className="text-3xl font-black uppercase text-white">WELD_QUALIFICATION_REPORTS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "“The steel staircase they hung from our Gachibowli office slab is a masterpiece. Clean welds, absolute rigidity. Certified for safety and looks incredibly brutalist.”",
                author: "Anand M.",
                role: "Director, Hexa Tech Spaces",
                loc: "Gachibowli"
              },
              {
                quote: "“They cast our café main counter in raw concrete. Complete with aggregates and porous pores left visible. The dark orange clear coating gives it a perfect rusty look.”",
                author: "Kabir S.",
                role: "Founder, Vault Coffee House",
                loc: "Tolichowki"
              },
              {
                quote: "“Installed exposed copper conduit rigs and steel mesh sliding doors. The industrial aesthetic is exactly what we wanted for our strength gym.”",
                author: "Rohan & Yash",
                role: "Owners, Forge Fitness",
                loc: "Madhapur"
              }
            ].map((t, idx) => (
              <div key={idx} className="border-4 border-black p-8 bg-[#1c1c1c] space-y-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_#000] border-t-[8px] border-t-[#F97316]">
                <p className="text-xs text-zinc-300 font-mono leading-relaxed">
                  {t.quote}
                </p>
                <div className="border-t border-zinc-800 pt-4 space-y-1">
                  <h4 className="text-xs font-extrabold text-white uppercase font-mono">{t.author}</h4>
                  <p className="text-[10px] text-[#F97316] font-bold font-mono">{t.role}</p>
                  <p className="text-[9px] text-zinc-500 font-mono">SECTOR: {t.loc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#1c1c1c] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-2 mb-16">
            <p className="text-[10px] text-[#F97316] font-bold tracking-widest">// PARAMETRIC_INFO</p>
            <h2 className="text-3xl font-black uppercase text-white">FREQUENTLY_ASKED_QUESTIONS</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className="border-4 border-black bg-[#282828] p-4 shadow-[3px_3px_0px_0px_#000]">
                  <button
                    className="w-full flex justify-between items-center text-left py-2 focus:outline-none group"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                  >
                    <span className="text-xs sm:text-sm font-extrabold uppercase text-white group-hover:text-[#F97316] transition-colors font-mono">
                      // {faq.q}
                    </span>
                    <span className="text-[#F97316] font-black font-mono shrink-0 ml-4">
                      {isOpen ? '[-]' : '[+]'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-zinc-700 mt-4 pt-4">
                      <p className="text-xs text-zinc-300 leading-relaxed font-mono pl-1">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-[10px] text-[#F97316] font-bold tracking-widest">// STRIKE_CONNECTION</p>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-white leading-tight">
              COMMISSION A FABRICATION
            </h2>
            <p className="text-xs text-zinc-400 font-mono leading-relaxed">
              We operate a heavy duty metalsmith and concrete casting shop in Tolichowki. Submit structural specs for loading estimates and chemical test quotes.
            </p>

            <div className="space-y-4 pt-6 border-t-4 border-black">
              <div className="flex gap-4 items-center font-mono">
                <MapPin size={16} className="text-[#F97316] shrink-0" />
                <span className="text-xs text-zinc-400">Shed 12, Industrial Cluster, Tolichowki, Hyderabad</span>
              </div>
              <div className="flex gap-4 items-center font-mono">
                <Mail size={16} className="text-[#F97316] shrink-0" />
                <span className="text-xs text-zinc-400">fab@metalandmoreinteriors.in</span>
              </div>
              <div className="flex gap-4 items-center font-mono">
                <Phone size={16} className="text-[#F97316] shrink-0" />
                <span className="text-xs text-zinc-400">+91 99000 88220</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-[#1c1c1c] border-4 border-black p-8 lg:p-12 shadow-[8px_8px_0px_0px_#000]">
            
            {formStatus.submitted ? (
              <div className="h-full flex flex-col justify-center items-center text-center space-y-6 py-12 font-mono">
                <div className="w-16 h-16 bg-[#F97316] text-black font-black flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_#000]">
                  <Check size={28} />
                </div>
                <h3 className="text-lg font-black uppercase text-white">COMMISSION_ESTABLISHED</h3>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-xs font-mono">
                  FABRICATION TICKET STAGED. OUR WELDING SUPERVISOR WILL ENGAGE WITHIN 24 HOURS.
                </p>
                <button 
                  onClick={() => setFormStatus({ submitted: false, loading: false, error: null })}
                  className="text-xs font-black uppercase text-[#F97316] underline hover:text-white transition-colors"
                >
                  [CREATE_NEW_FABRICATION_TICKET]
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {formStatus.error && (
                  <div className="bg-red-950/80 border-2 border-red-500 text-red-400 text-xs px-4 py-3 rounded-xs font-bold font-mono">
                    STATUS_CRITICAL: {formStatus.error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] text-[#F97316] font-bold uppercase block font-mono">SENDER_NAME *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="KABIR SINGH" 
                      className="w-full bg-[#121212] border-2 border-black px-4 py-3 text-xs focus:outline-none focus:border-[#F97316] transition-colors text-white font-mono placeholder-zinc-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-[#F97316] font-bold uppercase block font-mono">SENDER_EMAIL *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="KABIR@VAULTCOFFEE.IN" 
                      className="w-full bg-[#121212] border-2 border-black px-4 py-3 text-xs focus:outline-none focus:border-[#F97316] transition-colors text-white font-mono placeholder-zinc-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] text-[#F97316] font-bold uppercase block font-mono">TELEPHONE_NODE</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 99000 00000" 
                      className="w-full bg-[#121212] border-2 border-black px-4 py-3 text-xs focus:outline-none focus:border-[#F97316] transition-colors text-white font-mono placeholder-zinc-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-[#F97316] font-bold uppercase block font-mono">FABRICATION_MATERIAL</label>
                    <select 
                      name="alloy"
                      value={formData.alloy}
                      onChange={handleInputChange}
                      className="w-full bg-[#121212] border-2 border-black px-4 py-3 text-xs focus:outline-none focus:border-[#F97316] transition-colors text-white font-mono"
                    >
                      <option value="Structural Carbon Steel">Structural Carbon Steel (A36)</option>
                      <option value="Acid Cast Concrete">Acid Cast Concrete (M45)</option>
                      <option value="Galvanized Mesh Iron">Galvanized Mesh Iron</option>
                      <option value="Exposed Copper Rigs">Exposed Copper & Brass</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-[#F97316] font-bold uppercase block font-mono">PROJECT_SPECIFICATIONS *</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="DESCRIBE DIMENSIONS, WELD ANCHOR POINTS, AND EXPECTED DEAD WEIGHT LOADING..." 
                    className="w-full bg-[#121212] border-2 border-black px-4 py-3 text-xs focus:outline-none focus:border-[#F97316] transition-colors text-white font-mono placeholder-zinc-700 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus.loading}
                  className="w-full bg-[#F97316] text-black font-black py-4 text-xs uppercase border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none disabled:opacity-50 transition-all"
                >
                  {formStatus.loading ? 'TRANSMITTING_COMMISSION_PACKET...' : 'SUBMIT_FABRICATION_TICKET'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121212] text-zinc-400 py-16 px-4 md:px-8 border-t-4 border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-zinc-800 pb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#F97316] text-black font-extrabold flex items-center justify-center border border-black shadow-[1px_1px_0px_0px_#000]">
                M&M
              </div>
              <span className="font-extrabold text-sm uppercase tracking-tighter text-white">METAL & MORE</span>
            </div>
            <p className="text-xs leading-relaxed text-zinc-500">
              Neo-Brutalist architectural steel framing and concrete cast installations in Hyderabad.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] text-[#F97316] font-bold uppercase mb-4">// NAVIGATION</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">/ABOUT_US</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">/WORKS_INDEX</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">/PROCESS_PROTO</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">/FAQ_DAT</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] text-[#F97316] font-bold uppercase mb-4">// WELD_CLASSES</h4>
            <ul className="space-y-2.5 text-xs text-zinc-500 font-mono">
              <li>MIG Welding AWS D1.1</li>
              <li>Slab chemical anchor</li>
              <li>Acid etching concrete</li>
              <li>Zinc oxide priming</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] text-[#F97316] font-bold uppercase mb-4">// PROTOCOL</h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              © 2026 Metal & More Interiors. Raw layout standards apply. Site preview created for client feedback.
            </p>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-zinc-600 tracking-wider">
          <p>Tolichowki Industrial Cluster, Hyderabad</p>
          <p className="mt-2 sm:mt-0 font-mono">// PREVIEW // NOT A LIVE PRODUCTION INSTANCE</p>
        </div>
      </footer>

    </div>
  );
}

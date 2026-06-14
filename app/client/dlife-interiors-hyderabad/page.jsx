'use client';

import React, { useState } from 'react';
import { 
  Grid, 
  Layers, 
  Wrench, 
  Flame, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronDown, 
  Check, 
  ArrowUpRight,
  Maximize2,
  Sliders,
  DollarSign,
  Shield,
  Award,
  BookOpen
} from 'lucide-react';

export default function DlifeInteriorsPage() {
  // Contact Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    possessionDate: '',
    floorPlan: '2 BHK',
    budgetRange: '₹5L - ₹8L',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Interactive Tab Section for Layout Options (Kitchens / Living Rooms)
  const [activeKitchenTab, setActiveKitchenTab] = useState('l-shape');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // Kitchen layout options data
  const kitchenLayouts = {
    'l-shape': {
      title: 'L-Shaped Ergonomic Layout',
      subtitle: 'Most popular layout for apartments in Gachibowli & Madhapur',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      description: 'Optimized for corner efficiency. Integrates the golden triangle (sink, stove, refrigerator) perfectly within adjacent walls, leaving ample workspace in the center.',
      specs: {
        'Min Area Required': '80 Sq. Ft.',
        'Primary Materials': 'Marine Birch Plywood (BWP)',
        'Hardware Class': 'Hettich Sensys Soft-Close',
        'Average Price': '₹3,40,000 onwards',
        'Storage Capacity': '320 Liters'
      },
      tags: ['Space Saver', 'Golden Triangle Compliant', 'Anti-Fingerprint Acrylic']
    },
    'u-shape': {
      title: 'U-Shaped Max Storage Layout',
      subtitle: 'Perfect for large luxury villas and independent houses',
      image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80',
      description: 'Provides maximum counter space and three walls of cabinetry. Recommended for families who cook together and require dedicated spaces for multiple heavy appliances.',
      specs: {
        'Min Area Required': '120 Sq. Ft.',
        'Primary Materials': 'BWP Plywood + Glass Shutters',
        'Hardware Class': 'Blum Legrabox Drawer Systems',
        'Average Price': '₹4,80,000 onwards',
        'Storage Capacity': '540 Liters'
      },
      tags: ['Double Pantry Space', 'Integrated Oven Slot', 'Satin Matt Finish']
    },
    'island': {
      title: 'Island Contemporary Layout',
      subtitle: 'Premium layout combining culinary prep and social entertainment',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
      description: 'Features an independent central counter that doubles as a dining table or cocktail bar. High aesthetic value, bringing standard modular design to conversational luxury.',
      specs: {
        'Min Area Required': '150 Sq. Ft.',
        'Primary Materials': 'Boiled Water Resistant (BWR) Ply',
        'Hardware Class': 'Grass Dynapro Slides',
        'Average Price': '₹6,20,000 onwards',
        'Storage Capacity': '480 Liters'
      },
      tags: ['Breakfast Counter', 'Built-in Hob Ready', 'Quartz Waterfall Countertop']
    }
  };

  // FAQ Data
  const faqData = [
    {
      question: 'What is the DLife Bento Grid design philosophy?',
      answer: 'We organize interior spaces into high-density, structured zones, similar to a Bento Box or Bento Grid layout. This ensures every square inch of your home is allocated to a specific function (modular kitchen, optimized wardrobes, concealed utility units) without visual clutter, maximizing storage density.'
    },
    {
      question: 'What materials do you use for modular kitchens?',
      answer: 'We use 100% BWP (Boiled Water Proof) Marine Plywood for all wet areas (sink and hob cabinets) and BWR (Boiled Water Resistant) Plywood for dry cabinets. Finish options include German Anti-Fingerprint Acrylic, Scratch-Resistant Laminates, and Lacquered PU Finish.'
    },
    {
      question: 'Are your factory units based locally?',
      answer: 'DLife operates state-of-the-art, fully automated German machinery manufacturing plants. Components are precision-machined, edge-banded, and flat-packed in-house, then shipped directly to your Hyderabad home for assembly. This guarantees zero on-site mess and flawless fits.'
    },
    {
      question: 'Do you offer customization in wardrobe sizing?',
      answer: 'Yes. Unlike standard prefabricated modular units, our wardrobes are customized to the exact height and width of your walls, covering corner columns and reaching up to the ceiling without leaving dust-collecting top gaps.'
    },
    {
      question: 'What warranties do you provide on hardware and cabinets?',
      answer: 'We provide a comprehensive 10-year warranty on all structural cabinetry and cabinets. Additionally, all Hettich and Blum soft-close hinges and drawer slides carry their respective manufacturer-backed lifetime performance warranties.'
    }
  ];

  // Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9]{10,14}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errors.phone = 'Invalid phone number';
    }
    if (!formData.possessionDate) errors.possessionDate = 'Possession date is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      setFormSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#ECECEC] selection:bg-[#FF5A1F] selection:text-black font-sans">
      
      {/* Header */}
      <header className="border-b border-[#1E1E1E] bg-[#0E0E0E]/95 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF5A1F] flex items-center justify-center font-extrabold text-black tracking-tighter text-xl rounded-sm">
              DL
            </div>
            <div>
              <span className="font-bold text-lg tracking-wider text-white block">DLIFE INTERIORS</span>
              <span className="text-[9px] uppercase tracking-widest text-[#FF5A1F] block -mt-1">Hyderabad Division</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-[#A0A0A0]">
            <a href="#about" className="hover:text-[#FF5A1F] transition-colors">Our Factory</a>
            <a href="#portfolio" className="hover:text-[#FF5A1F] transition-colors">Portfolio</a>
            <a href="#layouts" className="hover:text-[#FF5A1F] transition-colors">Kitchen Layouts</a>
            <a href="#process" className="hover:text-[#FF5A1F] transition-colors">Methodology</a>
            <a href="#faq" className="hover:text-[#FF5A1F] transition-colors">FAQ</a>
          </nav>

          <div>
            <a 
              href="#contact" 
              className="bg-transparent border border-[#FF5A1F] text-[#FF5A1F] px-5 py-2 text-xs uppercase tracking-wider font-semibold hover:bg-[#FF5A1F] hover:text-black transition-all rounded-sm"
            >
              Get Estimation
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-12">
        
        {/* HERO SECTION - Bento Grid Layout */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Core Hero Statement (Large) */}
          <div className="md:col-span-8 bg-[#121212] border border-[#1E1E1E] p-8 md:p-12 flex flex-col justify-between rounded-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5A1F]/5 blur-3xl pointer-events-none"></div>
            <div>
              <div className="inline-flex items-center gap-2 border border-[#FF5A1F]/30 bg-[#FF5A1F]/10 px-3 py-1 text-xs uppercase tracking-wider text-[#FF5A1F] rounded-full mb-6 font-semibold">
                <Flame className="w-3.5 h-3.5 animate-pulse" />
                <span>Contemporary Bento Layouts</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-white mb-6">
                Modular Homes <br />
                Engineered for <br />
                <span className="text-[#FF5A1F]">High Storage Density</span>.
              </h1>
              
              <p className="text-base md:text-lg text-[#A0A0A0] max-w-xl font-light leading-relaxed">
                Hyderabad\'s contemporary interior experts. We blend structural bento grids with German carpentry to design custom modular kitchens, wardrobe cabinets, and integrated living units.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a 
                href="#contact" 
                className="bg-[#FF5A1F] text-black px-6 py-3.5 text-xs uppercase tracking-wider font-bold hover:bg-white transition-all rounded-sm flex items-center gap-2"
              >
                <span>Book Estimated Design Session</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="#layouts" 
                className="bg-[#1C1C1C] border border-[#333333] text-white px-6 py-3.5 text-xs uppercase tracking-wider font-bold hover:bg-[#252525] transition-all rounded-sm"
              >
                Explore Configurations
              </a>
            </div>
          </div>

          {/* Bento Card 2: Micro Metric (1x) */}
          <div className="md:col-span-4 bg-[#121212] border border-[#1E1E1E] p-8 flex flex-col justify-between rounded-lg">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-[#1C1C1C] flex items-center justify-center border border-[#333333] rounded-sm">
                <Shield className="w-5 h-5 text-[#FF5A1F]" />
              </div>
              <span className="text-[10px] bg-[#222222] border border-[#333333] px-2 py-0.5 uppercase tracking-widest text-[#A0A0A0] rounded-sm">Protection</span>
            </div>
            <div>
              <span className="block text-4xl font-extrabold text-white">10 Years</span>
              <span className="block text-xs uppercase tracking-wider text-[#FF5A1F] mt-1 font-semibold">Cabinetry Warranty</span>
              <p className="text-xs text-[#A0A0A0] mt-3 leading-relaxed font-light">
                Every customized panel and box layout features anti-termite marine plywood carrying a flat 10-year warranty.
              </p>
            </div>
          </div>

          {/* Bento Card 3: Visual Image Frame (Small) */}
          <div className="md:col-span-4 aspect-square bg-[#121212] border border-[#1E1E1E] rounded-lg overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80" 
              alt="Kitchen Detail" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#FF5A1F] block">Gachibowli Showroom</span>
                <span className="text-sm font-bold text-white block">Interactive Kitchen Display</span>
              </div>
              <Maximize2 className="w-4 h-4 text-white opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Bento Card 4: Factory details (Double Width) */}
          <div className="md:col-span-8 bg-[#121212] border border-[#1E1E1E] p-8 flex flex-col justify-between rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              <div className="border-r border-[#222222] pr-4">
                <span className="block text-3xl font-extrabold text-white">100%</span>
                <span className="block text-xs text-[#FF5A1F] uppercase font-bold mt-1">Machine Finish</span>
                <p className="text-[11px] text-[#A0A0A0] mt-2 leading-relaxed">
                  Manufactured in automated German facilities. Zero hand-sawing on site.
                </p>
              </div>

              <div className="border-r border-[#222222] px-2 sm:px-4">
                <span className="block text-3xl font-extrabold text-white">40 Days</span>
                <span className="block text-xs text-[#FF5A1F] uppercase font-bold mt-1">Guaranteed Delivery</span>
                <p className="text-[11px] text-[#A0A0A0] mt-2 leading-relaxed">
                  From final layout sign-off to handover. Penalties apply for delays.
                </p>
              </div>

              <div className="pl-0 sm:pl-4">
                <span className="block text-3xl font-extrabold text-white">Hettich</span>
                <span className="block text-xs text-[#FF5A1F] uppercase font-bold mt-1">Standard Hardware</span>
                <p className="text-[11px] text-[#A0A0A0] mt-2 leading-relaxed">
                  Lifetime warranty German hardware hinges and soft-close sliders.
                </p>
              </div>

            </div>

            <div className="border-t border-[#1E1E1E] pt-6 mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <span className="text-xs text-[#A0A0A0] font-light">
                Currently taking orders for layouts in Gachibowli, Madhapur, Jubilee Hills, Narsingi, and Tellapur.
              </span>
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <span>See factory metrics</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-[#FF5A1F]" />
              </div>
            </div>
          </div>

        </section>

        {/* SECTION: About Us (Factory Setup & Heritage) */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Title Card */}
          <div className="md:col-span-5 bg-[#121212] border border-[#1E1E1E] p-8 md:p-12 rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#FF5A1F] font-semibold mb-4">
                <Award className="w-4 h-4" />
                <span>Modern Heritage</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6">
                German Machinery. <br />
                Direct-to-Home.
              </h2>
              <p className="text-sm text-[#A0A0A0] font-light leading-relaxed mb-6">
                DLife is South India\'s largest contemporary modular interior designer. We eliminate intermediate traders and local carpenters to ship custom-made modular kitchens, wardrobes, and television consoles directly from our highly automated factories.
              </p>
            </div>
            
            <div className="border-t border-[#1E1E1E] pt-6 flex items-center justify-between text-xs text-[#A0A0A0]">
              <span>ISO 9001:2015 Certified Manufacturing</span>
              <span className="font-bold text-[#FF5A1F]">10,000+ Homes Completed</span>
            </div>
          </div>

          {/* Interactive Factory Details Grid */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="bg-[#121212] border border-[#1E1E1E] p-6 rounded-lg flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Plywood Integrity</h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  We use Boiled Water Proof (BWP) marine plywood with core calibration. This prevents warping, delamination, and termite infestations in humid conditions.
                </p>
              </div>
              <span className="text-[10px] text-[#FF5A1F] uppercase font-bold tracking-widest block mt-4">Calibrated Core</span>
            </div>

            <div className="bg-[#121212] border border-[#1E1E1E] p-6 rounded-lg flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Zero Site Mess</h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  Because all modular cabinetry is machined, pre-drilled, and finished at our factories, the only work performed at your house is quick, clean lock-and-key installation.
                </p>
              </div>
              <span className="text-[10px] text-[#FF5A1F] uppercase font-bold tracking-widest block mt-4">Pre-engineered Pack</span>
            </div>

            <div className="bg-[#121212] border border-[#1E1E1E] p-6 rounded-lg flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Transparent Pricing</h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  Our estimation engine calculates layout pricing down to the last millimeter of wood and square inch of laminates. No hidden fees or unexpected changes during execution.
                </p>
              </div>
              <span className="text-[10px] text-[#FF5A1F] uppercase font-bold tracking-widest block mt-4">Fixed Cost Guarantee</span>
            </div>

            <div className="bg-[#121212] border border-[#1E1E1E] p-6 rounded-lg flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Design Continuity</h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  We assign a dedicated interior architect to design your layout. They manage the initial design renders, materials select sheets, and coordinate with the factory.
                </p>
              </div>
              <span className="text-[10px] text-[#FF5A1F] uppercase font-bold tracking-widest block mt-4">One Architect Point</span>
            </div>

          </div>

        </section>

        {/* SECTION: Services & Portfolio */}
        <section id="portfolio" className="space-y-6">
          <div className="border-b border-[#1E1E1E] pb-4 flex justify-between items-end">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#FF5A1F] font-semibold block mb-1">Services Portfolio</span>
              <h2 className="text-3xl font-extrabold text-white">Functional Modular Offerings</h2>
            </div>
            <span className="text-xs text-[#A0A0A0]">Charcoal Slate & Burnt Orange Accent Series</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Modular Kitchen */}
            <div className="bg-[#121212] border border-[#1E1E1E] rounded-lg overflow-hidden group flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=400&q=80" 
                    alt="Contemporary Kitchen" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#FF5A1F] text-black text-[9px] uppercase font-bold px-2 py-0.5 rounded-sm">
                    Kitchens
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF5A1F] transition-colors">Modular Kitchen Systems</h3>
                  <p className="text-xs text-[#A0A0A0] leading-relaxed">
                    Water-proof marine plywood carcasses featuring Hettich soft-close sliders, pull-out wire baskets, lift-up wall cabinets, and quartz stone countertops.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 border-t border-[#1E1E1E] pt-4 mt-2">
                <div className="flex justify-between items-center text-[10px] text-[#FF5A1F] font-bold">
                  <span>WARRANTY: 10 YEARS</span>
                  <span>₹2.8L - ₹7.5L</span>
                </div>
              </div>
            </div>

            {/* Wardrobes */}
            <div className="bg-[#121212] border border-[#1E1E1E] rounded-lg overflow-hidden group flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&w=400&q=80" 
                    alt="Custom Wardrobe" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#FF5A1F] text-black text-[9px] uppercase font-bold px-2 py-0.5 rounded-sm">
                    Storage
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF5A1F] transition-colors">Customized Wardrobes</h3>
                  <p className="text-xs text-[#A0A0A0] leading-relaxed">
                    Sliding or swing doors tailored to the ceiling. Made from calibrated wood panels with integrated chest drawers, dressing mirrors, and sensor lighting.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 border-t border-[#1E1E1E] pt-4 mt-2">
                <div className="flex justify-between items-center text-[10px] text-[#FF5A1F] font-bold">
                  <span>WARRANTY: 10 YEARS</span>
                  <span>₹1.9L - ₹4.5L</span>
                </div>
              </div>
            </div>

            {/* Living Room */}
            <div className="bg-[#121212] border border-[#1E1E1E] rounded-lg overflow-hidden group flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80" 
                    alt="Modular TV Console" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#FF5A1F] text-black text-[9px] uppercase font-bold px-2 py-0.5 rounded-sm">
                    Living
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF5A1F] transition-colors">Integrated TV Consoles</h3>
                  <p className="text-xs text-[#A0A0A0] leading-relaxed">
                    Sleek charcoal wood panels featuring burnt orange accents. Floating drawers, concealed routing for display cables, and display lighting shelves.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 border-t border-[#1E1E1E] pt-4 mt-2">
                <div className="flex justify-between items-center text-[10px] text-[#FF5A1F] font-bold">
                  <span>WARRANTY: 5 YEARS</span>
                  <span>₹85K - ₹2.2L</span>
                </div>
              </div>
            </div>

            {/* Contemporary Lighting */}
            <div className="bg-[#121212] border border-[#1E1E1E] rounded-lg overflow-hidden group flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=400&q=80" 
                    alt="Lighting fixtures" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#FF5A1F] text-black text-[9px] uppercase font-bold px-2 py-0.5 rounded-sm">
                    Lighting
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF5A1F] transition-colors">Concealed Lighting Plans</h3>
                  <p className="text-xs text-[#A0A0A0] leading-relaxed">
                    Integrated magnetic tracks, warm cove lightings, and modern spotlight fixtures to separate work areas from dining and lounge settings.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 border-t border-[#1E1E1E] pt-4 mt-2">
                <div className="flex justify-between items-center text-[10px] text-[#FF5A1F] font-bold">
                  <span>WARRANTY: 2 YEARS</span>
                  <span>₹40K - ₹1.5L</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: Interactive Layout Configurator */}
        <section id="layouts" className="bg-[#121212] border border-[#1E1E1E] p-8 md:p-12 rounded-lg space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#1E1E1E] pb-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#FF5A1F] font-semibold block mb-1">Interactive Configurator</span>
              <h2 className="text-3xl font-extrabold text-white">Compare Kitchen Layout Styles</h2>
            </div>
            
            {/* Configurator Navigation Tabs */}
            <div className="flex flex-wrap gap-2">
              {Object.keys(kitchenLayouts).map((layoutKey) => (
                <button
                  key={layoutKey}
                  onClick={() => setActiveKitchenTab(layoutKey)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm border transition-all ${
                    activeKitchenTab === layoutKey 
                      ? 'bg-[#FF5A1F] text-black border-[#FF5A1F]' 
                      : 'bg-transparent border-[#333333] text-[#A0A0A0] hover:text-white'
                  }`}
                >
                  {layoutKey.toUpperCase().replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Configurator Content Details (Bento Sub-Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Details Panel */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[10px] text-[#FF5A1F] uppercase font-bold tracking-widest">
                  {kitchenLayouts[activeKitchenTab].subtitle}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {kitchenLayouts[activeKitchenTab].title}
                </h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed mt-4 font-light">
                  {kitchenLayouts[activeKitchenTab].description}
                </p>
              </div>

              {/* Specs Bento Grid Table */}
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(kitchenLayouts[activeKitchenTab].specs).map(([specKey, specVal]) => (
                  <div key={specKey} className="bg-[#1C1C1C] border border-[#222222] p-4 rounded-sm">
                    <span className="block text-[9px] uppercase tracking-wider text-[#A0A0A0]">{specKey}</span>
                    <span className="block text-sm font-bold text-white mt-1">{specVal}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {kitchenLayouts[activeKitchenTab].tags.map((tag) => (
                  <span key={tag} className="text-[10px] bg-[#1E1E1E] border border-[#333333] text-white px-2.5 py-1 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Image Panel */}
            <div className="lg:col-span-6 relative border border-[#333333] p-2 rounded-lg bg-[#181818]">
              <div className="aspect-[4/3] overflow-hidden rounded-md">
                <img 
                  src={kitchenLayouts[activeKitchenTab].image} 
                  alt={kitchenLayouts[activeKitchenTab].title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: Design Process (Timeline Bento Grid) */}
        <section id="process" className="space-y-6">
          <div className="border-b border-[#1E1E1E] pb-4">
            <span className="text-xs uppercase tracking-wider text-[#FF5A1F] font-semibold block mb-1">Methodology</span>
            <h2 className="text-3xl font-extrabold text-white">Chronological Installation Path</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Phase 1 */}
            <div className="bg-[#121212] border border-[#1E1E1E] p-6 rounded-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF5A1F]/5 pointer-events-none rounded-bl-full"></div>
              
              <div className="flex justify-between items-center border-b border-[#1E1E1E] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#FF5A1F] text-black text-xs font-bold flex items-center justify-center rounded-sm">1</span>
                  <span className="text-sm font-bold text-white">Consult & Scan</span>
                </div>
                <span className="text-[10px] text-[#A0A0A0] bg-[#1E1E1E] px-2 py-0.5 uppercase tracking-wide">Days 1 - 7</span>
              </div>

              <p className="text-xs text-[#A0A0A0] leading-relaxed mb-6 font-light">
                Our interior designer reviews your floor plan, performs a detailed laser scan of wall dimensions, drafts 2D structural partitions, and sets up a customized estimate.
              </p>

              <div className="bg-[#1C1C1C] p-3 rounded-sm border border-[#222222]">
                <span className="block text-[9px] uppercase tracking-wider text-[#FF5A1F] font-bold">DELIVERABLE</span>
                <span className="block text-xs text-white mt-1">Laser scan layout & line items pricing sheet</span>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-[#121212] border border-[#1E1E1E] p-6 rounded-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF5A1F]/5 pointer-events-none rounded-bl-full"></div>
              
              <div className="flex justify-between items-center border-b border-[#1E1E1E] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#FF5A1F] text-black text-xs font-bold flex items-center justify-center rounded-sm">2</span>
                  <span className="text-sm font-bold text-white">Design & Order</span>
                </div>
                <span className="text-[10px] text-[#A0A0A0] bg-[#1E1E1E] px-2 py-0.5 uppercase tracking-wide">Days 8 - 20</span>
              </div>

              <p className="text-xs text-[#A0A0A0] leading-relaxed mb-6 font-light">
                We design 3D visualization renders of modular components. Upon material approval, files are generated electronically and transmitted to our automated manufacturing facility.
              </p>

              <div className="bg-[#1C1C1C] p-3 rounded-sm border border-[#222222]">
                <span className="block text-[9px] uppercase tracking-wider text-[#FF5A1F] font-bold">DELIVERABLE</span>
                <span className="block text-xs text-white mt-1">3D Renders & Factory production blueprint files</span>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-[#121212] border border-[#1E1E1E] p-6 rounded-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF5A1F]/5 pointer-events-none rounded-bl-full"></div>
              
              <div className="flex justify-between items-center border-b border-[#1E1E1E] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#FF5A1F] text-black text-xs font-bold flex items-center justify-center rounded-sm">3</span>
                  <span className="text-sm font-bold text-white">Manufacture & Fit</span>
                </div>
                <span className="text-[10px] text-[#A0A0A0] bg-[#1E1E1E] px-2 py-0.5 uppercase tracking-wide">Days 21 - 40</span>
              </div>

              <p className="text-xs text-[#A0A0A0] leading-relaxed mb-6 font-light">
                Flat-packed boxes arrive at your site. Professional installers assemble the cabinetry carcasses, join modular dividers, align the shutters, and mount final accessories.
              </p>

              <div className="bg-[#1C1C1C] p-3 rounded-sm border border-[#222222]">
                <span className="block text-[9px] uppercase tracking-wider text-[#FF5A1F] font-bold">DELIVERABLE</span>
                <span className="block text-xs text-white mt-1">150-Point audit signoff & 10-year warranty document</span>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: Testimonials Bento Grid */}
        <section className="space-y-6">
          <div className="border-b border-[#1E1E1E] pb-4">
            <span className="text-xs uppercase tracking-wider text-[#FF5A1F] font-semibold block mb-1">Attestation</span>
            <h2 className="text-3xl font-extrabold text-white">Verified Client Accounts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Testimonial 1 */}
            <div className="bg-[#121212] border border-[#1E1E1E] p-6 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#FF5A1F] mb-4 text-xs font-bold">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  <span className="text-white ml-2">5.0 Rating</span>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed mb-6 italic">
                  “The Bento Grid philosophy worked wonders for our 3BHK at Narsingi. The kitchen storage space increased by almost 35% compared to our previous home. DLife delivered precisely on day 38.”
                </p>
              </div>
              <div className="border-t border-[#1E1E1E] pt-4 flex justify-between items-center">
                <div>
                  <span className="block text-xs font-bold text-white">Sandeep & Neha</span>
                  <span className="block text-[10px] text-[#A0A0A0]">Narsingi Apartment Owner</span>
                </div>
                <span className="text-[10px] bg-[#1E1E1E] border border-[#333333] px-2 py-0.5 text-[#FF5A1F] rounded-sm font-semibold">
                  3 BHK Kitchen & Storage
                </span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#121212] border border-[#1E1E1E] p-6 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#FF5A1F] mb-4 text-xs font-bold">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  <span className="text-white ml-2">5.0 Rating</span>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed mb-6 italic">
                  “Extremely professional modular fittings. No carpenters sawing wood inside our house. The Hettich sliding drawer systems in the wardrobes and acrylic finish on the kitchen cabinetry are incredibly slick.”
                </p>
              </div>
              <div className="border-t border-[#1E1E1E] pt-4 flex justify-between items-center">
                <div>
                  <span className="block text-xs font-bold text-white">Kiran Kumar</span>
                  <span className="block text-[10px] text-[#A0A0A0]">Tellapur Villa Owner</span>
                </div>
                <span className="text-[10px] bg-[#1E1E1E] border border-[#333333] px-2 py-0.5 text-[#FF5A1F] rounded-sm font-semibold">
                  Full Villa Modular Package
                </span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#121212] border border-[#1E1E1E] p-6 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#FF5A1F] mb-4 text-xs font-bold">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  <span className="text-white ml-2">5.0 Rating</span>
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed mb-6 italic">
                  “Transparent estimation was the best part. They didn\'t add single rupee extra post signing the blueprint. The dedicated architect managed the factory alignment beautifully. Highly recommended!”
                </p>
              </div>
              <div className="border-t border-[#1E1E1E] pt-4 flex justify-between items-center">
                <div>
                  <span className="block text-xs font-bold text-white">Shruti Rao</span>
                  <span className="block text-[10px] text-[#A0A0A0]">Madhapur Home Owner</span>
                </div>
                <span className="text-[10px] bg-[#1E1E1E] border border-[#333333] px-2 py-0.5 text-[#FF5A1F] rounded-sm font-semibold">
                  Kitchen & Wardrobe Renovation
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: FAQ Accordion Grid */}
        <section id="faq" className="space-y-6">
          <div className="border-b border-[#1E1E1E] pb-4">
            <span className="text-xs uppercase tracking-wider text-[#FF5A1F] font-semibold block mb-1">Inquiries</span>
            <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* Accordion List */}
            <div className="space-y-4 md:col-span-7">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-[#1E1E1E] bg-[#121212] rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-5 flex justify-between items-center hover:bg-[#1E1E1E]/50 transition-colors"
                  >
                    <span className="text-sm font-bold text-white pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-[#FF5A1F] transform transition-transform duration-300 flex-shrink-0 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openFaq === index ? 'max-h-[500px] border-t border-[#1E1E1E]' : 'max-h-0 pointer-events-none'
                    } overflow-hidden`}
                  >
                    <div className="p-5 text-xs text-[#A0A0A0] leading-relaxed bg-[#0E0E0E]/40">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Visual Support Panel */}
            <div className="bg-[#121212] border border-[#1E1E1E] p-6 rounded-lg md:col-span-5 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="text-[10px] text-[#FF5A1F] uppercase font-bold tracking-widest">Support Atelier</span>
                <h3 className="text-xl font-bold text-white">Need Live Technical Clarification?</h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed font-light">
                  Our technical design architect is available on WhatsApp or phone for immediate consultations. We can discuss core materials, check current machinery queues, and outline hardware features directly.
                </p>
              </div>

              <div className="border-t border-[#1E1E1E] pt-6 mt-6 space-y-3">
                <div className="flex items-center gap-3 text-xs">
                  <Clock className="w-4 h-4 text-[#FF5A1F]" />
                  <span className="text-[#A0A0A0]">Showroom timing: 10:00 AM - 08:30 PM (Weekly Off: Tuesday)</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <Phone className="w-4 h-4 text-[#FF5A1F]" />
                  <span className="text-white font-bold">+91 40 4880 9999</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: Contact Form */}
        <section id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Info Card */}
          <div className="lg:col-span-5 bg-[#121212] border border-[#1E1E1E] p-8 rounded-lg flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#FF5A1F] font-semibold block mb-1">Consultation Request</span>
              <h2 className="text-3xl font-extrabold text-white mb-4">Request Precise Layout Estimate</h2>
              <p className="text-xs text-[#A0A0A0] leading-relaxed font-light mb-8">
                Share your property configuration details and handover timeline. Our modular interior architect will generate a 3D planning design layout options sheet for you free of charge.
              </p>
            </div>

            <div className="space-y-4 border-t border-[#1E1E1E] pt-6">
              <div className="flex items-center gap-3 text-xs">
                <MapPin className="w-4 h-4 text-[#FF5A1F]" />
                <span className="text-[#A0A0A0]">Road No 12, Gachibowli, Opposite botanical gardens, Hyderabad</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <Mail className="w-4 h-4 text-[#FF5A1F]" />
                <span className="text-white font-bold">hyderabad@dlifeinteriors.com</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 bg-[#121212] border border-[#1E1E1E] p-8 rounded-lg">
            
            {formSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-[#FF5A1F]/20 border border-[#FF5A1F] flex items-center justify-center rounded-sm mb-6">
                  <Check className="w-6 h-6 text-[#FF5A1F]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Estimate Process Triggered</h3>
                <p className="text-xs text-[#A0A0A0] max-w-md leading-relaxed mb-6">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. We have registered your modular design request for the <strong className="text-white">{formData.floorPlan}</strong> configuration. Our Hyderabad showroom architect will contact you at <strong className="text-white">{formData.phone}</strong> before tomorrow evening.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ fullName: '', email: '', phone: '', possessionDate: '', floorPlan: '2 BHK', budgetRange: '₹5L - ₹8L', notes: '' });
                  }}
                  className="bg-[#1C1C1C] border border-[#333333] text-white px-5 py-2.5 text-xs uppercase tracking-wider font-bold hover:bg-[#252525] rounded-sm transition-all"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#A0A0A0] font-bold mb-1.5">
                      Full Name
                    </label>
                    <input 
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. sandeep reddy"
                      className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white px-4 py-2.5 text-xs focus:outline-none focus:border-[#FF5A1F] rounded-sm transition-all placeholder-[#555]"
                    />
                    {formErrors.fullName && (
                      <p className="text-red-500 text-[10px] mt-1 font-semibold">{formErrors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#A0A0A0] font-bold mb-1.5">
                      Phone Number
                    </label>
                    <input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9848012345"
                      className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white px-4 py-2.5 text-xs focus:outline-none focus:border-[#FF5A1F] rounded-sm transition-all placeholder-[#555]"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-[10px] mt-1 font-semibold">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#A0A0A0] font-bold mb-1.5">
                      Email Address
                    </label>
                    <input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sandeep@domain.com"
                      className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white px-4 py-2.5 text-xs focus:outline-none focus:border-[#FF5A1F] rounded-sm transition-all placeholder-[#555]"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-[10px] mt-1 font-semibold">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#A0A0A0] font-bold mb-1.5">
                      Possession Date
                    </label>
                    <input 
                      type="date"
                      value={formData.possessionDate}
                      onChange={(e) => setFormData({ ...formData, possessionDate: e.target.value })}
                      className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white px-4 py-2.5 text-xs focus:outline-none focus:border-[#FF5A1F] rounded-sm transition-all"
                    />
                    {formErrors.possessionDate && (
                      <p className="text-red-500 text-[10px] mt-1 font-semibold">{formErrors.possessionDate}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#A0A0A0] font-bold mb-1.5">
                      Floor Configuration
                    </label>
                    <select
                      value={formData.floorPlan}
                      onChange={(e) => setFormData({ ...formData, floorPlan: e.target.value })}
                      className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white px-4 py-2.5 text-xs focus:outline-none focus:border-[#FF5A1F] rounded-sm transition-all"
                    >
                      <option value="2 BHK">2 BHK Apartment</option>
                      <option value="3 BHK">3 BHK Apartment</option>
                      <option value="4 BHK">4 BHK Apartment / Penthouse</option>
                      <option value="Luxury Villa">Luxury Villa Suite</option>
                      <option value="Independent House">Independent House</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#A0A0A0] font-bold mb-1.5">
                      Budget Bracket
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white px-4 py-2.5 text-xs focus:outline-none focus:border-[#FF5A1F] rounded-sm transition-all"
                    >
                      <option value="₹3L - ₹5L">₹3.0 Lakhs - ₹5.0 Lakhs</option>
                      <option value="₹5L - ₹8L">₹5.0 Lakhs - ₹8.0 Lakhs</option>
                      <option value="₹8L - ₹12L">₹8.0 Lakhs - ₹12.0 Lakhs</option>
                      <option value="₹12L+">₹12.0 Lakhs + (Premium Luxury)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#A0A0A0] font-bold mb-1.5">
                    Layout Customizations / Kitchen Options
                  </label>
                  <textarea 
                    rows="3"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Describe specific details (e.g. U-shape kitchen layout, floor-to-ceiling glass wardrobes...)"
                    className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white px-4 py-2.5 text-xs focus:outline-none focus:border-[#FF5A1F] rounded-sm transition-all placeholder-[#555] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF5A1F] text-black py-3 text-xs uppercase tracking-wider font-bold hover:bg-white transition-all rounded-sm"
                >
                  Submit Modular Estimate Application
                </button>
              </form>
            )}

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#1E1E1E] bg-[#0E0E0E] py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A0A0A0]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF5A1F] flex items-center justify-center font-extrabold text-black text-xs rounded-sm">
              DL
            </div>
            <span className="font-bold text-white">DLIFE INTERIORS HYDERABAD</span>
          </div>

          <div className="text-center md:text-right font-light">
            <p>© 2026 DLife Interiors. All rights reserved.</p>
            <p className="mt-0.5">South India\'s Largest Modular Interior Brand. Precision Manufactured using German machinery.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

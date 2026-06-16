'use client';

import React, { useState, useEffect } from 'react';
import { 
  Sprout, 
  Leaf, 
  Sun, 
  Wind, 
  Sparkles, 
  ChevronDown, 
  Check, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  Sliders, 
  Shield, 
  Award,
  ArrowRight,
  Droplets,
  Heart
} from 'lucide-react';

export default function NamasviInteriorsPage() {
  // Navigation active state (for smooth scrolling visual indicators if needed)
  const [activeSection, setActiveSection] = useState('home');

  // Contact Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    possessionDate: '',
    homeSize: '3 BHK',
    densityPreference: 'Botanical Sanctuary',
    irrigationType: 'Smart Automated Drip',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Active Portfolio Tab State
  const [activeTab, setActiveTab] = useState('living');

  // Interactive Cost Configurator State
  const [configHomeSize, setConfigHomeSize] = useState('3 BHK');
  const [configDensity, setConfigDensity] = useState('Sanctuary'); // Minimalist, Sanctuary, Jungle Oasis
  const [configLighting, setConfigLighting] = useState('Circadian Smart'); // Standard, Grow Lights, Circadian Smart

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // Estimator outputs calculated based on states
  const [estimate, setEstimate] = useState({
    priceMin: 380000,
    priceMax: 450000,
    plantCount: 35,
    oxygenIncrease: 28,
    tempDrop: 2.2
  });

  // Re-calculate estimate values on state changes
  useEffect(() => {
    let baseMin = 220000;
    let baseMax = 280000;
    let plants = 15;
    let o2 = 12;
    let temp = 1.2;

    // Home size multiplier
    switch (configHomeSize) {
      case '2 BHK':
        baseMin = 220000;
        baseMax = 280000;
        plants = 18;
        o2 = 15;
        temp = 1.4;
        break;
      case '3 BHK':
        baseMin = 360000;
        baseMax = 440000;
        plants = 32;
        o2 = 26;
        temp = 2.2;
        break;
      case '4 BHK / Villa':
        baseMin = 550000;
        baseMax = 680000;
        plants = 55;
        o2 = 38;
        temp = 2.9;
        break;
      case 'Premium Penthouse':
        baseMin = 750000;
        baseMax = 950000;
        plants = 75;
        o2 = 45;
        temp = 3.4;
        break;
    }

    // Density multiplier
    switch (configDensity) {
      case 'Minimalist':
        baseMin *= 0.85;
        baseMax *= 0.85;
        plants = Math.round(plants * 0.7);
        o2 = Math.round(o2 * 0.7);
        temp -= 0.4;
        break;
      case 'Sanctuary':
        // stays standard
        break;
      case 'Jungle Oasis':
        baseMin *= 1.25;
        baseMax *= 1.25;
        plants = Math.round(plants * 1.5);
        o2 = Math.round(o2 * 1.4);
        temp += 0.6;
        break;
    }

    // Lighting multiplier
    switch (configLighting) {
      case 'Standard Natural':
        // no extra
        break;
      case 'Spectra Grow':
        baseMin += 45000;
        baseMax += 60000;
        o2 = Math.round(o2 * 1.15);
        break;
      case 'Circadian Smart':
        baseMin += 85000;
        baseMax += 110000;
        o2 = Math.round(o2 * 1.25);
        temp += 0.2;
        break;
    }

    setEstimate({
      priceMin: Math.round(baseMin),
      priceMax: Math.round(baseMax),
      plantCount: plants,
      oxygenIncrease: o2,
      tempDrop: parseFloat(temp.toFixed(1))
    });
  }, [configHomeSize, configDensity, configLighting]);

  // Form Submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Please enter your contact number';
    } else if (!/^\+?[0-9]{10,14}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.possessionDate) errors.possessionDate = 'Select your possession timeline';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
      }, 1500);
    }
  };

  const portfolioTabs = {
    living: {
      title: 'Lush Living Sanctuaries',
      subtitle: 'Premium biophilic central salons and drawing halls',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      description: 'We integrate living oxygenating green walls with concealed drip irrigation, hand-finished premium teakwood rafter backdrops, and dimmable 2700K warm spotlights. Designed to maximize daytime natural lighting and filter indoor air toxins.',
      plantSpecies: 'Philodendrons, Snake Plants, Peace Lilies',
      features: ['Self-watering vertical frames', 'Low-light active flora selection', 'Zero-leak protective sub-membranes'],
      avgPriceRange: '₹3.8L - ₹6.2L'
    },
    balcony: {
      title: 'Sky Forest Balconies',
      subtitle: 'Restorative open-air botanical retreats',
      image: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=800&q=80',
      description: 'We scale high-rise balconies into functional garden lounges. Featuring bespoke vertical wall modules, organic herb grid panels, slip-resistant weather-resistant composited timber planks, and integrated ambient seating options.',
      plantSpecies: 'Creeping Fig, Boston Ferns, Rosemary & Basil Grids',
      features: ['Rainwater drainage channels', 'Galvanized iron support grids', 'Custom built-in seating dividers'],
      avgPriceRange: '₹1.8L - ₹3.5L'
    },
    bedroom: {
      title: 'Restorative Sleeping Pods',
      subtitle: 'Clean-air master suites with active circadian rhythms',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      description: 'Master bedroom layouts styled for ultimate rest. Built using non-VOC organic finishes, custom-mounted bedside planter boxes with high nocturnal oxygen-generating flora, and intelligent dimming LED lamps that transition color temperature throughout the night.',
      plantSpecies: 'Sansevieria Trifasciata, Aloe Vera, Areca Palms',
      features: ['Zero-emission material certificate', 'Nocturnal respiration plants', 'Smart daylight simulation controllers'],
      avgPriceRange: '₹2.9L - ₹5.4L'
    },
    workspace: {
      title: 'Cognitive Boost Home Offices',
      subtitle: 'High-focus study environments utilizing live moss & grow lights',
      image: 'https://images.unsplash.com/photo-1530745342582-0795f23ec976?auto=format&fit=crop&w=800&q=80',
      description: 'Increase cognitive performance and work endurance. Features silent organic sound-dampening moss wall patterns, floating desk shelves with integrated high-output botanical grow lights, and anti-glare oakwood desk tables.',
      plantSpecies: 'Scindapsus Aureus, English Ivy, Preserved Iceland Moss',
      features: ['Full-spectrum grow lights built-in', 'Acoustic moss sound absorption', 'Cable-free desk integrated planters'],
      avgPriceRange: '₹2.2L - ₹4.0L'
    }
  };

  const faqData = [
    {
      question: 'How do you prevent water leakage with indoor wall plants?',
      answer: 'Every biophilic unit we install in Hyderabad uses our multi-layered Leak-Proof Shield system. This includes a heavy-duty industrial PVC backing membrane, a secondary drainage tray, and individual root-containment pockets. We guarantee 100% moisture isolation from your masonry walls, backed by a written structural warranty.'
    },
    {
      question: 'What is automated drip irrigation and how does it work?',
      answer: 'Our smart irrigation system is connected to a small, hidden pump and a reservoir inside the cabinetry. It automatically delivers micro-drops of nutrient-enriched water directly to the roots once daily. It runs on a silent timer and only needs a reservoir top-up once every 14 to 21 days.'
    },
    {
      question: 'Do indoor plants need sunlight? What if my room is dark?',
      answer: 'For rooms with minimal sunlight, we install bespoke full-spectrum botanical grow lights. These are integrated seamlessly under shelves or custom ceiling panels. They emit a warm, beautiful white light that mimics natural sunlight, ensuring your plants thrive even in completely windowless rooms.'
    },
    {
      question: 'How do you handle maintenance and pruning?',
      answer: 'We provide 6 months of complimentary monthly maintenance with every installation, where our horticultural specialists prune, clean, feed, and inspect the health of your plants. Afterward, you can sign up for our quarterly wellness subscription or utilize our simple home care guides.'
    },
    {
      question: 'Are all your wood materials sourced sustainably?',
      answer: 'Yes. Namasvi Interiors uses strictly FSC-certified timber, recycled teakwood accents, and zero-emission E0 grade calibrated plywood. We use solvent-free, water-based finishes that prevent harmful chemical off-gassing, keeping your indoor air pure.'
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-[#50C878] selection:text-white bg-[#F4F8F4]">
      
      {/* HEADER SECTION */}
      <header className="sticky top-0 z-50 bg-[#F4F8F4]/90 backdrop-blur-md border-b border-[#1E3F20]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1E3F20] flex items-center justify-center border border-[#FFD700]/30 shadow-md">
              <Sprout className="w-5 h-5 text-[#50C878]" />
            </div>
            <div>
              <span className="font-playfair font-bold text-xl tracking-tight text-[#1E3F20] block">Namasvi Interiors</span>
              <span className="text-[10px] tracking-widest uppercase text-[#50C878] font-bold block -mt-1">Biophilic Luxury • Attapur</span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#1E3F20]/80">
            <a href="#about" className="hover:text-[#50C878] transition-colors">Philosophy</a>
            <a href="#portfolio" className="hover:text-[#50C878] transition-colors">Botanical Portfolio</a>
            <a href="#estimator" className="hover:text-[#50C878] transition-colors">Plant Scale Estimator</a>
            <a href="#faq" className="hover:text-[#50C878] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#50C878] transition-colors">Contact Studio</a>
          </nav>

          {/* CTA Header Button */}
          <div>
            <a 
              href="#estimator" 
              className="bg-[#1E3F20] hover:bg-[#254d28] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full border border-[#FFD700]/30 transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Estimate Scale</span>
              <ArrowUpRight className="w-4 h-4 text-[#FFD700]" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-16 md:py-24 overflow-hidden border-b border-[#1E3F20]/5">
        {/* Decorative botanical backgrounds */}
        <div className="absolute top-10 right-[-100px] w-96 h-96 bg-[#50C878]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-[-100px] w-96 h-96 bg-[#1E3F20]/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#1E3F20]/10 border border-[#50C878]/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1E3F20]">
              <Leaf className="w-3.5 h-3.5 text-[#50C878]" />
              <span>Hyderabad\'s Pioneer Biophilic Designer</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-[#1E3F20] leading-[1.15] tracking-tight">
              Bespoke Spaces <br />
              Woven with <br />
              <span className="text-[#50C878] relative inline-block">
                Living Nature
                <span className="absolute bottom-1 left-0 w-full h-1 bg-[#FFD700]/50 rounded-full"></span>
              </span>.
            </h1>

            <p className="text-sm md:text-base text-[#1E3F20]/80 max-w-xl leading-relaxed font-light">
              We create breathtaking, nature-integrated luxury residences in Attapur and greater Hyderabad. Combining smart vertical irrigation, automated grow-lighting, and premium sustainable hardwoods to elevate your wellness at home.
            </p>

            {/* Metrics cards grid */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-white/70 border border-[#1E3F20]/10 p-4 rounded-2xl shadow-sm">
                <span className="block text-2xl md:text-3xl font-playfair font-bold text-[#1E3F20]">120+</span>
                <span className="block text-[10px] uppercase tracking-wider text-[#50C878] font-bold mt-1">Homes Planted</span>
              </div>
              <div className="bg-white/70 border border-[#1E3F20]/10 p-4 rounded-2xl shadow-sm">
                <span className="block text-2xl md:text-3xl font-playfair font-bold text-[#1E3F20]">98%</span>
                <span className="block text-[10px] uppercase tracking-wider text-[#50C878] font-bold mt-1">Flora Survival</span>
              </div>
              <div className="bg-white/70 border border-[#1E3F20]/10 p-4 rounded-2xl shadow-sm">
                <span className="block text-2xl md:text-3xl font-playfair font-bold text-[#1E3F20]">15%</span>
                <span className="block text-[10px] uppercase tracking-wider text-[#50C878] font-bold mt-1">Avg Temp Drop</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#contact" 
                className="bg-[#1E3F20] hover:bg-[#254d28] text-white px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-full border border-[#FFD700]/30 transition-all shadow-md flex items-center gap-2"
              >
                <span>Book Botanical Consult</span>
                <ArrowRight className="w-4 h-4 text-[#FFD700]" />
              </a>
              <a 
                href="#estimator" 
                className="bg-white hover:bg-neutral-50 text-[#1E3F20] px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-full border border-[#1E3F20]/10 transition-all shadow-sm"
              >
                Estimate Green Scale
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-[#50C878]/10 rounded-[3rem] rotate-3 -z-10 border border-[#50C878]/20"></div>
            <div className="border border-[#1E3F20]/10 p-3 rounded-[3rem] bg-white/85 shadow-xl">
              <div className="overflow-hidden rounded-[2.5rem] aspect-[4/5] relative">
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" 
                  alt="Namasvi Interiors Biophilic Living Room Design in Attapur" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-[#1E3F20]/95 backdrop-blur-md p-5 rounded-2xl border border-[#FFD700]/20 text-white shadow-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-[#FFD700] font-bold block">Latest Showcase</span>
                      <h3 className="font-playfair font-bold text-base mt-0.5">The Happy Homes Villa</h3>
                      <p className="text-[10px] text-white/80 font-light mt-1">Complete organic integration of a 4BHK duplex at Attapur, Hyderabad.</p>
                    </div>
                    <span className="text-xs bg-[#50C878]/20 border border-[#50C878]/40 text-[#50C878] px-2 py-0.5 rounded-full font-bold">2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: PHILOSOPHY */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-square border border-neutral-100">
                  <img src="https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=400&q=80" alt="Plant Wall Detail" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] border border-neutral-100">
                  <img src="https://images.unsplash.com/photo-1530745342582-0795f23ec976?auto=format&fit=crop&w=400&q=80" alt="Living Shelf Setup" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] border border-neutral-100">
                  <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80" alt="Green Bedroom Niches" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square border border-neutral-100">
                  <img src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=400&q=80" alt="Sustainable lighting details" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Right Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#50C878] font-bold">
                <Award className="w-4 h-4 text-[#FFD700]" />
                <span>Our Core Design Pillars</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1E3F20]">
                Why Biophilic Design Matters <br />
                for Hyderabad Residences
              </h2>

              <p className="text-xs md:text-sm text-[#1E3F20]/80 leading-relaxed font-light">
                Urban living in Hyderabad can isolate us from the restorative patterns of nature. Namasvi Interiors bridges this gap by creating homes that work as living breathing systems. Our curated biophilic layouts do not just place potted plants on shelves — we engineer living fixtures directly into your walls, cabinetry, and lighting schemes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F4F8F4] flex items-center justify-center flex-shrink-0 text-[#1E3F20] border border-[#50C878]/20">
                    <Wind className="w-5 h-5 text-[#50C878]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1E3F20]">Active Air Purification</h3>
                    <p className="text-xs text-[#1E3F20]/70 mt-1">Specifically selected plant lists targeting carbon dioxide, benzene, and airborne toxins, naturally raising room humidity.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F4F8F4] flex items-center justify-center flex-shrink-0 text-[#1E3F20] border border-[#50C878]/20">
                    <Droplets className="w-5 h-5 text-[#50C878]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1E3F20]">Automated Hydro-Systems</h3>
                    <p className="text-xs text-[#1E3F20]/70 mt-1">Concealed timer-based irrigation loops watering root zones efficiently with zero moisture leakage to surrounding walls.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F4F8F4] flex items-center justify-center flex-shrink-0 text-[#1E3F20] border border-[#50C878]/20">
                    <Sun className="w-5 h-5 text-[#50C878]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1E3F20]">Circadian LED Integration</h3>
                    <p className="text-xs text-[#1E3F20]/70 mt-1">Custom full-spectrum LED bars mimicking natural sunrise, noon, and sunset curves to stabilize sleep patterns and plant growth.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F4F8F4] flex items-center justify-center flex-shrink-0 text-[#1E3F20] border border-[#50C878]/20">
                    <Shield className="w-5 h-5 text-[#50C878]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1E3F20]">Zero-VOC Air Protection</h3>
                    <p className="text-xs text-[#1E3F20]/70 mt-1">We utilize certified organic wall coatings, non-VOC lacquers, and formaldehyde-free sustainably calibrated marine plywoods.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: SERVICES PORTFOLIO (TABS STATE) */}
      <section id="portfolio" className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#50C878] font-bold block">Curated Living Spaces</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1E3F20]">Nature-Fused Interior Portfolios</h2>
            <p className="text-xs text-[#1E3F20]/70 font-light leading-relaxed">
              Explore our specialty design categories. Each section represents a refined, custom approach to biophilic design in modern Hyderabad homes.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-center border-b border-[#1E3F20]/10 pb-2">
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
              {Object.entries(portfolioTabs).map(([key, tab]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-5 py-3 text-xs uppercase tracking-wider font-bold rounded-full transition-all border ${
                    activeTab === key 
                      ? 'bg-[#1E3F20] text-white border-[#1E3F20] shadow-md' 
                      : 'bg-white text-[#1E3F20] border-transparent hover:border-[#1E3F20]/10'
                  }`}
                >
                  {key === 'living' ? 'Living Rooms' : key === 'balcony' ? 'Balcony & Patio' : key === 'bedroom' ? 'Master Bedroom' : 'Home Workspace'}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Content (Fades/Animates via conditional rendering layout) */}
          <div className="bg-white rounded-[2.5rem] border border-[#1E3F20]/5 p-6 md:p-10 shadow-sm transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Text Side */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#50C878] font-extrabold">
                    {portfolioTabs[activeTab].subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-[#1E3F20] mt-1">
                    {portfolioTabs[activeTab].title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#1E3F20]/80 leading-relaxed font-light mt-4">
                    {portfolioTabs[activeTab].description}
                  </p>
                </div>

                {/* Key Specs Card */}
                <div className="bg-[#F4F8F4] rounded-2xl p-5 border border-[#1E3F20]/5 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#1E3F20]/60 uppercase font-bold tracking-wider">Horticulture Count</span>
                    <span className="font-bold text-[#1E3F20]">{portfolioTabs[activeTab].plantSpecies}</span>
                  </div>
                  <div className="border-t border-[#1E3F20]/5 my-2"></div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#1E3F20]/60 uppercase font-bold tracking-wider">Starting Estimate</span>
                    <span className="font-bold text-[#50C878]">{portfolioTabs[activeTab].avgPriceRange}</span>
                  </div>
                </div>

                {/* Features checklist */}
                <div className="space-y-2.5">
                  <span className="block text-[10px] uppercase tracking-wider text-[#1E3F20]/50 font-bold">Standard Inclusions:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {portfolioTabs[activeTab].features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#1E3F20]/80">
                        <Check className="w-4 h-4 text-[#50C878] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="lg:col-span-6 relative border border-neutral-100 p-2.5 rounded-[2rem] bg-[#F4F8F4]">
                <div className="overflow-hidden rounded-[1.8rem] aspect-[4/3]">
                  <img 
                    src={portfolioTabs[activeTab].image} 
                    alt={portfolioTabs[activeTab].title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION: PLANT-INTEGRATION SCALE & ESTIMATE (INTERACTIVE CONFIGURATOR) */}
      <section id="estimator" className="py-16 bg-[#1E3F20] text-white relative overflow-hidden">
        {/* Gold Accent Circles */}
        <div className="absolute top-[-50px] left-[-50px] w-64 h-64 border border-[#FFD700]/10 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-80 h-80 border border-[#50C878]/10 rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#FFD700] font-bold block">Interactive Estimation</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white">Plant-Integration Estimator</h2>
            <p className="text-xs text-white/80 font-light leading-relaxed">
              Dynamically select your home parameters to configure the estimated plant counts, biological metrics, and initial price range.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Input Selectors Panel */}
            <div className="lg:col-span-7 bg-[#173219] rounded-[2rem] border border-[#FFD700]/20 p-6 md:p-8 space-y-6 flex flex-col justify-between">
              
              {/* Parameter 1: Home Size */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-wider text-[#FFD700] font-bold">1. Home Configuration</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['2 BHK', '3 BHK', '4 BHK / Villa', 'Premium Penthouse'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setConfigHomeSize(size)}
                      className={`px-3 py-3 text-xs font-bold rounded-xl border transition-all ${
                        configHomeSize === size 
                          ? 'bg-[#50C878] text-white border-[#50C878] shadow-sm' 
                          : 'bg-transparent text-white/80 border-[#FFD700]/20 hover:border-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 2: Green Density */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-wider text-[#FFD700] font-bold">2. Botanical Density Level</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'Minimalist', desc: 'Curated green accents in corners & key shelves (~12% area)' },
                    { name: 'Sanctuary', desc: 'Integrated living planter walls & lighting shelves (~25% area)' },
                    { name: 'Jungle Oasis', desc: 'High density, ceiling vine tracks, bathroom flora (~40% area)' }
                  ].map((density) => (
                    <button
                      key={density.name}
                      onClick={() => setConfigDensity(density.name)}
                      className={`px-4 py-3.5 text-left rounded-xl border transition-all flex flex-col justify-between ${
                        configDensity === density.name 
                          ? 'bg-[#50C878] text-white border-[#50C878] shadow-sm' 
                          : 'bg-transparent text-white/80 border-[#FFD700]/20 hover:border-white'
                      }`}
                    >
                      <span className="font-bold text-xs">{density.name}</span>
                      <span className="text-[9px] text-white/60 mt-1 leading-normal">{density.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 3: Lighting Integration */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-wider text-[#FFD700] font-bold">3. Smart Grow Lighting System</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'Standard Natural', desc: 'Relies strictly on existing windows and natural layouts' },
                    { name: 'Spectra Grow', desc: 'Adds warm LED grow lighting bands under dark-zone cabinets' },
                    { name: 'Circadian Smart', desc: 'Automatic color temperature tuning matching biological sleep' }
                  ].map((light) => (
                    <button
                      key={light.name}
                      onClick={() => setConfigLighting(light.name)}
                      className={`px-4 py-3.5 text-left rounded-xl border transition-all flex flex-col justify-between ${
                        configLighting === light.name 
                          ? 'bg-[#50C878] text-white border-[#50C878] shadow-sm' 
                          : 'bg-transparent text-white/80 border-[#FFD700]/20 hover:border-white'
                      }`}
                    >
                      <span className="font-bold text-xs">{light.name}</span>
                      <span className="text-[9px] text-white/60 mt-1 leading-normal">{light.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Configurator footprint notice */}
              <div className="pt-2 text-[10px] text-white/60 flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-[#50C878] fill-[#50C878]" />
                <span>Estimates include sustainable calibrated plywood cabinetry framing and initial installation labor.</span>
              </div>
            </div>

            {/* Live Outputs Metrics Card */}
            <div className="lg:col-span-5 bg-white text-[#1E3F20] rounded-[2rem] border border-[#FFD700]/20 p-6 md:p-8 flex flex-col justify-between shadow-2xl relative">
              <div className="absolute top-4 right-4 bg-[#FFD700]/25 text-[#1E3F20] text-[9px] uppercase font-bold px-2 py-0.5 rounded-full border border-[#FFD700]">
                Live Spec
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#50C878] font-bold block mb-1">Total Project Budget Range</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-5xl font-playfair font-bold tracking-tight text-[#1E3F20]">
                    ₹{estimate.priceMin.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xl text-[#1E3F20]/60 font-light">to</span>
                  <span className="text-2xl md:text-3xl font-playfair font-bold text-[#1E3F20]">
                    ₹{estimate.priceMax.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-[10px] text-[#1E3F20]/60 mt-2 leading-relaxed">
                  *Rough cost range covers woodwork, structural framing, drainage, and professional flora styling for a typical Hyderabad floorplan.
                </p>
              </div>

              {/* Biological Outputs list */}
              <div className="border-t border-[#1E3F20]/10 my-6 pt-6 space-y-4">
                <span className="block text-[10px] uppercase tracking-wider text-[#1E3F20]/50 font-bold">Estimated Biological Metrics:</span>
                
                {/* Plants count */}
                <div className="flex justify-between items-center bg-[#F4F8F4] p-3.5 rounded-xl border border-[#50C878]/10">
                  <div className="flex items-center gap-3">
                    <Sprout className="w-5 h-5 text-[#50C878]" />
                    <div>
                      <span className="block text-xs font-bold text-[#1E3F20]">Curated Indoor Flora</span>
                      <span className="block text-[9px] text-[#1E3F20]/60">Oxygen-dense varieties</span>
                    </div>
                  </div>
                  <span className="text-xl font-playfair font-bold text-[#1E3F20]">~{estimate.plantCount} Plants</span>
                </div>

                {/* Oxygen level */}
                <div className="flex justify-between items-center bg-[#F4F8F4] p-3.5 rounded-xl border border-[#50C878]/10">
                  <div className="flex items-center gap-3">
                    <Wind className="w-5 h-5 text-[#50C878]" />
                    <div>
                      <span className="block text-xs font-bold text-[#1E3F20]">Indoor O2 Enrichment</span>
                      <span className="block text-[9px] text-[#1E3F20]/60">Air purification efficiency</span>
                    </div>
                  </div>
                  <span className="text-xl font-playfair font-bold text-[#1E3F20]">+{estimate.oxygenIncrease}%</span>
                </div>

                {/* Microclimate drop */}
                <div className="flex justify-between items-center bg-[#F4F8F4] p-3.5 rounded-xl border border-[#50C878]/10">
                  <div className="flex items-center gap-3">
                    <Droplets className="w-5 h-5 text-[#50C878]" />
                    <div>
                      <span className="block text-xs font-bold text-[#1E3F20]">Thermal Stabilization</span>
                      <span className="block text-[9px] text-[#1E3F20]/60">Transpiration cooling effect</span>
                    </div>
                  </div>
                  <span className="text-xl font-playfair font-bold text-[#1E3F20] text-emerald-600">-{estimate.tempDrop}°C</span>
                </div>

              </div>

              {/* Call to action */}
              <div className="pt-2">
                <a 
                  href="#contact" 
                  onClick={() => setFormData({ ...formData, homeSize: configHomeSize, densityPreference: `${configDensity} Density`, message: `Generated estimator configuration: ${configHomeSize} with ${configDensity} density and ${configLighting} lighting.` })}
                  className="w-full bg-[#1E3F20] hover:bg-[#254d28] text-white text-center block py-4 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md"
                >
                  Apply this Layout Configuration
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION: CLIENT TESTIMONIALS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#50C878] font-bold block">Attestations</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1E3F20]">Living Stories From Hyderabad</h2>
            <p className="text-xs text-[#1E3F20]/70 font-light leading-relaxed">
              Read how Namasvi Interiors transformed regular brick-and-mortar flats into lush luxury sanctuaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Testimonial 1 */}
            <div className="bg-white border border-[#1E3F20]/5 p-6 rounded-[2rem] flex flex-col justify-between shadow-sm relative">
              <span className="absolute top-6 right-6 text-4xl text-[#50C878]/10 font-serif font-bold">“</span>
              <div>
                <div className="flex gap-1 text-[#FFD700] mb-4 text-xs">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-xs text-[#1E3F20]/80 leading-relaxed italic mb-6">
                  "Our apartment at Happy Homes, Attapur was transformed into a botanical sanctuary. The living room green wall is completely leak-proof. The automated watering timer is so silent, and we only refill the reservoir twice a month. Extremely satisfied!"
                </p>
              </div>
              <div className="border-t border-[#1E3F20]/5 pt-4 flex justify-between items-center">
                <div>
                  <span className="block text-xs font-bold text-[#1E3F20]">Dr. Anirudh Sastry</span>
                  <span className="block text-[10px] text-[#1E3F20]/60">Attapur Flat Owner</span>
                </div>
                <span className="text-[10px] bg-[#F4F8F4] text-[#1E3F20] px-2.5 py-1 rounded-full border border-[#50C878]/10 font-bold">
                  3 BHK Botanical
                </span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white border border-[#1E3F20]/5 p-6 rounded-[2rem] flex flex-col justify-between shadow-sm relative">
              <span className="absolute top-6 right-6 text-4xl text-[#50C878]/10 font-serif font-bold">“</span>
              <div>
                <div className="flex gap-1 text-[#FFD700] mb-4 text-xs">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-xs text-[#1E3F20]/80 leading-relaxed italic mb-6">
                  "Namasvi styled our balcony overlooking the PVNR Expressway. They built modular vertical planters and installed a warm dimmable light grid. It has become our favorite tea spot. The air actually feels cooler and fresher."
                </p>
              </div>
              <div className="border-t border-[#1E3F20]/5 pt-4 flex justify-between items-center">
                <div>
                  <span className="block text-xs font-bold text-[#1E3F20]">Meera & Raghav</span>
                  <span className="block text-[10px] text-[#1E3F20]/60">Hyderguda Resident</span>
                </div>
                <span className="text-[10px] bg-[#F4F8F4] text-[#1E3F20] px-2.5 py-1 rounded-full border border-[#50C878]/10 font-bold">
                  Balcony Forest
                </span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white border border-[#1E3F20]/5 p-6 rounded-[2rem] flex flex-col justify-between shadow-sm relative">
              <span className="absolute top-6 right-6 text-4xl text-[#50C878]/10 font-serif font-bold">“</span>
              <div>
                <div className="flex gap-1 text-[#FFD700] mb-4 text-xs">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-xs text-[#1E3F20]/80 leading-relaxed italic mb-6">
                  "I was worried about grow lights looking industrial, but Namasvi integrated them beautifully inside warm oak panels in my study room. My focus has improved, and the preserved moss panels do a fantastic job dampening zoom calls."
                </p>
              </div>
              <div className="border-t border-[#1E3F20]/5 pt-4 flex justify-between items-center">
                <div>
                  <span className="block text-xs font-bold text-[#1E3F20]">Srinivas Rao</span>
                  <span className="block text-[10px] text-[#1E3F20]/60">Villa Owner, Attapur</span>
                </div>
                <span className="text-[10px] bg-[#F4F8F4] text-[#1E3F20] px-2.5 py-1 rounded-full border border-[#50C878]/10 font-bold">
                  Premium Home Office
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: FAQ ACCORDION COLLAPSIBLE */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#50C878] font-bold block">Inquiries</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1E3F20]">Technical & Botanical FAQs</h2>
            <p className="text-xs text-[#1E3F20]/70 font-light leading-relaxed">
              Understand the precision engineering behind leak proof vertical systems, smart grow lights, and ongoing care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Accordion Questions */}
            <div className="lg:col-span-8 space-y-3">
              {faqData.map((faq, i) => (
                <div 
                  key={i} 
                  className="border border-[#1E3F20]/10 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left p-5 flex justify-between items-center bg-[#F4F8F4]/50 hover:bg-[#F4F8F4] transition-colors"
                  >
                    <span className="text-sm font-bold text-[#1E3F20] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-[#50C878] transform transition-transform duration-300 flex-shrink-0 ${
                        openFaq === i ? 'rotate-180 text-[#1E3F20]' : ''
                      }`} 
                    />
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openFaq === i ? 'max-h-[500px] border-t border-[#1E3F20]/10' : 'max-h-0 pointer-events-none'
                    } overflow-hidden`}
                  >
                    <div className="p-5 text-xs text-[#1E3F20]/70 leading-relaxed bg-white">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar Support Panel */}
            <div className="lg:col-span-4 bg-[#F4F8F4] border border-[#1E3F20]/5 p-6 rounded-[2rem] space-y-6">
              <span className="text-[10px] text-[#50C878] uppercase font-bold tracking-widest block">Consultation Office</span>
              
              <h3 className="text-xl font-playfair font-bold text-[#1E3F20]">Have specific layout blueprints?</h3>
              
              <p className="text-xs text-[#1E3F20]/70 leading-relaxed font-light">
                Our lead horticulturist and master woodworks designer can review your layouts. Drop by our Attapur design office for live demonstrations of automated misting systems and grow light integrations.
              </p>

              <div className="border-t border-[#1E3F20]/10 pt-6 space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#1E3F20]/80">
                  <Clock className="w-4 h-4 text-[#50C878]" />
                  <span>10:30 AM - 07:30 PM (Thursdays Closed)</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#1E3F20]/80">
                  <Phone className="w-4 h-4 text-[#50C878]" />
                  <span className="font-bold">+91 87120 10801</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION: CONTACT FORM */}
      <section id="contact" className="py-16 bg-[#F4F8F4]/50 border-t border-[#1E3F20]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[2.5rem] border border-[#1E3F20]/5 p-6 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Form Info Left */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#50C878] font-bold block mb-1">Design Inquiry</span>
                <h2 className="text-3xl font-playfair font-bold text-[#1E3F20]">Request Botanical Design Proposal</h2>
                <p className="text-xs text-[#1E3F20]/70 leading-relaxed font-light mt-4">
                  Fill in your property parameters. Our design architect will coordinate a visual layout proposal incorporating custom plant schedules and pricing breakdowns.
                </p>
              </div>

              <div className="space-y-3 pt-8 border-t border-neutral-100 mt-6 lg:mt-0">
                <div className="flex items-center gap-3 text-xs text-[#1E3F20]/80">
                  <MapPin className="w-4 h-4 text-[#50C878]" />
                  <span>Happy Homes Commercial Block, Near PVNR Expressway Pillar 125, Attapur, Hyderabad - 500048</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#1E3F20]/80">
                  <Mail className="w-4 h-4 text-[#50C878]" />
                  <span className="font-bold">namasviinteriors@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Form Fields Right */}
            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="text-center py-16 flex flex-col items-center justify-center space-y-6">
                  <div className="w-16 h-16 bg-[#50C878]/10 border border-[#50C878]/30 flex items-center justify-center rounded-full">
                    <Check className="w-8 h-8 text-[#50C878]" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-[#1E3F20]">Consultation Scheduled</h3>
                  <p className="text-xs text-[#1E3F20]/70 max-w-md leading-relaxed">
                    Thank you, <strong className="text-[#1E3F20]">{formData.fullName}</strong>. We have registered your design request for a <strong className="text-[#1E3F20]">{formData.homeSize}</strong> layout. Our senior biophilic architect will contact you on <strong className="text-[#1E3F20]">{formData.phone}</strong> to confirm your complimentary site inspection.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', possessionDate: '', homeSize: '3 BHK', densityPreference: 'Botanical Sanctuary', irrigationType: 'Smart Automated Drip', message: '' });
                    }}
                    className="bg-[#1E3F20] hover:bg-[#254d28] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#1E3F20]/60 font-bold mb-1.5">Full Name</label>
                      <input 
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Srikkanth Reddy"
                        className="w-full bg-[#F4F8F4] border border-[#1E3F20]/10 text-[#1E3F20] px-4 py-3 text-xs focus:outline-none focus:border-[#50C878] rounded-xl placeholder-[#1E3F20]/40"
                      />
                      {formErrors.fullName && <p className="text-red-500 text-[10px] mt-1 font-semibold">{formErrors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#1E3F20]/60 font-bold mb-1.5">Contact Number</label>
                      <input 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9849012345"
                        className="w-full bg-[#F4F8F4] border border-[#1E3F20]/10 text-[#1E3F20] px-4 py-3 text-xs focus:outline-none focus:border-[#50C878] rounded-xl placeholder-[#1E3F20]/40"
                      />
                      {formErrors.phone && <p className="text-red-500 text-[10px] mt-1 font-semibold">{formErrors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#1E3F20]/60 font-bold mb-1.5">Email Address</label>
                      <input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. namasviinteriors@gmail.com"
                        className="w-full bg-[#F4F8F4] border border-[#1E3F20]/10 text-[#1E3F20] px-4 py-3 text-xs focus:outline-none focus:border-[#50C878] rounded-xl placeholder-[#1E3F20]/40"
                      />
                      {formErrors.email && <p className="text-red-500 text-[10px] mt-1 font-semibold">{formErrors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#1E3F20]/60 font-bold mb-1.5">Possession Timeline</label>
                      <input 
                        type="date"
                        value={formData.possessionDate}
                        onChange={(e) => setFormData({ ...formData, possessionDate: e.target.value })}
                        className="w-full bg-[#F4F8F4] border border-[#1E3F20]/10 text-[#1E3F20] px-4 py-3 text-xs focus:outline-none focus:border-[#50C878] rounded-xl"
                      />
                      {formErrors.possessionDate && <p className="text-red-500 text-[10px] mt-1 font-semibold">{formErrors.possessionDate}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#1E3F20]/60 font-bold mb-1.5">Configuration</label>
                      <select
                        value={formData.homeSize}
                        onChange={(e) => setFormData({ ...formData, homeSize: e.target.value })}
                        className="w-full bg-[#F4F8F4] border border-[#1E3F20]/10 text-[#1E3F20] px-4 py-3 text-xs focus:outline-none focus:border-[#50C878] rounded-xl"
                      >
                        <option value="2 BHK">2 BHK Apartment</option>
                        <option value="3 BHK">3 BHK Apartment</option>
                        <option value="4 BHK / Villa">4 BHK Villa / Duplex</option>
                        <option value="Premium Penthouse">Luxury Penthouse</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#1E3F20]/60 font-bold mb-1.5">Flora Density</label>
                      <select
                        value={formData.densityPreference}
                        onChange={(e) => setFormData({ ...formData, densityPreference: e.target.value })}
                        className="w-full bg-[#F4F8F4] border border-[#1E3F20]/10 text-[#1E3F20] px-4 py-3 text-xs focus:outline-none focus:border-[#50C878] rounded-xl"
                      >
                        <option value="Minimalist Accents">Minimalist Accents (12%)</option>
                        <option value="Botanical Sanctuary">Botanical Sanctuary (25%)</option>
                        <option value="Jungle Oasis">Jungle Oasis (40%)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-[#1E3F20]/60 font-bold mb-1.5">Irrigation Setup</label>
                      <select
                        value={formData.irrigationType}
                        onChange={(e) => setFormData({ ...formData, irrigationType: e.target.value })}
                        className="w-full bg-[#F4F8F4] border border-[#1E3F20]/10 text-[#1E3F20] px-4 py-3 text-xs focus:outline-none focus:border-[#50C878] rounded-xl"
                      >
                        <option value="Manual Care">Manual Watering</option>
                        <option value="Smart Automated Drip">Smart Drip Timer</option>
                        <option value="Leakproof Sub-Irrigation">Leakproof Sub-Irrigated</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#1E3F20]/60 font-bold mb-1.5">Specific Requests / Notes</label>
                    <textarea 
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details on sunlight, pet friendliness, grow lights, or preferred color themes..."
                      className="w-full bg-[#F4F8F4] border border-[#1E3F20]/10 text-[#1E3F20] px-4 py-3 text-xs focus:outline-none focus:border-[#50C878] rounded-xl placeholder-[#1E3F20]/40 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1E3F20] hover:bg-[#254d28] disabled:bg-[#1E3F20]/65 text-white py-4 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-3 border border-[#FFD700]/30 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing botanical configuration...</span>
                      </>
                    ) : (
                      <span>Submit Botanical Request</span>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-[#1E3F20] text-white py-12 border-t border-[#FFD700]/15">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-xs text-white/60">
          
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#50C878]/25 flex items-center justify-center border border-[#FFD700]/30 shadow-sm">
                <Sprout className="w-4 h-4 text-[#50C878]" />
              </div>
              <span className="font-playfair font-bold text-lg text-white">Namasvi Interiors</span>
            </div>
            <p className="font-light leading-relaxed">
              Bespoke Biophilic & Organic Luxury Interiors. Engineered for healthy living, designed with botanical refinement. Operating in Attapur, Hyderabad.
            </p>
          </div>

          <div className="md:col-span-7 md:text-right font-light space-y-1.5">
            <p>© 2026 Namasvi Interiors. All rights reserved.</p>
            <p>Designed in compliance with visual accessibility and sustainable timber sourcing standards.</p>
            <p>Pillar 125, PVNR Expressway, Hyderguda-Attapur Road, Hyderabad.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}

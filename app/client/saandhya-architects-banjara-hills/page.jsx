"use client";
import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Award, Clock, Star, Sparkles, ChevronRight, 
  Send, Compass, HelpCircle, RefreshCw, Sliders, MessageSquare, 
  Check, ArrowRight, Calendar, User, LayoutGrid, Hammer, FileText,
  AlertCircle, Home, Sun, Info
} from 'lucide-react';

export default function SaandhyaArchitectsPage() {
  // 1. Portfolio Style Selector State
  const [selectedStyle, setSelectedStyle] = useState('residential');

  // Portfolio items data
  const portfolioData = {
    residential: {
      title: "High-End Residential Interiors",
      tagline: "Warm, hand-crafted comfort for modern families",
      budget: "₹80 Lakhs - ₹1.8 Crores",
      materials: ["Handcrafted Terracotta Tiles", "Premium White Oak Wood", "Satin Brass Fittings", "Woven Linen Textures", "Muted Lime-Wash Plaster"],
      duration: "5 - 7 Months",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800",
      description: "A private courtyard duplex in Banjara Hills designed around daylight trajectories, pairing warm sandy floor finishes with custom terracotta paneling."
    },
    biophilic: {
      title: "Terracotta Biophilic Living",
      tagline: "Seamless transition between soil, light, and stone",
      budget: "₹1.2 Crores - ₹2.5 Crores",
      materials: ["Local Red Sandstone", "Rattan & Cane Panels", "Double-Glazed Heat-Reflective Glass", "Indoor Planter Voids", "Terracotta Louvre Shading"],
      duration: "7 - 9 Months",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
      description: "This Jubilee Hills villa features double-height interior gardens, sun-screening louvres, and sandblasted plaster surfaces that keep the home cool and earthy."
    },
    landscape: {
      title: "Landscape & Lighting Curation",
      tagline: "Exterior environments that breathe and glow",
      budget: "₹35 Lakhs - ₹80 Lakhs",
      materials: ["Basalt Stone Pavers", "Low-voltage Warm Brass LEDs", "Drought-Resistant Flora", "Earthy Terracotta Urns", "Teak Pergola Framing"],
      duration: "3 - 5 Months",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
      description: "A comprehensive garden and landscape redesign near Park Hyatt Lane, featuring layered warm lighting pathways, water basins, and native plant curation."
    },
    masterplanning: {
      title: "Master-Planned Country Estates",
      tagline: "Eco-luxurious residential estates mapped to nature",
      budget: "₹3.0 Crores - ₹6.5 Crores",
      materials: ["Soil-stabilized Earth Blocks", "Solar Shading Overhangs", "Recycled Teakwood", "Natural Limestone Paving", "Drip-irrigation Voids"],
      duration: "10 - 15 Months",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
      description: "A master planning layout for an elite family estate in Gandipet, blending microclimatic landscape barriers with luxury editorial architectural configurations."
    }
  };

  // 2. Quiz State
  const [quizAnswers, setQuizAnswers] = useState({
    light: '',
    plants: '',
    woods: ''
  });
  const [quizResult, setQuizResult] = useState('');

  const handleQuizSelect = (key, value) => {
    setQuizAnswers(prev => ({ ...prev, [key]: value }));
  };

  const calculateQuizResult = () => {
    if (!quizAnswers.light || !quizAnswers.plants || !quizAnswers.woods) {
      alert("Please answer all questions before submitting.");
      return;
    }

    // Recommendation logic
    if (quizAnswers.light === 'golden' && quizAnswers.woods === 'oak') {
      setQuizResult('Sun-Drenched Terracotta');
    } else if (quizAnswers.plants === 'terraces' || quizAnswers.woods === 'rattan') {
      setQuizResult('Terracotta Biophilic Living');
    } else if (quizAnswers.light === 'landscape') {
      setQuizResult('Landscape & Lighting Curation');
    } else {
      setQuizResult('Master-Planned Country Estates');
    }
  };

  const resetQuiz = () => {
    setQuizAnswers({ light: '', plants: '', woods: '' });
    setQuizResult('');
  };

  // 3. Design Process Interactive State
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      title: "Consultation",
      subtitle: "Contextual Sunlight Audit",
      duration: "1 - 2 Weeks",
      details: "Saandhya Reddy reviews your Banjara Hills plot to assess lighting directions, soil health, and existing greenery. We determine how to orient spaces to maximize early morning golden light while screening harsh midday heat."
    },
    {
      title: "Concept",
      subtitle: "Biophilic Layout Sketches",
      duration: "2 - 3 Weeks",
      details: "We draw hand-rendered layouts and spatial pathways. We focus on integrating indoor garden courtyards, terracotta louvres, and high-contrast timber partitions that form an editorial, warm home environment."
    },
    {
      title: "3D Rendering",
      subtitle: "Warm Light Simulations",
      duration: "3 - 5 Weeks",
      details: "Our studios compile photorealistic 3D renderings using exact light temperatures. We model the sun-drenched plaster textures, terracotta tiles, brass fixtures, and landscape plantings to guarantee conceptual accuracy."
    },
    {
      title: "Procurement",
      subtitle: "Artisan Material Sourcing",
      duration: "3 - 4 Weeks",
      details: "We source authentic terracotta tiles, local red sandstones, hand-woven linens, and satin brass elements directly from selected design guilds to secure premium textures and material integrity."
    },
    {
      title: "Execution",
      subtitle: "Craftsmanship Implementation",
      duration: "7 - 12 Months",
      details: "Our dedicated site curators oversee every masonry join, lime-wash plaster coating, and lighting fixture placement, handing over a gorgeous, nature-imbued, fully warm habitat."
    }
  ];

  // 4. Consultation Booking State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    budget: '',
    startDate: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState('');

  const validateField = (name, value) => {
    let err = "";
    if (name === "name") {
      if (!value.trim()) err = "Full name is required";
    }
    if (name === "phone") {
      if (!value.trim()) {
        err = "Phone number is required";
      } else if (!/^\+?[0-9]{10,12}$/.test(value.replace(/[\s-]/g, ''))) {
        err = "Enter a valid 10-12 digit phone number";
      }
    }
    if (name === "email") {
      if (!value.trim()) {
        err = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        err = "Enter a valid email address";
      }
    }
    if (name === "projectType") {
      if (!value) err = "Please select a project category";
    }
    if (name === "budget") {
      if (!value) err = "Please select your target budget";
    }
    if (name === "startDate") {
      if (!value) err = "Please choose a target timeline";
    }
    return err;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    const errorMsg = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(form).forEach(key => {
      const err = validateField(key, form[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to first error
      const firstErrorField = document.getElementsByName(Object.keys(newErrors)[0])[0];
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstErrorField.focus();
      }
      return;
    }

    setIsSubmitting(true);
    // Simulate premium API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      const randNum = Math.floor(100000 + Math.random() * 900000);
      setConfirmationNumber(`SAA-${randNum}`);
    }, 1200);
  };

  const resetForm = () => {
    setForm({
      name: '',
      phone: '',
      email: '',
      projectType: '',
      budget: '',
      startDate: '',
      message: ''
    });
    setErrors({});
    setSubmitSuccess(false);
    setConfirmationNumber('');
  };

  return (
    <div className="min-h-screen bg-[#FEF9E7] text-[#4A2E16] font-sans selection:bg-[#D35400]/20 selection:text-[#D35400] antialiased">
      {/* Load Merriweather & Open Sans fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Open+Sans:wght@300;400;600;700&display=swap');
        .font-display-saa { font-family: 'Merriweather', serif; }
        .font-body-saa { font-family: 'Open Sans', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FEF9E7]/90 border-b border-[#F5CBA7]/50 font-body-saa">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex flex-col">
              <span className="font-display-saa text-lg lg:text-xl font-bold tracking-tight text-[#4A2E16] flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 bg-[#D35400] rounded-full inline-block"></span>
                SAANDHYA
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-[#D35400] font-body-saa -mt-1">
                Architects & Interior Designer
              </span>
            </div>
            <div className="hidden md:flex space-x-8 font-body-saa text-xs uppercase tracking-wider font-bold">
              <a href="#hero" className="hover:text-[#D35400] transition-colors py-1">Home</a>
              <a href="#bio" className="hover:text-[#D35400] transition-colors py-1">Philosophy</a>
              <a href="#portfolio" className="hover:text-[#D35400] transition-colors py-1">Galleries</a>
              <a href="#quiz" className="hover:text-[#D35400] transition-colors py-1">Quiz</a>
              <a href="#process" className="hover:text-[#D35400] transition-colors py-1">Process</a>
              <a href="#testimonials" className="hover:text-[#D35400] transition-colors py-1">Reviews</a>
            </div>
            <div>
              <a 
                href="#booking" 
                className="inline-flex items-center px-5 py-2.5 bg-[#D35400] hover:bg-[#A04000] text-white transition-all text-xs uppercase tracking-wider font-bold font-body-saa rounded-sm active:scale-95 shadow-sm"
              >
                Inquire Studio
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Section 1: Hero Section */}
      <header id="hero" className="relative pt-16 pb-24 overflow-hidden border-b border-[#F5CBA7]/40 font-body-saa">
        {/* Decorative subtle sun vector shape behind content */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#F4D03F]/10 blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#FFFFFF] border border-[#F5CBA7] text-[#D35400] text-xs font-bold tracking-wide w-fit">
                <Sun size={14} className="animate-spin-slow text-[#F4D03F]" />
                <span>Sun-Drenched Terracotta Curation</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-display-saa font-bold leading-tight text-[#4A2E16] tracking-tight">
                Crafting Earthy Spaces <br />
                <span className="text-[#D35400] italic font-normal">That Reconcile with Nature.</span>
              </h1>
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed max-w-xl font-body-saa">
                Welcome to Saandhya Architects. We design high-end, light-flooded residential spaces, landscape elevations, and master plans in Hyderabad that feature terracotta tiles, mustard elements, and biophilic integrations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="#booking" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-[#D35400] hover:bg-[#A04000] text-white font-body-saa text-xs uppercase tracking-widest font-bold transition-all active:scale-95 shadow-md"
                >
                  Schedule Studio Curation
                  <ArrowRight size={14} className="ml-2" />
                </a>
                <a 
                  href="#portfolio" 
                  className="inline-flex justify-center items-center px-8 py-4 border border-[#F5CBA7] bg-[#FFFFFF] hover:bg-[#FEF9E7] text-[#4A2E16] font-body-saa text-xs uppercase tracking-widest font-bold transition-all active:scale-95"
                >
                  Browse Galleries
                </a>
              </div>
            </div>

            {/* High-end warm-toned living room gallery */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] p-2.5 bg-white border border-[#F5CBA7] shadow-xl rounded-sm">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800" 
                    alt="Earthy modern sun-drenched custom living room with terracotta accents"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-[#F5CBA7] py-2 px-4 shadow-sm text-left">
                    <span className="text-[9px] uppercase font-bold text-[#D35400] block tracking-widest">Masterpiece</span>
                    <span className="text-xs font-bold text-[#4A2E16] font-display-saa">Saandhya Courtyard Duplex</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section 2: Stats Bar */}
      <section className="bg-[#FFFFFF]/80 backdrop-blur-sm border-y border-[#F5CBA7]/35 py-10 relative z-20 font-body-saa">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "350+", label: "Earthy Homes Curated" },
              { num: "15+", label: "Years of Mastery" },
              { num: "8", label: "Architecture Awards" },
              { num: "100%", label: "Bespoke Curation" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-3 border-r last:border-r-0 border-[#F5CBA7]/30 max-md:even:border-r-0">
                <span className="text-3xl lg:text-4xl font-display-saa font-bold text-[#D35400] tracking-tight">{stat.num}</span>
                <span className="text-[10px] lg:text-xs uppercase tracking-widest font-bold text-slate-500 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Principal Designer Bio */}
      <section id="bio" className="py-20 border-b border-[#F5CBA7]/35 bg-white font-body-saa">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Bio Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[360px] p-2.5 bg-[#FEF9E7] border border-[#F5CBA7] shadow-md rounded-sm">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                    alt="Saandhya Reddy - Principal Architect"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#D35400]/10 mix-blend-multiply"></div>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#D35400] uppercase tracking-[0.2em] block">Founder & Principal Designer</span>
              <h2 className="text-3xl lg:text-4xl font-display-saa font-bold text-[#4A2E16] tracking-tight">
                Saandhya Reddy
              </h2>
              <div className="w-16 h-[2px] bg-[#D35400]"></div>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                Saandhya Reddy designs with a deep reverence for regional soils, sunlight dynamics, and natural ventilation. Believing that homes should be extensions of the earth, she integrates traditional clay structures and terracotta panels with high-end master planning layout configurations.
              </p>
              <blockquote className="border-l-4 border-[#D35400] pl-4 py-2 italic text-sm text-slate-700 bg-[#FEF9E7]/70">
                &ldquo;Earthy terracotta textures and golden sunset gradients aren&apos;t merely colors; they represent home. We design residences to respond dynamically to Hyderabad&apos;s climate, creating cool, shaded sanctuaries.&rdquo;
              </blockquote>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase font-bold text-[#4A2E16] tracking-wider">Design Specializations:</h4>
                <div className="flex flex-wrap gap-2">
                  {['High-End Residential Interiors', 'Landscape & Lighting Design', 'Master Planning', 'Biophilic Architectural Integration'].map((spec, i) => (
                    <span key={i} className="px-3 py-1 bg-[#FEF9E7] border border-[#F5CBA7] text-[#4A2E16] text-xs font-semibold rounded-sm">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Portfolio Showcase / Interactive Style Selector */}
      <section id="portfolio" className="py-20 border-b border-[#F5CBA7]/35 bg-[#FEF9E7]/40 font-body-saa">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#D35400] uppercase tracking-[0.2em]">Couture Portfolios</span>
            <h2 className="text-3xl lg:text-4xl font-display-saa font-bold text-[#4A2E16] tracking-tight mt-3">Interactive Design Galleries</h2>
            <p className="text-slate-500 text-xs mt-2 font-body-saa">Select a category to view bespoke materials, execution timelines, and custom estimates.</p>
            <div className="w-16 h-[2px] bg-[#D35400] mx-auto mt-4"></div>
          </div>

          {/* Style Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {Object.keys(portfolioData).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedStyle(key)}
                className={`py-2.5 px-5 border text-xs uppercase tracking-wider font-bold transition-all rounded-sm active:scale-95 ${
                  selectedStyle === key
                    ? 'border-[#D35400] bg-[#D35400] text-white shadow-sm'
                    : 'border-[#F5CBA7]/60 bg-white text-slate-600 hover:border-[#D35400]'
                }`}
              >
                {portfolioData[key].title}
              </button>
            ))}
          </div>

          {/* Active Style Display */}
          <div className="bg-white border border-[#F5CBA7]/50 p-6 md:p-10 shadow-sm rounded-sm">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Showcase Image */}
              <div className="lg:col-span-6 relative">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 border border-[#F5CBA7]/30 rounded-sm">
                  <img 
                    src={portfolioData[selectedStyle].image} 
                    alt={portfolioData[selectedStyle].title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Showcase Details */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <span className="text-xs font-bold text-[#D35400] uppercase tracking-wider block">
                  {portfolioData[selectedStyle].tagline}
                </span>
                <h3 className="text-2xl lg:text-3xl font-display-saa font-bold text-[#4A2E16] tracking-tight">
                  {portfolioData[selectedStyle].title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-body-saa">
                  {portfolioData[selectedStyle].description}
                </p>

                <div className="h-[1px] bg-slate-100 my-4"></div>

                <div className="grid sm:grid-cols-2 gap-4 text-xs font-body-saa">
                  <div>
                    <span className="text-slate-400 font-bold uppercase tracking-wider block mb-1">Estimated Budget</span>
                    <span className="font-bold text-[#4A2E16]">{portfolioData[selectedStyle].budget}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase tracking-wider block mb-1">Curation Duration</span>
                    <span className="font-bold text-[#4A2E16]">{portfolioData[selectedStyle].duration}</span>
                  </div>
                </div>

                <div className="pt-2 font-body-saa">
                  <span className="text-slate-400 font-bold uppercase tracking-wider block text-xs mb-2">Earthy Materials Palette</span>
                  <div className="flex flex-wrap gap-1.5">
                    {portfolioData[selectedStyle].materials.map((mat, i) => (
                      <span key={i} className="px-2 py-1 bg-[#FEF9E7] text-[#4A2E16] text-[10px] font-bold border border-[#F5CBA7]/40 rounded-sm">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <a 
                    href="#booking"
                    onClick={() => {
                      setForm(prev => ({
                        ...prev,
                        projectType: selectedStyle === 'landscape' ? 'Landscape Consultation' : 'Residential Interior',
                        message: `Dear Saandhya Reddy, I want to explore styling options for "${portfolioData[selectedStyle].title}" with budget tier ${portfolioData[selectedStyle].budget}.`
                      }));
                    }}
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#D35400] hover:text-[#A04000] group"
                  >
                    Configure this architecture style
                    <ChevronRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Interactive Design Style Quiz */}
      <section id="quiz" className="py-20 border-b border-[#F5CBA7]/35 bg-white font-body-saa">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#D35400] uppercase tracking-[0.2em]">Bespoke Consultation</span>
            <h2 className="text-3xl lg:text-4xl font-display-saa font-bold text-[#4A2E16] tracking-tight mt-3">Interactive Material & Light Quiz</h2>
            <p className="text-slate-500 text-xs mt-2">Answer 3 contextual choices to align your biophilic preferences with Saandhya Reddy.</p>
            <div className="w-16 h-[2px] bg-[#D35400] mx-auto mt-4"></div>
          </div>

          <div className="p-6 md:p-10 bg-[#FEF9E7] border border-[#F5CBA7]/80 rounded-sm">
            {quizResult ? (
              <div className="text-center py-6 space-y-6">
                <div className="w-16 h-16 bg-[#D35400]/10 text-[#D35400] rounded-full flex items-center justify-center mx-auto border border-[#D35400]/30">
                  <Sun size={28} className="text-[#D35400]" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">Your Curated Matching Profile</span>
                  <h3 className="text-2xl md:text-3xl font-display-saa font-bold text-[#4A2E16]">{quizResult}</h3>
                </div>
                <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed font-body-saa">
                  We recommend organizing your home layout around the {quizResult} framework. We focus on maximizing golden hour reflections, placing courtyard gardens, and adding warm wood/terracotta louvres.
                </p>
                <div className="flex justify-center gap-4">
                  <button 
                    onClick={() => {
                      setForm(prev => ({
                        ...prev,
                        message: `My Saandhya quiz recommendation profile is: ${quizResult}. I want to apply this theme to my home.`
                      }));
                      // Scroll to booking
                      document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3 bg-[#D35400] hover:bg-[#A04000] text-white text-xs uppercase tracking-wider font-bold rounded-sm active:scale-95"
                  >
                    Apply Profile to Booking
                  </button>
                  <button 
                    onClick={resetQuiz}
                    className="px-6 py-3 border border-[#F5CBA7] bg-white text-slate-700 text-xs uppercase tracking-wider font-bold rounded-sm active:scale-95 hover:bg-slate-50"
                  >
                    Retake Assessment
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Question 1 */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase font-bold text-slate-600 tracking-wider">
                    Question 1: Which warm ambient light spectrum appeals most to you?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {[
                      { key: 'golden', label: 'Golden hour sunset rays reflecting on terracotta walls' },
                      { key: 'diffused', label: 'Warm diffused morning skylights over indoor plants' },
                      { key: 'landscape', label: 'Subtle pathway lighting highlighting natural stone' },
                      { key: 'cozy', label: 'Low-voltage diffused warm brass interior LEDs' }
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => handleQuizSelect('light', opt.key)}
                        className={`p-3 text-left border rounded-sm transition-all font-bold ${
                          quizAnswers.light === opt.key
                            ? 'border-[#D35400] bg-[#D35400]/5 text-[#A04000]'
                            : 'border-[#F5CBA7]/60 bg-white text-slate-700 hover:border-[#D35400]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 2 */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase font-bold text-slate-600 tracking-wider">
                    Question 2: How would you prefer to integrate green vegetation?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {[
                      { key: 'courtyards', label: 'Lush central open-air courtyards under skylights' },
                      { key: 'terraces', label: 'Wrap-around landscaped stone terraces' },
                      { key: 'planters', label: 'Minimalist integrated teak planter windows' },
                      { key: 'orchard', label: 'A master-planned perimeter garden layout' }
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => handleQuizSelect('plants', opt.key)}
                        className={`p-3 text-left border rounded-sm transition-all font-bold ${
                          quizAnswers.plants === opt.key
                            ? 'border-[#D35400] bg-[#D35400]/5 text-[#A04000]'
                            : 'border-[#F5CBA7]/60 bg-white text-slate-700 hover:border-[#D35400]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 3 */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase font-bold text-slate-600 tracking-wider">
                    Question 3: What primary furniture wood texture do you prefer?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {[
                      { key: 'oak', label: 'Warm honey-toned solid white oak' },
                      { key: 'walnut', label: 'Rich organic raw walnut details' },
                      { key: 'rattan', label: 'Light hand-woven rattan & cane screens' },
                      { key: 'teak', label: 'Recycled durable teakwood columns' }
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => handleQuizSelect('woods', opt.key)}
                        className={`p-3 text-left border rounded-sm transition-all font-bold ${
                          quizAnswers.woods === opt.key
                            ? 'border-[#D35400] bg-[#D35400]/5 text-[#A04000]'
                            : 'border-[#F5CBA7]/60 bg-white text-slate-700 hover:border-[#D35400]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F5CBA7]/50 flex justify-end">
                  <button 
                    onClick={calculateQuizResult}
                    className="px-8 py-3.5 bg-[#D35400] hover:bg-[#A04000] text-white text-xs uppercase tracking-widest font-bold rounded-sm active:scale-95 shadow-sm"
                  >
                    Generate Curation Recommendation
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 6: Our Design Process */}
      <section id="process" className="py-20 border-b border-[#F5CBA7]/35 bg-[#FEF9E7]/40 font-body-saa">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#D35400] uppercase tracking-[0.2em]">Curation Timelines</span>
            <h2 className="text-3xl lg:text-4xl font-display-saa font-bold text-[#4A2E16] tracking-tight mt-3">Our Curatorial Design Process</h2>
            <p className="text-slate-500 text-xs mt-2 font-body-saa">We organize project execution into five clear milestone steps.</p>
            <div className="w-16 h-[2px] bg-[#D35400] mx-auto mt-4"></div>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-5 border border-[#F5CBA7]/70 bg-white rounded-sm divide-x divide-[#F5CBA7]/70 overflow-hidden mb-8">
            {processSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`py-4 px-2 text-center transition-all flex flex-col items-center justify-center gap-1 active:scale-95 ${
                  activeStep === idx 
                    ? 'bg-[#D35400]/5 text-[#D35400]' 
                    : 'text-slate-500 hover:text-[#D35400] hover:bg-[#FEF9E7]/30'
                }`}
              >
                <span className="text-[10px] font-bold text-slate-400 block tracking-widest uppercase">Step 0{idx + 1}</span>
                <span className="text-xs font-bold truncate max-w-full">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Stepper Display Card */}
          <div className="bg-white border border-[#F5CBA7]/50 p-6 md:p-10 shadow-sm rounded-sm">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D35400] uppercase tracking-wider">
                  <span>Step 0{activeStep + 1}</span>
                  <span className="text-slate-300">|</span>
                  <span>{processSteps[activeStep].subtitle}</span>
                </div>
                <h3 className="text-2xl font-display-saa font-bold text-[#4A2E16] tracking-tight">
                  {processSteps[activeStep].title} Stage
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-body-saa">
                  {processSteps[activeStep].details}
                </p>
              </div>

              <div className="shrink-0 bg-[#FEF9E7] border border-[#F5CBA7]/60 px-6 py-4 rounded-sm text-right max-md:w-full max-md:text-left font-body-saa">
                <span className="text-[10px] font-bold text-slate-400 block tracking-widest uppercase mb-1">Target Timeline</span>
                <span className="text-sm font-bold text-[#D35400] block">{processSteps[activeStep].duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Client Testimonials */}
      <section id="testimonials" className="py-20 border-b border-[#F5CBA7]/35 bg-white font-body-saa">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#D35400] uppercase tracking-[0.2em]">Client Stories</span>
            <h2 className="text-3xl lg:text-4xl font-display-saa font-bold text-[#4A2E16] tracking-tight mt-3">Hyderabad Family Reviews</h2>
            <div className="w-16 h-[2px] bg-[#D35400] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Saandhya Reddy curated our home opposite Park Hyatt Lane. The sandblasted lime-wash plaster and terracotta panels keep our living room remarkably cool during hot Hyderabad summers. Outstanding attention to lighting detail.",
                author: "Nihira Reddy",
                location: "Banjara Hills, Hyderabad",
                role: "duplex homeowner"
              },
              {
                text: "We wanted a home that integrated landscape plants and natural stone. The biophilic designs executed by Saandhya Reddy surpassed our dreams. Our courtyard garden is now the central gathering spot for the family.",
                author: "Dr. Srinivas & Sandhya",
                location: "Jubilee Hills",
                role: "courtyard villa client"
              },
              {
                text: "The lighting curation is magical. At golden hour, sunlight paths interact beautifully with the terracotta walls, and at night, the warm low-voltage LEDs highlight the basalt stone walkways elegantly.",
                author: "Siddharth Rao",
                location: "Gandipet Country Estate",
                role: "estate owner"
              }
            ].map((review, i) => (
              <div key={i} className="p-8 border border-[#F5CBA7]/60 bg-[#FEF9E7]/30 flex flex-col justify-between shadow-sm rounded-sm hover:-translate-y-1 transition-all duration-300">
                <div className="space-y-4 font-body-saa">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, rIdx) => (
                      <Star key={rIdx} size={12} className="text-[#D35400] fill-[#D35400]" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#F5CBA7]/30 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D35400]/10 border border-[#D35400]/30 flex items-center justify-center text-xs font-bold text-[#D35400]">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#4A2E16]">{review.author}</h4>
                    <span className="text-[9px] text-[#D35400] block tracking-wider uppercase font-bold mt-0.5">
                      {review.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Consultation Booking / Enquiry Form */}
      <section id="booking" className="py-20 border-b border-[#F5CBA7]/35 bg-[#FEF9E7]/40 font-body-saa">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#D35400] uppercase tracking-[0.2em]">Enquiry Registry</span>
            <h2 className="text-3xl lg:text-4xl font-display-saa font-bold text-[#4A2E16] tracking-tight mt-3">Book Curation Consultation</h2>
            <p className="text-slate-500 text-xs mt-2">Submit details to schedule an architectural review with Saandhya Reddy.</p>
            <div className="w-16 h-[2px] bg-[#D35400] mx-auto mt-4"></div>
          </div>

          <div className="p-8 md:p-12 border border-[#F5CBA7]/60 bg-white shadow-lg rounded-sm relative overflow-hidden">
            {submitSuccess ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 bg-amber-50 border border-amber-300 text-[#D35400] rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <Check size={28} />
                </div>
                <h3 className="text-2xl font-display-saa font-bold text-[#4A2E16]">Curation Registered</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-700">{form.name}</strong>. Our studio curators have logged your architectural request. Saandhya Reddy will review your details shortly.
                </p>
                <div className="bg-[#FEF9E7] border border-[#F5CBA7]/50 p-5 rounded-sm max-w-sm mx-auto text-left text-xs space-y-2.5">
                  <div className="flex justify-between border-b border-[#F5CBA7]/30 pb-1.5"><span className="text-slate-400 font-bold uppercase tracking-wider">Curation ID:</span> <span className="font-mono font-bold text-slate-700">{confirmationNumber}</span></div>
                  <div className="flex justify-between border-b border-[#F5CBA7]/30 pb-1.5"><span className="text-slate-400 font-bold uppercase tracking-wider">Project Niche:</span> <span className="font-bold text-slate-700">{form.projectType}</span></div>
                  <div className="flex justify-between border-b border-[#F5CBA7]/30 pb-1.5"><span className="text-slate-400 font-bold uppercase tracking-wider">Target Budget:</span> <span className="font-bold text-slate-700">{form.budget}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400 font-bold uppercase tracking-wider">Contact Phone:</span> <span className="font-mono font-bold text-slate-700">{form.phone}</span></div>
                </div>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 border border-[#D35400] text-[#D35400] hover:bg-[#FEF9E7]/40 uppercase text-xs tracking-wider font-bold transition-all active:scale-95"
                >
                  Register Another Consultation
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6 text-xs text-left">
                {/* Info Notice */}
                <div className="flex items-start gap-2.5 p-3.5 bg-amber-50 border border-amber-200 text-[#4A2E16] rounded-sm">
                  <Info size={16} className="shrink-0 mt-0.5 text-[#D35400]" />
                  <p className="leading-relaxed font-body-saa">
                    Initial assessments involve a comprehensive site audit under natural daylight. Form fields are validated in real-time.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">FULL NAME *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 bg-[#FEF9E7]/30 border ${errors.name ? 'border-red-500' : 'border-[#F5CBA7]/70 focus:border-[#D35400]'} rounded-sm focus:outline-none focus:bg-white transition-all`}
                      placeholder="e.g. Ananya Reddy"
                    />
                    {errors.name && (
                      <p className="text-red-500 mt-1 flex items-center gap-1 font-semibold text-[11px] font-body-saa">
                        <AlertCircle size={10} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">PHONE NUMBER *</label>
                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 bg-[#FEF9E7]/30 border ${errors.phone ? 'border-red-500' : 'border-[#F5CBA7]/70 focus:border-[#D35400]'} rounded-sm focus:outline-none focus:bg-white transition-all`}
                      placeholder="e.g. +91 81219 39889"
                    />
                    {errors.phone && (
                      <p className="text-red-500 mt-1 flex items-center gap-1 font-semibold text-[11px] font-body-saa">
                        <AlertCircle size={10} /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 bg-[#FEF9E7]/30 border ${errors.email ? 'border-red-500' : 'border-[#F5CBA7]/70 focus:border-[#D35400]'} rounded-sm focus:outline-none focus:bg-white transition-all`}
                      placeholder="e.g. ananya@domain.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 mt-1 flex items-center gap-1 font-semibold text-[11px] font-body-saa">
                        <AlertCircle size={10} /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">PROJECT TYPE *</label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 bg-[#FEF9E7]/30 border ${errors.projectType ? 'border-red-500' : 'border-[#F5CBA7]/70 focus:border-[#D35400]'} rounded-sm focus:outline-none focus:bg-white transition-all text-slate-700 font-body-saa`}
                    >
                      <option value="">Select Option</option>
                      <option value="Residential Interior">High-End Residential Interiors</option>
                      <option value="Landscape Design">Landscape and Lighting Design</option>
                      <option value="Master Planning">Master Estate Planning</option>
                      <option value="Biophilic Architecture">Biophilic Architecture Elevation</option>
                    </select>
                    {errors.projectType && (
                      <p className="text-red-500 mt-1 flex items-center gap-1 font-semibold text-[11px] font-body-saa">
                        <AlertCircle size={10} /> {errors.projectType}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Budget Dropdown */}
                  <div>
                    <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">BUDGET RANGE *</label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 bg-[#FEF9E7]/30 border ${errors.budget ? 'border-red-500' : 'border-[#F5CBA7]/70 focus:border-[#D35400]'} rounded-sm focus:outline-none focus:bg-white transition-all text-slate-700 font-body-saa`}
                    >
                      <option value="">Select Option</option>
                      <option value="₹50L - ₹1.0Cr">₹50 Lakhs - ₹1.0 Crores</option>
                      <option value="₹1.0Cr - ₹2.5Cr">₹1.0 Crores - ₹2.5 Crores</option>
                      <option value="₹2.5Cr - ₹5.0Cr">₹2.5 Crores - ₹5.0 Crores</option>
                      <option value="₹5.0Cr+">₹5.0 Crores +</option>
                    </select>
                    {errors.budget && (
                      <p className="text-red-500 mt-1 flex items-center gap-1 font-semibold text-[11px] font-body-saa">
                        <AlertCircle size={10} /> {errors.budget}
                      </p>
                    )}
                  </div>

                  {/* Start Date */}
                  <div>
                    <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">TARGET TIMELINE *</label>
                    <input
                      type="date"
                      name="startDate"
                      value={form.startDate}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 bg-[#FEF9E7]/30 border ${errors.startDate ? 'border-red-500' : 'border-[#F5CBA7]/70 focus:border-[#D35400]'} rounded-sm focus:outline-none focus:bg-white transition-all text-slate-700 font-body-saa`}
                    />
                    {errors.startDate && (
                      <p className="text-red-500 mt-1 flex items-center gap-1 font-semibold text-[11px] font-body-saa">
                        <AlertCircle size={10} /> {errors.startDate}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">MESSAGE & NOTES</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleInputChange}
                    className="w-full p-3.5 bg-[#FEF9E7]/30 border border-[#F5CBA7]/70 focus:border-[#D35400] rounded-sm focus:outline-none focus:bg-white transition-all resize-none text-slate-700 font-body-saa"
                    placeholder="Describe specific landscape layouts, sun trajectory preferences, or structural requests..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#D35400] hover:bg-[#A04000] text-white uppercase tracking-widest font-bold transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex justify-center items-center gap-2 shadow-md rounded-sm"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw size={14} className="animate-spin" />
                      Logging Curation Request...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Log Curatorial Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Section 9: Studio Location & Hours Footer */}
      <footer className="bg-white text-[#4A2E16] py-16 border-t border-[#F5CBA7]/40 font-body-saa text-xs tracking-wide">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12">
          {/* Column 1: Studio Info */}
          <div className="space-y-4">
            <h3 className="font-display-saa text-base uppercase tracking-wider font-bold text-[#D35400] flex items-center gap-1.5">
              <span className="w-3 h-3 bg-[#D35400] rounded-full"></span>
              SAANDHYA
            </h3>
            <p className="text-slate-500 leading-relaxed max-w-sm font-body-saa">
              High-end biophilic residential layouts, lighting aesthetics, and sandblasted terracotta panels. Designing natural light-filled habitats in Banjara Hills, Hyderabad.
            </p>
          </div>

          {/* Column 2: Location Details */}
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Flagship Showroom</h3>
            <ul className="space-y-3 text-slate-500 font-body-saa">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-[#D35400] shrink-0 mt-0.5" />
                <span>Banjara Hills, Road No. 2, Opp. Park Hyatt Lane, Hyderabad, Telangana 500034</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#D35400] shrink-0" />
                <span className="font-mono font-bold">+91 81219 39889</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#D35400] shrink-0" />
                <span>curate@saandhyaarchitects.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Map Preview */}
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Atelier Scheduling</h3>
            <ul className="space-y-2 text-slate-500 font-body-saa">
              <li className="flex justify-between max-w-xs"><span>Monday – Saturday:</span> <span>10:00 AM – 6:30 PM</span></li>
              <li className="flex justify-between max-w-xs"><span>Sunday:</span> <span className="text-[#D35400] font-bold">By Appointment Only</span></li>
            </ul>
            
            {/* SVG Interactive Map Placeholder */}
            <div className="pt-2 font-body-saa">
              <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400 block mb-2">Location Map Grid</span>
              <div className="w-full h-24 bg-[#FEF9E7] border border-[#F5CBA7] rounded-sm relative overflow-hidden flex items-center justify-center">
                <svg className="w-full h-full opacity-70" viewBox="0 0 200 80">
                  <line x1="0" y1="30" x2="200" y2="30" stroke="#F5CBA7" strokeWidth="0.5" strokeDasharray="3 3" />
                  <line x1="0" y1="55" x2="200" y2="55" stroke="#F5CBA7" strokeWidth="0.5" />
                  <line x1="60" y1="0" x2="60" y2="80" stroke="#F5CBA7" strokeWidth="0.5" />
                  <line x1="150" y1="0" x2="150" y2="80" stroke="#F5CBA7" strokeWidth="0.5" strokeDasharray="3 3" />
                  
                  {/* Road Names */}
                  <text x="5" y="25" fill="#C87F4A" fontSize="5" fontWeight="bold">ROAD NO. 1</text>
                  <text x="65" y="50" fill="#C87F4A" fontSize="5" fontWeight="bold">ROAD NO. 2 (BANJARA HILLS)</text>
                  
                  {/* Studio Pin */}
                  <circle cx="110" cy="55" r="4.5" fill="#D35400" className="animate-pulse" />
                  <circle cx="110" cy="55" r="1.5" fill="#FFFFFF" />
                  <text x="118" y="57" fill="#4A2E16" fontSize="5" fontWeight="bold">SAANDHYA (OPP. PARK HYATT)</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-[#F5CBA7]/40 text-center text-[9px] text-slate-400 tracking-[0.25em]">
          <p>© {new Date().getFullYear()} SAANDHYA ARCHITECTS. COUTURE REGISTRATION RESERVED. SCHEDULING BLUEPRINTS ARE CLIMATICALLY SENSITIVE.</p>
        </div>
      </footer>
    </div>
  );
}

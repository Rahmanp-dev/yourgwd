"use client";
import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Award, Clock, Star, Sparkles, ChevronRight, 
  Send, Compass, HelpCircle, RefreshCw, Sliders, MessageSquare, 
  Check, ArrowRight, Calendar, User, LayoutGrid, Hammer, FileText,
  AlertCircle, Building, CheckCircle2, ChevronDown, Eye, Filter, Info
} from 'lucide-react';

export default function CivilizationArchitectsPage() {
  // 1. Portfolio Style Selector State
  const [selectedStyle, setSelectedStyle] = useState('industrial');

  // Portfolio items data
  const portfolioData = {
    industrial: {
      title: "Industrial Light Loft",
      tagline: "Concrete, glass, and steel in perfect balance",
      budget: "₹85 Lakhs - ₹1.8 Crores",
      materials: ["Exposed Micro-Concrete", "Powder-coated Electric Teal Metal", "Textured Glass", "Brushed Aluminium", "Recycled Oak Panels"],
      duration: "6 - 8 Months",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      description: "A premium, open-concept duplex loft in Banjara Hills, featuring double-height ceiling voids, raw architectural columns, and bespoke electric teal metal partitions."
    },
    minimalist: {
      title: "Clean Minimalist Atelier",
      tagline: "Uncluttered simplicity, pure spatial volume",
      budget: "₹65 Lakhs - ₹1.2 Crores",
      materials: ["White Lime Plaster", "Polished Terrazzo", "Light Ash Wood", "Slimline Frame Windows", "Hidden LED Profiles"],
      duration: "5 - 7 Months",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      description: "An architectural expression of calm. This Gachibowli penthouse focuses on natural shadows, clean lines, and concealing functional storage to highlight open spaces."
    },
    contemporary: {
      title: "Eco-Architectural Pavilion",
      tagline: "Biophilic integration with structural innovation",
      budget: "₹1.5 Crores - ₹3.2 Crores",
      materials: ["Local Granite Stone", "Sustainable Bamboo Panels", "Low-E Triple Glazing", "Living Green Walls", "Rainwater Collection Flumes"],
      duration: "9 - 12 Months",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
      description: "A sprawling private residence in Jubilee Hills designed with climate-responsive orientation, solar shading, and lush vertical gardens built directly into the structural columns."
    },
    commercial: {
      title: "Executive Commercial Office",
      tagline: "Inspiring workspace built for high-scale productivity",
      budget: "₹2.2 Crores - ₹5.0 Crores",
      materials: ["Acoustic Timber Slats", "Concrete Screed Floors", "Electric Teal Accents", "Smart Glass Partitions", "Ergonomic Layout Zones"],
      duration: "8 - 10 Months",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      description: "A high-performance corporate headquarters in Hitech City designed to facilitate flexible teamwork, featuring private acoustic pods and light-filled open-plan desks."
    }
  };

  // 2. Quiz State
  const [quizAnswers, setQuizAnswers] = useState({
    materials: '',
    light: '',
    layout: ''
  });
  const [quizResult, setQuizResult] = useState('');

  const handleQuizSelect = (key, value) => {
    setQuizAnswers(prev => ({ ...prev, [key]: value }));
  };

  const calculateQuizResult = () => {
    if (!quizAnswers.materials || !quizAnswers.light || !quizAnswers.layout) {
      alert("Please answer all questions before submitting.");
      return;
    }

    // Recommendation logic
    if (quizAnswers.materials === 'concrete' && quizAnswers.light === 'maximum') {
      setQuizResult('Industrial Light Loft');
    } else if (quizAnswers.materials === 'plaster' || quizAnswers.layout === 'minimalist') {
      setQuizResult('Clean Minimalist Atelier');
    } else if (quizAnswers.materials === 'stone' || quizAnswers.light === 'diffused') {
      setQuizResult('Eco-Architectural Pavilion');
    } else {
      setQuizResult('Executive Commercial Office');
    }
  };

  const resetQuiz = () => {
    setQuizAnswers({ materials: '', light: '', layout: '' });
    setQuizResult('');
  };

  // 3. Design Process Interactive State
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      title: "Consultation",
      subtitle: "Site Audit & Briefing",
      duration: "1 - 2 Weeks",
      details: "We conduct a thorough evaluation of your plot or property in Hyderabad, analyzing orientation, soil reports, and structural feasibility. S. Vijay Kumar leads the initial session to align spatial needs with your lifestyle."
    },
    {
      title: "Concept",
      subtitle: "Spatial Sketching",
      duration: "2 - 3 Weeks",
      details: "Our design lab generates detailed 2D layouts and hand-sketched conceptual blueprints. We focus on natural ventilation pathways, lighting direction, and establishing structural volumes."
    },
    {
      title: "3D Rendering",
      subtitle: "High-Fidelity Models",
      duration: "3 - 4 Weeks",
      details: "We build precise 3D digital twins of your design. You can visualize the exact micro-concrete textures, teal accents, custom lighting fixtures, and custom-designed residential furniture in realistic light simulations."
    },
    {
      title: "Procurement",
      subtitle: "Material Curation",
      duration: "2 - 4 Weeks",
      details: "Civilization handles direct sourcing of premium materials: choosing concrete blends, custom-fabricated powder-coated steel panels, triple-glazed glass, and designer lighting fixtures to guarantee design fidelity."
    },
    {
      title: "Execution",
      subtitle: "Project Management",
      duration: "6 - 12 Months",
      details: "Our engineers and designers monitor site development constantly. We perform rigorous structural inspections, check detailing dimensions daily, and deliver a clean, turnkey, light-filled environment."
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
      if (!value) err = "Please select a project type";
    }
    if (name === "budget") {
      if (!value) err = "Please select your budget range";
    }
    if (name === "startDate") {
      if (!value) err = "Please select a target start date";
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
      // Scroll to the first error
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
      setConfirmationNumber(`CIV-${randNum}`);
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
    <div className="min-h-screen bg-[#F2F4F4] text-[#2C3E50] font-sans selection:bg-[#17A589]/20 selection:text-[#117A65] antialiased">
      {/* Load Space Grotesk font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        .font-display-civ { font-family: 'Space Grotesk', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#F2F4F4]/90 border-b border-[#BDC3C7]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex flex-col">
              <span className="font-display-civ text-xl lg:text-2xl font-bold tracking-tight text-[#2C3E50] flex items-center gap-2">
                <span className="w-3.5 h-3.5 bg-[#17A589] rounded-sm inline-block"></span>
                CIVILIZATION
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase font-semibold text-slate-500 font-display-civ -mt-1">
                Architects & Planners
              </span>
            </div>
            <div className="hidden md:flex space-x-8 font-display-civ text-xs uppercase tracking-widest font-bold">
              <a href="#hero" className="hover:text-[#17A589] transition-colors py-1">Home</a>
              <a href="#bio" className="hover:text-[#17A589] transition-colors py-1">Principal</a>
              <a href="#portfolio" className="hover:text-[#17A589] transition-colors py-1">Portfolio</a>
              <a href="#quiz" className="hover:text-[#17A589] transition-colors py-1">Style Quiz</a>
              <a href="#process" className="hover:text-[#17A589] transition-colors py-1">Our Process</a>
              <a href="#testimonials" className="hover:text-[#17A589] transition-colors py-1">Reviews</a>
            </div>
            <div>
              <a 
                href="#booking" 
                className="inline-flex items-center px-5 py-2.5 bg-[#17A589] hover:bg-[#117A65] text-white transition-all text-xs uppercase tracking-wider font-bold font-display-civ rounded-sm active:scale-95 shadow-sm"
              >
                Book Session
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Section 1: Hero Section */}
      <header id="hero" className="relative pt-12 pb-24 overflow-hidden border-b border-[#BDC3C7]/30">
        {/* Subtle grid line background for concrete/architectural look */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#BDC3C7_1px,transparent_1px),linear-gradient(to_bottom,#BDC3C7_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-15"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FFFFFF] border border-[#BDC3C7] text-[#17A589] text-xs font-bold font-display-civ tracking-wider w-fit">
                <Sparkles size={12} />
                <span>Bespoke Architectural Engineering</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-display-civ font-bold leading-[1.05] text-[#2C3E50] tracking-tight">
                Architectural Integrity <br />
                <span className="text-[#17A589]">Designed for Life.</span>
              </h1>
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed max-w-xl">
                We craft light-filled, industrial-inspired environments in Hyderabad that balance concrete textures with refined electric teal accents. Led by S. Vijay Kumar, our spaces redefine modern luxury.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="#booking" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-[#17A589] hover:bg-[#117A65] text-white font-display-civ text-xs uppercase tracking-widest font-bold transition-all active:scale-95 shadow-md"
                >
                  Book Design Consultation
                  <ArrowRight size={14} className="ml-2" />
                </a>
                <a 
                  href="#portfolio" 
                  className="inline-flex justify-center items-center px-8 py-4 border border-[#BDC3C7] bg-[#FFFFFF] hover:bg-[#F2F4F4] text-[#2C3E50] font-display-civ text-xs uppercase tracking-widest font-bold transition-all active:scale-95"
                >
                  Explore Workspace
                </a>
              </div>
            </div>

            {/* Premium architectural image with concrete frame details */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] p-2 bg-white border border-[#BDC3C7] shadow-xl rounded-sm">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
                    alt="Luxury light loft interior with concrete wall and teal metal frame"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Floating badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-[#BDC3C7] py-2 px-4 shadow-sm text-left">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-widest">Featured Project</span>
                    <span className="text-xs font-bold text-[#2C3E50] font-display-civ">Banjara Hills Loft, Hyd</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section 2: Stats Bar */}
      <section className="bg-white border-y border-[#BDC3C7]/40 py-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "450+", label: "Projects Completed" },
              { num: "18+", label: "Years of Experience" },
              { num: "12", label: "National Design Awards" },
              { num: "100%", label: "Satisfaction Rate" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-3 border-r last:border-r-0 border-[#BDC3C7]/30 max-md:even:border-r-0">
                <span className="text-3xl lg:text-4xl font-display-civ font-bold text-[#17A589] tracking-tight">{stat.num}</span>
                <span className="text-[10px] lg:text-xs uppercase tracking-widest font-semibold text-slate-500 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Principal Designer Bio */}
      <section id="bio" className="py-20 border-b border-[#BDC3C7]/30 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Bio Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[360px] p-2 bg-[#F2F4F4] border border-[#BDC3C7] shadow-md rounded-sm">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                    alt="S. Vijay Kumar - Principal Architect"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#17A589]/10 mix-blend-multiply"></div>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#17A589] uppercase tracking-[0.25em] font-display-civ block">Principal Architect</span>
              <h2 className="text-3xl lg:text-4xl font-display-civ font-bold text-[#2C3E50] tracking-tight">
                S. Vijay Kumar
              </h2>
              <div className="w-16 h-[2px] bg-[#17A589]"></div>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                Vijay Kumar is a graduate of structural architecture, dedicating nearly two decades to designing high-performance residential spaces and signature offices. His philosophy centers around the concept of &apos;Structural Truth&apos; — allowing raw materials to speak for themselves rather than hiding them under heavy layers.
              </p>
              <blockquote className="border-l-4 border-[#17A589] pl-4 py-2 italic text-sm text-slate-700 bg-[#F2F4F4]/70">
                &ldquo;Architecture is not just about decorating facades; it is the curation of light, flow, and raw material durability. We bring industrial loft sensibilities to Hyderabad, adapting them to local climate realities.&rdquo;
              </blockquote>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase font-bold text-[#2C3E50] font-display-civ tracking-wider">Area of Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Architectural Design', 'Custom Residential Interiors', 'Office & Commercial Design', 'Concrete Texture Planning'].map((spec, i) => (
                    <span key={i} className="px-3 py-1 bg-[#F2F4F4] border border-[#BDC3C7] text-slate-700 text-xs font-medium rounded-sm">
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
      <section id="portfolio" className="py-20 border-b border-[#BDC3C7]/30 bg-[#F2F4F4]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#17A589] uppercase tracking-[0.25em] font-display-civ">Featured Works</span>
            <h2 className="text-3xl lg:text-4xl font-display-civ font-bold text-[#2C3E50] tracking-tight mt-3">Interactive Workspace Showcase</h2>
            <p className="text-slate-500 text-xs mt-2">Explore details of our design styles, budget guidelines, and specific materials tailored to Hyderabad climates.</p>
            <div className="w-16 h-[2px] bg-[#17A589] mx-auto mt-4"></div>
          </div>

          {/* Style Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {Object.keys(portfolioData).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedStyle(key)}
                className={`py-2.5 px-5 border text-xs uppercase tracking-wider font-bold transition-all rounded-sm font-display-civ active:scale-95 ${
                  selectedStyle === key
                    ? 'border-[#17A589] bg-[#17A589] text-white shadow-sm'
                    : 'border-[#BDC3C7]/60 bg-white text-slate-600 hover:border-[#17A589]'
                }`}
              >
                {portfolioData[key].title}
              </button>
            ))}
          </div>

          {/* Active Style Display */}
          <div className="bg-white border border-[#BDC3C7]/60 p-6 md:p-10 shadow-sm rounded-sm">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Showcase Image */}
              <div className="lg:col-span-6 relative">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 border border-[#BDC3C7]/40 rounded-sm">
                  <img 
                    src={portfolioData[selectedStyle].image} 
                    alt={portfolioData[selectedStyle].title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Showcase Text details */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <span className="text-xs font-bold text-[#17A589] uppercase tracking-wider font-display-civ block">
                  {portfolioData[selectedStyle].tagline}
                </span>
                <h3 className="text-2xl lg:text-3xl font-display-civ font-bold text-[#2C3E50] tracking-tight">
                  {portfolioData[selectedStyle].title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {portfolioData[selectedStyle].description}
                </p>

                <div className="h-[1px] bg-slate-200 my-4"></div>

                <div className="grid sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 font-bold uppercase tracking-wider block mb-1">Estimated Budget</span>
                    <span className="font-bold text-[#2C3E50] font-display-civ">{portfolioData[selectedStyle].budget}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase tracking-wider block mb-1">Execution Duration</span>
                    <span className="font-bold text-[#2C3E50] font-display-civ">{portfolioData[selectedStyle].duration}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-slate-400 font-bold uppercase tracking-wider block text-xs mb-2">Curated Materials</span>
                  <div className="flex flex-wrap gap-1.5">
                    {portfolioData[selectedStyle].materials.map((mat, i) => (
                      <span key={i} className="px-2 py-1 bg-[#F2F4F4] text-slate-700 text-[10px] font-semibold border border-[#BDC3C7]/50 rounded-sm">
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
                        projectType: selectedStyle === 'commercial' ? 'Commercial Office' : 'Residential Interior',
                        message: `Hi S. Vijay Kumar, I am interested in building a project styled as "${portfolioData[selectedStyle].title}" with estimate budget ${portfolioData[selectedStyle].budget}.`
                      }));
                    }}
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#17A589] hover:text-[#117A65] group"
                  >
                    Select this design style
                    <ChevronRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Interactive Design Style Quiz */}
      <section id="quiz" className="py-20 border-b border-[#BDC3C7]/30 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#17A589] uppercase tracking-[0.25em] font-display-civ">Interactive Assistant</span>
            <h2 className="text-3xl lg:text-4xl font-display-civ font-bold text-[#2C3E50] tracking-tight mt-3">Design Style Recommendation Quiz</h2>
            <p className="text-slate-500 text-xs mt-2">Answer 3 simple questions and our algorithm will identify your aesthetic blueprint.</p>
            <div className="w-16 h-[2px] bg-[#17A589] mx-auto mt-4"></div>
          </div>

          <div className="p-6 md:p-10 bg-[#F2F4F4] border border-[#BDC3C7] rounded-sm">
            {quizResult ? (
              <div className="text-center py-6 space-y-6">
                <div className="w-16 h-16 bg-[#17A589]/10 text-[#17A589] rounded-full flex items-center justify-center mx-auto border border-[#17A589]/30">
                  <Sparkles size={28} />
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">Recommended Match</span>
                  <h3 className="text-2xl md:text-3xl font-display-civ font-bold text-[#2C3E50]">{quizResult}</h3>
                </div>
                <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                  Based on your choices, you appreciate structural authenticity, concrete textures, natural open light patterns, and functional layouts. We suggest exploring our signature {quizResult} palette.
                </p>
                <div className="flex justify-center gap-4">
                  <button 
                    onClick={() => {
                      setForm(prev => ({
                        ...prev,
                        message: `My Quiz recommendation was: ${quizResult}. I would like to design my property around this style.`
                      }));
                      // Scroll to booking
                      document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3 bg-[#17A589] hover:bg-[#117A65] text-white text-xs uppercase tracking-wider font-bold font-display-civ rounded-sm active:scale-95"
                  >
                    Apply Style to Booking
                  </button>
                  <button 
                    onClick={resetQuiz}
                    className="px-6 py-3 border border-[#BDC3C7] bg-white text-slate-700 text-xs uppercase tracking-wider font-bold font-display-civ rounded-sm active:scale-95 hover:bg-slate-50"
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Question 1 */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase font-bold text-slate-600 font-display-civ tracking-wider">
                    Question 1: What is your primary choice of material texture?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {[
                      { key: 'concrete', label: 'Raw micro-concrete & sandblasted steel' },
                      { key: 'plaster', label: 'Polished white plaster & light timber slats' },
                      { key: 'stone', label: 'Natural split stone & bamboo weaves' },
                      { key: 'glass', label: 'Triple-glazed high-efficiency steel frame glass' }
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => handleQuizSelect('materials', opt.key)}
                        className={`p-3 text-left border rounded-sm transition-all font-semibold ${
                          quizAnswers.materials === opt.key
                            ? 'border-[#17A589] bg-[#17A589]/5 text-[#117A65]'
                            : 'border-[#BDC3C7]/60 bg-white text-slate-700 hover:border-[#17A589]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 2 */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase font-bold text-slate-600 font-display-civ tracking-wider">
                    Question 2: How do you view natural light integration?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {[
                      { key: 'maximum', label: 'Maximum raw floor-to-ceiling glass exposure' },
                      { key: 'diffused', label: 'Warm diffused skylights & green walls' },
                      { key: 'minimalist', label: 'Symmetrical slot windows & architectural shadows' },
                      { key: 'smart', label: 'Zoned smart-glass tinting automation' }
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => handleQuizSelect('light', opt.key)}
                        className={`p-3 text-left border rounded-sm transition-all font-semibold ${
                          quizAnswers.light === opt.key
                            ? 'border-[#17A589] bg-[#17A589]/5 text-[#117A65]'
                            : 'border-[#BDC3C7]/60 bg-white text-slate-700 hover:border-[#17A589]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 3 */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase font-bold text-slate-600 font-display-civ tracking-wider">
                    Question 3: What layout style best fits your lifestyle?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {[
                      { key: 'loft', label: 'Fully open-plan loft style with ceiling voids' },
                      { key: 'zoned', label: 'Symmetrically zoned multi-functional spaces' },
                      { key: 'minimalist', label: 'Concealed storage with zero visible clutter' },
                      { key: 'dynamic', label: 'Flexible modular layouts with sliding walls' }
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => handleQuizSelect('layout', opt.key)}
                        className={`p-3 text-left border rounded-sm transition-all font-semibold ${
                          quizAnswers.layout === opt.key
                            ? 'border-[#17A589] bg-[#17A589]/5 text-[#117A65]'
                            : 'border-[#BDC3C7]/60 bg-white text-slate-700 hover:border-[#17A589]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#BDC3C7]/50 flex justify-end">
                  <button 
                    onClick={calculateQuizResult}
                    className="px-8 py-3.5 bg-[#17A589] hover:bg-[#117A65] text-white text-xs uppercase tracking-widest font-bold font-display-civ rounded-sm active:scale-95 shadow-sm"
                  >
                    Generate recommendation
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 6: Our Design Process */}
      <section id="process" className="py-20 border-b border-[#BDC3C7]/30 bg-[#F2F4F4]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#17A589] uppercase tracking-[0.25em] font-display-civ">Execution Workflow</span>
            <h2 className="text-3xl lg:text-4xl font-display-civ font-bold text-[#2C3E50] tracking-tight mt-3">Our Architectural Journey</h2>
            <p className="text-slate-500 text-xs mt-2">Click each step to examine our meticulous methodology from consultation to handover.</p>
            <div className="w-16 h-[2px] bg-[#17A589] mx-auto mt-4"></div>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-5 border border-[#BDC3C7] bg-white rounded-sm divide-x divide-[#BDC3C7] overflow-hidden mb-8">
            {processSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`py-4 px-2 text-center transition-all flex flex-col items-center justify-center gap-1 active:scale-95 ${
                  activeStep === idx 
                    ? 'bg-[#17A589]/5 text-[#17A589]' 
                    : 'text-slate-500 hover:text-[#17A589] hover:bg-slate-50/50'
                }`}
              >
                <span className="text-[10px] font-bold text-slate-400 block tracking-widest uppercase">Step 0{idx + 1}</span>
                <span className="text-xs font-bold font-display-civ truncate max-w-full">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Stepper Display Card */}
          <div className="bg-white border border-[#BDC3C7] p-6 md:p-10 shadow-sm rounded-sm">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#17A589] uppercase tracking-wider font-display-civ">
                  <span>Step 0{activeStep + 1}</span>
                  <span className="text-slate-300">|</span>
                  <span>{processSteps[activeStep].subtitle}</span>
                </div>
                <h3 className="text-2xl font-display-civ font-bold text-[#2C3E50] tracking-tight">
                  {processSteps[activeStep].title} Stage
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {processSteps[activeStep].details}
                </p>
              </div>

              <div className="shrink-0 bg-[#F2F4F4] border border-[#BDC3C7] px-6 py-4 rounded-sm text-right max-md:w-full max-md:text-left">
                <span className="text-[10px] font-bold text-slate-400 block tracking-widest uppercase mb-1">Target Duration</span>
                <span className="text-sm font-bold text-[#17A589] font-display-civ block">{processSteps[activeStep].duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Client Testimonials */}
      <section id="testimonials" className="py-20 border-b border-[#BDC3C7]/30 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#17A589] uppercase tracking-[0.25em] font-display-civ">Reviews</span>
            <h2 className="text-3xl lg:text-4xl font-display-civ font-bold text-[#2C3E50] tracking-tight mt-3">Hyderabad Client Stories</h2>
            <div className="w-16 h-[2px] bg-[#17A589] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "S. Vijay Kumar transformed our Banjara Hills villa into a masterpiece of light and form. The concrete textures are incredibly tactile, and the electric teal metal frames add a beautiful contemporary contrast.",
                author: "Vikram K. Shah",
                location: "Road No. 13, Banjara Hills",
                role: "Residential Client"
              },
              {
                text: "Civilization designed our corporate headquarters in Hitech City. Their workflow is highly professional, staying well within budget. The open layout and natural lighting have drastically improved workspace morale.",
                author: "Archana Reddy",
                location: "Gachibowli Workspace",
                role: "Commercial Client"
              },
              {
                text: "Their spatial quiz gave us the confidence to choose the Industrial Light Loft direction. The final execution is pristine, featuring triple-glazed windows and biophilic plant walls that keep the interior incredibly cool.",
                author: "Ananth & Megha Rao",
                location: "Jubilee Hills",
                role: "Penthouse Owner"
              }
            ].map((review, i) => (
              <div key={i} className="p-8 border border-[#BDC3C7]/80 bg-[#F2F4F4]/30 flex flex-col justify-between shadow-sm rounded-sm hover:-translate-y-1 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, rIdx) => (
                      <Star key={rIdx} size={12} className="text-[#17A589] fill-[#17A589]" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#BDC3C7]/20 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#17A589]/10 border border-[#17A589]/30 flex items-center justify-center text-xs font-bold text-[#17A589] font-display-civ">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2C3E50] font-display-civ">{review.author}</h4>
                    <span className="text-[9px] text-slate-400 block tracking-wider uppercase font-semibold font-display-civ mt-0.5">
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
      <section id="booking" className="py-20 border-b border-[#BDC3C7]/30 bg-[#F2F4F4]/50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#17A589] uppercase tracking-[0.25em] font-display-civ">Secure Scheduler</span>
            <h2 className="text-3xl lg:text-4xl font-display-civ font-bold text-[#2C3E50] tracking-tight mt-3">Book Private Consultation</h2>
            <p className="text-slate-500 text-xs mt-2">Submit details of your property to obtain a personalized workspace layout blueprint.</p>
            <div className="w-16 h-[2px] bg-[#17A589] mx-auto mt-4"></div>
          </div>

          <div className="p-8 md:p-12 border border-[#BDC3C7] bg-white shadow-lg rounded-sm relative overflow-hidden">
            {submitSuccess ? (
              <div className="text-center py-8 space-y-6 font-display-civ">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <Check size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#2C3E50]">Consultation Logged</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-700">{form.name}</strong>. Our lead designer S. Vijay Kumar has received your details. We will contact you shortly to confirm timings.
                </p>
                <div className="bg-[#F2F4F4] border border-[#BDC3C7]/60 p-5 rounded-sm max-w-sm mx-auto text-left text-xs space-y-2.5">
                  <div className="flex justify-between border-b border-slate-200 pb-1.5"><span className="text-slate-400 font-bold uppercase tracking-wider">Booking ID:</span> <span className="font-mono font-bold text-slate-700">{confirmationNumber}</span></div>
                  <div className="flex justify-between border-b border-slate-200 pb-1.5"><span className="text-slate-400 font-bold uppercase tracking-wider">Project Type:</span> <span className="font-bold text-slate-700">{form.projectType}</span></div>
                  <div className="flex justify-between border-b border-slate-200 pb-1.5"><span className="text-slate-400 font-bold uppercase tracking-wider">Budget Tier:</span> <span className="font-bold text-slate-700">{form.budget}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400 font-bold uppercase tracking-wider">Contact Number:</span> <span className="font-mono font-bold text-slate-700">{form.phone}</span></div>
                </div>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 border border-[#17A589] text-[#17A589] hover:bg-emerald-50/50 uppercase text-xs tracking-wider font-bold transition-all active:scale-95"
                >
                  Schedule Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6 text-xs text-left">
                {/* Info Note */}
                <div className="flex items-start gap-2.5 p-3.5 bg-sky-50 border border-sky-200 text-sky-800 rounded-sm">
                  <Info size={16} className="shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    All consultation meetings occur at our flagship Banjara Hills studio or via encrypted HD video calls. Form submissions undergo instant validation check.
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
                      className={`w-full p-3.5 bg-[#F2F4F4]/50 border ${errors.name ? 'border-red-500' : 'border-[#BDC3C7]/80 focus:border-[#17A589]'} rounded-sm focus:outline-none focus:bg-white transition-all`}
                      placeholder="e.g. Anand Kumar"
                    />
                    {errors.name && (
                      <p className="text-red-500 mt-1 flex items-center gap-1 font-semibold text-[11px]">
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
                      className={`w-full p-3.5 bg-[#F2F4F4]/50 border ${errors.phone ? 'border-red-500' : 'border-[#BDC3C7]/80 focus:border-[#17A589]'} rounded-sm focus:outline-none focus:bg-white transition-all`}
                      placeholder="e.g. +91 98480 10605"
                    />
                    {errors.phone && (
                      <p className="text-red-500 mt-1 flex items-center gap-1 font-semibold text-[11px]">
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
                      className={`w-full p-3.5 bg-[#F2F4F4]/50 border ${errors.email ? 'border-red-500' : 'border-[#BDC3C7]/80 focus:border-[#17A589]'} rounded-sm focus:outline-none focus:bg-white transition-all`}
                      placeholder="e.g. anand@domain.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 mt-1 flex items-center gap-1 font-semibold text-[11px]">
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
                      className={`w-full p-3.5 bg-[#F2F4F4]/50 border ${errors.projectType ? 'border-red-500' : 'border-[#BDC3C7]/80 focus:border-[#17A589]'} rounded-sm focus:outline-none focus:bg-white transition-all text-slate-700`}
                    >
                      <option value="">Select Option</option>
                      <option value="Residential Interior">Custom Residential Interior</option>
                      <option value="Architectural Design">Architectural House Design</option>
                      <option value="Commercial Office">Office & Commercial Workspace</option>
                      <option value="Landscape Consultation">Landscape Design & Master Planning</option>
                    </select>
                    {errors.projectType && (
                      <p className="text-red-500 mt-1 flex items-center gap-1 font-semibold text-[11px]">
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
                      className={`w-full p-3.5 bg-[#F2F4F4]/50 border ${errors.budget ? 'border-red-500' : 'border-[#BDC3C7]/80 focus:border-[#17A589]'} rounded-sm focus:outline-none focus:bg-white transition-all text-slate-700`}
                    >
                      <option value="">Select Option</option>
                      <option value="₹40L - ₹75L">₹40 Lakhs - ₹75 Lakhs</option>
                      <option value="₹75L - ₹1.5Cr">₹75 Lakhs - ₹1.5 Crores</option>
                      <option value="₹1.5Cr - ₹3.0Cr">₹1.5 Crores - ₹3.0 Crores</option>
                      <option value="₹3.0Cr+">₹3.0 Crores +</option>
                    </select>
                    {errors.budget && (
                      <p className="text-red-500 mt-1 flex items-center gap-1 font-semibold text-[11px]">
                        <AlertCircle size={10} /> {errors.budget}
                      </p>
                    )}
                  </div>

                  {/* Start Date */}
                  <div>
                    <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">TARGET START DATE *</label>
                    <input
                      type="date"
                      name="startDate"
                      value={form.startDate}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 bg-[#F2F4F4]/50 border ${errors.startDate ? 'border-red-500' : 'border-[#BDC3C7]/80 focus:border-[#17A589]'} rounded-sm focus:outline-none focus:bg-white transition-all text-slate-700`}
                    />
                    {errors.startDate && (
                      <p className="text-red-500 mt-1 flex items-center gap-1 font-semibold text-[11px]">
                        <AlertCircle size={10} /> {errors.startDate}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-600 font-bold uppercase tracking-wider mb-2">ADDITIONAL DETAILS & MESSAGE</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleInputChange}
                    className="w-full p-3.5 bg-[#F2F4F4]/50 border border-[#BDC3C7]/80 focus:border-[#17A589] rounded-sm focus:outline-none focus:bg-white transition-all resize-none text-slate-700"
                    placeholder="Describe your site details, design expectations, or customized layouts..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#17A589] hover:bg-[#117A65] text-white font-display-civ uppercase tracking-widest font-bold transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex justify-center items-center gap-2 shadow-md rounded-sm"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw size={14} className="animate-spin" />
                      Logging Consultation Request...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Log Architectural Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Section 9: Studio Location & Hours Footer */}
      <footer className="bg-white text-[#2C3E50] py-16 border-t border-[#BDC3C7]/60 font-display-civ text-xs tracking-wide">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12">
          {/* Column 1: Studio Info */}
          <div className="space-y-4">
            <h3 className="text-base uppercase tracking-wider font-bold text-[#17A589] flex items-center gap-2">
              <span className="w-3 h-3 bg-[#17A589] rounded-sm"></span>
              CIVILIZATION
            </h3>
            <p className="text-slate-500 leading-relaxed max-w-sm font-sans">
              Structural harmony, micro-concrete textures, and electric teal accent spacing. Creating premium architectural and customized residential habitats in Hyderabad since 2008.
            </p>
          </div>

          {/* Column 2: Location Details */}
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Flagship Studio</h3>
            <ul className="space-y-3 text-slate-500 font-sans">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-[#17A589] shrink-0 mt-0.5" />
                <span>Plot No. 79, Road No. 13, Banjara Hills, Hyderabad, Telangana - 500034</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#17A589] shrink-0" />
                <span className="font-mono font-semibold">+91 98480 10605</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#17A589] shrink-0" />
                <span>design@civilizationarchitects.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Map Preview */}
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Atelier Hours</h3>
            <ul className="space-y-2 text-slate-500 font-sans">
              <li className="flex justify-between max-w-xs"><span>Monday – Saturday:</span> <span>9:00 AM – 7:00 PM</span></li>
              <li className="flex justify-between max-w-xs"><span>Sunday:</span> <span className="text-[#17A589] font-bold">Closed</span></li>
            </ul>
            
            {/* SVG Interactive Map Placeholder */}
            <div className="pt-2">
              <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400 block mb-2">Location Map Grid</span>
              <div className="w-full h-24 bg-[#F2F4F4] border border-[#BDC3C7] rounded-sm relative overflow-hidden flex items-center justify-center">
                <svg className="w-full h-full opacity-60" viewBox="0 0 200 80">
                  <line x1="0" y1="20" x2="200" y2="20" stroke="#BDC3C7" strokeWidth="0.5" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="200" y2="50" stroke="#BDC3C7" strokeWidth="0.5" />
                  <line x1="50" y1="0" x2="50" y2="80" stroke="#BDC3C7" strokeWidth="0.5" />
                  <line x1="140" y1="0" x2="140" y2="80" stroke="#BDC3C7" strokeWidth="0.5" strokeDasharray="3 3" />
                  
                  {/* Road Names */}
                  <text x="5" y="15" fill="#95A5A6" fontSize="5" fontWeight="bold">ROAD NO. 1</text>
                  <text x="60" y="45" fill="#95A5A6" fontSize="5" fontWeight="bold">ROAD NO. 13 (BANJARA HILLS)</text>
                  
                  {/* Studio Pin */}
                  <circle cx="100" cy="50" r="4" fill="#17A589" className="animate-pulse" />
                  <circle cx="100" cy="50" r="1.5" fill="#FFFFFF" />
                  <text x="108" y="52" fill="#2C3E50" fontSize="5" fontWeight="bold">CIVILIZATION (PLOT 79)</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-[#BDC3C7]/30 text-center text-[9px] text-slate-400 tracking-[0.25em]">
          <p>© {new Date().getFullYear()} CIVILIZATION ARCHITECTS & PLANNERS. ALL DESIGNS REGISTERED. PRIVATE BLUEPRINT ESTIMATES ARE SUBJECT TO GEOLOGICAL AUDITS.</p>
        </div>
      </footer>
    </div>
  );
}

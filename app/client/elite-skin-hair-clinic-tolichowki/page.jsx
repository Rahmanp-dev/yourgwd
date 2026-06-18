"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Clock, 
  Calendar, 
  User, 
  CheckCircle2, 
  ChevronRight, 
  ArrowUpRight, 
  Calculator,
  UserCheck,
  Star,
  Scissors
} from 'lucide-react';

const TREATMENTS = [
  { id: 'laser-hair', name: 'Laser Hair Removal', basePrice: 2400, info: 'Advanced triple-wavelength cooling technology' },
  { id: 'chemical-peel', name: 'Clinical Chemical Peel', basePrice: 1600, info: 'Gentle dermatological skin resurfacing' },
  { id: 'hair-transplant', name: 'FUE Hair Restoration', basePrice: 42000, info: 'High-density micro-graft placement' },
  { id: 'acne-scar', name: 'Acne Scar Subcision & RF', basePrice: 3800, info: 'Rebuilds natural collagen foundations' },
];

const AREAS = [
  { id: 'face', name: 'Face', multiplier: 1.0 },
  { id: 'underarms', name: 'Underarms', multiplier: 0.8 },
  { id: 'full-arms', name: 'Full Arms', multiplier: 1.4 },
  { id: 'full-back', name: 'Full Back', multiplier: 2.0 },
  { id: 'scalp', name: 'Scalp Area', multiplier: 1.7 },
];

export default function EliteSkinHairPage() {
  // Treatment Estimator State
  const [selectedTreatmentId, setSelectedTreatmentId] = useState(TREATMENTS[0].id);
  const [selectedAreaId, setSelectedAreaId] = useState(AREAS[0].id);
  const [sessionsCount, setSessionsCount] = useState(3);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    treatment: TREATMENTS[0].name,
    preferredDate: '',
    preferredTime: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  // Calculate pricing values
  const currentTreatment = TREATMENTS.find(t => t.id === selectedTreatmentId);
  const currentArea = AREAS.find(a => a.id === selectedAreaId);
  
  const baseCost = currentTreatment.basePrice * currentArea.multiplier;
  const rawTotal = baseCost * sessionsCount;
  
  // Calculate discount percentage based on session count
  let discountPercent = 0;
  if (sessionsCount >= 2 && sessionsCount <= 4) {
    discountPercent = 0.10; // 10% discount
  } else if (sessionsCount >= 5 && sessionsCount <= 7) {
    discountPercent = 0.15; // 15% discount
  } else if (sessionsCount >= 8) {
    discountPercent = 0.25; // 25% discount
  }

  const discountAmount = rawTotal * discountPercent;
  const finalPrice = Math.round(rawTotal - discountAmount);

  // Handle inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 3) {
      errors.fullName = 'Full name must contain at least 3 letters';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Contact number is required';
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Provide a valid 10-digit mobile number';
    }

    if (!formData.preferredDate) {
      errors.preferredDate = 'Select an appointment date';
    }

    if (!formData.preferredTime) {
      errors.preferredTime = 'Select a time slot';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Booked success mockup
    const code = `ELITE-TOL-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingCode(code);
    setIsSubmitted(true);
    setFormErrors({});
  };

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-sky-100 selection:text-slate-900">
      
      {/* Floating Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm">
              <div className="w-3.5 h-3.5 rounded-full bg-sky-500 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight leading-none text-slate-900">ELITE</span>
              <span className="text-[9px] tracking-[0.25em] text-slate-400 font-semibold uppercase mt-1">Skin & Hair Clinic</span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-600">
            <a href="#about" className="hover:text-sky-500 transition-colors">Clinic About</a>
            <a href="#estimator" className="hover:text-sky-500 transition-colors">Pricing Estimator</a>
            <a href="#services" className="hover:text-sky-500 transition-colors">Specialties</a>
            <a href="#testimonials" className="hover:text-sky-500 transition-colors">Outcomes</a>
          </nav>

          {/* Phone & CTA */}
          <div className="flex items-center gap-4">
            <a href="tel:9246543210" className="hidden lg:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-sky-500 transition-colors">
              <Phone size={13} className="text-sky-500" />
              +91 92465 43210
            </a>
            <a href="#booking" className="bg-sky-500 text-white hover:bg-slate-900 hover:shadow-lg rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all">
              Book Appointment
            </a>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Hero Left Content */}
          <div className="space-y-8 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-100 bg-slate-50 text-xs font-bold uppercase tracking-widest text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              Tolichowki Main Road, Hyderabad
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              Elevating Skin & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-slate-900">
                Hair Aesthetics
              </span>
            </h1>
            
            <p className="text-slate-600 text-sm leading-relaxed max-w-lg font-medium">
              Elite Skin & Hair Clinic combines clinical expertise, FDA-certified procedures, and customized skin analytics. Explore state-of-the-art dermatological therapies in Tolichowki.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <a href="#booking" className="bg-slate-900 text-white hover:bg-sky-500 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-wider transition-colors text-center shadow-lg">
                Schedule Consultation
              </a>
              <a href="#estimator" className="border border-slate-200 text-slate-900 hover:bg-slate-50 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-wider transition-colors text-center">
                Calculate Treatment Cost
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-slate-100 pt-8 mt-12">
              <div className="text-center lg:text-left">
                <span className="block text-3xl font-extrabold text-slate-900">12k+</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1 block">Aesthetic Cases</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-3xl font-extrabold text-slate-900">20+</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1 block">Clinical Services</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-3xl font-extrabold text-slate-900">4.9★</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1 block">Google Rating</span>
              </div>
            </div>
          </div>

          {/* Hero Right Card Container */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-sky-100/50 rounded-3xl blur-3xl transform rotate-3 scale-95 opacity-55"></div>
            
            <div className="relative bg-white border border-slate-100 p-8 rounded-3xl shadow-xl max-w-md w-full">
              <div className="flex justify-between items-center pb-6 border-b border-slate-100 mb-6">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 uppercase">Treatment Specialties</h3>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Top requests in Tolichowki</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-500">
                  <Sparkles size={16} />
                </div>
              </div>

              <div className="space-y-4">
                {TREATMENTS.map(t => (
                  <div key={t.id} className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-sky-500 group-hover:text-white flex items-center justify-center text-slate-500 transition-colors shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">{t.name}</h4>
                      <p className="text-[10px] text-slate-400 leading-normal mt-0.5">{t.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Box */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-sky-500"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-sky-500"></div>
              <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm relative z-10">
                <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest block mb-2">CLINICAL EXCELLENCE</span>
                <h3 className="text-2xl font-extrabold uppercase text-slate-900 mb-4">Board-Certified Specialists</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-medium mb-6">
                  Elite Skin & Hair Clinic was built on the core principle of providing ethical, evidence-based dermatological therapies. Our senior consulting doctors are members of prestigious dermatological societies, ensuring you are under the safest professional hands.
                </p>
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-sky-50 text-sky-500 rounded-full">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">FDA-Approved Protocols</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">Zero compromise on patient health standards.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box */}
            <div className="space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-500 block">
                OUR CORE EXPERTISE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-slate-900 leading-tight">
                Advanced Hair Restoration & Clinical Dermatology
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Whether you need high-density hair transplant surgery, painless laser hair removal, or clinical chemical peels to erase years of hyperpigmentation, our custom protocols are optimized for outstanding patient results.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 bg-white border border-slate-100 rounded-2xl">
                  <h4 className="text-xs font-bold uppercase text-slate-900 mb-1">Skin Resurfacing</h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed font-medium">
                    Remove acne scars, stretch marks, and wrinkles with microneedling RF and yellow peels.
                  </p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-2xl">
                  <h4 className="text-xs font-bold uppercase text-slate-900 mb-1">Hair Transplants</h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed font-medium">
                    FUE hair transplants targeting deep recession patches with extreme natural density.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Treatment Estimator */}
      <section id="estimator" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-500 block mb-2">
              COST CALCULATOR
            </span>
            <h2 className="text-3xl font-extrabold uppercase text-slate-900">
              Treatment Budget Estimator
            </h2>
            <p className="text-slate-500 text-xs mt-2 uppercase tracking-wider font-semibold">
              Select variables to calculate customized pricing projections
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Input Selection Side */}
            <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 flex flex-col justify-between">
              
              {/* Select Treatment */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">
                  1. Choose Desired Therapy
                </label>
                <select
                  value={selectedTreatmentId}
                  onChange={(e) => setSelectedTreatmentId(e.target.value)}
                  className="w-full p-4 bg-white border border-slate-200 rounded-xl text-xs font-bold uppercase tracking-wider outline-none focus:border-sky-500 cursor-pointer"
                >
                  {TREATMENTS.map(t => (
                    <option key={t.id} value={t.id}>
                      {t.name} (Base: ₹{t.basePrice})
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Area */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">
                  2. Select Body Area
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {AREAS.map(a => (
                    <button
                      key={a.id}
                      onClick={() => setSelectedAreaId(a.id)}
                      className={`p-3 border rounded-xl text-xs font-bold uppercase transition-all ${
                        selectedAreaId === a.id 
                          ? 'border-sky-500 bg-sky-500 text-white shadow-sm' 
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {a.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Sessions via Interactive Slider */}
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    3. Number of Sessions
                  </label>
                  <span className="text-xs font-extrabold text-sky-500 uppercase">
                    {sessionsCount} {sessionsCount === 1 ? 'Session' : 'Sessions'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={sessionsCount}
                  onChange={(e) => setSessionsCount(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-bold uppercase mt-2 tracking-wider">
                  <span>1 Trial</span>
                  <span>3 Standard</span>
                  <span>6 Premium</span>
                  <span>10 Ultimate</span>
                </div>
              </div>

            </div>

            {/* Price Output Display Side */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden border border-slate-900 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500 rounded-full blur-[80px] opacity-25"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-sky-400 mb-6">
                  <Calculator size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest">Pricing Projections</span>
                </div>

                <div className="space-y-4 border-b border-slate-800 pb-6">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-slate-400">Therapy</span>
                    <span>{currentTreatment.name}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-slate-400">Area</span>
                    <span>{currentArea.name} ({currentArea.multiplier}x)</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-slate-400">Total Sessions</span>
                    <span>{sessionsCount}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-slate-400">Cost per Session</span>
                    <span>₹{Math.round(baseCost)}</span>
                  </div>
                </div>

                {discountPercent > 0 && (
                  <div className="py-4 border-b border-slate-800 flex justify-between text-xs font-bold uppercase tracking-wider text-green-400">
                    <span>Package Reward ({discountPercent * 100}%)</span>
                    <span>-₹{Math.round(discountAmount)}</span>
                  </div>
                )}

                <div className="mt-8 flex justify-between items-baseline">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Estimated Total</span>
                  <div className="text-right">
                    <span className="text-4xl font-extrabold text-sky-400">₹{finalPrice}</span>
                    <span className="block text-[8px] text-slate-500 uppercase font-bold mt-1 tracking-wider">
                      Excl. Government Taxes
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-800 relative z-10">
                <a href="#booking" className="w-full bg-sky-500 hover:bg-sky-400 text-white rounded-full py-4 text-xs font-bold uppercase tracking-wider text-center block transition-colors shadow-lg">
                  Request Appointment Slot
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-20 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-500 block mb-2">
              OUR SPECIALIZED SERVICES
            </span>
            <h2 className="text-3xl font-extrabold uppercase text-slate-900">
              Elite Aesthetics Menu
            </h2>
            <p className="text-slate-500 text-xs mt-2 uppercase tracking-wider font-semibold">
              Advanced dermatological treatments customized to your skin phenotype
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Laser Hair Removal',
                category: 'HAIR FREE',
                desc: 'FDA-certified laser technology providing permanent follicle reduction safely.',
                price: '₹2,400 / Session',
              },
              {
                title: 'Chemical Peeling',
                category: 'RESURFACING',
                desc: 'Targeted peels to accelerate cell turnover and erase hyperpigmentation marks.',
                price: '₹1,600 / Session',
              },
              {
                title: 'FUE Hair Transplant',
                category: 'RESTORATION',
                desc: 'High-precision hair restoration surgery with maximum density grafts.',
                price: '₹42,000 / Surgery',
              },
              {
                title: 'Acne Scar Subcision',
                category: 'SCAR FREE',
                desc: 'Collagen-inducing RF therapy designed to lift and heal deep scarring.',
                price: '₹3,800 / Session',
              },
              {
                title: 'Hydra-Facial Infusion',
                category: 'HYDRATION',
                desc: 'Deep blackhead extraction and skin hydration treatment for visual glow.',
                price: '₹3,200 / Session',
              },
              {
                title: 'Botox & Fillers',
                category: 'INJECTABLES',
                desc: 'Advanced facial contouring and dynamic wrinkle treatment by certified MDs.',
                price: '₹14,000 / Dose',
              },
              {
                title: 'Platelet-Rich Plasma (PRP)',
                category: 'HAIR GROWTH',
                desc: 'Growth factors extracted from autologous blood to accelerate follicle growth.',
                price: '₹4,500 / Session',
              },
              {
                title: 'Laser Tattoo Removal',
                category: 'CORRECTION',
                desc: 'Painless Q-switch laser treatments to fragment deep pigments completely.',
                price: '₹2,800 / Session',
              },
            ].map((s, index) => (
              <div key={index} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-md hover:border-slate-200 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[9px] font-bold text-sky-500 bg-sky-50 rounded-full px-3 py-1 uppercase tracking-wider">
                      {s.category}
                    </span>
                    <span className="text-xs text-slate-300 font-extrabold uppercase">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold uppercase text-slate-900 group-hover:text-sky-500 transition-colors mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-medium mb-6">
                    {s.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-[11px] font-extrabold text-slate-900">{s.price}</span>
                  <a href="#booking" className="text-sky-500 hover:text-slate-900 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider transition-colors">
                    Book
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-500 block mb-2">
              PATIENT SATISFACTION
            </span>
            <h2 className="text-3xl font-extrabold uppercase text-slate-900">
              Elite Transformations
            </h2>
            <p className="text-slate-500 text-xs mt-2 uppercase tracking-wider font-semibold">
              Real outcomes shared by skin & hair patients in Hyderabad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Zaheeruddin Ahmed',
                location: 'Tolichowki, Hyderabad',
                quote: 'The hair transplant results are absolutely amazing. The physician spent 45 minutes mapping my hairline manually. Highly professional clinical facility.',
                result: 'Hair FUE (2,800 Grafts)',
                rating: 5
              },
              {
                name: 'Sofia Yasmeen',
                location: 'Paramount Colony, Hyd',
                quote: 'I had severe hormonal acne and dark scars. After 4 sessions of customized chemical peels, my skin tone has cleared up completely. The clinic is incredibly hygienic.',
                result: 'Yellow Peel & Microneedling',
                rating: 5
              },
              {
                name: 'Mohammad Adnan',
                location: 'Mehdipatnam, Hyderabad',
                quote: 'Super clean clinic and zero waiting time. Laser hair removal was completely pain-free compared to other clinics. Safe, certified clinical team.',
                result: 'Full Back Laser Removal',
                rating: 5
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative shadow-sm">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-0.5 text-sky-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={12} className="fill-sky-500" />
                      ))}
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                      Verified Case
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 italic leading-relaxed font-medium mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/50 flex justify-between items-center">
                  <div>
                    <h4 className="text-xs font-extrabold uppercase text-slate-900">{t.name}</h4>
                    <span className="text-[9px] text-sky-500 font-bold uppercase mt-0.5 block">{t.location}</span>
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider text-right">
                    {t.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-500 block mb-2">
              PRIORITY APPOINTMENTS
            </span>
            <h2 className="text-3xl font-extrabold uppercase text-slate-900">
              Schedule Your Consultation
            </h2>
            <p className="text-slate-500 text-xs mt-2 uppercase tracking-wider font-semibold">
              Fill the priority booking details to reserve your clinical session
            </p>
          </div>

          <div className="bg-white border border-slate-100 shadow-xl rounded-3xl p-8 md:p-10">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-sky-50 text-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-extrabold uppercase text-slate-900 mb-2">Booking Reserved</h3>
                <p className="text-xs font-bold text-sky-500 uppercase tracking-wider mb-6">
                  Reference Token: <span className="underline">{bookingCode}</span>
                </p>
                <p className="text-slate-500 text-xs max-w-md mx-auto mb-8 font-medium leading-relaxed">
                  Thank you for registering. A medical consultant from Elite Skin & Hair Clinic will call you at <span className="text-slate-900 font-bold">{formData.phoneNumber}</span> within 15 minutes to lock your preferred appointment time.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      phoneNumber: '',
                      treatment: TREATMENTS[0].name,
                      preferredDate: '',
                      preferredTime: '',
                    });
                  }}
                  className="bg-slate-900 hover:bg-sky-500 text-white rounded-full px-8 py-3 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Book New Slot
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className={`w-full p-4 bg-slate-50 border rounded-xl text-xs font-bold uppercase tracking-wider outline-none transition-colors ${
                      formErrors.fullName ? 'border-red-500 bg-red-50 text-red-900' : 'border-slate-200 focus:border-sky-500'
                    }`}
                  />
                  {formErrors.fullName && (
                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mt-1.5">
                      {formErrors.fullName}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">
                    Contact Phone Number *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="92465 43210"
                      maxLength={10}
                      className={`w-full p-4 pl-12 bg-slate-50 border rounded-xl text-xs font-bold uppercase tracking-wider outline-none transition-colors ${
                        formErrors.phoneNumber ? 'border-red-500 bg-red-50 text-red-900' : 'border-slate-200 focus:border-sky-500'
                      }`}
                    />
                  </div>
                  {formErrors.phoneNumber && (
                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mt-1.5">
                      {formErrors.phoneNumber}
                    </span>
                  )}
                </div>

                {/* Treatment dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">
                    Treatment of Interest *
                  </label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold uppercase tracking-wider outline-none focus:border-sky-500 cursor-pointer text-slate-700"
                  >
                    {TREATMENTS.map(t => (
                      <option key={t.id} value={t.name}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className={`w-full p-4 bg-slate-50 border rounded-xl text-xs font-bold uppercase tracking-wider outline-none transition-colors ${
                        formErrors.preferredDate ? 'border-red-500 bg-red-50 text-red-900' : 'border-slate-200 focus:border-sky-500'
                      }`}
                    />
                    {formErrors.preferredDate && (
                      <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mt-1.5">
                        {formErrors.preferredDate}
                      </span>
                    )}
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className={`w-full p-4 bg-slate-50 border rounded-xl text-xs font-bold uppercase tracking-wider outline-none transition-colors cursor-pointer text-slate-700 ${
                        formErrors.preferredTime ? 'border-red-500 bg-red-50 text-red-900' : 'border-slate-200 focus:border-sky-500'
                      }`}
                    >
                      <option value="">Select Time Slot</option>
                      <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                      <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
                      <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM</option>
                      <option value="05:00 PM - 07:00 PM">05:00 PM - 07:00 PM</option>
                    </select>
                    {formErrors.preferredTime && (
                      <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mt-1.5">
                        {formErrors.preferredTime}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-sky-500 text-white rounded-full py-4 text-xs font-bold uppercase tracking-widest transition-colors shadow-md mt-4"
                >
                  Book Premium Consultation
                </button>

              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-12 rounded-t-[3rem] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 border-b border-slate-800 pb-12">
            
            {/* Left */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-slate-900 font-extrabold text-sm select-none">
                  E
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-md tracking-tight leading-none">ELITE</span>
                  <span className="text-[9px] tracking-[0.25em] text-sky-400 font-semibold uppercase mt-0.5">Skin & Hair Clinic</span>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-medium">
                High-end aesthetic clinic utilizing modern science and customized treatment paths. Located on Tolichowki Main Road, Hyderabad.
              </p>
            </div>

            {/* Middle */}
            <div className="md:col-span-4 space-y-4 text-xs font-bold uppercase tracking-wider">
              <span className="text-[10px] text-slate-500 tracking-widest block">Branch Location</span>
              <div className="flex gap-2">
                <MapPin size={16} className="text-sky-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed font-semibold">
                  Door No. 8-1-364/A/18,<br />
                  Beside Adams High School,<br />
                  Tolichowki Main Road, Tolichowki,<br />
                  Hyderabad, Telangana - 500008
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="md:col-span-3 space-y-4 text-xs font-bold uppercase tracking-wider">
              <span className="text-[10px] text-slate-500 tracking-widest block">Direct Contact</span>
              <div className="flex gap-2">
                <Phone size={16} className="text-sky-400 shrink-0 mt-0.5" />
                <a href="tel:9246543210" className="text-slate-200 hover:text-sky-400 transition-colors text-sm font-extrabold">
                  +91 92465 43210
                </a>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block mb-1">Clinic Work Hours</span>
                <span className="text-slate-300 font-semibold">Mon - Sat: 09:30 AM - 08:30 PM</span>
              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-bold uppercase text-slate-500 tracking-wider">
            <span>&copy; {new Date().getFullYear()} Elite Skin & Hair Clinic, Tolichowki. All rights reserved.</span>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <span className="hover:text-slate-300 cursor-pointer">Terms of Use</span>
              <span>•</span>
              <span className="hover:text-slate-300 cursor-pointer">Privacy Guidelines</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

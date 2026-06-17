'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Utensils, 
  Calendar, 
  Users, 
  Check, 
  ChevronRight, 
  Info, 
  Clock, 
  Sparkles, 
  Star, 
  Award, 
  ChefHat, 
  ShieldCheck, 
  X,
  Compass,
  ArrowRight,
  Shield,
  Locate,
  CheckSquare
} from 'lucide-react';

// Mock Data for Spice Route Cloud Kitchen
const SIGNATURE_DISHES = [
  {
    id: 'dish-1',
    name: 'Malabar Coconut Vegetable Stew',
    category: 'Coastal Main',
    tag: 'Award Winning',
    origin: 'Malabar Coast',
    description: 'Fresh seasonal vegetables simmered in a light, spiced broth of freshly pressed coconut milk, infused with ginger, green chillies, and curry leaves.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=600&h=400',
    details: 'Made with cold-pressed coconut oil, fresh green peppercorns, and organic curry leaves.'
  },
  {
    id: 'dish-2',
    name: 'Coorg Pepper Paneer Skewers',
    category: 'Fusion Starter',
    tag: 'Chef Choice',
    origin: 'Coorg Hills',
    description: 'Cubed organic cottage cheese marinated with freshly ground black pepper from Coorg, lime juice, and spices, char-grilled to absolute perfection.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600&h=400',
    details: 'Uses high-altitude black pepper pods and wood-pressed mustard oil.'
  },
  {
    id: 'dish-3',
    name: 'Lotus Stem Honey Chilli',
    category: 'Pan-Asian Starter',
    tag: 'Best Seller',
    origin: 'Guntur Valley',
    description: 'Crispy fried lotus stem tossed in a tangy honey-chilli sauce glaze, finished with roasted sesame seeds and Guntur chilli flakes.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600&h=400',
    details: 'Crisped to order, using non-GM honey and hand-crushed Guntur chillies.'
  },
  {
    id: 'dish-4',
    name: 'Baked Elaneer Payasam',
    category: 'Dessert Fusion',
    tag: 'Signature Dessert',
    origin: 'Malabar Coast',
    description: 'A modern baked take on the traditional Kerala payasam, featuring tender coconut pulp, condensed milk, and green cardamom, served chilled.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600&h=400',
    details: 'Sugar-free alternative available upon request, sweetened with palm jaggery.'
  }
];

const MAP_HUBS = [
  {
    id: 'Malabar Coast',
    title: 'The Malabar Coast (Kerala)',
    distance: '850 km to Uppal',
    story: 'We source our organic coconuts, black peppercorns, and fresh curry leaves directly from smallholder farms along the Malabar Coast. The coastal sea breeze gives the coconut pulp a natural, sweet salinity.',
    focus: 'Coconut Milk & Spiced Broths'
  },
  {
    id: 'Coorg Hills',
    title: 'Coorg Pepper Plantations (Karnataka)',
    distance: '620 km to Uppal',
    story: 'Our black pepper is shade-grown at high altitudes in Coorg. Intercropped with coffee and cardamom, these pepper pods absorb deep notes of forest loam and sweet spice.',
    focus: 'Cracked Black Pepper & Cardamom'
  },
  {
    id: 'Guntur Valley',
    title: 'Guntur Spice Plains (Andhra)',
    distance: '270 km to Uppal',
    story: 'The volcanic soil of Guntur yields red chillies with an intense capsicum kick. We select dry whole chillies, milling them to a coarse, smoky powder in our kitchen in Uppal.',
    focus: 'Crimson Red Chilli & Coriander'
  }
];

export default function SpiceRouteCloudKitchenPage() {
  // Menu Estimator States
  const [eventType, setEventType] = useState('Corporate Gala');
  const [guests, setGuests] = useState(100);
  const [menuTier, setMenuTier] = useState('Premium');

  // Spice Trail Map State
  const [activeHub, setActiveHub] = useState('Malabar Coast');

  // Dish details state
  const [activeDishDetails, setActiveDishDetails] = useState(null);

  // Form States & Validations
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Dynamic pricing calculation
  const getTierPrice = () => {
    switch(menuTier) {
      case 'Standard': return 500;
      case 'Premium': return 800;
      case 'Royal': return 1350;
      default: return 800;
    }
  };

  const calculateTotal = () => {
    const pricePerPlate = getTierPrice();
    const base = pricePerPlate * guests;
    
    // Add setup premium based on event type
    let setupPremium = 0;
    if (eventType === 'Corporate Gala') {
      setupPremium = base * 0.12; // 12% premium setup/service for corporate setups
    } else if (eventType === 'Wedding Banquet') {
      setupPremium = base * 0.15; // 15% grand wedding setup
    } else {
      setupPremium = 3000; // Flat fee for dinners/anniversaries
    }

    const subtotal = base + setupPremium;
    const gst = Math.round(subtotal * 0.05); // 5% GST
    const total = subtotal + gst;

    return {
      perPlate: pricePerPlate,
      base: base,
      setup: Math.round(setupPremium),
      gst: gst,
      total: total
    };
  };

  const pricing = calculateTotal();

  // Dynamic menu items display
  const getTierMenu = () => {
    if (menuTier === 'Standard') {
      return [
        { type: 'Welcome drink', item: 'Lemongrass Ginger Infusion' },
        { type: 'Starter', item: 'Crispy Lotus Stem Honey Chilli' },
        { type: 'Main Curry', item: 'Spicy Thai Green Curry Veg' },
        { type: 'Side Curry', item: 'Stir-Fried Seasonal Vegetables' },
        { type: 'Rice', item: 'Steamed Jasmine Rice' },
        { type: 'Noodles', item: 'Chilli Garlic Hakka Noodles' },
        { type: 'Dessert', item: 'Mango Coconut Milk Pudding' }
      ];
    } else if (menuTier === 'Premium') {
      return [
        { type: 'Welcome drinks', item: 'Lemongrass Iced Tea & Kokum Sparkling Fizz' },
        { type: 'Starters', item: 'Coorg Pepper Paneer Skewers & Schezwan Veg Dumplings' },
        { type: 'Gourmet Curry', item: 'Malabar Coconut Vegetable Stew' },
        { type: 'Subzi specialty', item: 'Paneer Lababdar Premium' },
        { type: 'Accompaniment', item: 'Fluffy Kerala Appam (Freshly Made)' },
        { type: 'Rice & Dal', item: 'Veg Pulao & Dal Tadka with Ghee' },
        { type: 'Desserts', item: 'Baked Elaneer Payasam & Caramel Custard' }
      ];
    } else {
      return [
        { type: 'Welcome Cocktails', item: 'Kaffir Lime Cooler & Creamy Avocado Shake' },
        { type: 'Appetizers', item: 'Chilli Basil Paneer, Coorg Pepper Mushroom & Veg Gyoza' },
        { type: 'Signature Main', item: 'Malabar Curry Veg & Exotic Greens in Sichuan Sauce' },
        { type: 'Rice Specialists', item: 'Spice Route Special Biryani & Jasmine Fried Rice' },
        { type: 'Flatbreads', item: 'Romali Naan, Appam & Malabar Parotta' },
        { type: 'Creamy Lentils', item: 'Slow-cooked Dal Bukhara' },
        { type: 'Chef Desserts', item: 'Saffron Mango Mousse, Hot Honey Drizzled Fried Bananas with Gelato & Baked Payasam' }
      ];
    }
  };

  const currentMenu = getTierMenu();

  // Contact Form Handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full name is required.';
    if (!formData.eventDate) errors.eventDate = 'Event date is required.';
    
    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Mobile number is required.';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-[family-name:var(--font-inter)] text-[#334155] selection:bg-[#EA580C] selection:text-white pb-12">
      
      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b-2 border-slate-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#334155] flex items-center justify-center text-white shadow-md">
                <Compass className="w-5.5 h-5.5 text-[#EA580C]" />
              </div>
              <div>
                <span className="font-[family-name:var(--font-plus-jakarta)] font-extrabold text-xl tracking-tight text-[#1E293B] block leading-none">
                  SPICE ROUTE
                </span>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest block mt-0.5">Fusion Cloud Kitchen</span>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#EA580C] transition-colors">Our Concept</a>
              <a href="#trail" className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#EA580C] transition-colors">Spice Trail Map</a>
              <a href="#estimator" className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#EA580C] transition-colors">Estimator</a>
              <a href="#signature" className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#EA580C] transition-colors">Dishes</a>
              <a href="#testimonials" className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#EA580C] transition-colors">Feedback</a>
            </nav>

            <a 
              href="#booking"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#EA580C] hover:bg-[#C2410C] rounded transition-all active:scale-[0.97] duration-150 shadow-md"
            >
              Book Catering
            </a>
          </div>
        </div>
      </header>

      {/* Main Bento Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Title Block (7 cols) */}
          <div className="lg:col-span-8 bg-white border-2 border-slate-200 rounded-xl p-8 lg:p-12 shadow-sm flex flex-col justify-between relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#FFF7ED] via-transparent to-transparent opacity-50 -z-10"></div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#FFF7ED] border border-[#FFEDD5] text-[#EA580C] text-[10px] font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>Pan-Asian & Coastal India Catering in Uppal</span>
              </div>
              
              <h1 className="font-[family-name:var(--font-plus-jakarta)] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1E293B] uppercase leading-none">
                Gourmet Fusion <br />
                <span className="text-[#EA580C]">Curated for Modern Events.</span>
              </h1>
              
              <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
                Spice Route traces ancient culinary trails, bringing progressive fusion plating, smart temperature-controlled kitchen systems, and award-winning chef expertise to Hyderabad.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t-2 border-slate-100 pt-8 mt-8">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Smart Safety</span>
                <span className="text-sm font-bold text-slate-800">100% Sealed Packs</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Expertise</span>
                <span className="text-sm font-bold text-slate-800">5-Star Culinary Team</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Sourcing</span>
                <span className="text-sm font-bold text-slate-800">Direct From Farms</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Hyderabad Coverage</span>
                <span className="text-sm font-bold text-slate-800">Uppal & Beyond</span>
              </div>
            </div>
          </div>

          {/* Grid Images (4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-4">
            
            <div className="bg-white border-2 border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden group h-52">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400&h=300"
                alt="Contemporary plating"
                className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-6 left-6 bg-[#1E293B]/95 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded border border-slate-700">
                Progressive Presentation
              </div>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden group h-52">
              <img 
                src="https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=400&h=300"
                alt="Pan-Asian Dumplings"
                className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-6 left-6 bg-[#1E293B]/95 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded border border-slate-700">
                Pan-Asian Dim Sum
              </div>
            </div>

          </div>

        </section>

        {/* Brand Story Concept */}
        <section id="about" className="scroll-mt-24 space-y-6">
          <div className="border-b-2 border-slate-200 pb-4">
            <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest">01 / CONCEPT</span>
            <h2 className="font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold text-[#1E293B] uppercase mt-1">Tracing Ancient Spice Trails</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="md:col-span-2 bg-[#1E293B] text-white border-2 border-slate-800 rounded-xl p-8 flex flex-col justify-between shadow-md">
              <div>
                <Award className="w-8 h-8 text-[#EA580C] mb-6" />
                <h3 className="font-[family-name:var(--font-plus-jakarta)] text-xl font-bold uppercase tracking-wide mb-4">
                  Where Malabar Peppercorn Meets Sichuan Heat
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Spice Route was born from a desire to celebrate the ancient maritime routes that connected India\'s southern coasts to East Asia. We curate menus that blend the coconut-rich curries of the Malabar Coast with the bold, aromatic fire of Guntur chillies, and the clean textures of Cantonese wok dishes.
                </p>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Led by Master Chef Varun, our culinary crew works out of a smart facility in Uppal Industrial Area. We use custom induction cooking systems to guarantee absolute recipe consistency and maintain delicate flavor balances.
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-800 pt-6 mt-6">
                <ChefHat className="w-6 h-6 text-[#EA580C]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Awarded Top Cloud Kitchen 2025</span>
              </div>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <Shield className="w-8 h-8 text-[#EA580C] mb-6" />
                <h3 className="font-[family-name:var(--font-plus-jakarta)] text-lg font-bold text-[#1E293B] uppercase mb-3">Smart Hygiene</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">
                  We use contact-free packaging with secure thermal seals to deliver pristine meals:
                </p>
                <div className="space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-[#EA580C]" />
                    <span>UV-C food container sanitization.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-[#EA580C]" />
                    <span>Completely induction-based flame-free kitchen.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-[#EA580C]" />
                    <span>QR-code hygiene logs available for every order.</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 rounded p-3 text-[10px] text-slate-500 font-mono mt-6">
                HACCP certified clean kitchen base.
              </div>
            </div>

          </div>
        </section>

        {/* The Spice Trail Interactive Map (Unique Signature Element) */}
        <section id="trail" className="bg-white border-2 border-slate-200 rounded-xl p-8 shadow-sm scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Explanatory text (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">02 / INGREDIENT MAP</span>
                <h2 className="font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold text-[#1E293B] uppercase mt-1">
                  The Spice Trail Map
                </h2>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Click on any harvesting hub on our spice route map to trace the distance, the cultivation environment, and learn how we transport fresh ingredients to our cloud kitchen in Uppal, Hyderabad.
              </p>
              
              <div className="space-y-2">
                {MAP_HUBS.map((hub) => (
                  <button
                    key={hub.id}
                    onClick={() => setActiveHub(hub.id)}
                    className={`w-full p-3.5 rounded text-left border-2 text-xs font-bold transition-all active:scale-[0.98] ${
                      activeHub === hub.id 
                        ? 'bg-[#334155] border-[#334155] text-white shadow-sm' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-[#334155]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{hub.title}</span>
                      <span className="text-[10px] font-mono text-[#EA580C]">{hub.distance}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Trace Story Panel (7 cols) */}
            <div className="lg:col-span-7 bg-[#F8FAFC] border-2 border-dashed border-slate-200 rounded-xl p-6 relative overflow-hidden min-h-[320px] flex flex-col justify-between">
              
              {MAP_HUBS.map((hub) => {
                if (hub.id !== activeHub) return null;
                return (
                  <div key={hub.id} className="space-y-4 animate-fade-in flex flex-col justify-between h-full">
                    
                    <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                      <div>
                        <h4 className="font-[family-name:var(--font-plus-jakarta)] text-lg font-bold text-[#1E293B] uppercase">{hub.title}</h4>
                        <span className="text-[10px] font-mono text-slate-400 block mt-0.5">Route Distance: {hub.distance}</span>
                      </div>
                      <span className="bg-white border-2 border-slate-200 text-[10px] font-bold text-[#EA580C] px-3 py-1 rounded">
                        Focus: {hub.focus}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {hub.story}
                    </p>
                    
                    <div className="bg-white border-2 border-slate-100 p-4 rounded flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#EA580C]">
                          <Locate className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold text-slate-400 uppercase">Current Logistics Status</span>
                          <span className="text-xs font-bold text-slate-800">Direct Express Cold-Chain Active</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-mono text-[#EA580C] font-bold">
                        <span>Transit Time: &lt; 24h</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="pt-3">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1.5">Traced Dishes in Menu</span>
                      <div className="flex flex-wrap gap-2">
                        {SIGNATURE_DISHES.filter(d => d.origin === hub.id).map(dish => (
                          <span key={dish.id} className="text-xs bg-[#FFF7ED] text-[#EA580C] font-bold border border-[#FFEDD5] px-2.5 py-1 rounded">
                            {dish.name}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        </section>

        {/* Interactive Menu Estimator */}
        <section id="estimator" className="bg-white border-2 border-slate-200 rounded-xl p-8 shadow-sm scroll-mt-24">
          <div className="border-b-2 border-slate-100 pb-6 mb-8 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest block">03 / ESTIMATOR</span>
            <h2 className="font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold text-[#1E293B] uppercase mt-1">
              Gourmet Menu Customizer & Estimator
            </h2>
            <p className="text-slate-500 text-xs mt-1">Tweak guests count, select event settings, and choose menu tiers for immediate budget clarity.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Selection (5 cols) */}
            <div className="lg:col-span-5 bg-[#F8FAFC] border-2 border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-6">
              
              {/* Event Type */}
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">1. Select Event Category</span>
                <div className="grid grid-cols-2 gap-2">
                  {['Corporate Gala', 'Wedding Banquet', 'Private Dinner', 'Milestone Anniversary'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setEventType(type)}
                      className={`py-3 px-3 text-xs font-bold rounded border-2 transition-all active:scale-[0.98] ${
                        eventType === type
                          ? 'bg-[#334155] border-[#334155] text-white shadow-sm'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-[#334155]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">2. Estimated Guests</span>
                  <input
                    type="number"
                    min="20"
                    max="1000"
                    value={guests}
                    onChange={(e) => setGuests(Math.max(20, Math.min(1000, parseInt(e.target.value) || 0)))}
                    className="w-20 text-center font-mono font-bold text-slate-800 bg-white border-2 border-slate-200 rounded py-1 px-2 text-xs focus:outline-none focus:border-[#EA580C]"
                  />
                </div>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="5"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full accent-[#EA580C] cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-bold font-mono mt-1">
                  <span>MIN: 20</span>
                  <span>MAX: 1000</span>
                </div>
              </div>

              {/* Menu Tier */}
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">3. Menu Quality Tier</span>
                <div className="space-y-2">
                  {[
                    { id: 'Standard', desc: 'Coastal street food & fusion basics', price: '₹500/plate' },
                    { id: 'Premium', desc: 'Malabar & pan-Asian specialties', price: '₹800/plate' },
                    { id: 'Royal', desc: 'Complete premium degustation menu', price: '₹1350/plate' }
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setMenuTier(tier.id)}
                      className={`w-full p-4 rounded border-2 text-left flex justify-between items-center transition-all active:scale-[0.98] ${
                        menuTier === tier.id
                          ? 'bg-white border-[#EA580C] shadow-sm ring-2 ring-[#EA580C]/10'
                          : 'bg-white border-slate-200 hover:border-[#EA580C]'
                      }`}
                    >
                      <div>
                        <span className={`block font-bold text-xs uppercase ${menuTier === tier.id ? 'text-[#EA580C]' : 'text-slate-800'}`}>
                          {tier.id} Package
                        </span>
                        <span className="block text-[10px] text-slate-400 font-medium mt-0.5">{tier.desc}</span>
                      </div>
                      <span className="text-xs font-mono font-extrabold text-slate-800">{tier.price}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Menu details & output (7 cols) */}
            <div className="lg:col-span-7 border-2 border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-6">
              
              {/* Menu list */}
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block border-b border-slate-100 pb-2 mb-3">
                  Estimated Plate Selection ({menuTier} Pack)
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[260px] overflow-y-auto pr-2">
                  {currentMenu.map((item, idx) => (
                    <div key={idx} className="bg-[#F8FAFC] border border-slate-100 rounded p-2.5 flex items-center justify-between">
                      <div className="flex gap-2">
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold mt-0.5">{item.type}:</span>
                        <span className="text-xs font-bold text-slate-700">{item.item}</span>
                      </div>
                      <Check className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Calculation Card */}
              <div className="bg-[#334155] text-white rounded-xl p-5 relative overflow-hidden">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-3 border-b border-slate-600 pb-2">
                  Event Estimate Calculator
                </span>
                
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Plate Charge ({guests} × ₹{pricing.perPlate})</span>
                    <span>₹{pricing.base.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Logistics & Setup ({eventType})</span>
                    <span>₹{pricing.setup.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-slate-200">
                    <span className="text-slate-400">GST (5%)</span>
                    <span>₹{pricing.gst.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-600 pt-2.5 text-sm font-bold text-[#EA580C]">
                    <span className="font-sans text-white uppercase tracking-wider">Estimated Total:</span>
                    <span>₹{pricing.total.toLocaleString()}</span>
                  </div>
                </div>

                <a 
                  href="#booking"
                  className="mt-4 w-full py-3 bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider rounded transition-all active:scale-[0.98] inline-flex justify-center items-center gap-1.5 shadow"
                >
                  <span>Request Customization quote</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </section>

        {/* Signature Dishes Grid */}
        <section id="signature" className="scroll-mt-24 space-y-6">
          <div className="border-b-2 border-slate-200 pb-4">
            <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest">04 / DISHES</span>
            <h2 className="font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold text-[#1E293B] uppercase mt-1">The Gourmet Signature Plates</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SIGNATURE_DISHES.map((dish) => (
              <div 
                key={dish.id}
                className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <div>
                  <div className="relative h-44 bg-slate-100 overflow-hidden">
                    <img 
                      src={dish.image} 
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-[#334155]/95 text-white text-[8px] font-bold font-mono px-2 py-0.5 rounded border border-slate-700">
                      {dish.origin}
                    </div>
                  </div>
                  
                  <div className="p-5 space-y-2">
                    <span className="text-[9px] text-[#EA580C] font-bold uppercase tracking-wider block">{dish.category}</span>
                    <h3 className="font-[family-name:var(--font-plus-jakarta)] text-base font-bold text-[#1E293B] leading-tight">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {dish.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button 
                    onClick={() => setActiveDishDetails(dish)}
                    className="w-full py-2 bg-slate-50 hover:bg-[#EA580C] border border-slate-200 hover:border-[#EA580C] text-[#334155] hover:text-white text-[11px] font-bold rounded transition-colors active:scale-[0.98]"
                  >
                    Trace Sourcing & Prep
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking & Reviews */}
        <section id="booking" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch scroll-mt-24">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-white border-2 border-slate-200 rounded-xl p-8 lg:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold text-[#1E293B] uppercase mb-2">Book Gourmet Consultation</h2>
              <p className="text-xs text-slate-500 mb-6">Schedule a direct menu discussion with Chef Varun. Lock in your estimation settings instantly.</p>

              {isSuccess ? (
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded p-6 text-center space-y-4 animate-fade-in my-6">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                    <Check className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="font-[family-name:var(--font-plus-jakarta)] text-lg font-bold text-slate-900 uppercase">Consultation Registered</h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. Your requested date <strong className="text-slate-800">{formData.eventDate}</strong> has been secured in our system.
                  </p>
                  <div className="bg-white border border-slate-200 rounded p-4 text-left max-w-sm mx-auto space-y-1 text-xs text-slate-500 font-mono">
                    <div><strong>REF ID:</strong> SR-CO-{Math.floor(1000 + Math.random() * 9000)}</div>
                    <div><strong>GUEST TARGET:</strong> {guests} pax</div>
                    <div><strong>ESTIMATE TOTAL:</strong> ₹{pricing.total.toLocaleString()} (GST incl.)</div>
                  </div>
                  <div className="pt-2">
                    <a 
                      href={`https://wa.me/919000154321?text=Hi%20Spice%20Route,%20I%20want%20to%20confirm%20my%20catering%20consultation%20for%20${guests}%20guests%20on%20${formData.eventDate}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 rounded transition-all shadow"
                    >
                      Verify on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-name" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Full Name*</label>
                      <input 
                        id="form-name"
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Ramesh Kumar" 
                        className={`w-full px-4 py-3 rounded border bg-slate-50 text-xs focus:outline-none focus:ring-2 focus:ring-[#EA580C]/20 focus:border-[#EA580C] transition-all ${
                          formErrors.name ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {formErrors.name && <span className="text-red-500 text-[10px] font-semibold mt-1 block">{formErrors.name}</span>}
                    </div>
                    <div>
                      <label htmlFor="form-event-date" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Event Date*</label>
                      <input 
                        id="form-event-date"
                        type="date" 
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded border bg-slate-50 text-xs focus:outline-none focus:ring-2 focus:ring-[#EA580C]/20 focus:border-[#EA580C] transition-all ${
                          formErrors.eventDate ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {formErrors.eventDate && <span className="text-red-500 text-[10px] font-semibold mt-1 block">{formErrors.eventDate}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-email" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Email Address*</label>
                      <input 
                        id="form-email"
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ramesh@gmail.com" 
                        className={`w-full px-4 py-3 rounded border bg-slate-50 text-xs focus:outline-none focus:ring-2 focus:ring-[#EA580C]/20 focus:border-[#EA580C] transition-all ${
                          formErrors.email ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {formErrors.email && <span className="text-red-500 text-[10px] font-semibold mt-1 block">{formErrors.email}</span>}
                    </div>
                    <div>
                      <label htmlFor="form-phone" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Mobile Number*</label>
                      <input 
                        id="form-phone"
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 90001 54321" 
                        className={`w-full px-4 py-3 rounded border bg-slate-50 text-xs focus:outline-none focus:ring-2 focus:ring-[#EA580C]/20 focus:border-[#EA580C] transition-all ${
                          formErrors.phone ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {formErrors.phone && <span className="text-red-500 text-[10px] font-semibold mt-1 block">{formErrors.phone}</span>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-message" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Catering Customizations / Notes</label>
                    <textarea 
                      id="form-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Special dietary guidelines, spice levels, or specific food layout expectations..." 
                      className="w-full px-4 py-3 rounded border border-slate-200 bg-slate-50 text-xs focus:outline-none focus:ring-2 focus:ring-[#EA580C]/20 focus:border-[#EA580C] transition-all"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold uppercase tracking-wider text-xs rounded transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <span>Request Custom Quote & Lock Settings</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Testimonials (5 cols) */}
          <div id="testimonials" className="lg:col-span-5 bg-white border-2 border-slate-200 rounded-xl p-8 shadow-sm flex flex-col justify-between scroll-mt-24">
            <div>
              <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest block">05 / REVIEWS</span>
              <h3 className="font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold text-[#1E293B] uppercase mt-1 mb-6">Corporate & Client Reviews</h3>
              
              <div className="space-y-6">
                {[
                  {
                    name: 'Kshitij Reddy',
                    role: 'Corporate Operations Manager',
                    location: 'Gachibowli, Hyderabad',
                    comment: 'Spice Route catered our corporate event for 200 guests. The Malabar Stew and Appam counter was a huge hit! Excellent communication, perfect temperature-controlled logistics, and beautiful plating.',
                    rating: 5
                  },
                  {
                    name: 'Lavanya Goud',
                    role: 'Anniversary Client',
                    location: 'Uppal, Hyderabad',
                    comment: 'Outstanding progressive Indian and Pan-Asian dishes. Their Coorg Pepper Paneer Skewers are incredible. Highly recommend their smart catering system if you want hassle-free premium setup.',
                    rating: 5
                  },
                  {
                    name: 'Dr. Vivek Saxena',
                    role: 'Private Gathering',
                    location: 'Secunderabad',
                    comment: 'Every guest loved the food. Clean, non-greasy, and perfectly spiced. The Elaneer Payasam is to die for. Spice Route is definitely our go-to caterer now.',
                    rating: 5
                  }
                ].map((item, idx) => (
                  <div key={idx} className="border-b-2 border-slate-50 pb-4 last:border-b-0 last:pb-0 space-y-1.5">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-bold text-xs text-slate-800 block leading-none">{item.name}</span>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mt-0.5">{item.role} • {item.location}</span>
                      </div>
                      <div className="flex text-[#EA580C]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#EA580C] text-[#EA580C]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-600 text-xs italic leading-relaxed">
                      "{item.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F8FAFC] border-2 border-slate-100 rounded p-4 mt-6 flex justify-between items-center">
              <div>
                <span className="block text-[9px] font-bold text-slate-400 uppercase">Average Rating</span>
                <span className="text-sm font-extrabold text-slate-800">4.9 / 5.0 (180+ Audited Reviews)</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[#EA580C]">
                <Star className="w-4.5 h-4.5 fill-[#EA580C]" />
              </div>
            </div>
          </div>

        </section>

      </main>

      {/* Footer Details */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-[#334155] text-white rounded-xl p-8 lg:p-10 border border-slate-700 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-600">
            
            {/* Col 1 */}
            <div className="space-y-4">
              <h4 className="font-[family-name:var(--font-plus-jakarta)] text-lg font-bold uppercase tracking-wider text-[#EA580C]">Spice Route</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Tracing the ancient maritime spice trails to bring progressive Indian and Pan-Asian fusion culinary excellence directly to your events in Hyderabad.
              </p>
            </div>

            {/* Col 2 */}
            <div className="space-y-3">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Operational Kitchen Base</span>
              <div className="flex items-start gap-2 text-xs text-slate-200">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans">IDA Uppal Central Hub</strong>
                  <span>Plot No. 110, Survey No. 50, Uppal Industrial Area, Hyderabad, Telangana - 500039</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <Clock className="w-4 h-4 text-[#EA580C]" />
                <span>Operating Hours: 7:00 AM - 11:30 PM Daily</span>
              </div>
            </div>

            {/* Col 3 */}
            <div className="space-y-3">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Contact & Licensing</span>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <Phone className="w-4 h-4 text-[#EA580C]" />
                <span>Call Hotline: +91 90001 54321</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <Mail className="w-4 h-4 text-[#EA580C]" />
                <span>Queries: hello@spiceroutekitchen.com</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <Info className="w-4 h-4 text-[#EA580C]" />
                <span>FSSAI License: #13624021000890</span>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[10px] text-slate-400">
            <p>&copy; {new Date().getFullYear()} Spice Route Cloud Kitchen. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0 font-mono">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Kitchen Logbook</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sourcing Prep Details Modal */}
      {activeDishDetails && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full overflow-hidden border-2 border-slate-200 shadow-2xl relative animate-scale-up">
            <button 
              onClick={() => setActiveDishDetails(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <img 
              src={activeDishDetails.image} 
              alt={activeDishDetails.name} 
              className="w-full h-44 object-cover"
            />
            
            <div className="p-6 space-y-4">
              <div>
                <span className="text-[9px] text-[#EA580C] font-bold uppercase tracking-wider block">{activeDishDetails.category}</span>
                <h3 className="font-[family-name:var(--font-plus-jakarta)] text-lg font-bold text-slate-900 leading-tight">
                  {activeDishDetails.name}
                </h3>
              </div>

              <div className="bg-slate-50 rounded p-4 border border-slate-200 space-y-2 text-xs">
                <div>
                  <strong className="text-slate-800 uppercase block text-[9px] tracking-wider">Spice Sourcing & Origin:</strong>
                  <p className="text-slate-500 mt-0.5">
                    This recipe trace back to {activeDishDetails.origin}, shipped directly to Uppal via refrigerated cold-chain courier logs.
                  </p>
                </div>
                <div>
                  <strong className="text-slate-800 uppercase block text-[9px] tracking-wider">Preparation Details:</strong>
                  <p className="text-slate-600 mt-0.5">{activeDishDetails.details}</p>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button 
                  onClick={() => setActiveDishDetails(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded"
                >
                  Close
                </button>
                <a 
                  href="#booking"
                  onClick={() => setActiveDishDetails(null)}
                  className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#EA580C] hover:bg-[#C2410C] rounded shadow-sm"
                >
                  Request in Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

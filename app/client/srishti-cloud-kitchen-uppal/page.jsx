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
  Flame,
  Search,
  CheckCircle2,
  Heart
} from 'lucide-react';

// Mock Data for Srishti Cloud Kitchen
const SIGNATURE_DISHES = [
  {
    id: 'dish-1',
    name: 'Srishti Royal Nizami Dum Biryani',
    category: 'Main Course',
    tag: 'Signature Best Seller',
    spiciness: 'Medium',
    spiceCategory: 'Cardamom',
    description: 'Slow-cooked fragrant Basmati rice layered with premium spices, saffron, and tender marinated vegetables or protein, sealed with dough in a clay pot.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600&h=400',
    ingredients: 'Double-aged Basmati, Zafran (Saffron), Cardamom, Mace, Ghee-roasted Cashews.'
  },
  {
    id: 'dish-2',
    name: 'Guntur Gongura Paneer Tikka',
    category: 'Starter',
    tag: 'Spicy Fusion',
    spiciness: 'Spicy',
    spiceCategory: 'Guntur Chilli',
    description: 'Fresh cottage cheese cubes marinated in a fiery paste of Guntur red chillies and tangy Gongura (sorrel leaves), roasted in our charcoal clay oven.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600&h=400',
    ingredients: 'Fresh Paneer, Gongura Extract, Guntur Chilli Paste, Mustard Oil, Kasuri Methi.'
  },
  {
    id: 'dish-3',
    name: 'Earthy Karivepaku Dal Tadka',
    category: 'Main Course',
    tag: 'Heritage Comfort',
    spiciness: 'Mild',
    spiceCategory: 'Curry Leaf',
    description: 'Slow-simmered yellow lentils tempered with hand-pounded garlic, dried whole chillies, and crisp, fresh curry leaves from our backyard farm.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=600&h=400',
    ingredients: 'Toor Dal, Fresh Curry Leaves, Cold-pressed Groundnut Oil, Hand-crushed Garlic, Cumin Seeds.'
  },
  {
    id: 'dish-4',
    name: 'Zafrani Qubani Ka Meetha',
    category: 'Dessert',
    tag: 'Royal Legacy',
    spiciness: 'Sweet',
    spiceCategory: 'Cardamom',
    description: 'A traditional Hyderabadi dessert made from stewed dried apricots, infused with saffron threads and green cardamom, served with thick clotted cream.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600&h=400',
    ingredients: 'Turkish Apricots, Iranian Saffron, Cardamom Powder, Almond Slivers, Fresh Malai.'
  }
];

const SPICES = [
  {
    id: 'Guntur Chilli',
    name: 'Guntur Red Chilli',
    story: 'Sourced from the sun-drenched farms of Guntur, our red chillies are sun-dried and freshly milled every week in Uppal to preserve their natural pungency and deep crimson color.',
    intensity: 'High 🔥🔥🔥',
    benefit: 'Gives the signature vibrant bite and heat.'
  },
  {
    id: 'Cardamom',
    name: 'Green Cardamom (Elaichi)',
    story: 'Handpicked from the slopes of the Western Ghats, our green cardamom pods are cracked fresh for each batch, releasing high-altitude floral oils.',
    intensity: 'Fragrant 🍃',
    benefit: 'Infuses delicate sweetness and royal aroma.'
  },
  {
    id: 'Curry Leaf',
    name: 'Curry Leaf (Karivepaku)',
    story: 'Grown organically in our local Uppal kitchen garden. Picked at dawn, these leaves are tempered in hot wood-pressed oil to release their essential earthy oils.',
    intensity: 'Mild & Aromatic 🌱',
    benefit: 'Creates a base earthy note that grounds heavy spices.'
  }
];

export default function SrishtiCloudKitchenPage() {
  // Menu Estimator States
  const [eventType, setEventType] = useState('Wedding Feast');
  const [guests, setGuests] = useState(150);
  const [menuTier, setMenuTier] = useState('Premium');

  // Spice Drawer Signature State
  const [selectedSpice, setSelectedSpice] = useState('Cardamom');

  // Dish details modal state
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
      case 'Standard': return 499;
      case 'Premium': return 799;
      case 'Royal': return 1299;
      default: return 799;
    }
  };

  const calculateTotal = () => {
    const pricePerPlate = getTierPrice();
    const base = pricePerPlate * guests;
    
    // Add setup premium based on event type
    let setupPremium = 0;
    if (eventType === 'Wedding Feast') {
      setupPremium = base * 0.10; // 10% premium setup
    } else if (eventType === 'Corporate Gala') {
      setupPremium = 5000; // Flat extra support fee
    } else {
      setupPremium = 2000; // Birthday/Small parties
    }

    const subtotal = base + setupPremium;
    const gst = Math.round(subtotal * 0.05); // 5% GST on catering
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
        { type: 'Welcome Drink', item: 'Traditional Nannari Sherbet' },
        { type: 'Starter', item: 'Crispy Hara Bhara Kabab' },
        { type: 'Main Curry', item: 'Classic Paneer Butter Masala' },
        { type: 'Dal', item: 'Dhabewali Dal Tadka' },
        { type: 'Rice', item: 'Steamed Basmati & Veg Pulao' },
        { type: 'Breads', item: 'Tandoori Roti & Naan' },
        { type: 'Dessert', item: 'Hot Gulab Jamun (2 pcs)' }
      ];
    } else if (menuTier === 'Premium') {
      return [
        { type: 'Welcome Drinks', item: 'Fresh Mint Mojito & Chilled Badam Milk' },
        { type: 'Starters', item: 'Guntur Gongura Paneer Tikka & Golden Crispy Corn' },
        { type: 'Main Curries', item: 'Kadai Paneer & Creamy Malai Kofta' },
        { type: 'Rice Specialty', item: 'Srishti Signature Veg Dum Biryani' },
        { type: 'Dal & Accompaniments', item: 'Karivepaku Dal Tadka & Mix Veg Raita' },
        { type: 'Breads', item: 'Butter Naan, Garlic Naan & Kulcha' },
        { type: 'Desserts', item: 'Zafrani Kheer & Double Ka Meetha' }
      ];
    } else {
      return [
        { type: 'Welcome Cocktails', item: 'Royal Zafrani Lassi & Tender Coconut Cooler' },
        { type: 'Appetizers', item: 'Paneer Majestic, Gobi 65 & Mushroom Pepper Fry' },
        { type: 'Gourmet Curries', item: 'Chettinad Veg Kurma & Methi Chaman Premium' },
        { type: 'Biryani Feast', item: 'Royal Hyderabadi Dum Biryani & Mirchi Ka Salan' },
        { type: 'Breads of India', item: 'Romali Roti, Butter Naan & Laccha Paratha' },
        { type: 'Heritage Dal', item: 'Dal Makhani Slow-cooked Overnight' },
        { type: 'Deluxe Desserts', item: 'Zafrani Qubani Ka Meetha with Vanilla Gelato, Elachi Rabri & Shahi Tukda' }
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
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your full name.';
    if (!formData.eventDate) errors.eventDate = 'Event date is required.';
    
    // Email Validation
    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }

    // Phone Validation
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
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-[family-name:var(--font-plus-jakarta)] text-[#334155] selection:bg-[#EA580C] selection:text-white pb-12">
      
      {/* Dynamic Header / Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#EA580C] flex items-center justify-center shadow-md shadow-[#EA580C]/20 text-white">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <span className="font-[family-name:var(--font-playfair)] font-extrabold text-2xl tracking-tight text-[#1E293B]">
                  Srishti <span className="text-[#EA580C]">Catering</span>
                </span>
                <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">Cloud Kitchen & Banquets</span>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#heritage" className="text-sm font-semibold text-slate-600 hover:text-[#EA580C] transition-colors">Heritage</a>
              <a href="#spice-drawer" className="text-sm font-semibold text-slate-600 hover:text-[#EA580C] transition-colors">Spice Craft</a>
              <a href="#estimator" className="text-sm font-semibold text-slate-600 hover:text-[#EA580C] transition-colors">Menu Planner</a>
              <a href="#signature" className="text-sm font-semibold text-slate-600 hover:text-[#EA580C] transition-colors">Signature Dishes</a>
              <a href="#testimonials" className="text-sm font-semibold text-slate-600 hover:text-[#EA580C] transition-colors">Reviews</a>
            </nav>

            <a 
              href="#booking"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.97] duration-150"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </header>

      {/* Main Bento Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* Bento Cell 1: Hero Block */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Hero Content (2 columns on large screens) */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#FFF7ED] to-[#FEF3C7] rounded-full filter blur-3xl opacity-60 -z-10"></div>
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#FFEDD5] text-[#EA580C] text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premium Catering in Uppal, Hyderabad</span>
              </div>
              
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1E293B] mb-6 leading-tight">
                Authentic Heritage Flavors <br />
                <span className="text-[#EA580C]">Crafted for Royal Feasts.</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
                From intimate family gatherings to grand wedding banquets in Hyderabad, Srishti Cloud Kitchen brings together deep culinary legacy, rigorous hygiene, and customizable gourmet menus.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8 mt-6">
              <div>
                <h4 className="text-2xl font-extrabold text-[#1E293B]">FSSAI 5★</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Hygiene Certified</p>
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-[#1E293B]">25+ Years</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Culinary Legacy</p>
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-[#1E293B]">100% Fresh</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Locally Sourced</p>
              </div>
            </div>
          </div>

          {/* Hero Image Grid Cell (1 column on large screens) */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1E293B] mb-4">Glimpse of our Craft</h3>
            
            <div className="grid grid-cols-2 gap-3 flex-grow">
              <div className="relative group overflow-hidden rounded-2xl h-36">
                <img 
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=300&h=300" 
                  alt="Catering buffet setup" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-[#334155]/20 group-hover:bg-[#334155]/40 transition-colors"></div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl h-36">
                <img 
                  src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=300&h=300" 
                  alt="Samosa and spices" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-[#334155]/20 group-hover:bg-[#334155]/40 transition-colors"></div>
              </div>
              <div className="col-span-2 relative group overflow-hidden rounded-2xl h-44">
                <img 
                  src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=500&h=350" 
                  alt="Main course Indian dish" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-[#334155]/20 group-hover:bg-[#334155]/40 transition-colors"></div>
                <div className="absolute bottom-3 left-3 bg-[#1E293B]/90 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-xs font-bold">
                  Srishti Cooked Fresh
                </div>
              </div>
            </div>
            
            <a href="#signature" className="mt-4 text-xs font-bold text-[#EA580C] hover:text-[#C2410C] inline-flex items-center gap-1 group justify-end">
              <span>View Signature Dishes</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </section>

        {/* Bento Cell 2: Brand Story / Heritage */}
        <section id="heritage" className="scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-[#1E293B] mb-2">Our Culinary Roots</h2>
            <p className="text-slate-500 text-sm">How we blend royal taste, modern safety, and local pride in Uppal, Hyderabad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Heritage Card 1 (Main Story) */}
            <div className="md:col-span-2 bg-[#334155] text-white rounded-3xl p-8 lg:p-10 border border-slate-700 shadow-md relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#EA580C]/20 to-transparent rounded-full filter blur-2xl opacity-40"></div>
              
              <div>
                <Award className="w-10 h-10 text-[#EA580C] mb-6" />
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                  Rayalaseema Spice Meets Royal Nizami Sophistication
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Srishti began as a family recipe kitchen in Hyderabad. Over the decades, we have masterfully integrated the rustic fire of Andhra/Rayalaseema spice trails with the delicate, slow-cooked refinement of the royal Nizami banquets.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Every dry spice is hand-selected and stone-ground locally. We never use pre-packaged spice mixes or artificial colorings. This absolute fidelity to authentic culinary processes is what sets Srishti apart in Uppal.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-600/50">
                <ChefHat className="w-8 h-8 text-[#EA580C]" />
                <div>
                  <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider leading-none">Curated By</span>
                  <span className="text-sm font-bold">Executive Chef Srinivas Yanala</span>
                </div>
              </div>
            </div>

            {/* Heritage Card 2 (Hygiene Shield) */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#EA580C] mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1E293B] mb-3">Hygiene Shield</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  We maintain surgical-grade hygiene within our commercial cloud kitchen in IDA Uppal:
                </p>
                <ul className="space-y-2.5 text-xs text-slate-500">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span>Double HEPA-filtered air circulation system.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span>Hourly sanitization logbook and body temperature tracking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span>FDA-approved food-grade stainless steel surfaces exclusively.</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#FFF7ED] border border-[#FFEDD5] rounded-xl p-3 mt-6 text-[11px] text-[#EA580C] font-semibold flex items-center gap-2">
                <Info className="w-4 h-4 shrink-0" />
                <span>Visit our kitchen anytime. Complete visual transparency.</span>
              </div>
            </div>

          </div>
        </section>

        {/* Bento Cell 3: Signature Spice Drawer (Unique Element) */}
        <section id="spice-drawer" className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Explanatory text */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF7ED] text-[#EA580C] text-xs font-bold uppercase tracking-wider mb-4">
                <Flame className="w-3.5 h-3.5" />
                <span>Srishti Specialty</span>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-[#1E293B] mb-4">
                The Heritage Spice Drawer
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Our flavor profile is defined by how we dry, roast, and blend our local spices. Click on any spice drawer to learn about our sourcing, grinding process, and see which signature dishes it powers.
              </p>
              
              <div className="flex gap-2">
                {SPICES.map((spice) => (
                  <button
                    key={spice.id}
                    onClick={() => setSelectedSpice(spice.id)}
                    className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all duration-150 active:scale-95 ${
                      selectedSpice === spice.id 
                        ? 'bg-[#EA580C] border-[#EA580C] text-white shadow-md shadow-[#EA580C]/20' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-[#EA580C]'
                    }`}
                  >
                    {spice.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Spice Story Card */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 lg:col-span-2 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#EA580C]/5 rounded-full filter blur-xl"></div>
              
              {SPICES.map((spice) => {
                if (spice.id !== selectedSpice) return null;
                return (
                  <div key={spice.id} className="animate-fade-in space-y-4">
                    <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                      <h4 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1E293B]">{spice.name}</h4>
                      <span className="text-xs bg-white border border-slate-200 px-2.5 py-1 rounded-full text-[#EA580C] font-extrabold uppercase">
                        Intensity: {spice.intensity}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {spice.story}
                    </p>
                    
                    <div className="bg-white rounded-xl p-3 border border-slate-100 flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <div>
                        <span className="block text-xs font-bold text-slate-800">Primary Culinary Action</span>
                        <p className="text-xs text-slate-500">{spice.benefit}</p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Powered Dishes</span>
                      <div className="flex flex-wrap gap-2">
                        {SIGNATURE_DISHES.filter(d => d.spiceCategory === spice.id).map(dish => (
                          <span key={dish.id} className="text-xs bg-[#FFF7ED] text-[#EA580C] font-semibold px-3 py-1 rounded-lg border border-[#FFEDD5]">
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

        {/* Bento Cell 4: Interactive Menu Estimator */}
        <section id="estimator" className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest block mb-1">Instant Transparency</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-[#1E293B]">
              Interactive Menu customizer & Estimator
            </h2>
            <p className="text-slate-500 text-sm mt-1">Select your event specs below to instantly review a curated menu and custom budget estimate.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Control Panel (5 cols) */}
            <div className="lg:col-span-5 bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 flex flex-col justify-between space-y-6">
              
              {/* Event Type selector */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">1. Event Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Wedding Feast', 'Corporate Gala', 'Birthday Celebration', 'Housewarming Buffet'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setEventType(type)}
                      className={`py-3 px-3 text-left text-xs font-bold rounded-xl border transition-all duration-150 active:scale-95 ${
                        eventType === type
                          ? 'bg-white border-[#EA580C] text-[#EA580C] shadow-sm ring-2 ring-[#EA580C]/10'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-[#EA580C]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count Input & Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">2. Guest Count</label>
                  <input
                    type="number"
                    min="20"
                    max="1000"
                    value={guests}
                    onChange={(e) => setGuests(Math.max(20, Math.min(1000, parseInt(e.target.value) || 0)))}
                    className="w-20 text-center font-bold text-slate-800 bg-white border border-slate-200 rounded-lg py-1 px-2 text-sm focus:outline-none focus:border-[#EA580C]"
                  />
                </div>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full accent-[#EA580C] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-semibold mt-1">
                  <span>Min: 20 guests</span>
                  <span>Max: 1000 guests</span>
                </div>
              </div>

              {/* Menu Tier Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">3. Menu Tier</label>
                <div className="space-y-2">
                  {[
                    { id: 'Standard', desc: 'Authentic local comfort flavors', price: '₹499/plate' },
                    { id: 'Premium', desc: 'Perfect balance of heritage & fusion', price: '₹799/plate' },
                    { id: 'Royal', desc: 'Ultimate gourmet Nizami banquet', price: '₹1299/plate' }
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setMenuTier(tier.id)}
                      className={`w-full p-4 rounded-xl border text-left flex justify-between items-center transition-all duration-150 active:scale-[0.98] ${
                        menuTier === tier.id
                          ? 'bg-white border-[#EA580C] shadow-sm ring-2 ring-[#EA580C]/10'
                          : 'bg-white border-slate-200 hover:border-[#EA580C]'
                      }`}
                    >
                      <div>
                        <span className={`block font-bold text-sm ${menuTier === tier.id ? 'text-[#EA580C]' : 'text-slate-800'}`}>
                          {tier.id} Tier
                        </span>
                        <span className="block text-xs text-slate-400 font-medium">{tier.desc}</span>
                      </div>
                      <span className="text-sm font-extrabold text-[#1E293B]">{tier.price}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Menu & Invoice Preview (7 cols) */}
            <div className="lg:col-span-7 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-6">
              
              {/* Menu Items Preview */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2 mb-3">
                  Included Mock Menu Preview ({menuTier} Tier)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[260px] overflow-y-auto pr-2">
                  {currentMenu.map((item, idx) => (
                    <div key={idx} className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-2.5 flex gap-2">
                      <div className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#EA580C] shrink-0 font-bold text-[9px]">
                        {idx + 1}
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-bold leading-none mb-0.5">
                          {item.type}
                        </span>
                        <span className="text-xs font-bold text-slate-700 leading-tight block">
                          {item.item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Invoice Estimation */}
              <div className="bg-[#334155] text-white rounded-xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full filter blur-md"></div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-600/50 pb-2">
                  Estimated Budget Summary
                </h4>
                
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">{guests} Plates × ₹{pricing.perPlate}</span>
                    <span>₹{pricing.base.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Setup & Service ({eventType})</span>
                    <span>₹{pricing.setup.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">GST (5%)</span>
                    <span>₹{pricing.gst.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-600/50 pt-2.5 text-sm font-bold text-white">
                    <span className="font-sans">Grand Total:</span>
                    <span className="text-[#EA580C]">₹{pricing.total.toLocaleString()}</span>
                  </div>
                </div>

                <a 
                  href="#booking" 
                  className="mt-4 w-full py-3 bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold rounded-lg transition-all active:scale-[0.98] inline-flex justify-center items-center gap-1.5 shadow-md shadow-[#EA580C]/20"
                >
                  <span>Lock In This Estimate</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </section>

        {/* Bento Cell 5: Signature Dishes Grid */}
        <section id="signature" className="scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-[#1E293B] mb-2">Gourmet Signature Dishes</h2>
            <p className="text-slate-500 text-sm">A hand-picked showcase of our finest culinary creations crafted daily in Uppal.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SIGNATURE_DISHES.map((dish) => (
              <div 
                key={dish.id} 
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  {/* Aspect Ratio Box */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img 
                      src={dish.image} 
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80"></div>
                    <div className="absolute top-3 left-3 bg-[#EA580C] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      {dish.tag}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{dish.category}</span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#1E293B] group-hover:text-[#EA580C] transition-colors leading-tight">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button 
                    onClick={() => setActiveDishDetails(dish)}
                    className="w-full py-2 bg-[#F8FAFC] hover:bg-[#EA580C] border border-slate-200 hover:border-[#EA580C] text-[#334155] hover:text-white text-xs font-bold rounded-lg transition-all active:scale-[0.98]"
                  >
                    View Gourmet Ingredients
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bento Cell 6: Booking Form & Local Testimonials (Split Layout) */}
        <section id="booking" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch scroll-mt-24">
          
          {/* Booking Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-extrabold text-[#1E293B] mb-2">Secure Your Consultation</h2>
              <p className="text-slate-500 text-sm mb-6">Plan your event with our culinary experts. Fill out the details to lock in your estimation and receive a call within 2 hours.</p>

              {isSuccess ? (
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center space-y-4 animate-fade-in my-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-slate-900">Consultation Scheduled!</h3>
                  <p className="text-slate-600 text-xs leading-relaxed max-w-md mx-auto">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. We have logged your request for <strong className="text-slate-800">{formData.eventDate}</strong> with <strong className="text-slate-800">{guests} guests</strong>.
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-slate-100 text-left max-w-sm mx-auto space-y-1.5 text-xs text-slate-500">
                    <div><strong>Reference:</strong> SR-{Math.floor(1000 + Math.random() * 9000)}</div>
                    <div><strong>Selected Tier:</strong> {menuTier} (Estimated plate base ₹{pricing.perPlate})</div>
                    <div><strong>Total Estimate:</strong> ₹{pricing.total.toLocaleString()} (incl. Setup & GST)</div>
                  </div>
                  <div className="pt-2">
                    <a 
                      href={`https://wa.me/919849012345?text=Hi%20Srishti%20Catering,%20I%20just%20scheduled%20a%20consultation%20for%20my%20${eventType}%20on%20${formData.eventDate}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-all"
                    >
                      Connect on WhatsApp Instantly
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Full Name*</label>
                      <input 
                        id="form-name"
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Srinivas Rao" 
                        className={`w-full px-4 py-3 rounded-lg border bg-[#F8FAFC] text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]/20 focus:border-[#EA580C] transition-all ${
                          formErrors.name ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {formErrors.name && <span className="text-red-500 text-[10px] font-semibold mt-1 block">{formErrors.name}</span>}
                    </div>
                    <div>
                      <label htmlFor="form-event-date" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Event Date*</label>
                      <input 
                        id="form-event-date"
                        type="date" 
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-[#F8FAFC] text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]/20 focus:border-[#EA580C] transition-all ${
                          formErrors.eventDate ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {formErrors.eventDate && <span className="text-red-500 text-[10px] font-semibold mt-1 block">{formErrors.eventDate}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Address*</label>
                      <input 
                        id="form-email"
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="srinivas@gmail.com" 
                        className={`w-full px-4 py-3 rounded-lg border bg-[#F8FAFC] text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]/20 focus:border-[#EA580C] transition-all ${
                          formErrors.email ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {formErrors.email && <span className="text-red-500 text-[10px] font-semibold mt-1 block">{formErrors.email}</span>}
                    </div>
                    <div>
                      <label htmlFor="form-phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Mobile Number*</label>
                      <input 
                        id="form-phone"
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 98490 12345" 
                        className={`w-full px-4 py-3 rounded-lg border bg-[#F8FAFC] text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]/20 focus:border-[#EA580C] transition-all ${
                          formErrors.phone ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {formErrors.phone && <span className="text-red-500 text-[10px] font-semibold mt-1 block">{formErrors.phone}</span>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Catering Details / Notes (Optional)</label>
                    <textarea 
                      id="form-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Mention any custom specifications, dessert requirements or local dishes..." 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-[#F8FAFC] text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]/20 focus:border-[#EA580C] transition-all"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Securing Consultation...</span>
                      </>
                    ) : (
                      <span>Submit Request & Confirm Estimate</span>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="text-[11px] text-slate-400 mt-6 border-t border-slate-100 pt-4 text-center">
              * By submitting this request, you agree to our hygiene guarantee policy. Srishti Kitchen IDA Uppal, Hyderabad.
            </div>
          </div>

          {/* Customer Testimonials & Reviews (5 cols) */}
          <div id="testimonials" className="lg:col-span-5 bg-[#334155] text-white rounded-3xl p-8 border border-slate-700 shadow-md flex flex-col justify-between scroll-mt-24">
            <div>
              <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest block mb-1">Local Endorsements</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-6">Loved across Hyderabad</h3>
              
              <div className="space-y-6">
                {[
                  {
                    name: 'Venkatesh Prasad',
                    role: 'Wedding Client',
                    location: 'Uppal, Hyderabad',
                    comment: 'Srishti catered for our daughter\'s wedding feast in Uppal. The Gongura Paneer Tikka was the highlight! The guests couldn\'t stop talking about the authenticity of the local spices. Extremely professional service.',
                    rating: 5
                  },
                  {
                    name: 'Meenakshi Rao',
                    role: 'Corporate HR Lead',
                    location: 'Gachibowli Office',
                    comment: 'We regular hire Srishti for our quarterly leadership meetings in Gachibowli. Their cloud kitchen in Uppal delivers hot, premium packages on-time. The hygiene reports shared via QR codes give us great peace of mind.',
                    rating: 5
                  },
                  {
                    name: 'Anirudh Goud',
                    role: 'Birthday Event',
                    location: 'Secunderabad',
                    comment: 'Clean taste, minimal oil, high quality ingredients. Their Qubani Ka Meetha is absolutely royal and delicious. Best traditional caterers in eastern Hyderabad by far.',
                    rating: 5
                  }
                ].map((item, idx) => (
                  <div key={idx} className="border-b border-slate-600/50 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start mb-1.5">
                      <div>
                        <span className="font-bold text-sm block leading-none">{item.name}</span>
                        <span className="text-[10px] text-slate-400 font-medium">{item.role} • {item.location}</span>
                      </div>
                      <div className="flex text-[#EA580C]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#EA580C]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-300 text-xs italic leading-relaxed">
                      "{item.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-4 mt-6 flex justify-between items-center">
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase">Google Review Rating</span>
                <span className="text-lg font-extrabold text-white">4.8/5.0 Stars (240+ reviews)</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-[#EA580C]">
                <Heart className="w-5 h-5 fill-[#EA580C]" />
              </div>
            </div>
          </div>

        </section>

      </main>

      {/* Elegant Bento-styled Store Details Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-100">
            
            {/* Column 1: Contact Info */}
            <div className="space-y-4">
              <h4 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1E293B]">Srishti Cloud Kitchen</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Hyderabad\'s premier B2B and events caterer. Authentic recipes, pristine hygiene, and custom budget scheduling.
              </p>
              <div className="flex gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#F8FAFC] flex items-center justify-center border border-slate-200 hover:border-[#EA580C] text-slate-500 hover:text-[#EA580C] cursor-pointer">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="w-8 h-8 rounded-lg bg-[#F8FAFC] flex items-center justify-center border border-slate-200 hover:border-[#EA580C] text-slate-500 hover:text-[#EA580C] cursor-pointer">
                  <Mail className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Column 2: Specific Location Details */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Main Base Address</span>
              
              <div className="flex items-start gap-2 text-xs text-[#334155]">
                <MapPin className="w-4.5 h-4.5 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 block">IDA Uppal Kitchen Base</strong>
                  <span>Plot No. 42, IDA Uppal, Near Uppal Metro Station, Hyderabad, Telangana - 500039</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-[#334155]">
                <Clock className="w-4.5 h-4.5 text-[#EA580C] shrink-0" />
                <span>Kitchen Operating Hours: 6:00 AM - 11:00 PM</span>
              </div>
            </div>

            {/* Column 3: Contact details */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Reach our Experts</span>
              
              <div className="flex items-center gap-2 text-xs text-[#334155]">
                <Phone className="w-4 h-4 text-[#EA580C]" />
                <span>Hotline: +91 98490 12345</span>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-[#334155]">
                <Mail className="w-4 h-4 text-[#EA580C]" />
                <span>Events: events@srishtikitchen.com</span>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-[#334155]">
                <Info className="w-4.5 h-4.5 text-[#EA580C]" />
                <span>FSSAI License: #13621021000452</span>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[11px] text-slate-400">
            <p>&copy; {new Date().getFullYear()} Srishti Cloud Kitchen & Caterers Uppal. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-[#EA580C]">Privacy Policy</a>
              <a href="#" className="hover:text-[#EA580C]">Terms of Service</a>
              <a href="#" className="hover:text-[#EA580C]">Hygiene Standards</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Gourmet Details Modal */}
      {activeDishDetails && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden border border-slate-200 shadow-2xl relative animate-scale-up">
            <button 
              onClick={() => setActiveDishDetails(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <img 
              src={activeDishDetails.image} 
              alt={activeDishDetails.name} 
              className="w-full h-48 object-cover"
            />
            
            <div className="p-6 space-y-4">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">{activeDishDetails.category}</span>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-slate-900 leading-tight">
                  {activeDishDetails.name}
                </h3>
              </div>

              <div className="bg-[#F8FAFC] rounded-xl p-4 border border-slate-200 space-y-2 text-xs">
                <div>
                  <strong className="text-slate-800">Master Sourcing Story:</strong>
                  <p className="text-slate-500 mt-0.5">
                    This dish features ingredients dry-roasted in small batches using local spice mixtures from the heritage Uppal drawer.
                  </p>
                </div>
                <div>
                  <strong className="text-slate-800">Key Premium Ingredients:</strong>
                  <p className="text-slate-600 font-mono mt-0.5">{activeDishDetails.ingredients}</p>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button 
                  onClick={() => setActiveDishDetails(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg"
                >
                  Close
                </button>
                <a 
                  href="#booking"
                  onClick={() => {
                    setActiveDishDetails(null);
                  }}
                  className="px-5 py-2 text-xs font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-lg shadow-sm"
                >
                  Request in Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

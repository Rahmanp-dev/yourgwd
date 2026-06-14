"use client";
import React, { useState } from 'react';
import {
  Compass, Palette, Sofa, Sparkles, Check, ShieldCheck,
  ChevronDown, ChevronUp, Star, Phone, Mail, MapPin,
  Menu, X, ArrowRight, Layers, DollarSign, Clock, HelpCircle,
  Utensils, Layout, Lightbulb, UserCheck
} from 'lucide-react';

export default function LivspaceKokapetPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('living');
  const [faqOpen, setFaqOpen] = useState({});

  // Interactive Calculator State
  const [bhkSize, setBhkSize] = useState('3 BHK');
  const [qualityGrade, setQualityGrade] = useState('Luxury'); // Premium, Luxury, Ultra-Luxe
  const [styleArchetype, setStyleArchetype] = useState('Mid-Century Warm');

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    bhk: '3 BHK',
    style: 'Mid-Century Warm',
    grade: 'Luxury'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [formLoading, setFormLoading] = useState(false);

  // Toggle FAQ Accordion
  const toggleFaq = (index) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Calculate Budget
  const calculateBudget = () => {
    let basePrice = 450000; // 2 BHK base
    if (bhkSize === '3 BHK') basePrice = 680000;
    else if (bhkSize === '4 BHK') basePrice = 950000;
    else if (bhkSize === 'Villa') basePrice = 1450000;

    let multiplier = 1.0; // Luxury base
    if (qualityGrade === 'Premium') multiplier = 0.8;
    else if (qualityGrade === 'Ultra-Luxe') multiplier = 1.35;

    const estMin = Math.round(basePrice * multiplier);
    const estMax = Math.round(basePrice * multiplier * 1.18);
    const days = bhkSize === 'Villa' ? 60 : 45;

    return {
      min: estMin.toLocaleString('en-IN'),
      max: estMax.toLocaleString('en-IN'),
      days
    };
  };

  const budgetEstimate = calculateBudget();

  // Handle Calculator to Form integration
  const applyCalculatorToForm = () => {
    setFormData(prev => ({
      ...prev,
      bhk: bhkSize,
      style: styleArchetype,
      grade: qualityGrade,
      message: `Hi Livspace team, I configured my requirements: ${bhkSize} - ${styleArchetype} (${qualityGrade} quality). Please share a detailed quote.`
    }));
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError('Please fill in all required fields (Name, Email, Phone).');
      return;
    }
    setFormError('');
    setFormLoading(true);

    // Simulate API submission
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        bhk: '3 BHK',
        style: 'Mid-Century Warm',
        grade: 'Luxury'
      });
    }, 1500);
  };

  // Services Details
  const services = {
    living: {
      title: "Bespoke Mid-Century Living Rooms",
      tagline: "Where clean geometries meet organic warmth",
      desc: "We curate social spaces featuring iconic low-profile credenzas, custom walnut media units, bold terracotta feature walls, and cozy organic textiles. Our layouts maximize natural light while establishing modular zones for living, dining, and working.",
      features: [
        "Custom walnut modular TV credenzas",
        "Curated mid-century lighting setups (globe & cone pendants)",
        "Premium solid wood dining table integrations",
        "Geometrically balanced accent wall treatments"
      ],
      priceRange: "₹2.2L - ₹4.5L",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
    },
    kitchen: {
      title: "Sophisticated Modular Kitchens",
      tagline: "Timeless styling meets high-efficiency engineering",
      desc: "Designed for premium modern living in Kokapet, our kitchens pair high-performance anti-scratch acrylic finishes with warm wood grain open shelving. Engineered with premium German-certified hardware (Hettich/Blum) to ensure absolute longevity and seamless soft-close movements.",
      features: [
        "Quartz counter-tops with integrated sinks",
        "Full-height pantry pull-outs & tandem drawers",
        "Mid-century modern dual-tone cabinet finishes",
        "Smart chimney and built-in hob integration"
      ],
      priceRange: "₹3.5L - ₹7.0L",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    },
    wardrobes: {
      title: "Architectural Wardrobes & Storage",
      tagline: "Decluttered luxury tailored to your personal collection",
      desc: "Our wardrobe designs feature floor-to-ceiling glass doors, warm wood veneers, integrated LED shelf lighting, and customizable interior organizers. We create dressing corridors that look clean from the outside and remain hyper-organized within.",
      features: [
        "Floor-to-ceiling sliding wardrobe profiles",
        "Soft-close lacquer finished drawers with glass tops",
        "Integrated sensor LED clothing rod lighting",
        "Custom velvet-lined jewelry and watch trays"
      ],
      priceRange: "₹2.5L - ₹5.5L",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
    },
    lighting: {
      title: "Atmospheric Smart Lighting Systems",
      tagline: "Casting the perfect glow over architectural details",
      desc: "Interior design is complete only when illuminated correctly. We map out Kokapet residences with tailored ambient lighting plans, combining architectural recessed spotlights, sculptural brass chandeliers, and integrated app-controlled dimmers to fit any mood.",
      features: [
        "Smart-home compatible ambient lighting arrays",
        "Solid brass sculptural pendant fixtures",
        "Concealed dynamic warm LED strip cove layouts",
        "Task-oriented kitchen under-cabinet illumination"
      ],
      priceRange: "₹0.8L - ₹2.2L",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
    }
  };

  const faqs = [
    {
      q: "What warranty does Livspace Kokapet offer on modular products?",
      a: "We provide an industry-leading flat 10-year warranty on all modular woodwork, covering manufacturing defects, material degradation, and hardware integrity. Hardware parts from Blum and Hettich carry their respective lifetime brand warranties."
    },
    {
      q: "How does the design consultation process work?",
      a: "Our process is completely client-centric. First, you register for a free session. We invite you to our Kokapet design center to inspect material samples and moodboards. Once we agree on a direction, our designers generate detailed 3D VR renders of your exact space. Upon approval, production begins in our state-of-the-art factories."
    },
    {
      q: "Can we visit live project sites in Kokapet or Gachibowli?",
      a: "Absolutely. We routinely schedule site walkthroughs of ongoing fit-outs and completed handovers in luxury high-rises around Kokapet, Financial District, and Narsingi. Contact us to schedule a visit."
    },
    {
      q: "What is your turnaround time from design sign-off to handover?",
      a: "We guarantee handover within 45 days from the date of final design sign-off and 3D confirmation. If we exceed this timeline, we pay a daily delay penalty. Villa projects with heavy structural/civil alterations may require up to 60 days."
    },
    {
      q: "Can I customize the material finishes to save costs?",
      a: "Yes. Our modular platform allows you to mix and match materials. You can select premium laminate finishes for guest bedrooms and opt for luxurious PU paint or anti-scratch acrylics for the kitchen and master suites, helping you optimize costs without sacrificing style."
    }
  ];

  return (
    <div className="selection:bg-[#D87040] selection:text-white" style={{
      fontFamily: "'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif",
      color: '#2D3130',
      background: '#F5F2EB',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      {/* Navbar */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(245, 242, 235, 0.9)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(26, 95, 122, 0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: '#1A5F7A',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 10px rgba(26,95,122,0.2)'
            }}>
              <Compass size={22} color="#F5F2EB" />
            </div>
            <div>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#1A5F7A', letterSpacing: '0.5px' }}>
                LIVSPACE
              </span>
              <span style={{ fontSize: '0.7rem', display: 'block', letterSpacing: '3px', color: '#D87040', fontWeight: 700, marginTop: '-4px' }}>
                KOKAPET STUDIO
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex" style={{ gap: '32px', alignItems: 'center' }}>
            <a href="#hero" className="nav-link-mid">Home</a>
            <a href="#about" className="nav-link-mid">About</a>
            <a href="#services" className="nav-link-mid">Services</a>
            <a href="#calculator" className="nav-link-mid">Cost Estimator</a>
            <a href="#process" className="nav-link-mid">Our Process</a>
            <a href="#faqs" className="nav-link-mid">FAQs</a>
          </div>

          {/* Action CTA */}
          <div className="hidden md:block">
            <a href="#contact" style={{
              background: '#D87040',
              color: '#FFF',
              padding: '12px 26px',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(216,112,64,0.3)'
            }} className="btn-terracotta">
              Book Free Session <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Hamburguer */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ border: 'none', background: 'none', cursor: 'pointer' }}
            className="block md:hidden text-[#1A5F7A]"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            background: '#F5F2EB',
            borderBottom: '1px solid rgba(26, 95, 122, 0.1)',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }} className="block md:hidden">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="nav-link-mid-mobile">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="nav-link-mid-mobile">About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="nav-link-mid-mobile">Services</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="nav-link-mid-mobile">Cost Estimator</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="nav-link-mid-mobile">Our Process</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="nav-link-mid-mobile">FAQs</a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: '#D87040',
                color: '#FFF',
                padding: '12px',
                borderRadius: '30px',
                textAlign: 'center',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(216,112,64,0.3)'
              }}
            >
              Book Free Session
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{ padding: '80px 24px', position: 'relative' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="md:grid-cols-2">
          {/* Left copy */}
          <div style={{ zIndex: 10 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(26, 95, 122, 0.08)',
              padding: '6px 14px',
              borderRadius: '20px',
              color: '#1A5F7A',
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '20px'
            }}>
              <Sparkles size={14} color="#D87040" /> Bespoke Interior Design in Kokapet
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 1.1,
              fontWeight: 800,
              color: '#1A5F7A',
              marginBottom: '24px',
              fontFamily: "'Playfair Display', serif"
            }}>
              Timeless <span style={{ color: '#D87040', fontStyle: 'italic' }}>Mid-Century</span> Design for Modern Hyderabad Homes
            </h1>

            <p style={{
              fontSize: '1.15rem',
              lineHeight: 1.6,
              color: '#4B5563',
              marginBottom: '36px',
              maxWidth: '520px'
            }}>
              Crafting warm, structural residential interiors in Kokapet. Experience the organic materials, clean geometric lines, and customized modular layouts that define premium living.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#calculator" style={{
                background: '#1A5F7A',
                color: '#FFF',
                padding: '14px 30px',
                borderRadius: '30px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(26,95,122,0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }} className="btn-teal">
                Calculate Budget <Layers size={16} />
              </a>
              <a href="#contact" style={{
                background: 'transparent',
                color: '#1A5F7A',
                border: '2px solid #1A5F7A',
                padding: '12px 28px',
                borderRadius: '30px',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }} className="btn-outline-teal">
                Book Walkthrough
              </a>
            </div>

            {/* Quick Metrics */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              marginTop: '48px',
              borderTop: '1px solid rgba(26,95,122,0.15)',
              paddingTop: '24px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#D87040' }}>10-Yr</h3>
                <p style={{ fontSize: '0.8rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Warranty</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1A5F7A' }}>45 Days</h3>
                <p style={{ fontSize: '0.8rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Delivery Guarantee</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1A5F7A' }}>150+</h3>
                <p style={{ fontSize: '0.8rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Homes Handed Over</p>
              </div>
            </div>
          </div>

          {/* Right Image/Geometric Art */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Background geometric terracotta shape */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: '#E07A5F',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              transform: 'rotate(15deg) scale(0.95)',
              opacity: 0.15,
              zIndex: 0
            }}></div>

            {/* Main Image Card */}
            <div style={{
              background: '#FFF',
              padding: '16px',
              borderRadius: '24px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
              zIndex: 1,
              maxWidth: '460px',
              border: '1px solid rgba(26,95,122,0.1)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80" 
                alt="Mid-century Modern Living Area" 
                style={{
                  width: '100%',
                  height: '320px',
                  objectFit: 'cover',
                  borderRadius: '16px'
                }}
              />
              <div style={{ padding: '16px 8px 8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D87040', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Signature Project</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Star size={14} fill="#D87040" color="#D87040" />
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>4.9/5</span>
                  </div>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1A5F7A' }}>The Kokapet Residence</h4>
                <p style={{ fontSize: '0.85rem', color: '#6B7280', marginTop: '4px' }}>A premium 3 BHK redesign incorporating walnut woods and soft terracotta tones.</p>
              </div>
            </div>

            {/* Float badge */}
            <div style={{
              position: 'absolute',
              bottom: '40px',
              left: '-20px',
              background: '#1A5F7A',
              color: '#FFF',
              padding: '16px 20px',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(26,95,122,0.3)',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              maxWidth: '220px'
            }} className="hidden sm:flex">
              <ShieldCheck size={36} color="#E07A5F" />
              <div>
                <h5 style={{ fontSize: '0.85rem', fontWeight: 800 }}>German Hardware</h5>
                <p style={{ fontSize: '0.7rem', color: '#E0F2FE' }}>Blum & Hettich fittings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '60px',
            alignItems: 'center'
          }} className="md:grid-cols-2">
            {/* Visual geometry layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{
                  height: '180px',
                  background: '#E07A5F',
                  borderRadius: '100px 100px 0 100px',
                  overflow: 'hidden'
                }}>
                  <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=400&q=80" alt="Design detail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{
                  height: '240px',
                  background: '#1A5F7A',
                  borderRadius: '100px 0 100px 100px',
                  overflow: 'hidden'
                }}>
                  <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80" alt="Living design detail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '40px' }}>
                <div style={{
                  height: '240px',
                  background: '#D87040',
                  borderRadius: '0 100px 100px 100px',
                  overflow: 'hidden'
                }}>
                  <img src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=400&q=80" alt="Kitchen design detail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{
                  height: '180px',
                  background: '#EAE2D5',
                  borderRadius: '100px 100px 100px 0',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <span style={{ color: '#1A5F7A', fontWeight: 800, fontSize: '1.1rem' }}>Modular. Geometric. Organic.</span>
                </div>
              </div>
            </div>

            {/* About us copy */}
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#D87040', textTransform: 'uppercase', letterSpacing: '2px' }}>
                ABOUT OUR STUDIO
              </span>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                lineHeight: 1.2,
                fontWeight: 800,
                color: '#1A5F7A',
                marginTop: '8px',
                marginBottom: '24px',
                fontFamily: "'Playfair Display', serif"
              }}>
                Redefining Residential Luxury in Kokapet
              </h2>
              <p style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Livspace Kokapet Studio stands at the intersection of modern modular efficiency and personalized mid-century aesthetics. We believe that a home is not just a structured box, but a living sanctuary that reflects the character of its inhabitants.
              </p>
              <p style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '32px' }}>
                Our team of award-winning architects and design specialists utilize a proprietary precision-manufacturing framework. Every modular kitchen panel and custom wardrobe cabinet is engineered in dust-free, fully-automated facilities, guaranteeing perfect edges, high moisture-resistance, and seamless installation in your home.
              </p>

              {/* Icon bullet list */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }} className="sm:grid-cols-2">
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(26, 95, 122, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Palette size={18} color="#1A5F7A" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: '#1A5F7A', fontSize: '0.95rem' }}>Personalized Moodboards</h4>
                    <p style={{ fontSize: '0.8rem', color: '#6B7280', marginTop: '2px' }}>Bespoke wood veneers, acrylics, and textures curated for you.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(216, 112, 64, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <UserCheck size={18} color="#D87040" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: '#1A5F7A', fontSize: '0.95rem' }}>Dedicated Project Lead</h4>
                    <p style={{ fontSize: '0.8rem', color: '#6B7280', marginTop: '2px' }}>One point of contact from spatial draft to final key handover.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Portfolio Section */}
      <section id="services" style={{ padding: '80px 24px', background: '#F5F2EB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#D87040', textTransform: 'uppercase', letterSpacing: '2px' }}>
              OUR PORTFOLIO
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              lineHeight: 1.2,
              fontWeight: 800,
              color: '#1A5F7A',
              marginTop: '8px',
              fontFamily: "'Playfair Display', serif"
            }}>
              Custom Spaces We Design
            </h2>
            <p style={{ color: '#6B7280', maxWidth: '580px', margin: '12px auto 0', fontSize: '1rem' }}>
              Select a service below to explore our signature design approaches, specific components, and pricing models.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            {Object.keys(services).map((tabKey) => {
              const isActive = activeServiceTab === tabKey;
              return (
                <button
                  key={tabKey}
                  onClick={() => setActiveServiceTab(tabKey)}
                  style={{
                    background: isActive ? '#1A5F7A' : '#FFF',
                    color: isActive ? '#FFF' : '#1A5F7A',
                    border: isActive ? '1px solid #1A5F7A' : '1px solid rgba(26,95,122,0.15)',
                    padding: '12px 24px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? '0 4px 12px rgba(26,95,122,0.2)' : 'none'
                  }}
                  className={`tab-btn ${isActive ? '' : 'hover:bg-[#FFF] hover:border-[#1A5F7A]'}`}
                >
                  {tabKey === 'living' && <Sofa size={16} className="inline mr-2" />}
                  {tabKey === 'kitchen' && <Utensils size={16} className="inline mr-2" />}
                  {tabKey === 'wardrobes' && <Layout size={16} className="inline mr-2" />}
                  {tabKey === 'lighting' && <Lightbulb size={16} className="inline mr-2" />}
                  {tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div style={{
            background: '#FFF',
            borderRadius: '24px',
            padding: '32px',
            border: '1px solid rgba(26,95,122,0.1)',
            boxShadow: '0 15px 30px rgba(0,0,0,0.04)',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            alignItems: 'center'
          }} className="md:grid-cols-2">
            
            {/* Tab Copy */}
            <div>
              <div style={{
                color: '#D87040',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '8px'
              }}>
                {services[activeServiceTab].tagline}
              </div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: '#1A5F7A',
                marginBottom: '16px',
                fontFamily: "'Playfair Display', serif"
              }}>
                {services[activeServiceTab].title}
              </h3>
              <p style={{
                color: '#4B5563',
                lineHeight: 1.6,
                fontSize: '1rem',
                marginBottom: '24px'
              }}>
                {services[activeServiceTab].desc}
              </p>

              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ fontWeight: 800, color: '#1A5F7A', fontSize: '0.95rem', marginBottom: '12px' }}>
                  What's Included:
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {services[activeServiceTab].features.map((feature, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#4B5563' }}>
                      <Check size={16} color="#D87040" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid rgba(26,95,122,0.1)',
                paddingTop: '20px'
              }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#6B7280', textTransform: 'uppercase' }}>Estimated Investment</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A5F7A' }}>{services[activeServiceTab].priceRange}</div>
                </div>
                <a href="#calculator" style={{
                  color: '#D87040',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }} className="hover:underline">
                  Go to Estimator <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Tab Image */}
            <div>
              <img
                src={services[activeServiceTab].image}
                alt={services[activeServiceTab].title}
                style={{
                  width: '100%',
                  height: '380px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.06)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section id="calculator" style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#D87040', textTransform: 'uppercase', letterSpacing: '2px' }}>
              BUDGET ESTIMATOR
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              lineHeight: 1.2,
              fontWeight: 800,
              color: '#1A5F7A',
              marginTop: '8px',
              fontFamily: "'Playfair Display', serif"
            }}>
              Configure Your Design Investment
            </h2>
            <p style={{ color: '#6B7280', maxWidth: '580px', margin: '8px auto 0', fontSize: '0.95rem' }}>
              Select your property dimensions, desired quality tier, and style aesthetic. Our calculator provides a dynamic structural quote instantly.
            </p>
          </div>

          <div style={{
            background: '#F5F2EB',
            borderRadius: '24px',
            padding: '36px',
            border: '1px solid rgba(26,95,122,0.1)',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px'
          }} className="md:grid-cols-12">
            
            {/* Form Selection Inputs */}
            <div className="md:col-span-7" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* BHK Size */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1A5F7A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                  1. Property Size
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {['2 BHK', '3 BHK', '4 BHK', 'Villa'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setBhkSize(size)}
                      style={{
                        padding: '12px 8px',
                        borderRadius: '8px',
                        border: bhkSize === size ? '2px solid #1A5F7A' : '1px solid rgba(26,95,122,0.15)',
                        background: bhkSize === size ? 'rgba(26, 95, 122, 0.08)' : '#FFF',
                        color: '#1A5F7A',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Quality Grade */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1A5F7A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                  2. Material Quality Tier
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {['Premium', 'Luxury', 'Ultra-Luxe'].map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setQualityGrade(tier)}
                      style={{
                        padding: '12px 8px',
                        borderRadius: '8px',
                        border: qualityGrade === tier ? '2px solid #D87040' : '1px solid rgba(26,95,122,0.15)',
                        background: qualityGrade === tier ? 'rgba(216, 112, 64, 0.08)' : '#FFF',
                        color: '#D87040',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
                <span style={{ fontSize: '0.75rem', color: '#6B7280', display: 'block', marginTop: '6px' }}>
                  {qualityGrade === 'Premium' && 'Standard HDMR core, gloss laminates, and Hettich hardware.'}
                  {qualityGrade === 'Luxury' && 'Waterproof plywood, high-pressure acrylic, and Blum soft-close.'}
                  {qualityGrade === 'Ultra-Luxe' && 'Premium marine grade plywood, anti-fingerprint nano-coatings, and bespoke veneer accents.'}
                </span>
              </div>

              {/* Style Archetype */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1A5F7A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                  3. Style Archetype
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {['Mid-Century Warm', 'Modern Organic', 'Urban Retro'].map((style) => (
                    <button
                      key={style}
                      onClick={() => setStyleArchetype(style)}
                      style={{
                        padding: '12px 4px',
                        borderRadius: '8px',
                        border: styleArchetype === style ? '2px solid #1A5F7A' : '1px solid rgba(26,95,122,0.15)',
                        background: styleArchetype === style ? 'rgba(26, 95, 122, 0.08)' : '#FFF',
                        color: '#1A5F7A',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Output Display Panel */}
            <div className="md:col-span-5" style={{
              background: '#1A5F7A',
              color: '#FFF',
              borderRadius: '16px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 25px rgba(26,95,122,0.15)'
            }}>
              <div>
                <h4 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#D87040', letterSpacing: '2px', marginBottom: '16px' }}>
                  Estimated Investment
                </h4>

                <div style={{ marginBottom: '20px' }}>
                  <span style={{ fontSize: '0.8rem', color: '#EAE2D5', display: 'block' }}>Configured Price Range:</span>
                  <div style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#FFF', letterSpacing: '-0.5px', margin: '4px 0 8px' }}>
                    ₹{budgetEstimate.min} - ₹{budgetEstimate.max}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#EAE2D5' }}>*Excludes standard government GST (18%)</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '16px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span style={{ color: '#EAE2D5' }}>Installation Timeline:</span>
                    <span style={{ fontWeight: 700 }}>{budgetEstimate.days} Days Max</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span style={{ color: '#EAE2D5' }}>Layout Guarantee:</span>
                    <span style={{ fontWeight: 700 }}>100% Factory Built</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span style={{ color: '#EAE2D5' }}>Included Site Audits:</span>
                    <span style={{ fontWeight: 700 }}>5 Audits Free</span>
                  </div>
                </div>
              </div>

              <button
                onClick={applyCalculatorToForm}
                style={{
                  width: '100%',
                  background: '#D87040',
                  border: 'none',
                  color: '#FFF',
                  padding: '14px',
                  borderRadius: '30px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
                className="btn-apply-quote"
              >
                Apply Config to Form <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section id="process" style={{ padding: '80px 24px', background: '#F5F2EB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#D87040', textTransform: 'uppercase', letterSpacing: '2px' }}>
              HOW WE WORK
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              lineHeight: 1.2,
              fontWeight: 800,
              color: '#1A5F7A',
              marginTop: '8px',
              fontFamily: "'Playfair Display', serif"
            }}>
              Step-by-Step Architectural Execution
            </h2>
            <p style={{ color: '#6B7280', maxWidth: '580px', margin: '12px auto 0', fontSize: '1rem' }}>
              From initial sketch drafts to your final house warming ceremony, we enforce a strict quality control pipeline.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px'
          }} className="md:grid-cols-3">
            
            {/* Step 1 */}
            <div style={{
              background: '#FFF',
              padding: '36px',
              borderRadius: '24px',
              border: '1px solid rgba(26,95,122,0.1)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-24px',
                left: '36px',
                width: '48px',
                height: '48px',
                background: '#D87040',
                color: '#FFF',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                fontWeight: 800,
                boxShadow: '0 4px 10px rgba(216,112,64,0.3)'
              }}>
                01
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#1A5F7A', marginTop: '12px', marginBottom: '16px' }}>
                Consult & Moodboard
              </h3>
              <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Meet our design team in Kokapet. We evaluate your floor plans, establish functional requirements, and curate a physical moodboard featuring wood finishes, paint swatches, and accent metals.
              </p>
              <div style={{ display: 'flex', gap: '8px', marginTop: '24px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.75rem', background: '#F5F2EB', color: '#1A5F7A', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>Free Site Auditing</span>
                <span style={{ fontSize: '0.75rem', background: '#F5F2EB', color: '#1A5F7A', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>1-on-1 Architect Session</span>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{
              background: '#FFF',
              padding: '36px',
              borderRadius: '24px',
              border: '1px solid rgba(26,95,122,0.1)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-24px',
                left: '36px',
                width: '48px',
                height: '48px',
                background: '#1A5F7A',
                color: '#FFF',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                fontWeight: 800,
                boxShadow: '0 4px 10px rgba(26,95,122,0.3)'
              }}>
                02
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#1A5F7A', marginTop: '12px', marginBottom: '16px' }}>
                3D VR Design Render
              </h3>
              <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Our architects model your home in 3D, providing photorealistic VR visualizations. Walk through your virtual living room and kitchen, adjust colors dynamically, and confirm exact structural specifications.
              </p>
              <div style={{ display: 'flex', gap: '8px', marginTop: '24px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.75rem', background: '#F5F2EB', color: '#1A5F7A', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>Photorealistic 3D VR</span>
                <span style={{ fontSize: '0.75rem', background: '#F5F2EB', color: '#1A5F7A', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>Instant Finishes Swap</span>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{
              background: '#FFF',
              padding: '36px',
              borderRadius: '24px',
              border: '1px solid rgba(26,95,122,0.1)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-24px',
                left: '36px',
                width: '48px',
                height: '48px',
                background: '#1A5F7A',
                color: '#FFF',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                fontWeight: 800,
                boxShadow: '0 4px 10px rgba(26,95,122,0.3)'
              }}>
                03
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#1A5F7A', marginTop: '12px', marginBottom: '16px' }}>
                Factory Build & Install
              </h3>
              <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Approved designs are fabricated in automated dust-free facilities. Panels are flat-packed and shipped to Kokapet. Our trained field engineers assemble them on-site with clean lasers to verify alignment.
              </p>
              <div style={{ display: 'flex', gap: '8px', marginTop: '24px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.75rem', background: '#F5F2EB', color: '#1A5F7A', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>Laser-guided Install</span>
                <span style={{ fontSize: '0.75rem', background: '#F5F2EB', color: '#1A5F7A', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>45-Day Handover Guarantee</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#D87040', textTransform: 'uppercase', letterSpacing: '2px' }}>
              CLIENT TESTIMONIALS
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              lineHeight: 1.2,
              fontWeight: 800,
              color: '#1A5F7A',
              marginTop: '8px',
              fontFamily: "'Playfair Display', serif"
            }}>
              Validated by Kokapet Families
            </h2>
            <p style={{ color: '#6B7280', maxWidth: '580px', margin: '12px auto 0', fontSize: '1rem' }}>
              Real homeowners sharing their styling and execution experience with our Kokapet interior studio team.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px'
          }} className="md:grid-cols-3">
            
            {/* Testimonial 1 */}
            <div style={{
              background: '#F5F2EB',
              padding: '32px',
              borderRadius: '24px',
              border: '1px solid rgba(26,95,122,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D87040" color="#D87040" />)}
                </div>
                <p style={{ color: '#2D3130', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  "We handed over our 3 BHK in Kokapet to Livspace. The Mid-Century vibe is exactly what we wanted. The walnut media unit and structural kitchen look stunning. Best decision we made for our new flat!"
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(26,95,122,0.1)', paddingTop: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#1A5F7A', display: 'flex', alignItems: 'center', justifyText: 'center', color: '#FFF', fontWeight: 800, justifyContent: 'center' }}>
                  RV
                </div>
                <div>
                  <h4 style={{ fontWeight: 800, color: '#1A5F7A', fontSize: '0.9rem' }}>Rahul Verma</h4>
                  <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>Homeowner, Kokapet Golden Towers</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div style={{
              background: '#F5F2EB',
              padding: '32px',
              borderRadius: '24px',
              border: '1px solid rgba(26,95,122,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D87040" color="#D87040" />)}
                </div>
                <p style={{ color: '#2D3130', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  "The kitchen execution is flawless. Everything from the soft-close drawers to the quartz sink integration works beautifully. They completed installation in 42 days, 3 days ahead of the deadline!"
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(26,95,122,0.1)', paddingTop: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#D87040', display: 'flex', alignItems: 'center', justifyText: 'center', color: '#FFF', fontWeight: 800, justifyContent: 'center' }}>
                  SK
                </div>
                <div>
                  <h4 style={{ fontWeight: 800, color: '#1A5F7A', fontSize: '0.9rem' }}>Sushma K.</h4>
                  <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>Homeowner, Rajapushpa Atria</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div style={{
              background: '#F5F2EB',
              padding: '32px',
              borderRadius: '24px',
              border: '1px solid rgba(26,95,122,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D87040" color="#D87040" />)}
                </div>
                <p style={{ color: '#2D3130', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  "Highly professional design team. The 3D VR walkthrough helped us fine-tune our wardrobe sliding setups before manufacturing. The final handover matches the render line-for-line. Truly premium work."
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(26,95,122,0.1)', paddingTop: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#1A5F7A', display: 'flex', alignItems: 'center', justifyText: 'center', color: '#FFF', fontWeight: 800, justifyContent: 'center' }}>
                  AR
                </div>
                <div>
                  <h4 style={{ fontWeight: 800, color: '#1A5F7A', fontSize: '0.9rem' }}>Aditya Reddy</h4>
                  <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>Homeowner, My Home Tarkshya</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" style={{ padding: '80px 24px', background: '#F5F2EB' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#D87040', textTransform: 'uppercase', letterSpacing: '2px' }}>
              FAQ SECTION
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              lineHeight: 1.2,
              fontWeight: 800,
              color: '#1A5F7A',
              marginTop: '8px',
              fontFamily: "'Playfair Display', serif"
            }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => {
              const isOpen = !!faqOpen[index];
              return (
                <div
                  key={index}
                  style={{
                    background: '#FFF',
                    borderRadius: '12px',
                    border: '1px solid rgba(26,95,122,0.1)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span style={{ fontWeight: 800, color: '#1A5F7A', fontSize: '1rem' }}>
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp size={20} color="#D87040" /> : <ChevronDown size={20} color="#D87040" />}
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 24px 20px',
                      color: '#4B5563',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      borderTop: '1px solid rgba(26,95,122,0.05)',
                      paddingTop: '16px'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="md:grid-cols-2">
          
          {/* Details Column */}
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#D87040', textTransform: 'uppercase', letterSpacing: '2px' }}>
              GET STARTED
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              lineHeight: 1.2,
              fontWeight: 800,
              color: '#1A5F7A',
              marginTop: '8px',
              marginBottom: '20px',
              fontFamily: "'Playfair Display', serif"
            }}>
              Schedule a Design Walkthrough
            </h2>
            <p style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '36px' }}>
              Visit our state-of-the-art Kokapet design center to touch, feel, and configure custom veneers and high-gloss modular cabinets. Fill out the form, and our lead designer will contact you within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(26,95,122,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={22} color="#1A5F7A" />
                </div>
                <div>
                  <h4 style={{ fontWeight: 800, color: '#1A5F7A', fontSize: '1rem' }}>Studio Location</h4>
                  <p style={{ color: '#6B7280', fontSize: '0.9rem', marginTop: '2px', lineHeight: 1.5 }}>
                    4th Floor, Kokapet One Tower,<br />
                    Opposite Golden Mile Road, Kokapet, Hyderabad - 500075
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(26,95,122,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={22} color="#1A5F7A" />
                </div>
                <div>
                  <h4 style={{ fontWeight: 800, color: '#1A5F7A', fontSize: '1rem' }}>Call for Immediate Appointment</h4>
                  <p style={{ color: '#6B7280', fontSize: '0.9rem', marginTop: '2px' }}>
                    +91 91008 55432 / +91 91008 55433
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(26,95,122,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={22} color="#1A5F7A" />
                </div>
                <div>
                  <h4 style={{ fontWeight: 800, color: '#1A5F7A', fontSize: '1rem' }}>Email Inquiries</h4>
                  <p style={{ color: '#6B7280', fontSize: '0.9rem', marginTop: '2px' }}>
                    kokapet.studio@livspace.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div style={{
            background: '#F5F2EB',
            borderRadius: '24px',
            padding: '36px',
            border: '1px solid rgba(26,95,122,0.1)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.04)'
          }}>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#1A5F7A',
                  color: '#FFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <Check size={36} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A5F7A', marginBottom: '8px' }}>
                  Configuration Received!
                </h3>
                <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Thank you for submitting your details. Our lead design architect has received your configuration and will reach out to you within 24 hours to schedule your VR walkthrough.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  style={{
                    background: 'transparent',
                    border: '2px solid #1A5F7A',
                    color: '#1A5F7A',
                    padding: '10px 24px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    marginTop: '24px',
                    cursor: 'pointer'
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {formError && (
                  <div style={{
                    background: '#FEE2E2',
                    border: '1px solid #EF4444',
                    color: '#B91C1C',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}>
                    {formError}
                  </div>
                )}

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#1A5F7A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(26,95,122,0.2)',
                      background: '#FFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }} className="sm:grid-cols-2">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#1A5F7A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid rgba(26,95,122,0.2)',
                        background: '#FFF',
                        fontSize: '0.95rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#1A5F7A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid rgba(26,95,122,0.2)',
                        background: '#FFF',
                        fontSize: '0.95rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#1A5F7A', textTransform: 'uppercase', marginBottom: '4px' }}>BHK Config</label>
                    <select
                      value={formData.bhk}
                      onChange={(e) => setFormData({ ...formData, bhk: e.target.value })}
                      style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid rgba(26,95,122,0.2)', background: '#FFF', fontSize: '0.85rem' }}
                    >
                      <option>2 BHK</option>
                      <option>3 BHK</option>
                      <option>4 BHK</option>
                      <option>Villa</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#1A5F7A', textTransform: 'uppercase', marginBottom: '4px' }}>Style Tier</label>
                    <select
                      value={formData.style}
                      onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                      style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid rgba(26,95,122,0.2)', background: '#FFF', fontSize: '0.85rem' }}
                    >
                      <option>Mid-Century Warm</option>
                      <option>Modern Organic</option>
                      <option>Urban Retro</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#1A5F7A', textTransform: 'uppercase', marginBottom: '4px' }}>Quality Tier</label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid rgba(26,95,122,0.2)', background: '#FFF', fontSize: '0.85rem' }}
                    >
                      <option>Premium</option>
                      <option>Luxury</option>
                      <option>Ultra-Luxe</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#1A5F7A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                    Special Design Requests
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe any custom modular cabinetry, layout considerations or special design needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(26,95,122,0.2)',
                      background: '#FFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                      resize: 'none'
                    }}
                    className="form-input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formLoading}
                  style={{
                    width: '100%',
                    background: '#1A5F7A',
                    color: '#FFF',
                    border: 'none',
                    padding: '14px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 4px 15px rgba(26,95,122,0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  className="btn-submit"
                >
                  {formLoading ? (
                    <>
                      <div className="spinner-teal"></div> Processing...
                    </>
                  ) : (
                    <>
                      Secure Free Design Session <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1A5F7A',
        color: '#FFF',
        padding: '64px 24px 32px',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          marginBottom: '48px'
        }} className="md:grid-cols-4">
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#D87040',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Compass size={18} color="#FFF" />
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>LIVSPACE KOKAPET</span>
            </div>
            <p style={{ color: '#EAE2D5', fontSize: '0.85rem', lineHeight: 1.5 }}>
              Precision factory-engineered modular kitchens, sliding wardrobes, and custom mid-century interiors in Gachibowli-Kokapet corridor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#D87040', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
              Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#services" className="footer-link-mid">Living Rooms</a>
              <a href="#services" className="footer-link-mid">Modular Kitchens</a>
              <a href="#services" className="footer-link-mid">Dressing Wardrobes</a>
              <a href="#services" className="footer-link-mid">Smart Lighting</a>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#D87040', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
              Company
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#about" className="footer-link-mid">Kokapet Showroom</a>
              <a href="#testimonials" className="footer-link-mid">Client Stories</a>
              <a href="#calculator" className="footer-link-mid">Design Cost Calculator</a>
              <a href="#contact" className="footer-link-mid">Book Consultation</a>
            </div>
          </div>

          {/* Office Address */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#D87040', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
              Kokapet Studio
            </h4>
            <p style={{ color: '#EAE2D5', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '8px' }}>
              📍 Kokapet One Tower, 4th Floor,<br />
              Opp. Golden Mile Road, Kokapet,<br />
              Hyderabad, TS 500075
            </p>
            <p style={{ color: '#EAE2D5', fontSize: '0.85rem' }}>
              📞 +91 91008 55432
            </p>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p style={{ color: '#EAE2D5', fontSize: '0.8rem' }}>
            &copy; 2026 Livspace Kokapet. All rights reserved. Created for premium portfolio preview.
          </p>
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: '#EAE2D5' }}>
            <span>Factory Inspected</span>
            <span>10-Year Warranty Core</span>
          </div>
        </div>
      </footer>

      {/* Global CSS Style tag for handling responsive breakpoints and hover overrides */}
      <style>{`
        .nav-link-mid {
          color: #1A5F7A;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.2s ease;
          border-bottom: 2px solid transparent;
          padding-bottom: 4px;
        }
        .nav-link-mid:hover {
          color: #D87040;
          border-color: #D87040;
        }
        .nav-link-mid-mobile {
          color: #1A5F7A;
          font-weight: 700;
          text-decoration: none;
          font-size: 1.05rem;
          padding: 8px 0;
          border-bottom: 1px solid rgba(26,95,122,0.05);
        }
        .btn-teal:hover {
          background: #0F4C5C !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(26,95,122,0.4) !important;
        }
        .btn-teal:active {
          transform: translateY(0);
        }
        .btn-terracotta:hover {
          background: #C05F30 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(216,112,64,0.4) !important;
        }
        .btn-terracotta:active {
          transform: translateY(0);
        }
        .btn-outline-teal:hover {
          background: rgba(26,95,122,0.06);
          transform: translateY(-1px);
        }
        .footer-link-mid {
          color: #EAE2D5;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.2s ease;
        }
        .footer-link-mid:hover {
          color: #D87040;
        }
        .form-input:focus {
          border-color: #D87040 !important;
          box-shadow: 0 0 0 3px rgba(216,112,64,0.15);
        }
        .btn-apply-quote:hover {
          background: #C05F30 !important;
          transform: translateY(-2px);
        }
        .btn-submit:hover {
          background: #0F4C5C !important;
          transform: translateY(-2px);
        }
        
        .spinner-teal {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid #FFF;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </div>
  );
}

"use client";
import React, { useState } from 'react';
import {
  Cpu, Shield, Zap, Sparkles, Check, ChevronDown, ChevronUp,
  Star, Phone, Mail, MapPin, Menu, X, ArrowRight, Layers,
  LayoutGrid, Eye, Settings, RefreshCw, AlertTriangle, Play
} from 'lucide-react';

export default function AppleInteriorsKokapetPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('living');
  const [faqOpen, setFaqOpen] = useState({});

  // Interactive Smart Configurer State
  const [propertyType, setPropertyType] = useState('3 BHK');
  const [integrations, setIntegrations] = useState({
    circadian: true,
    shading: false,
    biometrics: true,
    av: false
  });
  const [qualityGrade, setQualityGrade] = useState('Studio Elite'); // Studio Elite, Neural Pro, Sovereign Custom

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    property: '3 BHK',
    grade: 'Studio Elite',
    details: ''
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

  // Toggle Smart Integrations
  const toggleIntegration = (key) => {
    setIntegrations(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Calculate High-Tech Cost
  const calculateCost = () => {
    let basePrice = 650000; // 3 BHK base
    if (propertyType === '4 BHK') basePrice = 900000;
    else if (propertyType === 'Villa') basePrice = 1500000;
    else if (propertyType === 'Penthouse') basePrice = 2100000;

    let gradeMultiplier = 1.0; // Studio Elite
    if (qualityGrade === 'Neural Pro') gradeMultiplier = 1.25;
    else if (qualityGrade === 'Sovereign Custom') gradeMultiplier = 1.6;

    let integrationCost = 0;
    if (integrations.circadian) integrationCost += 75000;
    if (integrations.shading) integrationCost += 90000;
    if (integrations.biometrics) integrationCost += 50000;
    if (integrations.av) integrationCost += 120000;

    const estMin = Math.round((basePrice * gradeMultiplier) + integrationCost);
    const estMax = Math.round(((basePrice * gradeMultiplier) + integrationCost) * 1.15);

    // Calculate smart score
    let smartScore = 40;
    if (integrations.circadian) smartScore += 15;
    if (integrations.shading) smartScore += 15;
    if (integrations.biometrics) smartScore += 15;
    if (integrations.av) smartScore += 15;

    // Power savings estimate
    let powerSavings = "12%";
    if (integrations.circadian && integrations.shading) powerSavings = "24%";

    return {
      min: estMin.toLocaleString('en-IN'),
      max: estMax.toLocaleString('en-IN'),
      smartScore,
      powerSavings
    };
  };

  const costResult = calculateCost();

  // Apply Config to Form
  const applyConfigToForm = () => {
    const activeIntegrations = Object.keys(integrations)
      .filter(k => integrations[k])
      .map(k => k.toUpperCase())
      .join(', ');

    setFormData(prev => ({
      ...prev,
      property: propertyType,
      grade: qualityGrade,
      message: `Hi Apple Interiors, I configured: ${propertyType} - Tier: ${qualityGrade} with integrations: [${activeIntegrations || 'None'}]. Please share full blueprints and pricing.`
    }));

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Form Submit Handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError('Required fields: Name, Email, and Phone.');
      return;
    }
    setFormError('');
    setFormLoading(true);

    // Simulate API submit
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        property: '3 BHK',
        grade: 'Studio Elite',
        details: ''
      });
    }, 1500);
  };

  // Services details
  const services = {
    living: {
      title: "Smart Neural Living Rooms",
      tagline: "Adaptive spaces matching your circadian rhythm",
      desc: "Our living rooms are built with dynamic lighting and hidden acoustic panels. We integrate linear track spotlights, custom motorized projection walls, and concealed media units that slide open via smartphone control.",
      features: [
        "Robotic sliding media bays & smart-speaker racks",
        "Circadian dimming system integrated with natural daylight",
        "Concealed dynamic surround-sound arrays",
        "Frameless matte-metallic wall cladding panels"
      ],
      priceRange: "₹4.0L - ₹8.5L",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    },
    kitchen: {
      title: "Intelligent Cooking Labs",
      tagline: "Motorized cabinets & digital air-purification ducts",
      desc: "Designed with professional-grade stainless steel elements, high-pressure glass laminates, and sensor-driven touch cabinet doors. Our layouts include direct ducted air-curtain purification and integrated tablet/recipe mounts.",
      features: [
        "Sensory-touch drawer triggers & motorized overhead lifts",
        "Commercial grade scratch-resistant quartz worktops",
        "Integrated climate-controlled organic food drawers",
        "Smart-app ventilation and automated fire safety modules"
      ],
      priceRange: "₹5.5L - ₹12.0L",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    },
    lighting: {
      title: "Magnetic Low-Voltage Track Arrays",
      tagline: "High-performance illumination layouts",
      desc: "Configure your lighting layout in real-time. Our modular magnetic track systems allow you to slide, rotate, and swap ambient spots, linear floods, and pendant modules along hidden matte-black structural channels.",
      features: [
        "24V safe-touch magnetic ceiling & wall track arrays",
        "Tunable white LEDs (2700K to 6500K) via mobile app",
        "Anti-glare micro-optics for pure visual comfort",
        "Integrated architectural cove highlighting modules"
      ],
      priceRange: "₹1.5L - ₹4.5L",
      image: "https://images.unsplash.com/photo-1565538810844-1e1194116c07?auto=format&fit=crop&w=800&q=80"
    },
    wardrobes: {
      title: "Biometric Smart Wardrobes",
      tagline: "Security & micro-climate apparel preservation",
      desc: "Architectural storage units featuring dark anodized aluminum profiles, smoked tempered glass doors, and biometric fingerprint locks. Equipped with active dehumidification systems to preserve luxury leather bags and fine fabrics.",
      features: [
        "Solid-state biometric locks & digital keypad safes",
        "Active dehumidifier & air-circulation modules built-in",
        "Satin leather finished internal drawers and pull-outs",
        "Automatic motion-sensing LED ambient rods"
      ],
      priceRange: "₹3.8L - ₹9.0L",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
    }
  };

  const faqs = [
    {
      q: "Does Apple Interiors integrate third-party automation systems like Lutron or Control4?",
      a: "Yes. Our systems are fully compatible with industry-standard home automation controllers. We handle the entire engineering, network wiring, and system integration for Lutron, Control4, Crestron, Apple HomeKit, and Google Home."
    },
    {
      q: "What is a LiDAR Site Scan and why do you do it?",
      a: "Before fabricating any modular panels, our engineers use terrestrial LiDAR laser-scanners to create a millimetre-perfect 3D point cloud of your empty apartment in Kokapet. This ensures that every wall bend, column offset, and ceiling slope is calculated, completely eliminating gaps during installation."
    },
    {
      q: "Are the smart lighting tracks safe to touch?",
      a: "Absolutely. Our magnetic track systems operate on low-voltage 24V DC current. Even when powered, the copper strips in the tracks are entirely safe to touch, allowing you to reposition spotlight modules without turning off the system."
    },
    {
      q: "Can you retrofit smart elements into an occupied apartment?",
      a: "Yes. We offer both wired (KNX/Cat6) solutions for new apartment fit-outs and secure wireless (Zigbee/Thread) options for retrofit projects, allowing you to upgrade your lighting, shade control, and security with minimal wall cutting."
    },
    {
      q: "How long is your warranty on smart electronic modules?",
      a: "We provide a 5-year replacement warranty on all smart control modules, LED drivers, and touch panels. The underlying modular timber cabinets carry a separate 10-year comprehensive structural warranty."
    }
  ];

  return (
    <div className="selection:bg-[#00F2FE] selection:text-black" style={{
      fontFamily: "'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif",
      color: '#E2E8F0',
      background: '#0A0A0A',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      {/* Background Grid Accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '800px',
        backgroundImage: 'radial-gradient(circle at 50% 300px, rgba(0, 242, 254, 0.04) 0%, rgba(0,0,0,0) 70%), linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)',
        backgroundSize: '100% 100%, 64px 64px, 64px 64px',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 0 15px rgba(0, 242, 254, 0.25)'
            }}>
              <Cpu size={22} color="#000" strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.5px', color: '#FFF' }}>
                APPLE
              </span>
              <span style={{ fontSize: '0.7rem', display: 'block', letterSpacing: '2.5px', color: '#00F2FE', fontWeight: 700, marginTop: '-4px' }}>
                INTERIORS KOKAPET
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex" style={{ gap: '32px', alignItems: 'center' }}>
            <a href="#hero" className="nav-link-tech">Home</a>
            <a href="#about" className="nav-link-tech">About Studio</a>
            <a href="#services" className="nav-link-tech">Specs</a>
            <a href="#configurator" className="nav-link-tech">Neural Config</a>
            <a href="#process" className="nav-link-tech">Precision Blueprint</a>
            <a href="#faqs" className="nav-link-tech">FAQs</a>
          </div>

          {/* Action CTA */}
          <div className="hidden md:block">
            <a href="#contact" style={{
              background: 'transparent',
              border: '1px solid #00F2FE',
              color: '#00F2FE',
              padding: '10px 24px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '0.85rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 15px rgba(0, 242, 254, 0.1)'
            }} className="btn-tech-outline">
              Initialize Blueprint <Play size={12} fill="#00F2FE" />
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ border: 'none', background: 'none', cursor: 'pointer' }}
            className="block md:hidden text-[#E2E8F0]"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div style={{
            background: '#0A0A0A',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }} className="block md:hidden">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="nav-link-tech-mobile">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="nav-link-tech-mobile">About Studio</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="nav-link-tech-mobile">Specs</a>
            <a href="#configurator" onClick={() => setMobileMenuOpen(false)} className="nav-link-tech-mobile">Neural Config</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="nav-link-tech-mobile">Precision Blueprint</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="nav-link-tech-mobile">FAQs</a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: 'linear-gradient(135deg, #00F2FE, #4FACFE)',
                color: '#000',
                padding: '12px',
                borderRadius: '6px',
                textAlign: 'center',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              Initialize Blueprint
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{ padding: '100px 24px 80px', position: 'relative' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="md:grid-cols-2">
          
          {/* Copy Column */}
          <div style={{ zIndex: 10 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(0, 242, 254, 0.06)',
              border: '1px solid rgba(0, 242, 254, 0.2)',
              padding: '6px 14px',
              borderRadius: '4px',
              color: '#00F2FE',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '24px'
            }}>
              <Zap size={12} color="#00F2FE" /> Computational Interior Studio
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              lineHeight: 1.05,
              fontWeight: 900,
              letterSpacing: '-1px',
              color: '#FFF',
              marginBottom: '24px'
            }}>
              High-Tech Residential Interiors for <span style={{ background: 'linear-gradient(90deg, #00F2FE, #4FACFE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Modern Kokapet</span>
            </h1>

            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: '#94A3B8',
              marginBottom: '36px',
              maxWidth: '540px'
            }}>
              Engineering high-performance living environments. Combining automated spatial designs, tunable lighting systems, and custom biometric hardware for premium Hyderabad penthouses.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#configurator" style={{
                background: 'linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%)',
                color: '#000',
                padding: '14px 30px',
                borderRadius: '6px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0,242,254,0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }} className="btn-tech">
                Launch Space Config <LayoutGrid size={16} />
              </a>
              <a href="#contact" style={{
                background: 'transparent',
                color: '#FFF',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '13px 28px',
                borderRadius: '6px',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }} className="btn-outline-white">
                Book LiDAR Scan
              </a>
            </div>

            {/* Micro Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              marginTop: '56px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '28px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#00F2FE' }}>1mm</h3>
                <p style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px' }}>LiDAR Precision</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFF' }}>100%</h3>
                <p style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px' }}>CNC Fabricated</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFF' }}>5 Years</h3>
                <p style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px' }}>System Warranty</p>
              </div>
            </div>
          </div>

          {/* Visual Grid Column */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            {/* Tech grid border box */}
            <div style={{
              border: '1px solid rgba(0, 242, 254, 0.15)',
              padding: '20px',
              borderRadius: '16px',
              background: 'rgba(18, 18, 18, 0.6)',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), inset 0 0 20px rgba(0, 242, 254, 0.05)',
              position: 'relative',
              maxWidth: '480px',
              width: '100%'
            }}>
              {/* Corner tech notches */}
              <div style={{ position: 'absolute', top: '-2px', left: '-2px', width: '12px', height: '12px', borderTop: '2px solid #00F2FE', borderLeft: '2px solid #00F2FE' }}></div>
              <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '12px', height: '12px', borderTop: '2px solid #00F2FE', borderRight: '2px solid #00F2FE' }}></div>
              <div style={{ position: 'absolute', bottom: '-2px', left: '-2px', width: '12px', height: '12px', borderBottom: '2px solid #00F2FE', borderLeft: '2px solid #00F2FE' }}></div>
              <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '12px', height: '12px', borderBottom: '2px solid #00F2FE', borderRight: '2px solid #00F2FE' }}></div>

              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
                alt="High-Tech Modern Interior"
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  filter: 'grayscale(30%)'
                }}
              />

              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', color: '#00F2FE', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>Operational Status</span>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFF', marginTop: '2px' }}>LiDAR Mapping Active</h4>
                </div>
                <div style={{
                  background: 'rgba(0,242,254,0.1)',
                  border: '1px solid rgba(0,242,254,0.3)',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00F2FE', animation: 'pulse 1.5s infinite' }}></div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00F2FE' }}>Calibrated</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Us Section */}
      <section id="about" style={{ padding: '80px 24px', background: '#0D0D0D', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '60px',
            alignItems: 'center'
          }} className="md:grid-cols-2">
            
            {/* Tech Grid Diagram Representation */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{
                  border: '1px solid rgba(255,255,255,0.05)',
                  padding: '16px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.01)'
                }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#00F2FE' }}>01 / CAD</h4>
                  <p style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '6px' }}>Algorithmic space calculations matching architectural flow lines.</p>
                </div>
                <div style={{
                  border: '1px solid rgba(0, 242, 254, 0.2)',
                  padding: '16px',
                  borderRadius: '12px',
                  background: 'rgba(0, 242, 254, 0.02)'
                }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFF' }}>02 / CNC</h4>
                  <p style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '6px' }}>Laser cutting wood core modules up to 0.1mm dimensional variance.</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '30px' }}>
                <div style={{
                  border: '1px solid rgba(255,255,255,0.05)',
                  padding: '16px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.01)'
                }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFF' }}>03 / IoT</h4>
                  <p style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '6px' }}>Concealed low-voltage relay controls for smart shading & lights.</p>
                </div>
                <div style={{
                  border: '1px solid rgba(255,255,255,0.05)',
                  padding: '16px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.01)'
                }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#00F2FE' }}>04 / VR</h4>
                  <p style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '6px' }}>Accurate digital twin environments to walk through prior to fabrication.</p>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#00F2FE', textTransform: 'uppercase', letterSpacing: '2px' }}>
                STUDIO OVERVIEW
              </span>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: 900,
                color: '#FFF',
                marginTop: '8px',
                marginBottom: '24px'
              }}>
                Technical Precision. Luxury Materials. Seamless Integration.
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Apple Interiors Kokapet represents a paradigm shift in how luxury residential homes are measured, built, and automated. We discard traditional hand-measurement errors, employing state-of-the-art LiDAR scanner arrays to index architectural configurations.
              </p>
              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '32px' }}>
                Our signature Midnight Tech design system is developed specifically for high-rise residences, emphasizing thin black steel accents, clean functional grids, concealed wire channels, and integration nodes that coordinate lighting, sound, and thermal comfort.
              </p>

              {/* Specs bullets */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }} className="sm:grid-cols-2">
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <Shield size={20} color="#00F2FE" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <h5 style={{ fontWeight: 800, color: '#FFF', fontSize: '0.95rem' }}>Secured Ecosystem</h5>
                    <p style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px' }}>Biometric wardrobe drawers and security locking integrations.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <Settings size={20} color="#00F2FE" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <h5 style={{ fontWeight: 800, color: '#FFF', fontSize: '0.95rem' }}>Precision Tooling</h5>
                    <p style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px' }}>German CNC machinery trims cabinetry panels with zero splintering.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Portfolio Section */}
      <section id="services" style={{ padding: '80px 24px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#00F2FE', textTransform: 'uppercase', letterSpacing: '2px' }}>
              TECHNICAL SPECIFICATIONS
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 900,
              color: '#FFF',
              marginTop: '8px'
            }}>
              High-Tech Spatial Portfolio
            </h2>
            <p style={{ color: '#64748B', maxWidth: '580px', margin: '12px auto 0', fontSize: '0.95rem' }}>
              Choose a design segment to inspect the structural engineering details, integrated technologies, and cost boundaries.
            </p>
          </div>

          {/* Tabs Navigation */}
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
                    background: isActive ? 'linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%)' : '#121212',
                    color: isActive ? '#000' : '#E2E8F0',
                    border: isActive ? 'none' : '1px solid rgba(255,255,255,0.06)',
                    padding: '12px 24px',
                    borderRadius: '4px',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? '0 0 15px rgba(0, 242, 254, 0.2)' : 'none'
                  }}
                  className="tab-btn-tech"
                >
                  {tabKey.charAt(0).toUpperCase() + tabKey.slice(1)} Spaces
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div style={{
            background: '#121212',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.05)',
            padding: '40px 32px',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            alignItems: 'center'
          }} className="md:grid-cols-2">
            
            {/* Copy */}
            <div>
              <div style={{
                color: '#00F2FE',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '8px'
              }}>
                {services[activeServiceTab].tagline}
              </div>
              <h3 style={{
                fontSize: '1.85rem',
                fontWeight: 900,
                color: '#FFF',
                marginBottom: '16px'
              }}>
                {services[activeServiceTab].title}
              </h3>
              <p style={{
                color: '#94A3B8',
                lineHeight: 1.6,
                fontSize: '0.95rem',
                marginBottom: '24px'
              }}>
                {services[activeServiceTab].desc}
              </p>

              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ fontWeight: 800, color: '#FFF', fontSize: '0.9rem', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Integrated Modules:
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {services[activeServiceTab].features.map((feature, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#94A3B8' }}>
                      <Check size={16} color="#00F2FE" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                paddingTop: '20px'
              }}>
                <div>
                  <span style={{ fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase' }}>Target Budget Boundary</span>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFF' }}>{services[activeServiceTab].priceRange}</div>
                </div>
                <a href="#configurator" style={{
                  color: '#00F2FE',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }} className="hover:underline">
                  Neural Configurator <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Image */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-10px', left: '-10px', width: '10px', height: '10px', borderLeft: '1px solid #00F2FE', borderTop: '1px solid #00F2FE' }}></div>
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '10px', height: '10px', borderRight: '1px solid #00F2FE', borderTop: '1px solid #00F2FE' }}></div>
              <div style={{ position: 'absolute', bottom: '-10px', left: '-10px', width: '10px', height: '10px', borderLeft: '1px solid #00F2FE', borderBottom: '1px solid #00F2FE' }}></div>
              <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '10px', height: '10px', borderRight: '1px solid #00F2FE', borderBottom: '1px solid #00F2FE' }}></div>
              
              <img
                src={services[activeServiceTab].image}
                alt={services[activeServiceTab].title}
                style={{
                  width: '100%',
                  height: '340px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  filter: 'grayscale(20%)'
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Smart Configurator Section */}
      <section id="configurator" style={{ padding: '80px 24px', background: '#0D0D0D', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#00F2FE', textTransform: 'uppercase', letterSpacing: '2px' }}>
              NEURAL ESTIMATOR
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 900,
              color: '#FFF',
              marginTop: '8px'
            }}>
              Configure Your Neural Space
            </h2>
            <p style={{ color: '#64748B', maxWidth: '580px', margin: '8px auto 0', fontSize: '0.95rem' }}>
              Define property dimensions, select automation relays, and target design tiers to calculate installation estimates.
            </p>
          </div>

          <div style={{
            background: '#121212',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '12px',
            padding: '36px',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px'
          }} className="md:grid-cols-12">
            
            {/* Options */}
            <div className="md:col-span-7" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Dimensions */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#00F2FE', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                  1. Property Footprint
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {['3 BHK', '4 BHK', 'Villa', 'Penthouse'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setPropertyType(type)}
                      style={{
                        padding: '12px 6px',
                        borderRadius: '4px',
                        border: propertyType === type ? '1px solid #00F2FE' : '1px solid rgba(255,255,255,0.07)',
                        background: propertyType === type ? 'rgba(0, 242, 254, 0.05)' : '#0A0A0A',
                        color: propertyType === type ? '#00F2FE' : '#94A3B8',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Design Tiers */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#00F2FE', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                  2. Architectural Finishing Tier
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {['Studio Elite', 'Neural Pro', 'Sovereign Custom'].map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setQualityGrade(tier)}
                      style={{
                        padding: '12px 6px',
                        borderRadius: '4px',
                        border: qualityGrade === tier ? '1px solid #FFF' : '1px solid rgba(255,255,255,0.07)',
                        background: qualityGrade === tier ? 'rgba(255, 255, 255, 0.05)' : '#0A0A0A',
                        color: qualityGrade === tier ? '#FFF' : '#94A3B8',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
                <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'block', marginTop: '6px' }}>
                  {qualityGrade === 'Studio Elite' && 'Premium matte laminates, solid wood structural bases, and standard ambient lighting channels.'}
                  {qualityGrade === 'Neural Pro' && 'Waterproof core panels, anti-fingerprint nanocoatings, magnetic track arrays, and voice control.'}
                  {qualityGrade === 'Sovereign Custom' && 'Imported steel facades, custom brass trims, smart electrochromic glass partitions, and comprehensive biometric panels.'}
                </span>
              </div>

              {/* Smart Integrations */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#00F2FE', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                  3. Dynamic Home Automation Modules
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }} className="sm:grid-cols-2">
                  {[
                    { key: 'circadian', title: 'Circadian Lights (Tunable)', desc: 'Adaptive LED warmth shifts automatically' },
                    { key: 'shading', title: 'Motorized Shading Relays', desc: 'Curtains trigger based on solar heat index' },
                    { key: 'biometrics', title: 'Fingerprint Biometric Safes', desc: 'Secure wardrobes with access logs' },
                    { key: 'av', title: 'Concealed Dolby Atmos AV', desc: 'Sound bars glide behind screen panels' }
                  ].map((item) => {
                    const isChecked = integrations[item.key];
                    return (
                      <div
                        key={item.key}
                        onClick={() => toggleIntegration(item.key)}
                        style={{
                          border: isChecked ? '1px solid #00F2FE' : '1px solid rgba(255,255,255,0.05)',
                          background: isChecked ? 'rgba(0, 242, 254, 0.03)' : '#0A0A0A',
                          padding: '12px 16px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <div style={{
                          width: '16px',
                          height: '16px',
                          border: isChecked ? '1px solid #00F2FE' : '1px solid #64748B',
                          borderRadius: '3px',
                          background: isChecked ? '#00F2FE' : 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          {isChecked && <Check size={12} color="#000" strokeWidth={3} />}
                        </div>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: isChecked ? '#FFF' : '#E2E8F0' }}>{item.title}</div>
                          <div style={{ fontSize: '0.7rem', color: '#64748B' }}>{item.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Display Output */}
            <div className="md:col-span-5" style={{
              background: '#0A0A0A',
              border: '1px solid rgba(0, 242, 254, 0.2)',
              borderRadius: '8px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 0 25px rgba(0, 242, 254, 0.05)'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00F2FE', textTransform: 'uppercase', letterSpacing: '1px' }}>SYSTEM ESTIMATE</span>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00F2FE' }}></div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'block' }}>Configured Price Range:</span>
                  <div style={{ fontSize: 'clamp(1.75rem, 4vw, 2.3rem)', fontWeight: 900, color: '#FFF', letterSpacing: '-0.5px', margin: '4px 0 8px' }}>
                    ₹{costResult.min} - ₹{costResult.max}
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#64748B' }}>*Calculated with active integration costs</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                    <span style={{ color: '#64748B' }}>Smart Index Rating:</span>
                    <span style={{ fontWeight: 800, color: '#00F2FE' }}>{costResult.smartScore} / 100</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                    <span style={{ color: '#64748B' }}>Est. Power Savings:</span>
                    <span style={{ fontWeight: 800, color: '#FFF' }}>{costResult.powerSavings}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                    <span style={{ color: '#64748B' }}>LiDAR Calibration:</span>
                    <span style={{ fontWeight: 800, color: '#FFF' }}>Included (1mm)</span>
                  </div>
                </div>
              </div>

              <button
                onClick={applyConfigToForm}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%)',
                  border: 'none',
                  color: '#000',
                  padding: '14px',
                  borderRadius: '4px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
                className="btn-apply-tech"
              >
                Apply Specs to Blueprint Form <ArrowRight size={14} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section id="process" style={{ padding: '80px 24px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#00F2FE', textTransform: 'uppercase', letterSpacing: '2px' }}>
              FABRICATION PIPELINE
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 900,
              color: '#FFF',
              marginTop: '8px'
            }}>
              Computational Design & Installation
            </h2>
            <p style={{ color: '#64748B', maxWidth: '580px', margin: '12px auto 0', fontSize: '0.95rem' }}>
              We enforce high-tech engineering steps to guarantee perfect fits and avoid manual construction errors.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px'
          }} className="md:grid-cols-3">
            
            {/* Phase 1 */}
            <div style={{
              background: '#121212',
              padding: '36px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.05)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '30px',
                background: '#00F2FE',
                color: '#000',
                padding: '4px 12px',
                borderRadius: '2px',
                fontSize: '0.75rem',
                fontWeight: 900,
                letterSpacing: '1px'
              }}>
                PHASE 01
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FFF', marginTop: '12px', marginBottom: '16px' }}>
                LiDAR Twin Scan
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Our engineers scan your empty apartment walls with 3D LiDAR laser devices, mapping ceiling structural curves and electrical terminals. This generates a digital twin with 1mm accuracy.
              </p>
              <div style={{ display: 'flex', gap: '8px', marginTop: '20px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.7rem', border: '1px solid rgba(255,255,255,0.08)', color: '#00F2FE', padding: '2px 8px', borderRadius: '2px' }}>Digital Point Cloud</span>
                <span style={{ fontSize: '0.7rem', border: '1px solid rgba(255,255,255,0.08)', color: '#00F2FE', padding: '2px 8px', borderRadius: '2px' }}>Zero-Margin Error</span>
              </div>
            </div>

            {/* Phase 2 */}
            <div style={{
              background: '#121212',
              padding: '36px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.05)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '30px',
                background: '#FFF',
                color: '#000',
                padding: '4px 12px',
                borderRadius: '2px',
                fontSize: '0.75rem',
                fontWeight: 900,
                letterSpacing: '1px'
              }}>
                PHASE 02
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FFF', marginTop: '12px', marginBottom: '16px' }}>
                Computational Draft
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Using the point cloud, our architects calculate dynamic wire duct corridors, load balancing, and acoustical panel placement, styling in full VR view so you can approve material reflections.
              </p>
              <div style={{ display: 'flex', gap: '8px', marginTop: '20px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.7rem', border: '1px solid rgba(255,255,255,0.08)', color: '#94A3B8', padding: '2px 8px', borderRadius: '2px' }}>Acoustic Mapping</span>
                <span style={{ fontSize: '0.7rem', border: '1px solid rgba(255,255,255,0.08)', color: '#94A3B8', padding: '2px 8px', borderRadius: '2px' }}>Circadian LED Layout</span>
              </div>
            </div>

            {/* Phase 3 */}
            <div style={{
              background: '#121212',
              padding: '36px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.05)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '30px',
                background: '#00F2FE',
                color: '#000',
                padding: '4px 12px',
                borderRadius: '2px',
                fontSize: '0.75rem',
                fontWeight: 900,
                letterSpacing: '1px'
              }}>
                PHASE 03
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FFF', marginTop: '12px', marginBottom: '16px' }}>
                Robotic CNC & Fit
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Modular panels are cut in industrial CNC factories using automated blades. They are transported in padded crates to Kokapet and fitted with lasers to guarantee tight, zero-dust alignments.
              </p>
              <div style={{ display: 'flex', gap: '8px', marginTop: '20px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.7rem', border: '1px solid rgba(255,255,255,0.08)', color: '#00F2FE', padding: '2px 8px', borderRadius: '2px' }}>CNC Edge-Banding</span>
                <span style={{ fontSize: '0.7rem', border: '1px solid rgba(255,255,255,0.08)', color: '#00F2FE', padding: '2px 8px', borderRadius: '2px' }}>Lasergreens Calibration</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={{ padding: '80px 24px', background: '#0D0D0D', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#00F2FE', textTransform: 'uppercase', letterSpacing: '2px' }}>
              CLIENT TESTIMONIALS
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 900,
              color: '#FFF',
              marginTop: '8px'
            }}>
              Endorsed by Tech Executives
            </h2>
            <p style={{ color: '#64748B', maxWidth: '580px', margin: '12px auto 0', fontSize: '0.95rem' }}>
              How luxury high-rise residents in Kokapet experience our tech-driven interior integration.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px'
          }} className="md:grid-cols-3">
            
            {/* Testimonial 1 */}
            <div style={{
              background: '#121212',
              padding: '32px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#00F2FE" color="#00F2FE" />)}
                </div>
                <p style={{ color: '#94A3B8', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  "Apple Interiors built our smart living room in Rajapushpa. The magnetic tracks and app-controlled circadian lighting work flawlessly. Being able to shift warm/cool lights matches our working hours perfectly."
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#00F2FE', display: 'flex', alignItems: 'center', color: '#000', fontWeight: 800, justifyContent: 'center' }}>
                  AN
                </div>
                <div>
                  <h4 style={{ fontWeight: 800, color: '#FFF', fontSize: '0.9rem' }}>Anish Nair</h4>
                  <p style={{ fontSize: '0.75rem', color: '#64748B' }}>VP Engineering, Kokapet Towers</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div style={{
              background: '#121212',
              padding: '32px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#00F2FE" color="#00F2FE" />)}
                </div>
                <p style={{ color: '#94A3B8', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  "The kitchen modular cabinets are amazing. Motorized touch-to-open overhead cabinets work with absolute precision. The LiDAR scan meant zero gaps next to the dry wall columns."
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#FFF', display: 'flex', alignItems: 'center', color: '#000', fontWeight: 800, justifyContent: 'center' }}>
                  PR
                </div>
                <div>
                  <h4 style={{ fontWeight: 800, color: '#FFF', fontSize: '0.9rem' }}>Pooja Reddy</h4>
                  <p style={{ fontSize: '0.75rem', color: '#64748B' }}>Homeowner, One Kokapet</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div style={{
              background: '#121212',
              padding: '32px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#00F2FE" color="#00F2FE" />)}
                </div>
                <p style={{ color: '#94A3B8', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  "Phenomenal execution. The biometric lock on wardrobes and climate control modules protect my expensive leather bags and wardrobe collection. Their clean, tech-oriented style is exactly what we wanted."
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#00F2FE', display: 'flex', alignItems: 'center', color: '#000', fontWeight: 800, justifyContent: 'center' }}>
                  VM
                </div>
                <div>
                  <h4 style={{ fontWeight: 800, color: '#FFF', fontSize: '0.9rem' }}>Vikram Mehta</h4>
                  <p style={{ fontSize: '0.75rem', color: '#64748B' }}>Founder, FinTech Labs</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" style={{ padding: '80px 24px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#00F2FE', textTransform: 'uppercase', letterSpacing: '2px' }}>
              FAQ DATABASE
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 900,
              color: '#FFF',
              marginTop: '8px'
            }}>
              System Specifications & Integration FAQs
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => {
              const isOpen = !!faqOpen[index];
              return (
                <div
                  key={index}
                  style={{
                    background: '#121212',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.05)',
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
                    <span style={{ fontWeight: 800, color: '#FFF', fontSize: '1rem' }}>
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp size={20} color="#00F2FE" /> : <ChevronDown size={20} color="#00F2FE" />}
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 24px 20px',
                      color: '#94A3B8',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      borderTop: '1px solid rgba(255,255,255,0.05)',
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
      <section id="contact" style={{ padding: '80px 24px', background: '#0D0D0D', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="md:grid-cols-2">
          
          {/* Details */}
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#00F2FE', textTransform: 'uppercase', letterSpacing: '2px' }}>
              INITIALIZE BLUEPRINT
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 900,
              color: '#FFF',
              marginTop: '8px',
              marginBottom: '20px'
            }}>
              Schedule a Laser-Mapping Assessment
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '36px' }}>
              Configure your apartment details to initiate the LiDAR scanning schedule. We perform complete digital twin scans for premium apartments in Kokapet.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '6px', border: '1px solid rgba(0,242,254,0.2)', background: 'rgba(0,242,254,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={22} color="#00F2FE" />
                </div>
                <div>
                  <h4 style={{ fontWeight: 800, color: '#FFF', fontSize: '1rem' }}>Studio HQ</h4>
                  <p style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '2px', lineHeight: 1.5 }}>
                    Suite 801, The Edge Tech Park,<br />
                    Golden Mile Corridor, Kokapet, Hyderabad - 500075
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '6px', border: '1px solid rgba(0,242,254,0.2)', background: 'rgba(0,242,254,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={22} color="#00F2FE" />
                </div>
                <div>
                  <h4 style={{ fontWeight: 800, color: '#FFF', fontSize: '1rem' }}>System Hotline</h4>
                  <p style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '2px' }}>
                    +91 90008 87643 / +91 90008 87644
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '6px', border: '1px solid rgba(0,242,254,0.2)', background: 'rgba(0,242,254,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={22} color="#00F2FE" />
                </div>
                <div>
                  <h4 style={{ fontWeight: 800, color: '#FFF', fontSize: '1rem' }}>Data Transmissions</h4>
                  <p style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '2px' }}>
                    architects@appleinteriors.in
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: '#121212',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '12px',
            padding: '36px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#00F2FE',
                  color: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <Check size={36} strokeWidth={3} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#FFF', marginBottom: '8px' }}>
                  Assessment Scheduled!
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Laser calibration request logged in database. Our scheduling desk will coordinate the arrival of our LiDAR survey team to your site.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  style={{
                    background: 'transparent',
                    border: '1px solid #00F2FE',
                    color: '#00F2FE',
                    padding: '10px 24px',
                    borderRadius: '4px',
                    fontWeight: 700,
                    marginTop: '24px',
                    cursor: 'pointer'
                  }}
                >
                  Request additional scan
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {formError && (
                  <div style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid #EF4444',
                    color: '#F87171',
                    padding: '12px 16px',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}>
                    {formError}
                  </div>
                )}

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#00F2FE', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                    Developer / Owner Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: '#0A0A0A',
                      color: '#FFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                    className="form-input-tech"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }} className="sm:grid-cols-2">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#00F2FE', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                      Transmission Mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="executive@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.08)',
                        background: '#0A0A0A',
                        color: '#FFF',
                        fontSize: '0.95rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                      className="form-input-tech"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#00F2FE', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                      Secure Phone Line *
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
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.08)',
                        background: '#0A0A0A',
                        color: '#FFF',
                        fontSize: '0.95rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                      className="form-input-tech"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, color: '#00F2FE', textTransform: 'uppercase', marginBottom: '4px' }}>Footprint</label>
                    <select
                      value={formData.property}
                      onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                      style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.08)', background: '#0A0A0A', color: '#FFF', fontSize: '0.85rem' }}
                    >
                      <option>3 BHK</option>
                      <option>4 BHK</option>
                      <option>Villa</option>
                      <option>Penthouse</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, color: '#00F2FE', textTransform: 'uppercase', marginBottom: '4px' }}>Architectural Tier</label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.08)', background: '#0A0A0A', color: '#FFF', fontSize: '0.85rem' }}
                    >
                      <option>Studio Elite</option>
                      <option>Neural Pro</option>
                      <option>Sovereign Custom</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#00F2FE', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                    Specification Directives
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide specific details about home automation systems, smart track layouts, or structural restrictions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: '#0A0A0A',
                      color: '#FFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                      resize: 'none'
                    }}
                    className="form-input-tech"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formLoading}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%)',
                    color: '#000',
                    border: 'none',
                    padding: '14px',
                    borderRadius: '4px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 4px 15px rgba(0,242,254,0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  className="btn-submit-tech"
                >
                  {formLoading ? (
                    <>
                      <div className="spinner-tech"></div> Initializing Transmission...
                    </>
                  ) : (
                    <>
                      Schedule LiDAR Site Assessment <ArrowRight size={16} />
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
        background: '#0A0A0A',
        color: '#64748B',
        padding: '64px 24px 32px',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          marginBottom: '48px'
        }} className="md:grid-cols-4">
          
          {/* Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#121212',
                border: '1px solid rgba(0,242,254,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Cpu size={18} color="#00F2FE" />
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFF' }}>APPLE INTERIORS</span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
              High-performance residential engineering showroom. Custom smart home components, biometric security cabinetry, and LiDAR-modeled fitouts in Kokapet.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFF', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
              Systems
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#services" className="footer-link-tech">Neural Living</a>
              <a href="#services" className="footer-link-tech">Cooking Labs</a>
              <a href="#services" className="footer-link-tech">Magnetic Tracks</a>
              <a href="#services" className="footer-link-tech">Smart Storage</a>
            </div>
          </div>

          {/* Links 2 */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFF', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
              Blueprint
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#about" className="footer-link-tech">Kokapet Lab</a>
              <a href="#testimonials" className="footer-link-tech">Client Handovers</a>
              <a href="#configurator" className="footer-link-tech">System Costing</a>
              <a href="#contact" className="footer-link-tech">Transmit Spec</a>
            </div>
          </div>

          {/* Contact details */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFF', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
              Kokapet Showroom
            </h4>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '8px' }}>
              📍 Suite 801, The Edge Tech Park,<br />
              Golden Mile Road, Kokapet,<br />
              Hyderabad, TS 500075
            </p>
            <p style={{ fontSize: '0.85rem' }}>
              📞 +91 90008 87643
            </p>
          </div>

        </div>

        {/* Legal & Status */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p style={{ fontSize: '0.8rem' }}>
            &copy; 2026 Apple Interiors Kokapet. All rights reserved. Created for premium technology preview.
          </p>
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00F2FE' }}></div> System Status: Online
            </span>
            <span>CNC Certified</span>
          </div>
        </div>
      </footer>

      {/* Global CSS Overrides */}
      <style>{`
        .nav-link-tech {
          color: #94A3B8;
          font-weight: 700;
          font-size: 0.85rem;
          text-decoration: none;
          transition: color 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .nav-link-tech:hover {
          color: #00F2FE;
        }
        .nav-link-tech-mobile {
          color: #94A3B8;
          font-weight: 700;
          text-decoration: none;
          font-size: 0.95rem;
          padding: 8px 0;
          text-transform: uppercase;
          border-bottom: 1px solid rgba(255,255,255,0.03);
        }
        .btn-tech:hover {
          background: #4FACFE !important;
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(0, 242, 254, 0.4) !important;
        }
        .btn-tech:active {
          transform: translateY(0);
        }
        .btn-tech-outline:hover {
          background: rgba(0, 242, 254, 0.05);
          border-color: #00F2FE !important;
          box-shadow: 0 0 20px rgba(0, 242, 254, 0.2) !important;
        }
        .btn-outline-white:hover {
          background: rgba(255,255,255,0.05);
          border-color: #FFF !important;
        }
        .footer-link-tech {
          color: #64748B;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.2s ease;
        }
        .footer-link-tech:hover {
          color: #00F2FE;
        }
        .form-input-tech:focus {
          border-color: #00F2FE !important;
          box-shadow: 0 0 0 3px rgba(0, 242, 254, 0.15);
        }
        .btn-apply-tech:hover {
          background: #4FACFE !important;
          transform: translateY(-1px);
        }
        .btn-submit-tech:hover {
          background: #4FACFE !important;
          transform: translateY(-2px);
        }
        
        .spinner-tech {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(0, 0, 0, 0.2);
          border-top: 2px solid #000;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}

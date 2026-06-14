"use client";
import React, { useState } from 'react';
import { 
  TrendingUp, Percent, ShieldCheck, Scale, FileText, 
  Award, Users, CheckCircle2, ArrowRight, ChevronRight, 
  Star, MessageSquare, PhoneCall, Mail, MapPin, 
  Menu, X, Briefcase, Clock, Building, Calculator
} from 'lucide-react';

export default function MaximumTaxConsultantPage() {
  const [revenue, setRevenue] = useState(50); // in Lakhs
  const [businessType, setBusinessType] = useState('Pvt Ltd');
  const [activeTab, setActiveTab] = useState('compliance');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'GST Audit', msg: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [formLoading, setFormLoading] = useState(false);

  const calculateEstimate = () => {
    let multiplier = 0.05;
    if (businessType === 'Proprietorship') multiplier = 0.02;
    else if (businessType === 'LLP') multiplier = 0.04;
    
    const estTax = (revenue * multiplier).toFixed(2);
    const estSaving = (revenue * multiplier * 0.25).toFixed(2);
    return { estTax, estSaving };
  };

  const { estTax, estSaving } = calculateEstimate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError('Please fill out all required fields.');
      return;
    }
    setFormError('');
    setFormLoading(true);
    
    // Simulate submission
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: 'GST Audit', msg: '' });
    }, 1200);
  };

  const servicesData = {
    compliance: {
      title: "Tax & GST Compliance",
      desc: "End-to-end statutory filing, audits, and response management.",
      features: [
        "Corporate & Individual Income Tax Return (ITR) Filing",
        "GST Returns (GSTR-1, GSTR-3B, GSTR-9, GSTR-9C) & Reconciliations",
        "TDS / TCS Compliance & Form 16 Generation",
        "Tax Representation before Assessing Officers and CIT (Appeals)"
      ],
      icon: <Percent size={32} />
    },
    audit: {
      title: "Auditing & Assurance",
      desc: "Robust internal controls and compliant financial statements.",
      features: [
        "Statutory Audit under Companies Act, 2013",
        "Tax Audit under Section 44AB of Income Tax Act",
        "GST Audit & Departmental Audit Support",
        "Internal & Management Audits for Process Optimization"
      ],
      icon: <ShieldCheck size={32} />
    },
    consulting: {
      title: "Corporate Consulting",
      desc: "Corporate structuring, direct/indirect tax advisory, and cross-border consulting.",
      features: [
        "Business Setup & Company Registration (Pvt Ltd, LLP, Section 8)",
        "Double Taxation Avoidance Agreement (DTAA) Advisory",
        "Mergers, Acquisitions, and Corporate Restructuring",
        "FEMA compliance and foreign investment structuring"
      ],
      icon: <Scale size={32} />
    },
    bookkeeping: {
      title: "Management Bookkeeping",
      desc: "Organized ledger maintenance, payroll processing, and financial reporting.",
      features: [
        "Real-time Cloud Bookkeeping (Tally, QuickBooks, Zoho)",
        "Payroll Setup, PF, ESI, and Professional Tax filings",
        "Monthly MIS reporting & Cashflow Forecasting",
        "Fixed Asset Register & Inventory Verification"
      ],
      icon: <FileText size={32} />
    }
  };

  return (
    <div className="selection:bg-[#10B981] selection:text-[#090D16]" style={{
      fontFamily: "'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif",
      color: '#F8FAFC',
      background: '#04070D',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      {/* Glow Effects (Background) */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(217, 119, 6, 0.05) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(4, 7, 13, 0.8)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)'
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
              background: 'linear-gradient(135deg, #10B981 0%, #D97706 100%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)'
            }}>
              <TrendingUp size={22} color="#04070D" strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '1px', color: '#FFF' }}>
                MAXIMUM
              </span>
              <span style={{ fontSize: '0.75rem', display: 'block', letterSpacing: '2px', color: '#10B981', fontWeight: 600, marginTop: '-3px' }}>
                TAX CONSULTANT
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex" style={{ gap: '32px', alignItems: 'center' }}>
            <a href="#hero" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <a href="#contact" style={{
              background: 'linear-gradient(135deg, #10B981, #059669)',
              color: '#04070D',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(16,185,129,0.2)'
            }} className="btn-emerald">
              Book Call <PhoneCall size={16} />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="block md:hidden" 
            style={{ background: 'none', border: 'none', color: '#FFF', cursor: 'pointer' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: '#04070D',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            zIndex: 99
          }}>
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="nav-link">Home</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="nav-link">Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="nav-link">About Us</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="nav-link">Testimonials</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="nav-link">Contact</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{
              background: '#10B981',
              color: '#04070D',
              padding: '12px',
              borderRadius: '6px',
              textAlign: 'center',
              fontWeight: 700,
              textDecoration: 'none'
            }}>Book Advisory Call</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{
        position: 'relative',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 24px',
        display: 'grid',
        gridTemplateColumns: '1fr',
        alignItems: 'center',
        gap: '48px',
        zIndex: 1
      }} className="hero-grid">
        {/* Hero Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            padding: '6px 16px',
            borderRadius: '100px',
            color: '#10B981',
            fontSize: '0.85rem',
            fontWeight: 600,
            alignSelf: 'flex-start'
          }}>
            <Award size={16} /> Prime Corporate Auditor & Advisors
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-1.5px',
            background: 'linear-gradient(135deg, #FFF 60%, #94A3B8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Maximize Deductions.<br/>
            Minimize Liabilities.<br/>
            <span style={{
              background: 'linear-gradient(135deg, #10B981 0%, #D97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Uncompromising Accuracy.
            </span>
          </h1>

          <p style={{
            fontSize: '1.15rem',
            lineHeight: 1.6,
            color: '#94A3B8',
            maxWidth: '550px'
          }}>
            Maximum Tax Consultant delivers premium, compliance-first chartered accounting services. We audit, organize, and strategically structure the finances of high-growth corporate entities and high-net-worth individuals.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
            <a href="#contact" style={{
              background: 'linear-gradient(135deg, #10B981, #059669)',
              color: '#04070D',
              border: 'none',
              padding: '14px 32px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 5px 20px rgba(16,185,129,0.25)'
            }} className="btn-emerald">
              Get Started Now <ArrowRight size={18} />
            </a>
            <a href="#services" style={{
              background: 'rgba(255,255,255,0.03)',
              color: '#FFF',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '14px 32px',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.3s ease'
            }} className="btn-outline">
              Our Services
            </a>
          </div>

          {/* Social Proof Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            marginTop: '24px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '24px'
          }}>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10B981' }}>250+</div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '2px' }}>Corporate Clients</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#D97706' }}>₹140Cr+</div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '2px' }}>Tax Saved</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10B981' }}>99.8%</div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '2px' }}>Audit Pass Rate</div>
            </div>
          </div>
        </div>

        {/* Interactive Tax Savings Calculator Widget */}
        <div style={{
          background: 'rgba(17, 25, 40, 0.65)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(16, 185, 129, 0.05)',
          position: 'relative'
        }}>
          {/* Top Decorative glowing corner */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '60px',
            height: '60px',
            borderTop: '2px solid #D97706',
            borderRight: '2px solid #D97706',
            borderTopRightRadius: '16px',
            opacity: 0.8
          }}></div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: 'rgba(217, 119, 6, 0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#D97706'
            }}>
              <Calculator size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFF' }}>Interactive Service Estimator</h3>
              <p style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Select your business details to preview benefits.</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Business Type selector */}
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#94A3B8', display: 'block', marginBottom: '8px' }}>
                Business Structure
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {['Proprietorship', 'LLP', 'Pvt Ltd'].map(type => (
                  <button 
                    key={type}
                    onClick={() => setBusinessType(type)}
                    style={{
                      padding: '8px 4px',
                      background: businessType === type ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255,255,255,0.02)',
                      border: `1px solid ${businessType === type ? '#10B981' : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: '6px',
                      color: businessType === type ? '#10B981' : '#FFF',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Revenue slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#94A3B8' }}>Annual Revenue</span>
                <span style={{ fontSize: '1rem', fontWeight: 800, color: '#FFF' }}>₹ {revenue} Lakhs</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="200" 
                step="5"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#10B981',
                  background: 'rgba(255,255,255,0.1)',
                  height: '6px',
                  borderRadius: '3px',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748B', marginTop: '6px' }}>
                <span>₹ 10L</span>
                <span>₹ 1 Cr</span>
                <span>₹ 2 Cr+</span>
              </div>
            </div>

            {/* Results Grid */}
            <div style={{
              background: 'rgba(0,0,0,0.25)',
              borderRadius: '8px',
              padding: '16px',
              border: '1px dashed rgba(255,255,255,0.06)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              marginTop: '8px'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8', display: 'block' }}>Estimated Liability</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFF' }}>₹ {estTax} L</span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#10B981', display: 'block' }}>Avg. Savings Pot.</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10B981' }}>₹ {estSaving} L</span>
              </div>
            </div>

            <a href="#contact" style={{
              background: 'rgba(217, 119, 6, 0.1)',
              border: '1px solid rgba(217, 119, 6, 0.3)',
              color: '#F59E0B',
              padding: '12px',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontWeight: 700,
              textAlign: 'center',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.3s'
            }} className="btn-gold-outline">
              Maximize My Savings <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '100px 24px 80px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.5px' }}>
            Comprehensive Advisory & Compliance
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '600px', margin: '12px auto 0' }}>
            Maximize corporate resources through structured filings, professional audits, and expert corporate tax architecture.
          </p>
        </div>

        {/* Tab Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          {Object.keys(servicesData).map(key => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                background: activeTab === key ? 'linear-gradient(135deg, #10B981, #059669)' : 'rgba(255,255,255,0.02)',
                color: activeTab === key ? '#04070D' : '#94A3B8',
                border: activeTab === key ? '1px solid #10B981' : '1px solid rgba(255,255,255,0.06)',
                padding: '12px 24px',
                borderRadius: '30px',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === key ? '0 4px 15px rgba(16,185,129,0.2)' : 'none'
              }}
            >
              {servicesData[key].title}
            </button>
          ))}
        </div>

        {/* Active Tab Service Display */}
        <div style={{
          background: 'rgba(17, 25, 40, 0.45)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          alignItems: 'center'
        }} className="service-tab-grid">
          <div>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              color: '#10B981',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              {servicesData[activeTab].icon}
            </div>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFF', marginBottom: '12px' }}>
              {servicesData[activeTab].title}
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '1.1rem', marginBottom: '24px', lineHeight: 1.6 }}>
              {servicesData[activeTab].desc}
            </p>
            <a href="#contact" style={{
              color: '#D97706',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.95rem'
            }} className="hover-gold-link">
              Inquire About This Service <ArrowRight size={16} />
            </a>
          </div>

          <div style={{
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.04)',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#D97706', marginBottom: '8px' }}>
              Key Deliverables & Inclusions
            </h4>
            {servicesData[activeTab].features.map((feature, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ marginTop: '2px', color: '#10B981' }}>
                  <CheckCircle2 size={18} />
                </div>
                <span style={{ color: '#E2E8F0', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '100px 24px',
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid rgba(255,255,255,0.06)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '64px',
          alignItems: 'center'
        }} className="about-grid">
          {/* Visual Elements with Glowing Lines */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              width: '100%',
              height: '100%',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '12px',
              zIndex: 0
            }}></div>
            <div style={{
              background: 'rgba(17, 25, 40, 0.8)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              padding: '40px',
              position: 'relative',
              zIndex: 1,
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}>
              {/* Partner Portrait Mock */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '32px' }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10B981, #D97706)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: '#04070D'
                }}>
                  MT
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFF' }}>Mohit Tandon</h4>
                  <p style={{ fontSize: '0.85rem', color: '#10B981', fontWeight: 600 }}>Managing Partner, FCA, DISA</p>
                </div>
              </div>

              <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: '1rem', marginBottom: '24px', fontStyle: 'italic' }}>
                "We founded Maximum Tax Consultant with a single mission: to provide the absolute highest tier of financial clarity. Compliance is just the baseline; strategic advisory is where we unlock enterprise value."
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ borderLeft: '3px solid #D97706', paddingLeft: '16px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFF' }}>15+ Yrs</div>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Big 4 Alumni Experience</div>
                </div>
                <div style={{ borderLeft: '3px solid #10B981', paddingLeft: '16px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFF' }}>1,200+</div>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Successful Audits Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <span style={{ color: '#D97706', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
              OUR CREDENTIALS & VALUES
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
              A Dedicated Team of Financial Architects
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Maximum Tax Consultant comprises qualified Chartered Accountants (CAs), Company Secretaries (CSs), and tax advocates. We combine decades of corporate experience with state-of-the-art tech platforms to handle complex cross-border taxes, large-scale GST audits, and corporate advisory.
            </p>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Based out of Tolichowki, Hyderabad, we represent entities across diverse industries, from technology startups and retail giants to healthcare providers and real estate groups.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '12px' }}>
              {[
                { title: "Strict Compliance", desc: "Zero errors, zero delays, and absolute adherence to statutory dates." },
                { title: "Active Advisory", desc: "We actively identify optimization strategies to lower statutory tax outflows." },
                { title: "Big-4 Audit Quality", desc: "Rigorous standards without the massive overhead pricing." }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#10B981',
                    marginTop: '2px',
                    flexShrink: 0
                  }}>
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginTop: '2px' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{
        background: 'rgba(17, 25, 40, 0.25)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '100px 24px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: '#10B981', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
              CLIENT TESTIMONIALS
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.5px', marginTop: '8px' }}>
              Trusted by Top Corporations
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                quote: "Maximum Tax Consultant transformed how we manage GST compliance. Their automated reconciliation reports caught ₹18 Lakhs in unclaimed input tax credits last year.",
                author: "Anwar Siddiqui",
                role: "CFO, Falcon Logistics Group",
                rating: 5
              },
              {
                quote: "The partners are outstanding. We faced a complex transfer pricing issue and their advisory services helped us structure our FEMA-compliant international agreements seamlessly.",
                author: "Dr. Srikanth Reddy",
                role: "Director, Apex Diagnostics Ltd",
                rating: 5
              },
              {
                quote: "Incredibly professional audit. Mohit and his team did our corporate tax filing and statutory audit with meticulous care, keeping us fully prepared for external audits.",
                author: "Sarah Jenkins",
                role: "Co-Founder, SaaSify India Pvt Ltd",
                rating: 5
              }
            ].map((t, idx) => (
              <div key={idx} style={{
                background: 'rgba(17, 25, 40, 0.65)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }} className="hover-card">
                <div>
                  <div style={{ display: 'flex', gap: '4px', color: '#D97706', marginBottom: '16px' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p style={{ color: '#E2E8F0', lineHeight: 1.6, fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '24px' }}>
                    "{t.quote}"
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: '#10B981',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 700
                  }}>
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h5 style={{ fontWeight: 700, color: '#FFF' }}>{t.author}</h5>
                    <p style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA callback request form */}
      <section id="contact" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '100px 24px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          background: 'radial-gradient(circle at top right, rgba(16, 185, 129, 0.08), rgba(0,0,0,0) 40%), rgba(17, 25, 40, 0.55)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: '48px',
          boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px'
        }} className="cta-grid">
          {/* CTA Text & Info */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
            <span style={{ color: '#D97706', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
              SCHEDULE A CONSULTATION
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
              Get Your Free Strategic Tax Review
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Receive an audit preview and optimization estimate from Mohit Tandon and partners. No pressure, just professional expertise to unlock structural tax value.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: '#10B981',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <PhoneCall size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8', display: 'block' }}>Call Directly</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF' }}>+91 98765 43210</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: 'rgba(217, 119, 6, 0.1)',
                  color: '#D97706',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8', display: 'block' }}>Email Enquiries</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF' }}>advisory@maximumtax.in</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: '#10B981',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8', display: 'block' }}>Office Address</span>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF' }}>3rd Floor, Golden Heights, Tolichowki, Hyderabad, 500008</span>
                </div>
              </div>
            </div>
          </div>

          {/* Callback Request Form */}
          <div style={{
            background: 'rgba(0,0,0,0.25)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '16px',
            padding: '36px'
          }}>
            {formSubmitted ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: '#10B981',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFF' }}>Consultation Scheduled!</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', maxWidth: '300px', margin: '0 auto' }}>
                  Thank you. One of our senior CAs will review your details and reach out within 2 hours.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  style={{
                    background: 'none',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#94A3B8',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    marginTop: '12px'
                  }}
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFF', marginBottom: '8px' }}>
                  Request Consultation Callback
                </h3>

                {formError && (
                  <div style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#EF4444',
                    padding: '12px',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}>
                    {formError}
                  </div>
                )}

                <div>
                  <label htmlFor="name" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94A3B8', display: 'block', marginBottom: '6px' }}>
                    Full Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name" 
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '6px',
                      color: '#FFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border 0.2s'
                    }}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
                  <div>
                    <label htmlFor="email" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94A3B8', display: 'block', marginBottom: '6px' }}>
                      Email <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. director@company.com" 
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '6px',
                        color: '#FFF',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94A3B8', display: 'block', marginBottom: '6px' }}>
                      Phone Number <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g. +91 98765 XXXXX" 
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '6px',
                        color: '#FFF',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94A3B8', display: 'block', marginBottom: '6px' }}>
                    Primary Service Needed
                  </label>
                  <select 
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#0D131F',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '6px',
                      color: '#FFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option>Corporate Tax Filing</option>
                    <option>GST Audit & Compliance</option>
                    <option>Statutory Audit Services</option>
                    <option>Bookkeeping & Payroll</option>
                    <option>Corporate Structuring</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="msg" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94A3B8', display: 'block', marginBottom: '6px' }}>
                    Describe Your Business Needs
                  </label>
                  <textarea 
                    id="msg"
                    rows="3"
                    value={formData.msg}
                    onChange={(e) => setFormData({...formData, msg: e.target.value})}
                    placeholder="Enter details about your revenue, bookkeeping state, or audit requirements..." 
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '6px',
                      color: '#FFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={formLoading}
                  style={{
                    background: 'linear-gradient(135deg, #10B981, #059669)',
                    color: '#04070D',
                    border: 'none',
                    padding: '14px',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 15px rgba(16,185,129,0.2)',
                    transition: 'all 0.3s'
                  }}
                  className="btn-emerald"
                >
                  {formLoading ? (
                    <>
                      <div className="spinner"></div> Scheduling...
                    </>
                  ) : (
                    <>
                      Request Callback <PhoneCall size={18} />
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
        background: '#020306',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '60px 24px 30px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }} className="footer-grid">
          {/* Branding Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #10B981 0%, #D97706 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <TrendingUp size={18} color="#04070D" strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '1px', color: '#FFF' }}>
                MAXIMUM TAX
              </span>
            </div>
            <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.5 }}>
              Expert chartered accountants and corporate auditors based in Tolichowki, Hyderabad. Uncompromising precision. Big-4 quality compliance.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Our Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#services" className="footer-link">GST Audit & Compliance</a>
              <a href="#services" className="footer-link">Corporate Tax ITR Filing</a>
              <a href="#services" className="footer-link">Statutory & Internal Audit</a>
              <a href="#services" className="footer-link">FEMA & Structuring Advisory</a>
            </div>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              About
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#about" className="footer-link">Partners & Credentials</a>
              <a href="#testimonials" className="footer-link">Client Success Stories</a>
              <a href="#contact" className="footer-link">Request Consultation</a>
              <a href="#" className="footer-link">Privacy Policy</a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Hyderabad Office
            </h4>
            <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '10px' }}>
              📍 3rd Floor, Golden Heights,<br/>
              Tolichowki Main Road, Hyderabad, 500008
            </p>
            <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.5 }}>
              📞 +91 98765 43210<br/>
              ✉️ advisory@maximumtax.in
            </p>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }} className="footer-legal">
          <p style={{ color: '#64748B', fontSize: '0.85rem' }}>
            &copy; 2026 Maximum Tax Consultant. All rights reserved. Created for premium website preview demonstration.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span style={{ color: '#64748B', fontSize: '0.85rem' }}>CA Act Compliance Compliant</span>
            <span style={{ color: '#64748B', fontSize: '0.85rem' }}>GSTN Authorized Provider</span>
          </div>
        </div>
      </footer>

      {/* Styles for animation, hover effects, grids and responsiveness */}
      <style>{`
        .nav-link {
          color: #94A3B8;
          font-weight: 500;
          font-size: 0.95rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: #10B981;
        }
        .btn-emerald:hover {
          background: linear-gradient(135deg, #059669, #047857) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4) !important;
        }
        .btn-emerald:active {
          transform: translateY(0);
        }
        .btn-outline:hover {
          background: rgba(255,255,255,0.08) !important;
          border-color: rgba(255,255,255,0.2) !important;
        }
        .btn-gold-outline:hover {
          background: rgba(217, 119, 6, 0.18) !important;
          border-color: #F59E0B !important;
          transform: translateY(-1px);
        }
        .hover-gold-link:hover {
          color: #F59E0B !important;
          text-decoration: underline !important;
        }
        .hover-card:hover {
          transform: translateY(-4px);
          border-color: rgba(16, 185, 129, 0.3) !important;
          box-shadow: 0 15px 30px rgba(0,0,0,0.4), 0 0 15px rgba(16, 185, 129, 0.08) !important;
        }
        .footer-link {
          color: #64748B;
          font-size: 0.85rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #10B981;
        }
        .form-input:focus {
          border-color: #10B981 !important;
          background: rgba(255,255,255,0.06) !important;
        }
        
        /* Grid responsive styles */
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
            padding: 120px 24px !important;
          }
          .service-tab-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
          .cta-grid {
            grid-template-columns: 1fr 1.1fr !important;
            padding: 64px !important;
          }
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(4, 7, 13, 0.2);
          border-top: 3px solid #04070D;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

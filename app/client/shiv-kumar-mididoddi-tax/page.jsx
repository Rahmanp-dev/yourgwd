"use client";
import React, { useState } from 'react';
import { 
  Building, User, Calendar, ShieldCheck, Scale, FileText, CheckSquare, 
  MapPin, Phone, Mail, ArrowRight, Star, Clock, Check, HelpCircle, 
  Menu, X, Sparkles, Award
} from 'lucide-react';

export default function ShivKumarMididoddiTaxPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Interactive Checklist State
  const [hasGST, setHasGST] = useState(true);
  const [revenueAbove10, setRevenueAbove10] = useState(true);
  const [hasExports, setHasExports] = useState(false);
  const [hasEmployees, setHasEmployees] = useState(false);

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', urgency: 'Medium', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError('Please fill out all required fields.');
      return;
    }
    setFormError('');
    setFormLoading(true);

    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', phone: '', urgency: 'Medium', message: '' });
    }, 1200);
  };

  return (
    <div className="selection:bg-[#4F46E5] selection:text-white" style={{
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      color: '#0F172A',
      background: '#F8FAFC',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      {/* Background Grid Accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '600px',
        backgroundImage: 'radial-gradient(#E2E8F0 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px',
        opacity: 0.6,
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      {/* Sticky Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(248, 250, 252, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E2E8F0'
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
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: '#4F46E5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#FFF'
            }}>
              <Building size={20} />
            </div>
            <div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.5px' }}>
                SHIV KUMAR MIDIDODDI
              </span>
              <span style={{ fontSize: '0.75rem', display: 'block', letterSpacing: '1.5px', color: '#4F46E5', fontWeight: 700, marginTop: '-3px' }}>
                TAX & AUDIT ASSOCIATES
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex" style={{ gap: '32px', alignItems: 'center' }}>
            <a href="#hero" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#testimonials" className="nav-link">Reviews</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <a href="#contact" style={{
              background: '#4F46E5',
              color: '#FFF',
              border: 'none',
              padding: '10px 22px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s',
              boxShadow: '0 4px 14px rgba(79, 70, 229, 0.2)'
            }} className="btn-indigo">
              Request Callback
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="block md:hidden" 
            style={{ background: 'none', border: 'none', color: '#0F172A', cursor: 'pointer' }}
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
            background: '#F8FAFC',
            borderBottom: '1px solid #E2E8F0',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            zIndex: 99
          }}>
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="nav-link">Home</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="nav-link">Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="nav-link">About Us</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="nav-link">Reviews</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="nav-link">Contact</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{
              background: '#4F46E5',
              color: '#FFF',
              padding: '12px',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 700,
              textDecoration: 'none'
            }}>Request Callback</a>
          </div>
        )}
      </nav>

      {/* Hero Bento Grid */}
      <section id="hero" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 24px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '24px'
        }} className="bento-grid-hero">
          
          {/* Hero Main Header Card (Spans 8 cols on desktop) */}
          <div style={{
            gridColumn: 'span 8',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '20px',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
          }} className="bento-span-8">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(79, 70, 229, 0.08)',
              padding: '4px 12px',
              borderRadius: '6px',
              color: '#4F46E5',
              fontSize: '0.8rem',
              fontWeight: 700,
              alignSelf: 'flex-start'
            }}>
              <Sparkles size={14} /> Professional Chartered Tax Services
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              color: '#0F172A'
            }}>
              Modular Financial Advisory.<br/>
              <span style={{ color: '#4F46E5' }}>Engineered for Growth.</span>
            </h1>
            
            <p style={{
              fontSize: '1.05rem',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '620px'
            }}>
              Shiv Kumar Mididoddi Tax & Audit Associates offers structured corporate auditing, tax litigation advisory, and strategic GST filing services. We design resilient tax workflows that simplify compliance.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
              <a href="#contact" style={{
                background: '#4F46E5',
                color: '#FFF',
                padding: '14px 28px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(79, 70, 229, 0.3)'
              }} className="btn-indigo">
                Get Structured Consultation <ArrowRight size={16} />
              </a>
              <a href="#services" style={{
                background: 'transparent',
                color: '#475569',
                border: '1px solid #E2E8F0',
                padding: '14px 28px',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s'
              }} className="btn-outline">
                Explore Services
              </a>
            </div>
          </div>

          {/* Quick Metrics Card (Spans 4 cols on desktop) */}
          <div style={{
            gridColumn: 'span 4',
            background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)',
            border: '1px solid #312E81',
            borderRadius: '20px',
            padding: '36px',
            color: '#FFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
          }} className="bento-span-4">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#818CF8' }}>
                At A Glance
              </span>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Award size={18} color="#818CF8" />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              <div>
                <div style={{ fontSize: '2.25rem', fontWeight: 900 }}>15+ Yrs</div>
                <div style={{ fontSize: '0.85rem', color: '#C7D2FE' }}>Founder Domain Practice</div>
              </div>
              <div>
                <div style={{ fontSize: '2.25rem', fontWeight: 900 }}>₹90 Cr+</div>
                <div style={{ fontSize: '0.85rem', color: '#C7D2FE' }}>Corporate Assets Audited</div>
              </div>
            </div>

            <div style={{ fontSize: '0.8rem', color: '#A5B4FC', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
              Office located in Tolichowki, Hyderabad. Licensed under ICAI.
            </div>
          </div>

          {/* Interactive Compliance Tracker Card (Spans 6 cols on desktop) */}
          <div style={{
            gridColumn: 'span 6',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '20px',
            padding: '36px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
          }} className="bento-span-6">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'rgba(79,70,229,0.08)', color: '#4F46E5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CheckSquare size={16} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Statutory Requirement Checker</h3>
            </div>

            <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '20px' }}>
              Toggle your business attributes to dynamically generate a mandatory checklist of compliance filings:
            </p>

            {/* Toggles */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              <label className="checkbox-container">
                <input type="checkbox" checked={hasGST} onChange={() => setHasGST(!hasGST)} />
                <span className="checkbox-label">GST Registered</span>
              </label>
              <label className="checkbox-container">
                <input type="checkbox" checked={revenueAbove10} onChange={() => setRevenueAbove10(!revenueAbove10)} />
                <span className="checkbox-label">Turnover &gt; ₹10L</span>
              </label>
              <label className="checkbox-container">
                <input type="checkbox" checked={hasExports} onChange={() => setHasExports(!hasExports)} />
                <span className="checkbox-label">International Exports</span>
              </label>
              <label className="checkbox-container">
                <input type="checkbox" checked={hasEmployees} onChange={() => setHasEmployees(!hasEmployees)} />
                <span className="checkbox-label">Has Employees</span>
              </label>
            </div>

            {/* Dynamic Output */}
            <div style={{
              background: '#F1F5F9',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Mandatory Filings Checklist
              </span>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {hasGST && (
                  <div className="checklist-item">
                    <Check size={12} color="#10B981" /> <span>GSTR-1 & GSTR-3B Monthly Filing</span>
                  </div>
                )}
                {revenueAbove10 && (
                  <div className="checklist-item">
                    <Check size={12} color="#10B981" /> <span>Corporate Income Tax Return (ITR-6)</span>
                  </div>
                )}
                {hasExports && (
                  <div className="checklist-item">
                    <Check size={12} color="#10B981" /> <span>15CA & 15CB Foreign Remittance compliance</span>
                  </div>
                )}
                {hasEmployees && (
                  <div className="checklist-item">
                    <Check size={12} color="#10B981" /> <span>TDS Section 192 (Salary) & PF/ESI Filing</span>
                  </div>
                )}
                {!hasGST && !revenueAbove10 && !hasExports && !hasEmployees && (
                  <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Select attributes to estimate requirements.</span>
                )}
              </div>
            </div>
          </div>

          {/* Quick Consultation Booking Card (Spans 6 cols on desktop) */}
          <div style={{
            gridColumn: 'span 6',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '20px',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
          }} className="bento-span-6">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'rgba(234,88,12,0.08)', color: '#EA580C', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Clock size={16} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Office Booking Availability</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, marginBottom: '20px' }}>
                Our office is located in Tolichowki, Hyderabad. Select an open slot to arrange an in-person audit preview or advisory call.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #F1F5F9' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Statutory Audit Consultation</span>
                  <span style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 700 }}>2 Slots Today</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #F1F5F9' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>GST Appeals & Disputes</span>
                  <span style={{ fontSize: '0.8rem', color: '#EA580C', fontWeight: 700 }}>1 Slot Tomorrow</span>
                </div>
              </div>
            </div>

            <a href="#contact" style={{
              background: 'rgba(79, 70, 229, 0.08)',
              color: '#4F46E5',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 700,
              textAlign: 'center',
              textDecoration: 'none',
              marginTop: '24px',
              display: 'block',
              transition: 'all 0.2s'
            }} className="btn-indigo-outline">
              Secure Consultation Slot
            </a>
          </div>

        </div>
      </section>

      {/* Services Bento Grid */}
      <section id="services" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 24px'
      }}>
        <div style={{ marginBottom: '40px' }}>
          <span style={{ color: '#4F46E5', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.8rem' }}>
            Our Service Grid
          </span>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginTop: '4px', letterSpacing: '-0.5px' }}>
            Structured Solutions for Modern Enterprise
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '24px'
        }} className="bento-grid-services">
          
          {/* Card 1: GST & Compliance (Spans 7 cols) */}
          <div style={{
            gridColumn: 'span 7',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '36px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
          }} className="bento-span-7">
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(79,70,229,0.08)', color: '#4F46E5', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
              <Scale size={24} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>GST Advisory & Compliance</h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '20px' }}>
              Comprehensive GST management, including GSTR-1, GSTR-3B filings, annual GSTR-9 audits, and input tax credit (ITC) reconciliation. We defend departments audit cases.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.85rem', color: '#475569' }}>
                <Check size={14} color="#10B981" /> <span>Reconciliation (GSTR-2B)</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.85rem', color: '#475569' }}>
                <Check size={14} color="#10B981" /> <span>Departmental Audit cases</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.85rem', color: '#475569' }}>
                <Check size={14} color="#10B981" /> <span>GST Annual Filing (9C)</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.85rem', color: '#475569' }}>
                <Check size={14} color="#10B981" /> <span>Refund Processing</span>
              </div>
            </div>
          </div>

          {/* Card 2: Income Tax & ITR (Spans 5 cols) */}
          <div style={{
            gridColumn: 'span 5',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '36px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
          }} className="bento-span-5">
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(234,88,12,0.08)', color: '#EA580C', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
              <FileText size={24} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Income Tax Filing</h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '24px' }}>
              Statutory corporate ITR-6 filing, individual high-net-worth tax planning, TDS return filings, and advanced tax computation.
            </p>
            <a href="#contact" style={{ color: '#4F46E5', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }} className="hover-link">
              Request Advisory <ArrowRight size={16} />
            </a>
          </div>

          {/* Card 3: Statutory Audits (Spans 5 cols) */}
          <div style={{
            gridColumn: 'span 5',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '36px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
          }} className="bento-span-5">
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16,185,129,0.08)', color: '#10B981', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
              <ShieldCheck size={24} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Statutory & Tax Audit</h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '24px' }}>
              Independent statutory audits under the Companies Act, and tax audits under Sec 44AB to verify compliance and financial health.
            </p>
            <a href="#contact" style={{ color: '#4F46E5', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }} className="hover-link">
              Inquire Auditing <ArrowRight size={16} />
            </a>
          </div>

          {/* Card 4: Corporate Strategy & Setup (Spans 7 cols) */}
          <div style={{
            gridColumn: 'span 7',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '36px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
          }} className="bento-span-7">
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(79,70,229,0.08)', color: '#4F46E5', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
              <Building size={24} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Corporate Structuring & Bookkeeping</h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '20px' }}>
              Setup and registration of Pvt Ltd, LLP, and Partnerships. Ledgers, payroll management, and monthly MIS financial generation.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.85rem', color: '#475569' }}>
                <Check size={14} color="#4F46E5" /> <span>Company Incorporation</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.85rem', color: '#475569' }}>
                <Check size={14} color="#4F46E5" /> <span>PF & ESI Registrations</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.85rem', color: '#475569' }}>
                <Check size={14} color="#4F46E5" /> <span>MIS Ledger Accounting</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.85rem', color: '#475569' }}>
                <Check size={14} color="#4F46E5" /> <span>Payroll Processing</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Us Bento Grid */}
      <section id="about" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 24px',
        borderTop: '1px solid #E2E8F0'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '24px'
        }} className="bento-grid-about">
          
          {/* Text Summary Card (Spans 5 cols) */}
          <div style={{
            gridColumn: 'span 5',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '36px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '16px'
          }} className="bento-span-5">
            <span style={{ color: '#EA580C', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Founder & Values
            </span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.5px' }}>
              Meticulous Financial Advisors
            </h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Founded by Shiv Kumar Mididoddi, a practicing Chartered Accountant with over 15 years of experience in corporate taxation, GST representation, and statutory audits.
            </p>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Based in Tolichowki, Hyderabad, we support local clinic networks, real estate builders, and IT firms with premium, personalized financial advisory services.
            </p>
          </div>

          {/* Details Bento Blocks (Spans 7 cols) */}
          <div style={{
            gridColumn: 'span 7',
            display: 'grid',
            gridTemplateRows: '1fr 1fr',
            gap: '24px'
          }} className="bento-span-7">
            {/* Top Row: Core Credentials */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
              padding: '28px 36px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px'
            }} className="bento-grid-inner">
              <div style={{ borderLeft: '3px solid #4F46E5', paddingLeft: '16px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>100%</div>
                <span style={{ fontSize: '0.8rem', color: '#475569' }}>Statutory Timelines Met</span>
              </div>
              <div style={{ borderLeft: '3px solid #10B981', paddingLeft: '16px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>FCA Certified</div>
                <span style={{ fontSize: '0.8rem', color: '#475569' }}>Fellow Chartered Accountant</span>
              </div>
            </div>

            {/* Bottom Row: Mission & Philosophy */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
              padding: '28px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>The Clarity Commitment</span>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.4 }}>
                We believe that financial compliance should not be a bottleneck. Our philosophy is to set up clean bookkeeping and structural guidelines that automate reporting and lower liability legally.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Bento Grid */}
      <section id="testimonials" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 24px 80px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ color: '#4F46E5', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Client Reviews
          </span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0F172A', marginTop: '4px' }}>
            What Our Corporate Partners Say
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }} className="bento-grid-testimonials">
          {[
            {
              quote: "Mr. Shiv Kumar has been our primary tax auditor for 5 years. His attention to corporate filing guidelines is outstanding. We had zero errors on our statutory filings.",
              author: "N. Venkatesh",
              org: "Managing Director, Harsha Construction"
            },
            {
              quote: "Incredibly helpful with GST dispute representation. Shiv Kumar Mididoddi's documentation and structured approach resolved our departmental query within weeks.",
              author: "Mirza Ali",
              org: "Founder, Tolichowki Healthcare Clinic"
            },
            {
              quote: "Their bookkeeping and payroll management is highly structured. We receive detailed monthly MIS reports on the 3rd of every month, without fail.",
              author: "Deepthi Rao",
              org: "Operations Head, Vistaprint IT Hub"
            }
          ].map((item, idx) => (
            <div key={idx} style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }} className="hover-card">
              <div>
                <div style={{ display: 'flex', gap: '2px', color: '#FBBF24', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.5, fontStyle: 'italic', marginBottom: '20px' }}>
                  "{item.quote}"
                </p>
              </div>
              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>{item.author}</span>
                <span style={{ fontSize: '0.75rem', color: '#475569', marginTop: '2px' }}>{item.org}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Callback Form Bento Grid */}
      <section id="contact" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 24px 100px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '24px'
        }} className="bento-grid-cta">
          
          {/* Info Card (Spans 5 cols) */}
          <div style={{
            gridColumn: 'span 5',
            background: 'linear-gradient(135deg, #4F46E5 0%, #312E81 100%)',
            border: '1px solid #4F46E5',
            borderRadius: '20px',
            padding: '40px',
            color: '#FFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
          }} className="bento-span-5">
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#C7D2FE' }}>
                Consultation Request
              </span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginTop: '8px', marginBottom: '16px', letterSpacing: '-0.5px' }}>
                Let's Align Your Tax Strategy
              </h3>
              <p style={{ color: '#E0E7FF', fontSize: '0.95rem', lineHeight: 1.5 }}>
                Receive a professional tax preview assessment. Submit your business contact info and one of our CAs will call back.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} color="#C7D2FE" />
                <span style={{ fontSize: '0.95rem', fontWeight: 700 }}>+91 91234 56789</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="#C7D2FE" />
                <span style={{ fontSize: '0.95rem', fontWeight: 700 }}>contact@skmtax.in</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin size={18} color="#C7D2FE" />
                <span style={{ fontSize: '0.9rem' }}>4th Floor, Meridian Plaza, Tolichowki, Hyderabad, 500008</span>
              </div>
            </div>
          </div>

          {/* Form Card (Spans 7 cols) */}
          <div style={{
            gridColumn: 'span 7',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
          }} className="bento-span-7">
            {formSubmitted ? (
              <div style={{
                textAlign: 'center',
                padding: '48px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.08)',
                  color: '#10B981',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}>
                  <Check size={28} strokeWidth={3} />
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 900 }}>Request Received!</h4>
                <p style={{ color: '#475569', fontSize: '0.9rem', maxWidth: '340px' }}>
                  Thank you. Shiv Kumar Mididoddi's advisory office will review your requirements and reach out within 2 hours.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  style={{
                    background: 'none',
                    border: '1px solid #E2E8F0',
                    color: '#475569',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    marginTop: '12px',
                    fontWeight: 600
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>
                  Advisory Request Form
                </h4>

                {formError && (
                  <div style={{
                    background: 'rgba(239, 68, 68, 0.08)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    color: '#EF4444',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 700
                  }}>
                    {formError}
                  </div>
                )}

                <div>
                  <label htmlFor="name" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
                    Your Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. Ramesh Kumar" 
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      border: '1px solid #E2E8F0',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
                  <div>
                    <label htmlFor="email" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
                      Email Address <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. business@company.com" 
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        border: '1px solid #E2E8F0',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
                      Phone Number <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g. +91 XXXXX XXXXX" 
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        border: '1px solid #E2E8F0',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="urgency" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
                    Statutory Filing Deadline Urgency
                  </label>
                  <select 
                    id="urgency"
                    value={formData.urgency}
                    onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      border: '1px solid #E2E8F0',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      outline: 'none',
                      cursor: 'pointer',
                      fontFamily: 'inherit'
                    }}
                  >
                    <option>Low (Routine Bookkeeping)</option>
                    <option>Medium (Next 30 Days)</option>
                    <option>High (Deadline In &lt; 7 Days)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
                    Describe Your Business & Audit Status
                  </label>
                  <textarea 
                    id="message"
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Enter details on turnover, GST concerns, or specific audit needs..." 
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      border: '1px solid #E2E8F0',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                    className="form-input"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={formLoading}
                  style={{
                    background: '#4F46E5',
                    color: '#FFF',
                    border: 'none',
                    padding: '12px',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 12px rgba(79, 70, 229, 0.2)',
                    transition: 'all 0.2s',
                    marginTop: '8px'
                  }}
                  className="btn-indigo"
                >
                  {formLoading ? 'Submitting Request...' : 'Submit Advisory Request'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0F172A',
        color: '#94A3B8',
        borderTop: '1px solid #E2E8F0',
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
          {/* Logo & Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#4F46E5', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FFF' }}>
                <Building size={16} />
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFF', letterSpacing: '-0.5px' }}>
                S.K. MIDIDODDI TAX
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: '#64748B' }}>
              Fellow Chartered Accountant offering structured tax planning, statutory corporate audits, and GST departmental representation in Tolichowki, Hyderabad.
            </p>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h5 style={{ color: '#FFF', fontSize: '0.9rem', fontWeight: 800, marginBottom: '16px', textTransform: 'uppercase' }}>
              Tax Services
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#services" className="footer-link">GST Filing & Audit</a>
              <a href="#services" className="footer-link">Statutory Audit</a>
              <a href="#services" className="footer-link">Corporate ITR-6 Filing</a>
              <a href="#services" className="footer-link">Company Setup & Registration</a>
            </div>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h5 style={{ color: '#FFF', fontSize: '0.9rem', fontWeight: 800, marginBottom: '16px', textTransform: 'uppercase' }}>
              Firm Details
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#about" className="footer-link">Credentials & founder profile</a>
              <a href="#testimonials" className="footer-link">Client Reviews</a>
              <a href="#contact" className="footer-link">Schedule Appointment</a>
              <a href="#" className="footer-link">Privacy Statement</a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h5 style={{ color: '#FFF', fontSize: '0.9rem', fontWeight: 800, marginBottom: '16px', textTransform: 'uppercase' }}>
              Tolichowki Office
            </h5>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: '#64748B', marginBottom: '8px' }}>
              📍 4th Floor, Meridian Plaza,<br/>
              Tolichowki Main Road, Hyderabad, 500008
            </p>
            <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
              📞 +91 91234 56789<br/>
              ✉️ contact@skmtax.in
            </p>
          </div>
        </div>

        {/* Legal */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          borderTop: '1px solid #1E293B',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem',
          color: '#64748B'
        }} className="footer-legal">
          <p>&copy; 2026 Shiv Kumar Mididoddi Tax & Audit Associates. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Licensed Practicing CA (ICAI)</span>
            <span>GSTN Registered Advocate</span>
          </div>
        </div>
      </footer>

      {/* Bento Grid Helper Styles */}
      <style>{`
        .nav-link {
          color: #475569;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: #4F46E5;
        }
        .btn-indigo:hover {
          background: #4338CA !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(79, 70, 229, 0.35) !important;
        }
        .btn-indigo-outline:hover {
          background: rgba(79, 70, 229, 0.15) !important;
          transform: translateY(-1px);
        }
        .btn-outline:hover {
          background: #F1F5F9 !important;
          border-color: #CBD5E1 !important;
        }
        .hover-link:hover {
          color: #4338CA !important;
          text-decoration: underline !important;
        }
        .hover-card:hover {
          transform: translateY(-4px);
          border-color: #CBD5E1 !important;
          box-shadow: 0 10px 20px rgba(0,0,0,0.03) !important;
        }
        .footer-link {
          color: #64748B;
          font-size: 0.85rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #FFF;
        }
        
        .form-input:focus {
          border-color: #4F46E5 !important;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1) !important;
        }

        /* Checkbox custom style */
        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 600;
          color: #475569;
          padding: 8px 12px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          transition: all 0.2s;
        }
        .checkbox-container:hover {
          background: #F1F5F9;
          border-color: #CBD5E1;
        }
        .checkbox-container input {
          accent-color: #4F46E5;
          cursor: pointer;
          width: 15px;
          height: 15px;
        }
        
        .checklist-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #0F172A;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive Bento Grid System */
        @media (max-width: 768px) {
          .bento-grid-hero, .bento-grid-services, .bento-grid-about, .bento-grid-testimonials, .bento-grid-cta {
            display: flex !important;
            flex-direction: column !important;
            gap: 16px !important;
          }
          .bento-span-8, .bento-span-7, .bento-span-6, .bento-span-5, .bento-span-4 {
            grid-column: span 12 !important;
          }
          .bento-grid-inner {
            grid-template-columns: 1fr !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

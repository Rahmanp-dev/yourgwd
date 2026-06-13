"use client";
import React, { useState } from 'react';
import { Video, Calendar, Shield, Activity, ArrowRight, UserCircle, Phone, MapPin, HeartPulse, CheckCircle2 } from 'lucide-react';

export default function HealthtechPreview({ params }) {
  const rawName = params?.clientName || 'Healthcare Provider';
  // Simple format: "care-hospitals" -> "Care Hospitals"
  const clientName = rawName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const [booking, setBooking] = useState(false);

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#1e293b', background: '#f8fafc', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%', background: '#ffffff', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #0284c7, #0ea5e9)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
            <Activity size={24} />
          </div>
          {clientName}
        </div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <span style={{ cursor: 'pointer', fontWeight: 500, display: 'none' }} className="nav-link">Specialties</span>
          <span style={{ cursor: 'pointer', fontWeight: 500, display: 'none' }} className="nav-link">Telemedicine</span>
          <span style={{ cursor: 'pointer', fontWeight: 500, display: 'none' }} className="nav-link">Patient Portal</span>
          <button style={{ background: '#0ea5e9', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '100px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'background 0.2s', boxShadow: '0 4px 14px rgba(14, 165, 233, 0.3)' }}>
            <Phone size={16} /> Emergency
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{ position: 'relative', padding: '80px 5%', background: 'linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '24px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(2,132,199,0.05) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>
        
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: '#e0f2fe', color: '#0369a1', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', zIndex: 1 }}>
          <HeartPulse size={16} /> Next-Generation Patient Care
        </div>
        
        <h1 style={{ fontSize: '4rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.1, maxWidth: '900px', zIndex: 1, letterSpacing: '-1px' }}>
          World-Class Healthcare, <br/>
          <span style={{ background: 'linear-gradient(135deg, #0284c7, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Available Anywhere.
          </span>
        </h1>
        
        <p style={{ fontSize: '1.2rem', color: '#475569', maxWidth: '700px', lineHeight: 1.6, zIndex: 1 }}>
          {clientName} introduces a seamless telemedicine and patient management portal. Consult top specialists from the comfort of your home.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', marginTop: '16px', zIndex: 1 }}>
          <button 
            onClick={() => setBooking(true)}
            style={{ background: '#0284c7', color: '#fff', border: 'none', padding: '16px 32px', borderRadius: '100px', fontSize: '1.1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 10px 25px rgba(2, 132, 199, 0.3)' }}
          >
            <Video size={20} /> Book Video Consult
          </button>
          <button style={{ background: '#fff', color: '#0f172a', border: '2px solid #e2e8f0', padding: '16px 32px', borderRadius: '100px', fontSize: '1.1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', transition: 'all 0.2s' }}>
            <Calendar size={20} /> In-Person Visit
          </button>
        </div>

        {/* Feature Pills */}
        <div style={{ display: 'flex', gap: '32px', marginTop: '40px', zIndex: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { icon: <Shield size={18} color="#10b981"/>, text: "HIPAA Compliant" },
            { icon: <CheckCircle2 size={18} color="#0ea5e9"/>, text: "Zero Wait Times" },
            { icon: <UserCircle size={18} color="#8b5cf6"/>, text: "Digital Prescriptions" }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 500, color: '#334155' }}>
              {item.icon} {item.text}
            </div>
          ))}
        </div>
      </header>

      {/* Services Dashboard Mockup */}
      <section style={{ padding: '80px 5%', background: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px', textAlign: 'center' }}>Seamless Digital Health</h2>
        <p style={{ color: '#64748b', fontSize: '1.1rem', textAlign: 'center', maxWidth: '600px', marginBottom: '60px' }}>
          Our new portal integrates everything from health records to instant specialty triage.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', width: '100%', maxWidth: '1200px' }}>
          {[
            { title: "24/7 Telemedicine", desc: "Connect instantly with on-call physicians via HD video without leaving your living room.", icon: <Video size={32} /> },
            { title: "Smart Scheduling", desc: "AI-driven appointment routing ensures you see the right specialist at the earliest available time.", icon: <Calendar size={32} /> },
            { title: "Secure Health Vault", desc: "Access all your lab reports, prescriptions, and radiology scans in one encrypted dashboard.", icon: <Shield size={32} /> }
          ].map((service, i) => (
            <div key={i} style={{ padding: '40px 32px', background: '#f8fafc', borderRadius: '24px', border: '1px solid #e2e8f0', transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'pointer' }} className="hover-card">
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#e0f2fe', color: '#0284c7', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>{service.title}</h3>
              <p style={{ color: '#475569', lineHeight: 1.6 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Modal Mockup */}
      {booking && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(8px)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }} onClick={() => setBooking(false)}>
          <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', width: '100%', maxWidth: '500px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', animation: 'slideUp 0.3s ease-out' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>Remote Triage</h3>
                <p style={{ color: '#64748b', marginTop: '8px' }}>Select an available specialty to begin.</p>
              </div>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e0f2fe', color: '#0284c7', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Video size={24} />
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['General Physician', 'Pediatrics', 'Cardiology Consult'].map((spec, i) => (
                <div key={i} style={{ padding: '16px 20px', border: '2px solid #e2e8f0', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} className="hover-border">
                  <span style={{ fontWeight: 600 }}>{spec}</span>
                  <span style={{ fontSize: '0.85rem', color: '#0ea5e9', fontWeight: 600, background: '#f0f9ff', padding: '4px 12px', borderRadius: '100px' }}>Available Now</span>
                </div>
              ))}
            </div>

            <button style={{ width: '100%', padding: '16px', background: '#0284c7', color: '#fff', borderRadius: '16px', fontSize: '1.1rem', fontWeight: 600, marginTop: '32px', border: 'none', cursor: 'pointer' }}>
              Continue to Intake
            </button>
          </div>
        </div>
      )}

      {/* Embedded CSS for hover states since this is an isolated component without external stylesheet guarantees */}
      <style>{`
        @media (min-width: 768px) {
          .nav-link { display: block !important; color: #475569; transition: color 0.2s; }
          .nav-link:hover { color: #0284c7; }
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.05);
          border-color: #cbd5e1 !important;
        }
        .hover-border:hover {
          border-color: #0284c7 !important;
          background: #f8fafc;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

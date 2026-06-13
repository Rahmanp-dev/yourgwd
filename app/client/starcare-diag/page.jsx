"use client";
import React, { useState } from 'react';
import { Heart, Activity, Users, Zap, Leaf, FileText, Calendar, ArrowRight, Shield, Microscope } from 'lucide-react';

export default function ClientPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', time: '' });

  const iconMap = {
    Heart: <Heart size={36} color="#e11d48" />,
    Activity: <Activity size={36} color="#e11d48" />,
    Users: <Users size={36} color="#e11d48" />,
    Zap: <Zap size={36} color="#e11d48" />,
    Leaf: <Leaf size={36} color="#e11d48" />,
    FileText: <FileText size={36} color="#e11d48" />
  };

  const handleBook = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', color: '#111827', background: '#ffffff', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* Dynamic Navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 8%', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.45rem', fontWeight: 900, color: '#0f172a' }}>
          <div style={{ width: '44px', height: '44px', background: '#fff5f5', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {iconMap['Activity'] || <Activity size={36} />}
          </div>
          Starcare Diagnostic Center
        </div>
        <div>
          <button style={{ background: '#e11d48', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>
            Book Urgent Scan
          </button>
        </div>
      </nav>

      {/* Bespoke Hero Section */}
      <header style={{ background: 'linear-gradient(135deg, #fff5f5 0%, #ffffff 100%)', padding: '100px 8%', display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 500px' }}>
          <div style={{ display: 'inline-block', background: '#ffe4e6', color: '#9f1239', padding: '6px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 800, marginBottom: '24px' }}>
            24/7 Scanning & Labs • Tolichowki
          </div>
          <h1 style={{ fontSize: '3.6rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.15, marginBottom: '24px', letterSpacing: '-1.5px' }}>
            Urgent Care & <span style={{ color: '#e11d48' }}>24-Hour Advanced Diagnostics</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '40px', maxWidth: '600px' }}>
            Tolichowki’s premier 24-hour imaging facility. Rapid CT scans, emergency ultrasounds, and immediate radiologist consultations.
          </p>
          
          {submitted ? (
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '24px', borderRadius: '16px', color: '#166534', maxWidth: '500px' }}>
              <h4 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '8px' }}>Appointment Requested!</h4>
              <p>Thank you, {formData.name}. Our clinic team will call you at {formData.phone} within 15 minutes to confirm.</p>
            </div>
          ) : (
            <form onSubmit={handleBook} style={{ background: '#ffffff', padding: '30px', borderRadius: '20px', border: '1px solid #e5e7eb', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
              <h3 style={{ fontWeight: 800, fontSize: '1.25rem', margin: 0 }}>Instant Patient Intake</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <input 
                  type="text" 
                  placeholder="Patient Name" 
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={{ flex: 1, padding: '14px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none' }} 
                  required 
                />
                <input 
                  type="tel" 
                  placeholder="WhatsApp Number" 
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  style={{ flex: 1, padding: '14px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none' }} 
                  required 
                />
              </div>
              <button type="submit" style={{ width: '100%', padding: '16px', background: '#e11d48', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                Book Urgent Scan
              </button>
            </form>
          )}
        </div>
        <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '380px', height: '380px', borderRadius: '30px', background: 'linear-gradient(135deg, #e11d48 0%, #9f1239 100%)', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <Microscope size={120} color="#fff" style={{ opacity: 0.8 }} />
          </div>
        </div>
      </header>

      {/* Unique Signature Features Section */}
      <section style={{ padding: '80px 8%', background: '#f9fafb' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px', textAlign: 'center' }}>
          Urgent Diagnostic Portal
        </h2>
        <p style={{ color: '#6b7280', fontSize: '1.1rem', textAlign: 'center', marginBottom: '60px' }}>
          Custom tailored features designed explicitly for the medical operations of Starcare Diagnostic Center.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {[{"name":"Emergency Booking Triage","desc":"Book immediate late-night imaging with on-call support."},{"name":"Rapid Scanning Facility","desc":"No queue priority access for critical diagnostic referrals."},{"name":"Secure Report Sync","desc":"Securely forward your scanning reports directly to your physician."}].map((feat, i) => (
            <div key={i} style={{ background: '#ffffff', padding: '36px', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 4px 10px rgba(0,0,0,0.01)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ffe4e6', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
                <Shield size={24} color="#e11d48" />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>{feat.name}</h3>
              <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0f172a', color: '#9ca3af', padding: '60px 8%', textAlign: 'center', borderTop: '1px solid #1f2937' }}>
        <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Starcare Diagnostic Center</h3>
        <p style={{ marginBottom: '24px' }}>Professional Clinic Site Preview • Created by GWD Sales</p>
        <span style={{ fontSize: '0.85rem' }}>HIPAA Compliant & Secure System</span>
      </footer>
    </div>
  );
}
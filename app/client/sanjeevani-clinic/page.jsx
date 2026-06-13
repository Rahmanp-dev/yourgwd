"use client";
import React from 'react';
import { Leaf, Heart, Users, Calendar, ArrowRight, Activity, MapPin } from 'lucide-react';

export default function SanjeevaniClinic() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', color: '#2d3748', background: '#f7fafc', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav style={{ background: '#ffffff', padding: '16px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.5rem', fontWeight: 800, color: '#276749' }}>
          <Leaf size={28} /> Sanjeevani Clinic
        </div>
        <button style={{ background: '#276749', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
          Book Consultation
        </button>
      </nav>

      {/* Hero */}
      <header style={{ background: 'linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%)', padding: '100px 5%', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#1a202c', marginBottom: '20px', letterSpacing: '-1px' }}>
          Holistic Healing for Your <span style={{ color: '#276749' }}>Entire Family</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#4a5568', maxWidth: '700px', margin: '0 auto 40px', lineHeight: 1.6 }}>
          Banjara Hills' trusted center for general medicine, lifestyle management, and holistic wellness. Skip the waiting room by booking your appointment online.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button style={{ background: '#276749', color: '#fff', border: 'none', padding: '18px 36px', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <Calendar size={20} /> Schedule Online Now
          </button>
        </div>
      </header>

      {/* Services */}
      <section style={{ padding: '80px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#1a202c', marginBottom: '60px', fontWeight: 800 }}>Comprehensive Care Offerings</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { icon: <Heart size={32} color="#38a169" />, title: "General Medicine", desc: "Expert diagnosis and treatment for acute and chronic conditions for all age groups." },
            { icon: <Leaf size={32} color="#38a169" />, title: "Ayurvedic Consultations", desc: "Integrative approaches blending modern diagnostics with traditional holistic healing." },
            { icon: <Users size={32} color="#38a169" />, title: "Family Health Plans", desc: "Preventative care, routine checkups, and nutritional counseling for the whole family." }
          ].map((service, idx) => (
            <div key={idx} style={{ background: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <div style={{ marginBottom: '20px' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>{service.title}</h3>
              <p style={{ color: '#718096', lineHeight: 1.6 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer style={{ background: '#276749', color: '#fff', padding: '60px 5%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '20px' }}>Ready to prioritize your health?</h2>
        <p style={{ marginBottom: '30px', fontSize: '1.1rem', opacity: 0.9 }}>Our Banjara Hills clinic is accepting new patients.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', opacity: 0.8 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={18}/> Banjara Hills, Hyderabad</span>
        </div>
      </footer>
    </div>
  );
}

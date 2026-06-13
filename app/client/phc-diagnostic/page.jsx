"use client";
import React from 'react';
import { AlertCircle, Clock, Zap, Phone, FileDigit } from 'lucide-react';

export default function PhcDiagnostic() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', color: '#f8fafc', background: '#020617', minHeight: '100vh' }}>
      
      {/* Alert Header */}
      <div style={{ background: '#e11d48', padding: '12px 5%', textAlign: 'center', fontWeight: 700, fontSize: '0.95rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', letterSpacing: '0.5px' }}>
        <Clock size={18} /> OPEN 24/7 FOR EMERGENCY SCANS & LABS IN BANJARA HILLS
      </div>

      <nav style={{ padding: '24px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ fontSize: '1.8rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', letterSpacing: '-1px' }}>
           <div style={{ background: '#e11d48', padding: '8px', borderRadius: '8px' }}><Zap size={24} color="#fff" /></div>
           PHC DIAGNOSTICS
        </div>
        <button style={{ border: '2px solid #e11d48', background: 'transparent', color: '#e11d48', padding: '10px 24px', borderRadius: '100px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem' }}>
          <Phone size={18} /> CALL AMBULANCE
        </button>
      </nav>

      <main style={{ padding: '80px 5%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <h1 style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', maxWidth: '1000px', letterSpacing: '-2px' }}>
          When every second counts, <br/>
          <span style={{ color: '#e11d48' }}>we deliver results instantly.</span>
        </h1>
        
        <p style={{ fontSize: '1.3rem', color: '#94a3b8', maxWidth: '700px', marginBottom: '48px', lineHeight: 1.5 }}>
          Banjara Hills' only true 24-hour diagnostic center. Featuring zero-wait CT scans, rapid blood profiling, and immediate digital report delivery to your attending physician.
        </p>

        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button style={{ background: '#e11d48', color: '#fff', border: 'none', padding: '20px 40px', borderRadius: '12px', fontSize: '1.2rem', fontWeight: 800, cursor: 'pointer', boxShadow: '0 0 30px rgba(225, 29, 72, 0.4)' }}>
            BOOK URGENT SCAN
          </button>
          <button style={{ background: '#1e293b', color: '#fff', border: '1px solid #334155', padding: '20px 40px', borderRadius: '12px', fontSize: '1.2rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileDigit size={20} /> ACCESS REPORTS
          </button>
        </div>

        {/* Feature Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '80px', width: '100%', maxWidth: '1100px' }}>
          {[
            { title: "Stat Reporting", desc: "Critical blood markers and lab results delivered within 60 minutes directly to your phone." },
            { title: "Advanced Imaging", desc: "State-of-the-art MRI, CT, and Ultrasound available 24/7 with on-call radiologists." },
            { title: "Physician Sync", desc: "Secure API integration pushes your urgent reports directly into your doctor's EHR." }
          ].map((feat, i) => (
             <div key={i} style={{ background: '#0f172a', border: '1px solid #1e293b', padding: '40px', borderRadius: '16px', textAlign: 'left' }}>
               <AlertCircle size={32} color="#e11d48" style={{ marginBottom: '20px' }} />
               <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px' }}>{feat.title}</h3>
               <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>{feat.desc}</p>
             </div>
          ))}
        </div>

      </main>

    </div>
  );
}

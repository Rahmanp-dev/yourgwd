"use client";
import React from 'react';
import { Microscope, FileText, Home, ArrowRight, Download, CheckCircle, Search } from 'lucide-react';

export default function IrisDiagnostic() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: '#1e293b', background: '#ffffff', minHeight: '100vh' }}>
      {/* Top Bar */}
      <div style={{ background: '#1e40af', color: '#fff', padding: '8px 5%', fontSize: '0.85rem', display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
        <span>NABL Accredited Lab</span>
        <span>Call: +91-XXXX-XXXXXX</span>
      </div>

      {/* Navbar */}
      <nav style={{ padding: '20px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.6rem', fontWeight: 900, color: '#1e3a8a', letterSpacing: '-0.5px' }}>
          <div style={{ width: '40px', height: '40px', background: '#dbeafe', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Microscope size={24} color="#2563eb" />
          </div>
          Iris Diagnostics
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{ background: '#f1f5f9', color: '#1e293b', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <Download size={16} /> Download Reports
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ display: 'flex', alignItems: 'center', minHeight: '600px', background: 'linear-gradient(90deg, #eff6ff 0%, #ffffff 100%)', padding: '0 5%' }}>
        <div style={{ flex: 1, paddingRight: '40px' }}>
          <div style={{ display: 'inline-block', background: '#dbeafe', color: '#1d4ed8', padding: '6px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '20px' }}>
            #1 Pathology Lab in Banjara Hills
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.1, marginBottom: '24px' }}>
            Accurate Results. <br/> <span style={{ color: '#2563eb' }}>Right at your door.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '40px', lineHeight: 1.6, maxWidth: '500px' }}>
            Skip the traffic. Book a home sample collection online and get your certified digital reports securely via WhatsApp and Email within 12 hours.
          </p>
          
          <div style={{ background: '#fff', padding: '10px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', display: 'flex', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px', color: '#94a3b8' }}>
              <Search size={20} />
            </div>
            <input type="text" placeholder="Search for tests (e.g. CBC, Lipid Profile)..." style={{ border: 'none', outline: 'none', padding: '16px 0', fontSize: '1.1rem', flex: 1, width: '100%' }} />
            <button style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '0 32px', borderRadius: '8px', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer' }}>
              Book Home Collection
            </button>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
           {/* Abstract Lab Graphic */}
           <div style={{ position: 'relative', width: '400px', height: '400px' }}>
              <div style={{ position: 'absolute', top: '10%', right: '10%', background: '#fff', padding: '20px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', gap: '16px', alignItems: 'center', zIndex: 2 }}>
                 <div style={{ width: '48px', height: '48px', background: '#dcfce7', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CheckCircle size={24} color="#16a34a"/></div>
                 <div>
                   <div style={{ fontWeight: 800, color: '#0f172a' }}>Report Ready</div>
                   <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Full Body Checkup</div>
                 </div>
              </div>
              <div style={{ position: 'absolute', bottom: '20%', left: '0', background: '#1e3a8a', padding: '20px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', display: 'flex', gap: '16px', alignItems: 'center', zIndex: 1, color: '#fff' }}>
                 <Home size={32} />
                 <div>
                   <div style={{ fontWeight: 800 }}>Home Collection</div>
                   <div style={{ opacity: 0.8, fontSize: '0.85rem' }}>Technician arriving in 30m</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

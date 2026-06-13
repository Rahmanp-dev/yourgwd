"use client";
import { Globe } from 'lucide-react';

export default function PublicPreview({ params }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f8fafc', color: '#0f172a' }}>
      <div style={{ textAlign: 'center', padding: '40px', background: '#fff', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
        <Globe size={48} color="#3b82f6" style={{ margin: '0 auto 16px' }} />
        <h1 style={{ fontSize: '2rem', marginBottom: '16px', fontWeight: 800 }}>Your Custom Preview</h1>
        <p style={{ color: '#64748b', maxWidth: '400px', margin: '0 auto' }}>
          Welcome, {params.clientName}! Please use the exact unique URL sent to you via WhatsApp to view your tailored website preview.
        </p>
      </div>
    </div>
  );
}

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clients = [
  {
    slug: 'trucare-clinic',
    name: 'Trucare Clinic',
    niche: 'Gynaecology & Obstetrics',
    theme: {
      primary: '#db2777', // Deep rose pink
      secondary: '#9d174d',
      bgGradStart: '#fdf2f8',
      accent: '#fbcfe8',
      text: '#1f2937'
    },
    tagline: 'Empathetic & Secure Maternity & Women Healthcare',
    desc: 'Located at Hakeempet X Road, Trucare Clinic provides highly confidential, expert obstetrics and prenatal guidance tailored to your lifestyle.',
    featureTitle: 'Private Care Portals',
    features: [
      { name: 'Confidential Digital Consultations', desc: 'Secure, encrypted gynaecological video triage from the comfort of your home.' },
      { name: 'Prenatal & Pregnancy Support', desc: 'Dedicated digital monitoring and weekly direct check-ins with Dr. Khuteja Khatoon.' },
      { name: 'Accessible Health Vault', desc: 'Direct, password-protected downloads of your scan reports and treatment timelines.' }
    ],
    ctaText: 'Book Private Consultation',
    icon: 'Heart'
  },
  {
    slug: 'health-inn',
    name: 'Health Inn Clinic',
    niche: 'Gynaecology Specialist',
    theme: {
      primary: '#be185d', // Deep pink
      secondary: '#831843',
      bgGradStart: '#fff1f2',
      accent: '#fecdd3',
      text: '#0f172a'
    },
    tagline: 'Skip the Wait. Connect with Top Specialists.',
    desc: 'Conveniently located behind Vijaya Diagnostics, Health Inn Clinic introduces direct online appointment booking to completely eliminate waiting room stress.',
    featureTitle: 'Seamless Clinic Experience',
    features: [
      { name: 'Direct Appointment Booking', desc: 'Select your preferred time slot online and skip long clinic queues.' },
      { name: 'Digital Rx & Delivery', desc: 'Receive secure digital prescriptions immediately on your WhatsApp.' },
      { name: 'Personalized Care Timeline', desc: 'Track your health history and doctor follow-ups in a simple mobile interface.' }
    ],
    ctaText: 'Reserve Priority Appointment',
    icon: 'Activity'
  },
  {
    slug: 'mm-clinic',
    name: 'M M Clinic',
    niche: 'Pediatrics & Child Care',
    theme: {
      primary: '#0284c7', // Sky Blue
      secondary: '#0369a1',
      bgGradStart: '#f0f9ff',
      accent: '#bae6fd',
      text: '#1e293b'
    },
    tagline: 'Gentle Pediatric Care for Your Little Ones',
    desc: 'M M Clinic, led by Dr. K K Hussaini, offers expert pediatric consulting and personalized childhood wellness guidance in Tolichowki.',
    featureTitle: 'Next-Gen Pediatric Portal',
    features: [
      { name: 'Immunization Tracker Demo', desc: 'Never miss a vaccine. Interactive tracking for child immunization lists.' },
      { name: 'Urgent Video Consultation', desc: 'Instant pediatric video consults for late-night childhood emergencies.' },
      { name: 'Growth Monitoring Dashboard', desc: 'Empowering parents with direct tools to log and review growth metrics.' }
    ],
    ctaText: 'Schedule Child Checkup',
    icon: 'Users'
  },
  {
    slug: 'metro-dentistry',
    name: 'Metro Dentistry',
    niche: 'Dental Clinic',
    theme: {
      primary: '#0d9488', // Mint Teal
      secondary: '#0f766e',
      bgGradStart: '#f0fdfa',
      accent: '#ccfbf1',
      text: '#0f172a'
    },
    tagline: 'Bespoke Cosmetic Dentistry & Smile Design',
    desc: 'Located at Brindavan Colony, Metro Dentistry specializes in smile corrections, modern root canals, and premium dental implants.',
    featureTitle: 'Interactive Smile Design',
    features: [
      { name: '3D Smile Consultation', desc: 'Book a digital evaluation to preview your orthodontic outcome.' },
      { name: 'Flexible Appointment Scheduler', desc: 'Book dental cleanings and procedures on your mobile in under 60 seconds.' },
      { name: 'Digital Before/After Gallery', desc: 'Explore verified success cases and smile makeovers from Dr. Kamran.' }
    ],
    ctaText: 'Schedule Smile Consultation',
    icon: 'Zap'
  },
  {
    slug: 'dental-care-omer',
    name: 'Dental Care',
    niche: 'Modern Dental Practice',
    theme: {
      primary: '#0f766e', // Forest Teal
      secondary: '#115e59',
      bgGradStart: '#f2fbf9',
      accent: '#99f6e4',
      text: '#111827'
    },
    tagline: 'Your Family Dentist in Janaki Nagar',
    desc: 'Dr. Md Omer offers gentle dental diagnostics, painless extractions, and comprehensive family dental hygiene at Janaki Nagar Colony.',
    featureTitle: 'Modern Family Dentistry',
    features: [
      { name: 'Emergency Toothache Support', desc: 'Same-day urgent booking for acute tooth pain or dental trauma.' },
      { name: 'Kid-Friendly Dental Visits', desc: 'Specially designed gentle checkups to make children feel safe.' },
      { name: 'Transparent Pricing Plans', desc: 'Review comprehensive procedure costs and payment plans online.' }
    ],
    ctaText: 'Book Dental Checkup',
    icon: 'Leaf'
  },
  {
    slug: 'dental-station',
    name: 'Dental Station',
    niche: 'Orthodontics & Implants',
    theme: {
      primary: '#0284c7', // Slate Blue
      secondary: '#0f172a',
      bgGradStart: '#fafafa',
      accent: '#e0f2fe',
      text: '#1e293b'
    },
    tagline: 'Precision Orthodontics & Dental Implants',
    desc: 'Tolichowki’s cutting-edge dental center. Specializing in clear aligners, pain-free implants, and modern maxillofacial care.',
    featureTitle: 'High-Tech Dental Care',
    features: [
      { name: 'Clear Aligner Mockup', desc: 'Book a scan to design your customized, invisible braces.' },
      { name: 'Laser Surgery Booking', desc: 'Schedule quick, minimally invasive laser procedures.' },
      { name: 'Interactive Treatment Tracker', desc: 'Track your implant or braces progression directly on your phone.' }
    ],
    ctaText: 'Book Precision Scan',
    icon: 'Zap'
  },
  {
    slug: 'duchenne-smile',
    name: 'Duchenne Smile',
    niche: 'Premium Orthodontics',
    theme: {
      primary: '#4f46e5', // Royal Indigo
      secondary: '#3730a3',
      bgGradStart: '#f5f3ff',
      accent: '#c7d2fe',
      text: '#0f172a'
    },
    tagline: 'Crafting Natural, Confident Smiles',
    desc: 'Serving Daulat Gulshan Colony with specialized orthodontics, teeth whitening, and complete aesthetic smile makeovers.',
    featureTitle: 'Aesthetic Smile Clinic',
    features: [
      { name: 'Virtual Smile Audit', desc: 'Submit a photo online for a quick preliminary dentist review.' },
      { name: 'Premium Whitening Bookings', desc: 'Schedule 45-minute teeth whitening sessions.' },
      { name: 'Direct Orthodontist Access', desc: 'Coordinate treatment directly with specialized orthodontists.' }
    ],
    ctaText: 'Request Smile Consultation',
    icon: 'Heart'
  },
  {
    slug: 'brightlands-diag',
    name: 'Brightlands Diagnostics',
    niche: 'Pathology & Imaging',
    theme: {
      primary: '#2563eb', // Laboratory Blue
      secondary: '#1d4ed8',
      bgGradStart: '#f8fafc',
      accent: '#dbeafe',
      text: '#0f172a'
    },
    tagline: 'Reliable Pathology Tests, At Your Convenience',
    desc: 'Serving Nanal Nagar with state-of-the-art pathology, fast biochemistry profiles, and certified clinical diagnostics.',
    featureTitle: 'Home Sample Collection Portal',
    features: [
      { name: 'Book Home Collection', desc: 'Schedule a certified phlebotomist to collect blood samples at your home.' },
      { name: '12-Hour Digital Delivery', desc: 'Certified PDF reports sent securely via SMS, WhatsApp, and Email.' },
      { name: 'Wellness Test Packages', desc: 'Book bundles for blood sugar, thyroid, and liver panels.' }
    ],
    ctaText: 'Schedule Blood Test',
    icon: 'Activity'
  },
  {
    slug: 'starcare-diag',
    name: 'Starcare Diagnostic Center',
    niche: '24/7 Scanning & Labs',
    theme: {
      primary: '#e11d48', // Emergency Red
      secondary: '#9f1239',
      bgGradStart: '#fff5f5',
      accent: '#ffe4e6',
      text: '#111827'
    },
    tagline: 'Urgent Care & 24-Hour Advanced Diagnostics',
    desc: 'Tolichowki’s premier 24-hour imaging facility. Rapid CT scans, emergency ultrasounds, and immediate radiologist consultations.',
    featureTitle: 'Urgent Diagnostic Portal',
    features: [
      { name: 'Emergency Booking Triage', desc: 'Book immediate late-night imaging with on-call support.' },
      { name: 'Rapid Scanning Facility', desc: 'No queue priority access for critical diagnostic referrals.' },
      { name: 'Secure Report Sync', desc: 'Securely forward your scanning reports directly to your physician.' }
    ],
    ctaText: 'Book Urgent Scan',
    icon: 'Activity'
  },
  {
    slug: 'hayatt-diag',
    name: 'Hayatt Diagnostic Centre',
    niche: 'Pathology & Lab Diagnostics',
    theme: {
      primary: '#1d4ed8', // Dark Blue
      secondary: '#1e3a8a',
      bgGradStart: '#fafafa',
      accent: '#dbeafe',
      text: '#1e293b'
    },
    tagline: 'Precision Medical Laboratory Testing',
    desc: 'Located at Tolichowki X Road, Hayatt Diagnostics delivers certified testing, high-end biochemistry scans, and health packages.',
    featureTitle: 'Secure Lab Portal',
    features: [
      { name: 'Digital Report Download', desc: 'Enter your lab ID online to securely download diagnostic PDFs.' },
      { name: 'Pre-Test Patient Intake', desc: 'Fill out health checklists online before arriving at the lab.' },
      { name: 'Corporate Diagnostic Bookings', desc: 'Book bulk employee health checkups and biometric screenings.' }
    ],
    ctaText: 'Book Pathology Test',
    icon: 'FileText'
  }
];

function generatePageContent(client) {
  return `"use client";
import React, { useState } from 'react';
import { Heart, Activity, Users, Zap, Leaf, FileText, Calendar, ArrowRight, Shield, Microscope } from 'lucide-react';

export default function ClientPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', time: '' });

  const iconMap = {
    Heart: <Heart size={36} color="${client.theme.primary}" />,
    Activity: <Activity size={36} color="${client.theme.primary}" />,
    Users: <Users size={36} color="${client.theme.primary}" />,
    Zap: <Zap size={36} color="${client.theme.primary}" />,
    Leaf: <Leaf size={36} color="${client.theme.primary}" />,
    FileText: <FileText size={36} color="${client.theme.primary}" />
  };

  const handleBook = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', color: '${client.theme.text}', background: '#ffffff', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* Dynamic Navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 8%', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.45rem', fontWeight: 900, color: '#0f172a' }}>
          <div style={{ width: '44px', height: '44px', background: '${client.theme.bgGradStart}', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {iconMap['${client.icon}'] || <Activity size={36} />}
          </div>
          ${client.name}
        </div>
        <div>
          <button style={{ background: '${client.theme.primary}', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>
            ${client.ctaText}
          </button>
        </div>
      </nav>

      {/* Bespoke Hero Section */}
      <header style={{ background: 'linear-gradient(135deg, ${client.theme.bgGradStart} 0%, #ffffff 100%)', padding: '100px 8%', display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 500px' }}>
          <div style={{ display: 'inline-block', background: '${client.theme.accent}', color: '${client.theme.secondary}', padding: '6px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 800, marginBottom: '24px' }}>
            ${client.niche} • Tolichowki
          </div>
          <h1 style={{ fontSize: '3.6rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.15, marginBottom: '24px', letterSpacing: '-1.5px' }}>
            ${client.tagline.split(' ').slice(0, 3).join(' ')} <span style={{ color: '${client.theme.primary}' }}>${client.tagline.split(' ').slice(3).join(' ')}</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '40px', maxWidth: '600px' }}>
            ${client.desc}
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
              <button type="submit" style={{ width: '100%', padding: '16px', background: '${client.theme.primary}', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                ${client.ctaText}
              </button>
            </form>
          )}
        </div>
        <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '380px', height: '380px', borderRadius: '30px', background: 'linear-gradient(135deg, ${client.theme.primary} 0%, ${client.theme.secondary} 100%)', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <Microscope size={120} color="#fff" style={{ opacity: 0.8 }} />
          </div>
        </div>
      </header>

      {/* Unique Signature Features Section */}
      <section style={{ padding: '80px 8%', background: '#f9fafb' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px', textAlign: 'center' }}>
          ${client.featureTitle}
        </h2>
        <p style={{ color: '#6b7280', fontSize: '1.1rem', textAlign: 'center', marginBottom: '60px' }}>
          Custom tailored features designed explicitly for the medical operations of ${client.name}.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {${JSON.stringify(client.features)}.map((feat, i) => (
            <div key={i} style={{ background: '#ffffff', padding: '36px', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 4px 10px rgba(0,0,0,0.01)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '${client.theme.accent}', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
                <Shield size={24} color="${client.theme.primary}" />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>{feat.name}</h3>
              <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0f172a', color: '#9ca3af', padding: '60px 8%', textAlign: 'center', borderTop: '1px solid #1f2937' }}>
        <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>${client.name}</h3>
        <p style={{ marginBottom: '24px' }}>Professional Clinic Site Preview • Created by GWD Sales</p>
        <span style={{ fontSize: '0.85rem' }}>HIPAA Compliant & Secure System</span>
      </footer>
    </div>
  );
}`;
}

clients.forEach((client) => {
  const dir = path.join(__dirname, `../app/client/${client.slug}`);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const fileContent = generatePageContent(client);
  fs.writeFileSync(path.join(dir, 'page.jsx'), fileContent);
  console.log(`Successfully generated bespoke route: /client/${client.slug}`);
});

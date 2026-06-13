"use client";
import React, { useState, useEffect } from 'react';
import { Save, Shield, Key, FileText, Share2, Layers, Briefcase } from 'lucide-react';

export default function SettingsPanel() {
  const [settings, setSettings] = useState({
    // Setup Checklist variables
    TARGET_NICHE: 'dental clinics',
    TARGET_CITY: 'Hyderabad',
    DAILY_LEAD_LIMIT: '15',
    COMPANY_NAME: 'WebSpark Studio',
    AGENT_PERSONA_NAME: 'Priya',
    FIREBASE_DOMAIN: 'preview.webspark.in',
    USER_WHATSAPP_NUMBER: '',
    
    // Integrations
    GOOGLE_SHEET_ID: '',
    GOOGLE_PLACES_API_KEY: '',
    WHATSAPP_TOKEN: '',
    WHATSAPP_PHONE_NUMBER_ID: '',
    FIREBASE_PROJECT_ID: '',
    GOOGLE_CALENDAR_ID: '',
    GEMINI_API_KEY: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });

  useEffect(() => {
    fetch('/api/settings')
      .then(res => res.json())
      .then(data => {
        setSettings(prev => ({ ...prev, ...data }));
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load settings:', err);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaving(true);
    setStatusMsg({ type: '', text: '' });

    fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings)
    })
      .then(res => res.json())
      .then(data => {
        setSaving(false);
        if (data.success) {
          setStatusMsg({ type: 'success', text: 'Configuration and credentials updated and saved to local .env configuration.' });
        } else {
          setStatusMsg({ type: 'error', text: data.error || 'Failed to save settings.' });
        }
      })
      .catch(err => {
        setSaving(false);
        setStatusMsg({ type: 'error', text: 'Network error saving settings: ' + err.message });
      });
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
        Loading configuration settings...
      </div>
    );
  }

  return (
    <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      <div className="glass-panel" style={{ padding: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Briefcase size={24} style={{ color: 'var(--accent-cyan)' }} /> Sales Machine Core Configuration
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
          Set up target parameters, campaign limits, branding information, and default persona scripts.
        </p>

        {statusMsg.text && (
          <div style={{
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '24px',
            background: statusMsg.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
            border: `1px solid ${statusMsg.type === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
            color: statusMsg.type === 'success' ? '#34d399' : '#f87171',
            fontSize: '0.9rem'
          }}>
            {statusMsg.text}
          </div>
        )}

        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Section 1: Sales Machine Config */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="TARGET_NICHE">Target Niche</label>
              <input
                type="text"
                id="TARGET_NICHE"
                name="TARGET_NICHE"
                className="form-input"
                value={settings.TARGET_NICHE}
                onChange={handleChange}
                placeholder="e.g. dental clinics"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="TARGET_CITY">Target City</label>
              <input
                type="text"
                id="TARGET_CITY"
                name="TARGET_CITY"
                className="form-input"
                value={settings.TARGET_CITY}
                onChange={handleChange}
                placeholder="e.g. Hyderabad"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="DAILY_LEAD_LIMIT">Daily Lead Limit</label>
              <input
                type="number"
                id="DAILY_LEAD_LIMIT"
                name="DAILY_LEAD_LIMIT"
                className="form-input"
                value={settings.DAILY_LEAD_LIMIT}
                onChange={handleChange}
                placeholder="e.g. 15"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="COMPANY_NAME">Company Name</label>
              <input
                type="text"
                id="COMPANY_NAME"
                name="COMPANY_NAME"
                className="form-input"
                value={settings.COMPANY_NAME}
                onChange={handleChange}
                placeholder="e.g. WebSpark Studio"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="AGENT_PERSONA_NAME">Agent Persona Name</label>
              <input
                type="text"
                id="AGENT_PERSONA_NAME"
                name="AGENT_PERSONA_NAME"
                className="form-input"
                value={settings.AGENT_PERSONA_NAME}
                onChange={handleChange}
                placeholder="e.g. Priya"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="FIREBASE_DOMAIN">Firebase Domain</label>
              <input
                type="text"
                id="FIREBASE_DOMAIN"
                name="FIREBASE_DOMAIN"
                className="form-input"
                value={settings.FIREBASE_DOMAIN}
                onChange={handleChange}
                placeholder="preview.webspark.in"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="USER_WHATSAPP_NUMBER">Your Alert WhatsApp Number</label>
              <input
                type="text"
                id="USER_WHATSAPP_NUMBER"
                name="USER_WHATSAPP_NUMBER"
                className="form-input"
                value={settings.USER_WHATSAPP_NUMBER}
                onChange={handleChange}
                placeholder="+919999999999"
              />
            </div>
          </div>

          {/* Section 2: Integrations */}
          <h2 style={{ fontSize: '1.25rem', marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', borderTop: '1px solid var(--border-glass)', paddingTop: '24px' }}>
            <Shield size={20} style={{ color: 'var(--accent-cyan)' }} /> Credentials & MCP Server Settings
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
            
            {/* Google Sheets Card */}
            <div className="glass-panel" style={{ padding: '20px', background: 'rgba(0, 0, 0, 0.2)' }}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
                <FileText size={18} style={{ color: '#10b981' }} /> CRM (Google Sheets)
              </h3>
              <div className="form-group">
                <label className="form-label" htmlFor="GOOGLE_SHEET_ID">Google Sheet ID</label>
                <input
                  type="text"
                  id="GOOGLE_SHEET_ID"
                  name="GOOGLE_SHEET_ID"
                  className="form-input"
                  value={settings.GOOGLE_SHEET_ID}
                  onChange={handleChange}
                  placeholder="e.g. 1a2b3c4d5e6f7g8h9i0j..."
                />
              </div>
            </div>

            {/* Google Maps Places API */}
            <div className="glass-panel" style={{ padding: '20px', background: 'rgba(0, 0, 0, 0.2)' }}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
                <Key size={18} style={{ color: '#06b6d4' }} /> Google APIs
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="GOOGLE_PLACES_API_KEY">Places API Key (Maps)</label>
                  <input
                    type="password"
                    id="GOOGLE_PLACES_API_KEY"
                    name="GOOGLE_PLACES_API_KEY"
                    className="form-input"
                    value={settings.GOOGLE_PLACES_API_KEY}
                    onChange={handleChange}
                    placeholder="••••••••••••••••••••••••••••••••••••"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="GEMINI_API_KEY">Gemini API Key (Chat AI)</label>
                  <input
                    type="password"
                    id="GEMINI_API_KEY"
                    name="GEMINI_API_KEY"
                    className="form-input"
                    value={settings.GEMINI_API_KEY}
                    onChange={handleChange}
                    placeholder="••••••••••••••••••••••••••••••••••••"
                  />
                </div>
              </div>
            </div>

            {/* WhatsApp Business API */}
            <div className="glass-panel" style={{ padding: '20px', background: 'rgba(0, 0, 0, 0.2)' }}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
                <Share2 size={18} style={{ color: '#8b5cf6' }} /> Outreach API (Meta WhatsApp)
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="WHATSAPP_TOKEN">Meta Access Token</label>
                  <input
                    type="password"
                    id="WHATSAPP_TOKEN"
                    name="WHATSAPP_TOKEN"
                    className="form-input"
                    value={settings.WHATSAPP_TOKEN}
                    onChange={handleChange}
                    placeholder="••••••••••••••••••••••••••••••••••••"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="WHATSAPP_PHONE_NUMBER_ID">Phone Number ID</label>
                  <input
                    type="text"
                    id="WHATSAPP_PHONE_NUMBER_ID"
                    name="WHATSAPP_PHONE_NUMBER_ID"
                    className="form-input"
                    value={settings.WHATSAPP_PHONE_NUMBER_ID}
                    onChange={handleChange}
                    placeholder="e.g. 104829375820492"
                  />
                </div>
              </div>
            </div>

            {/* Firebase & Google Calendar */}
            <div className="glass-panel" style={{ padding: '20px', background: 'rgba(0, 0, 0, 0.2)' }}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
                <Layers size={18} style={{ color: '#f59e0b' }} /> Infrastructure & Calendar
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="FIREBASE_PROJECT_ID">Firebase Project ID</label>
                  <input
                    type="text"
                    id="FIREBASE_PROJECT_ID"
                    name="FIREBASE_PROJECT_ID"
                    className="form-input"
                    value={settings.FIREBASE_PROJECT_ID}
                    onChange={handleChange}
                    placeholder="e.g. sales-machine-hosting"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="GOOGLE_CALENDAR_ID">Google Calendar ID</label>
                  <input
                    type="text"
                    id="GOOGLE_CALENDAR_ID"
                    name="GOOGLE_CALENDAR_ID"
                    className="form-input"
                    value={settings.GOOGLE_CALENDAR_ID}
                    onChange={handleChange}
                    placeholder="e.g. primary"
                  />
                </div>
              </div>
            </div>

          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
            <button type="submit" className="btn-primary" disabled={saving}>
              <Save size={18} /> {saving ? 'Saving...' : 'Save Configuration'}
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}


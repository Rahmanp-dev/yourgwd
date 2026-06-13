import React, { useState } from 'react';
import { Smartphone, Tablet, Monitor, RefreshCw, ExternalLink, Settings, LayoutGrid, CheckCircle } from 'lucide-react';

export default function SitePreviewer({ leads, selectedLead, onSelectLead }) {
  const [device, setDevice] = useState('desktop');
  const [key, setKey] = useState(0); // to force refresh iframe

  const previewLeads = leads.filter(l => l.previewUrl);

  const getDeviceWidth = () => {
    switch (device) {
      case 'mobile': return '375px';
      case 'tablet': return '768px';
      default: return '100%';
    }
  };

  const getDeviceHeight = () => {
    switch (device) {
      case 'mobile': return '650px';
      case 'tablet': return '800px';
      default: return '100%';
    }
  };

  return (
    <div className="animate-slide-up" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', height: '700px', gap: '2px', background: 'var(--border-glass)', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-glass)', boxShadow: 'var(--shadow-strong)' }}>
      
      {/* Sidebar - Previews List & Customizer */}
      <div style={{ background: '#070a13', borderRight: '1px solid var(--border-glass)', display: 'flex', flexDirection: 'column' }}>
        
        {/* Lead Selector Section */}
        <div style={{ padding: '20px', borderBottom: '1px solid var(--border-glass)' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>Staged Previews</h3>
          <select
            className="form-input"
            value={selectedLead?.id || ''}
            onChange={(e) => {
              const lead = previewLeads.find(l => l.id === e.target.value);
              if (lead) onSelectLead(lead);
            }}
          >
            {previewLeads.length === 0 ? (
              <option value="">No previews ready</option>
            ) : (
              previewLeads.map(l => (
                <option key={l.id} value={l.id}>{l.name} ({l.niche})</option>
              ))
            )}
          </select>
        </div>

        {/* Customization Details */}
        {selectedLead ? (
          <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1, overflowY: 'auto' }}>
            
            <div>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <LayoutGrid size={14} style={{ color: 'var(--accent-cyan)' }} /> Design Specifications
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', background: 'rgba(255,255,255,0.02)', padding: '14px', borderRadius: '8px', border: '1px solid var(--border-glass)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <strong>Niche:</strong> {selectedLead.niche}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <strong>City:</strong> {selectedLead.city}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <strong>Original Score:</strong> {selectedLead.score}/10
                </div>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Settings size={14} style={{ color: 'var(--accent-green)' }} /> Staging Credentials
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div className="form-group">
                  <label className="form-label" style={{ fontSize: '0.75rem' }}>Subdomain Link</label>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center', background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '6px', border: '1px solid var(--border-glass)', fontSize: '0.75rem', color: 'var(--accent-cyan)', wordBreak: 'break-all' }}>
                    preview.youragency.com/{selectedLead.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                  </div>
                </div>
                <div className="form-group" style={{ marginTop: '4px' }}>
                  <label className="form-label" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle size={12} style={{ color: 'var(--accent-green)' }} /> Staged Status
                  </label>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-green)' }}>
                    Deployed to Firebase Local Node
                  </span>
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div style={{ flexGrow: 1, padding: '24px', color: 'var(--text-muted)', fontSize: '0.8rem', fontStyle: 'italic', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            No leads generated.
          </div>
        )}
      </div>

      {/* Main Preview Pane */}
      <div style={{ background: '#0b111e', display: 'flex', flexDirection: 'column', height: '100%' }}>
        {selectedLead ? (
          <>
            {/* Mock Browser Toolbar */}
            <div style={{ background: '#080d17', borderBottom: '1px solid var(--border-glass)', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
              
              {/* Responsive Toggles */}
              <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.03)', padding: '4px', borderRadius: '8px', border: '1px solid var(--border-glass)' }}>
                {[
                  { id: 'desktop', icon: <Monitor size={14} />, label: 'Desktop' },
                  { id: 'tablet', icon: <Tablet size={14} />, label: 'Tablet' },
                  { id: 'mobile', icon: <Smartphone size={14} />, label: 'Mobile' }
                ].map(d => (
                  <button
                    key={d.id}
                    onClick={() => setDevice(d.id)}
                    style={{
                      background: device === d.id ? 'var(--primary)' : 'transparent',
                      color: device === d.id ? '#ffffff' : 'var(--text-secondary)',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      transition: 'all 0.1s ease'
                    }}
                  >
                    {d.icon} {d.label}
                  </button>
                ))}
              </div>

              {/* URL Address Bar */}
              <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.4)', padding: '8px 16px', borderRadius: '8px', border: '1px solid var(--border-glass)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--text-muted)' }}>https://</span>
                <span>preview.youragency.com/{selectedLead.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}</span>
              </div>

              {/* Toolbar Actions */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <button
                  onClick={() => setKey(k => k + 1)}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '6px' }}
                  title="Reload Preview iframe"
                >
                  <RefreshCw size={16} />
                </button>
                <a
                  href={`http://localhost:5000${selectedLead.previewUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', padding: '6px' }}
                  title="Open in new window"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

            </div>

            {/* Iframe Viewport Container */}
            <div style={{ flexGrow: 1, padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', background: '#0e1726' }}>
              <div
                style={{
                  width: getDeviceWidth(),
                  height: getDeviceHeight(),
                  maxHeight: '100%',
                  borderRadius: device !== 'desktop' ? '20px' : '0px',
                  border: device !== 'desktop' ? '12px solid #27272a' : 'none',
                  overflow: 'hidden',
                  background: '#ffffff',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <iframe
                  key={key}
                  src={`http://localhost:5000${selectedLead.previewUrl}`}
                  style={{ width: '100%', height: '100%', border: 'none', background: '#ffffff' }}
                  title="Lead Website Preview"
                />
              </div>
            </div>
          </>
        ) : (
          <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: '3rem' }}>🌐</div>
            <div>Select a lead with a generated site to inspect the staging server preview.</div>
          </div>
        )}
      </div>

    </div>
  );
}

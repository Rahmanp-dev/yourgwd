import React, { useState } from 'react';
import { Search, Eye, MessageSquare, ChevronDown, ChevronUp, Star, Globe, History, AlertCircle } from 'lucide-react';

export default function LeadTable({ leads, onSelectLeadForChat, onSelectLeadForPreview }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [expandedLead, setExpandedLead] = useState(null);

  const toggleExpand = (id) => {
    setExpandedLead(expandedLead === id ? null : id);
  };

  // Filter logic
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          lead.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          lead.niche.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getScoreColor = (score) => {
    if (score >= 8.0) return '#ef4444'; // Red (Critical weakness)
    if (score >= 6.5) return '#f59e0b'; // Amber (Moderate weakness)
    return '#10b981'; // Green (Low weakness/okay presence)
  };

  return (
    <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Filters & Search Header */}
      <div className="glass-panel" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '12px', flexGrow: 1, maxWidth: '500px', position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
          <input
            type="text"
            className="form-input"
            style={{ paddingLeft: '38px' }}
            placeholder="Search leads by name, city, or niche..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Status Filters */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['All', 'New', 'Contacted', 'Hot', 'Closed', 'Cold'].map(status => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={statusFilter === status ? 'btn-primary' : 'btn-secondary'}
              style={{
                padding: '6px 14px',
                fontSize: '0.85rem',
                background: statusFilter === status ? undefined : 'rgba(255, 255, 255, 0.02)',
                border: statusFilter === status ? undefined : '1px solid var(--border-glass)'
              }}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Leads CRM Table */}
      <div className="glass-panel" style={{ overflowX: 'auto', padding: '10px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-glass)', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              <th style={{ padding: '16px' }}>Business Details</th>
              <th style={{ padding: '16px' }}>Maps Rating</th>
              <th style={{ padding: '16px' }}>Presence Weakness</th>
              <th style={{ padding: '16px' }}>Outreach Status</th>
              <th style={{ padding: '16px' }}>Action Channels</th>
              <th style={{ padding: '16px' }}></th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ padding: '40px', textAlignment: 'center', color: 'var(--text-secondary)' }}>
                  No leads found matching your active filter criteria. Run the Lead Finder agent to search Maps.
                </td>
              </tr>
            ) : (
              filteredLeads.map(lead => {
                const isExpanded = expandedLead === lead.id;
                return (
                  <React.Fragment key={lead.id}>
                    <tr 
                      onClick={() => toggleExpand(lead.id)}
                      style={{ 
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                        cursor: 'pointer',
                        background: isExpanded ? 'rgba(255, 255, 255, 0.01)' : 'transparent',
                        transition: 'background 0.2s ease'
                      }}
                      className="lead-row"
                    >
                      {/* Business name / location */}
                      <td style={{ padding: '16px' }}>
                        <div style={{ fontWeight: 600, color: '#ffffff' }}>{lead.name}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', gap: '8px', marginTop: '2px' }}>
                          <span>📍 {lead.city}</span>
                          <span>•</span>
                          <span>🏢 {lead.niche}</span>
                        </div>
                      </td>
                      
                      {/* Rating */}
                      <td style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Star size={14} fill="#fbbf24" color="#fbbf24" />
                          <span style={{ fontWeight: 500 }}>{lead.rating ? lead.rating.toFixed(1) : "N/A"}</span>
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>({lead.reviewsCount || 0})</span>
                        </div>
                      </td>
                      
                      {/* Weakness Score */}
                      <td style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ 
                            fontWeight: 700, 
                            color: getScoreColor(lead.score),
                            background: `${getScoreColor(lead.score)}15`,
                            padding: '2px 8px',
                            borderRadius: '4px',
                            fontSize: '0.9rem'
                          }}>
                            {lead.score.toFixed(1)}/10
                          </span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', maxWidth: '180px', display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {lead.score < 8 ? (lead.website ? 'Weak Website' : 'No Website') : 'Strong Website'}
                          </span>
                        </div>
                      </td>
                      
                      {/* Status */}
                      <td style={{ padding: '16px' }}>
                        <span className={`status-pill ${lead.status.toLowerCase().replace(/\s+/g, '-')}`}>
                          {lead.status}
                        </span>
                      </td>
                      
                      {/* Actions */}
                      <td style={{ padding: '16px' }} onClick={e => e.stopPropagation()}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          {lead.previewUrl ? (
                            <button 
                              className="btn-secondary" 
                              style={{ padding: '6px 10px', fontSize: '0.8rem' }}
                              onClick={() => onSelectLeadForPreview(lead)}
                              title="Inspect Generated Website Preview"
                            >
                              <Eye size={14} /> Preview Site
                            </button>
                          ) : (
                            <button 
                              className="btn-secondary" 
                              style={{ padding: '6px 10px', fontSize: '0.8rem', opacity: 0.5, cursor: 'not-allowed' }}
                              disabled
                              title="No Website Preview Built Yet"
                            >
                              <Globe size={14} /> No Preview
                            </button>
                          )}
                          
                          <button 
                            className="btn-secondary" 
                            style={{ padding: '6px 10px', fontSize: '0.8rem', backgroundColor: '#25D366', color: '#fff', border: 'none' }}
                            onClick={() => {
                              const message = lead.whatsappMessage || `Hi ${lead.name}, we've built a free custom preview website for you. Check it out here: ${lead.previewUrl ? 'http://localhost:5000' + lead.previewUrl : 'N/A'}`;
                              const phone = lead.phone || '1234567890';
                              window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                            }}
                            title="Send Native WhatsApp Message"
                          >
                            <MessageSquare size={14} /> Send WhatsApp
                          </button>
                        </div>
                      </td>
                      
                      {/* Chevron Toggle */}
                      <td style={{ padding: '16px' }}>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </td>
                    </tr>

                    {/* Expanded History & Audit Trail */}
                    {isExpanded && (
                      <tr style={{ background: 'rgba(0, 0, 0, 0.25)' }}>
                        <td colSpan="6" style={{ padding: '24px 32px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px' }}>
                            
                            {/* Digital Audit */}
                            <div>
                              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <AlertCircle size={16} style={{ color: 'var(--accent-cyan)' }} /> Technical Audit Details
                              </h4>
                              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-glass)' }}>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                                  <strong>Website:</strong> {lead.website ? <a href={lead.website} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)' }}>{lead.website}</a> : 'No domain registered.'}
                                </p>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: 1.5 }}>
                                  <strong>Presence Score:</strong> {lead.score}/10 weakness index.
                                </p>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: 1.5 }}>
                                  <strong>Audit Findings:</strong> <span style={{ color: '#f87171' }}>{lead.websiteQuality}</span>
                                </p>
                              </div>
                            </div>

                            {/* Agent History Logs */}
                            <div>
                              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <History size={16} style={{ color: 'var(--accent-green)' }} /> Agent Pipeline Audit Trail
                              </h4>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {lead.history.map((h, i) => (
                                  <div key={i} style={{ display: 'flex', gap: '12px', fontSize: '0.8rem', position: 'relative' }}>
                                    {/* Timeline dot */}
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)', marginTop: '4px' }}></div>
                                      {i < lead.history.length - 1 && (
                                        <div style={{ width: '1px', flexGrow: 1, background: 'var(--border-glass)', margin: '4px 0' }}></div>
                                      )}
                                    </div>
                                    <div style={{ flexGrow: 1, paddingBottom: '8px' }}>
                                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ fontWeight: 600, color: '#ffffff' }}>{h.action}</span>
                                        <span style={{ color: 'var(--text-muted)' }}>
                                          {new Date(h.timestamp).toLocaleDateString()} {new Date(h.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                      </div>
                                      <p style={{ color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.4 }}>{h.message}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <style>{`
        .lead-row:hover {
          background: rgba(255, 255, 255, 0.02) !important;
        }
      `}</style>

    </div>
  );
}

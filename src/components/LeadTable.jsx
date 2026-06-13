"use client";
import React, { useState } from 'react';
import { Search, MessageSquare, ChevronDown, ChevronUp, Star, Globe, History, AlertCircle, Calendar } from 'lucide-react';

export default function LeadTable({ leads, onSelectLeadForChat }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('All');
  const [expandedLead, setExpandedLead] = useState(null);

  const toggleExpand = (id) => {
    setExpandedLead(expandedLead === id ? null : id);
  };

  const getTodayDateString = () => {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().split('T')[0];
  };

  const handleDateChange = async (leadId, newDate) => {
    // Optimistic local update isn't strictly necessary since we mutate on save
    // but we can dispatch to the backend directly.
    const token = localStorage.getItem('gwd_token');
    fetch(`/api/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ id: leadId, workDate: newDate })
    });
    // For simplicity, we assume the parent container fetches or the user refreshes
  };

  // Filter logic
  const filteredLeads = leads.filter(lead => {
    const name = lead.name || '';
    const city = lead.city || '';
    const niche = lead.niche || '';
    
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          niche.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    
    let matchesDate = true;
    const today = getTodayDateString();
    if (dateFilter === 'Today') {
      matchesDate = lead.workDate === today;
    } else if (dateFilter === 'Unassigned') {
      matchesDate = !lead.workDate;
    }

    return matchesSearch && matchesStatus && matchesDate;
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
        <div style={{ display: 'flex', gap: '12px', flexGrow: 1, maxWidth: '400px', position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
          <input
            type="text"
            className="form-input"
            style={{ paddingLeft: '38px' }}
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Date Filter */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Calendar size={18} color="var(--text-muted)" />
          <select 
            className="form-input" 
            style={{ width: '140px', padding: '8px', cursor: 'pointer' }}
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          >
            <option value="All">All Dates</option>
            <option value="Today">Today's Work</option>
            <option value="Unassigned">Unassigned</option>
          </select>
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
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '950px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-glass)', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              <th style={{ padding: '16px' }}>Business Details</th>
              <th style={{ padding: '16px' }}>Maps Rating</th>
              <th style={{ padding: '16px' }}>Work Date</th>
              <th style={{ padding: '16px' }}>Outreach Status</th>
              <th style={{ padding: '16px' }}>Action Channels</th>
              <th style={{ padding: '16px' }}></th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ padding: '40px', textAlignment: 'center', color: 'var(--text-secondary)' }}>
                  No leads found. Use the Antigravity Sync Center to push new leads to the CRM.
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

                      {/* Work Date (Everyday) */}
                      <td style={{ padding: '16px' }} onClick={(e) => e.stopPropagation()}>
                        <input 
                          type="date" 
                          className="form-input" 
                          style={{ padding: '6px 10px', fontSize: '0.85rem', width: '130px', cursor: 'pointer' }}
                          defaultValue={lead.workDate || ''}
                          onChange={(e) => handleDateChange(lead.id, e.target.value)}
                        />
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
                            <a 
                              href={lead.previewUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary" 
                              style={{ padding: '6px 10px', fontSize: '0.8rem', textDecoration: 'none' }}
                              title="Open Deployed Preview Site"
                            >
                              <Globe size={14} /> Open Site
                            </a>
                          ) : (
                            <button 
                              className="btn-secondary" 
                              style={{ padding: '6px 10px', fontSize: '0.8rem', opacity: 0.5, cursor: 'not-allowed' }}
                              disabled
                            >
                              <Globe size={14} /> No Site
                            </button>
                          )}
                          
                          <button 
                            className="btn-secondary" 
                            style={{ padding: '6px 10px', fontSize: '0.8rem', backgroundColor: '#25D366', color: '#fff', border: 'none' }}
                            onClick={() => {
                              const message = lead.whatsappMessage || `Hi ${lead.name}, we've built a free custom preview website for you. Check it out here: ${lead.previewUrl || 'N/A'}`;
                              const phone = lead.phone || '1234567890';
                              window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                            }}
                            title="Send Native WhatsApp Message"
                          >
                            <MessageSquare size={14} /> WhatsApp
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
                                <History size={16} style={{ color: 'var(--accent-green)' }} /> Database Audit Trail
                              </h4>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {lead.history && lead.history.map((h, i) => (
                                  <div key={i} style={{ display: 'flex', gap: '12px', fontSize: '0.8rem', position: 'relative' }}>
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
                                          {new Date(h.timestamp).toLocaleDateString()}
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

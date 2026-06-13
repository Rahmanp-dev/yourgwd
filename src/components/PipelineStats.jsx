"use client";
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { TrendingUp, RefreshCw, FileText, CheckCircle2, AlertTriangle, HelpCircle } from 'lucide-react';

export default function PipelineStats({ leads }) {
  const [report, setReport] = useState('');
  const [loadingReport, setLoadingReport] = useState(false);

  useEffect(() => {
    fetchReport();
  }, [leads]);

  const fetchReport = () => {
    setLoadingReport(true);
    fetch('/api/report')
      .then(res => res.json())
      .then(data => {
        setReport(data.report || '');
        setLoadingReport(false);
      })
      .catch(err => {
        console.error('Failed to fetch report:', err);
        setLoadingReport(false);
      });
  };

  // Compile lead statistics
  const total = leads.length;
  const newLeads = leads.filter(l => l.status === 'New').length;
  const readyToContact = leads.filter(l => l.status === 'Ready to Contact').length;
  const contacted = leads.filter(l => l.status === 'Contacted').length;
  const replied = leads.filter(l => l.status === 'Replied').length;
  const hot = leads.filter(l => l.status === 'Hot').length;
  const callBooked = leads.filter(l => l.status === 'Call Booked').length;
  const closed = leads.filter(l => l.status === 'Closed').length;
  const cold = leads.filter(l => l.status === 'Cold').length;

  const activeOutreach = leads.filter(l => !['New', 'Ready to Contact'].includes(l.status)).length;
  const conversionRate = total > 0 ? ((closed / total) * 100).toFixed(1) : 0;
  const avgScore = total > 0 ? (leads.reduce((acc, l) => acc + l.score, 0) / total).toFixed(1) : 0;

  // Chart data 1: Lead Status Bar Chart
  const statusData = [
    { name: 'Scanned', value: newLeads, color: '#3b82f6' },
    { name: 'Ready to Contact', value: readyToContact, color: '#06b6d4' },
    { name: 'Contacted', value: contacted, color: '#8b5cf6' },
    { name: 'Replied', value: replied, color: '#ec4899' },
    { name: 'Hot Leads', value: hot, color: '#f59e0b' },
    { name: 'Call Booked', value: callBooked, color: '#10b981' },
    { name: 'Closed', value: closed, color: '#059669' },
    { name: 'Cold', value: cold, color: '#6b7280' }
  ];

  // Chart data 2: Lead Niches Pie Chart
  const nicheCounts = {};
  leads.forEach(l => {
    nicheCounts[l.niche] = (nicheCounts[l.niche] || 0) + 1;
  });
  const nicheData = Object.entries(nicheCounts).map(([key, val]) => ({
    name: key,
    value: val
  }));

  const COLORS = ['#4f46e5', '#06b6d4', '#10b981', '#f59e0b', '#db2777', '#8b5cf6'];

  return (
    <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Stat Cards Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
        <div className="glass-panel stat-card">
          <span className="stat-title">Conversion Rate</span>
          <span className="stat-value" style={{ color: 'var(--accent-green)' }}>{conversionRate}%</span>
          <span className="stat-footer">
            <TrendingUp size={14} /> Percentage of closed deals
          </span>
        </div>
        <div className="glass-panel stat-card">
          <span className="stat-title">Weakness Index</span>
          <span className="stat-value" style={{ color: '#ef4444' }}>{avgScore}/10</span>
          <span className="stat-footer">
            <AlertTriangle size={14} /> Avg local website weakness
          </span>
        </div>
        <div className="glass-panel stat-card">
          <span className="stat-title">Active Outreach</span>
          <span className="stat-value" style={{ color: '#8b5cf6' }}>{activeOutreach}</span>
          <span className="stat-footer">
            <CheckCircle2 size={14} /> Messages sent to WhatsApp
          </span>
        </div>
        <div className="glass-panel stat-card">
          <span className="stat-title">Deals Closed</span>
          <span className="stat-value" style={{ color: 'var(--accent-cyan)' }}>{closed}</span>
          <span className="stat-footer">
            <HelpCircle size={14} /> Signed contracts this week
          </span>
        </div>
      </div>

      {/* Charts Panel Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '32px' }}>
        
        {/* Status Distribution Chart */}
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#ffffff' }}>Lead Status Distribution</h3>
          <div style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statusData} margin={{ top: 20, right: 30, left: -10, bottom: 5 }}>
                <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 12 }} />
                <YAxis stroke="#64748b" allowDecimals={false} tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                  labelStyle={{ color: 'var(--text-secondary)' }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Niche Distribution Chart */}
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#ffffff' }}>Leads by Business Niche</h3>
          <div style={{ width: '100%', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {nicheData.length === 0 ? (
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>No niche data compiled.</div>
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', flexPosition: 'relative' }}>
                <div style={{ flex: 1.2 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={nicheData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        {nicheData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }}>
                  {nicheData.map((entry, index) => (
                    <div key={entry.name} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: COLORS[index % COLORS.length] }}></div>
                      <span style={{ color: 'var(--text-secondary)' }}>{entry.name}:</span>
                      <span style={{ fontWeight: 600 }}>{entry.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Weekly Report Digest Display */}
      <div className="glass-panel" style={{ padding: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '16px' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={22} style={{ color: 'var(--accent-cyan)' }} /> Staged Pipeline Report Digest
          </h3>
          <button 
            className="btn-secondary" 
            style={{ padding: '6px 12px', fontSize: '0.8rem' }}
            onClick={fetchReport}
            disabled={loadingReport}
          >
            <RefreshCw size={14} style={{ marginRight: '6px', animation: loadingReport ? 'spin 1.5s linear infinite' : undefined }} /> Refresh Report
          </button>
        </div>

        {report ? (
          <pre style={{ 
            background: 'rgba(0, 0, 0, 0.3)', 
            padding: '24px', 
            borderRadius: '10px', 
            border: '1px solid var(--border-glass)', 
            fontFamily: 'inherit', 
            fontSize: '0.9rem', 
            color: 'var(--text-primary)', 
            whiteSpace: 'pre-wrap', 
            lineHeight: 1.6 
          }}>
            {report}
          </pre>
        ) : (
          <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)', background: 'rgba(0,0,0,0.15)', borderRadius: '8px', border: '1px dotted var(--border-glass)' }}>
            No report found. Run the <strong>Pipeline Manager</strong> agent in the Agents panel to compile statistics and write the weekly digest file.
          </div>
        )}
      </div>

    </div>
  );
}


import React, { useState, useEffect, useRef } from 'react';
import { Play, Terminal, Trash2, Calendar, ShieldCheck, Zap, RefreshCw } from 'lucide-react';

const AGENTS = [
  {
    id: 'lead_finder',
    name: 'Agent 1 — Lead Finder',
    schedule: 'Daily at 8:00 AM',
    role: 'Scheduled Maps & Presence Scanner',
    prompt: 'Search Google Maps for [niche] businesses in [city]. Check website quality, check ratings, and score presence weakness 1-10. Save score > 6 to CRM.',
    requiresParams: true
  },
  {
    id: 'preview_builder',
    name: 'Agent 2 — Website Auditor & Preview Builder',
    schedule: 'Triggered by Lead Finder',
    role: 'Sub-agent Web Generator',
    prompt: 'For each new lead: audit existing site, generate a clean custom menu/appointment landing page using HSL palettes, and stage preview directory.',
    requiresParams: false
  },
  {
    id: 'whatsapp_outreach',
    name: 'Agent 3 — WhatsApp Outreach Agent',
    schedule: 'Daily at 10:00 AM',
    role: 'Campaign & Contact Handler',
    prompt: 'Query leads with Status = "New" & Preview URL. Send personalized WhatsApp messages referencing their location, rating, and custom preview link.',
    requiresParams: false
  },
  {
    id: 'conversation_handler',
    name: 'Agent 4 — Conversation Handler',
    schedule: 'Webhook / Event Triggered',
    role: 'Interactive Negotiation Agent',
    prompt: 'Monitor incoming messages. Parse response intent. Reply conversationally, handle objections, and auto-book calls via Google Calendar.',
    requiresParams: false
  },
  {
    id: 'pipeline_manager',
    name: 'Agent 5 — Pipeline Manager',
    schedule: 'Weekly on Mondays at 9:00 AM',
    role: 'Metrics Analyst & Reporter',
    prompt: 'Scan CRM database. Calculate conversion KPIs, flag stagnant hot leads, generate pipeline funnel report, and save to weekly_report.md.',
    requiresParams: false
  }
];

export default function AgentControl({ onRefreshLeads }) {
  const [selectedAgent, setSelectedAgent] = useState('lead_finder');
  const [running, setRunning] = useState({});
  const [logs, setLogs] = useState({});
  const [niche, setNiche] = useState('Plumber');
  const [city, setCity] = useState('Austin');
  const logEndRef = useRef(null);

  useEffect(() => {
    // Fetch logs for all agents initially
    AGENTS.forEach(a => {
      fetchLogs(a.id);
    });
  }, []);

  useEffect(() => {
    // Scroll log to bottom when logs update
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs, selectedAgent]);

  const fetchLogs = (agentId) => {
    fetch(`/api/agent-logs/${agentId}`)
      .then(res => res.json())
      .then(data => {
        setLogs(prev => ({
          ...prev,
          [agentId]: data
        }));
      })
      .catch(err => console.error(`Error loading logs for ${agentId}:`, err));
  };

  const clearLogs = (agentId) => {
    fetch(`/api/agent-logs/${agentId}/clear`, { method: 'POST' })
      .then(res => res.json())
      .then(() => {
        setLogs(prev => ({
          ...prev,
          [agentId]: []
        }));
      });
  };

  const triggerAgent = (agentId) => {
    setRunning(prev => ({ ...prev, [agentId]: true }));
    
    // Simulate real logs starting
    setLogs(prev => ({
      ...prev,
      [agentId]: [
        ...(prev[agentId] || []),
        { timestamp: new Date().toISOString(), log: `🚀 Initiating Agent Script [${agentId}]...` }
      ]
    }));

    const body = {
      agentId,
      params: agentId === 'lead_finder' ? { niche, city } : null
    };

    fetch('/api/run-agent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => {
        setRunning(prev => ({ ...prev, [agentId]: false }));
        if (data.logs) {
          setLogs(prev => ({
            ...prev,
            [agentId]: data.logs
          }));
        }
        if (onRefreshLeads) {
          onRefreshLeads(); // refresh crm list
        }
      })
      .catch(err => {
        setRunning(prev => ({ ...prev, [agentId]: false }));
        setLogs(prev => ({
          ...prev,
          [agentId]: [
            ...(prev[agentId] || []),
            { timestamp: new Date().toISOString(), log: `❌ Execution failed: ${err.message}` }
          ]
        }));
      });
  };

  const currentAgent = AGENTS.find(a => a.id === selectedAgent);

  return (
    <div className="animate-slide-up" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '32px' }}>
      
      {/* Agents List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
          Agent Management Suite
        </h2>
        {AGENTS.map(agent => {
          const isSelected = agent.id === selectedAgent;
          const isAgentRunning = running[agent.id];
          return (
            <div
              key={agent.id}
              onClick={() => setSelectedAgent(agent.id)}
              className="glass-panel"
              style={{
                padding: '20px',
                cursor: 'pointer',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: isSelected ? 'var(--primary)' : 'var(--border-glass)',
                background: isSelected ? 'rgba(79, 70, 229, 0.1)' : 'var(--bg-card)',
                transform: isSelected ? 'scale(1.01)' : 'none',
                boxShadow: isSelected ? '0 4px 20px rgba(79, 70, 229, 0.15)' : 'var(--shadow-strong)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: isSelected ? '#ffffff' : 'var(--text-primary)' }}>
                    {agent.name}
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                    <Calendar size={12} /> Schedule: {agent.schedule}
                  </span>
                </div>
                <span style={{
                  fontSize: '0.7rem',
                  padding: '4px 8px',
                  borderRadius: '100px',
                  background: isAgentRunning ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                  color: isAgentRunning ? '#f87171' : '#34d399',
                  border: `1px solid ${isAgentRunning ? 'rgba(239, 68, 68, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
                  fontWeight: 600
                }}>
                  {isAgentRunning ? 'RUNNING' : 'ACTIVE / IDLE'}
                </span>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px', lineHeight: 1.4 }}>
                {agent.prompt}
              </p>

              {isSelected && agent.requiresParams && (
                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', background: 'rgba(0, 0, 0, 0.2)', padding: '12px', borderRadius: '8px' }}>
                  <div style={{ flex: 1 }}>
                    <label className="form-label">Niche</label>
                    <input
                      type="text"
                      className="form-input"
                      value={niche}
                      onChange={(e) => setNiche(e.target.value)}
                      placeholder="e.g. Plumber"
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-input"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Austin"
                    />
                  </div>
                </div>
              )}

              {isSelected && (
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                  <button
                    className="btn-secondary"
                    onClick={(e) => { e.stopPropagation(); clearLogs(agent.id); }}
                    style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                  >
                    <Trash2 size={14} /> Clear Logs
                  </button>
                  <button
                    className="btn-primary"
                    disabled={isAgentRunning}
                    onClick={(e) => { e.stopPropagation(); triggerAgent(agent.id); }}
                    style={{ padding: '8px 16px', fontSize: '0.85rem', background: isAgentRunning ? 'var(--text-muted)' : undefined }}
                  >
                    {isAgentRunning ? <RefreshCw size={14} style={{ animation: 'spin 1.5s linear infinite' }} /> : <Play size={14} />}
                    {isAgentRunning ? 'Executing...' : 'Run Agent Now'}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Terminal logs component */}
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Terminal size={20} style={{ color: 'var(--accent-cyan)' }} /> Agent console log output
        </h2>
        <div
          className="glass-panel"
          style={{
            flexGrow: 1,
            minHeight: '400px',
            maxHeight: '650px',
            background: '#040711',
            borderRadius: '12px',
            padding: '20px',
            fontFamily: 'Consolas, Monaco, monospace',
            fontSize: '0.85rem',
            color: '#38bdf8',
            overflowY: 'auto',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)'
          }}
        >
          <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px', marginBottom: '16px', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Target Agent: {currentAgent?.name.split(' — ')[1]}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-green)' }}>
              <ShieldCheck size={14} /> Ready
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {(!logs[selectedAgent] || logs[selectedAgent].length === 0) ? (
              <div style={{ color: 'var(--text-muted)', fontStyle: 'italic', padding: '20px 0' }}>
                No active execution records. Click "Run Agent Now" to view logs.
              </div>
            ) : (
              logs[selectedAgent].map((entry, idx) => (
                <div key={idx} style={{ wordBreak: 'break-all', whiteSpace: 'pre-wrap' }}>
                  <span style={{ color: 'var(--text-muted)', marginRight: '10px' }}>
                    [{new Date(entry.timestamp).toLocaleTimeString()}]
                  </span>
                  <span style={{ color: entry.log.includes('ERROR') || entry.log.includes('failed') ? '#f87171' : entry.log.includes('🚀') || entry.log.includes('Success') ? '#34d399' : '#e2e8f0' }}>
                    {entry.log}
                  </span>
                </div>
              ))
            )}
            <div ref={logEndRef} />
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Terminal, Table2, Globe, Settings as SettingsIcon, BarChart2, Zap, LogOut } from 'lucide-react';
import LeadTable from './components/LeadTable';
import AgentControl from './components/AgentControl';
import SitePreviewer from './components/SitePreviewer';
import PipelineStats from './components/PipelineStats';
import SettingsPanel from './components/SettingsPanel';
import Login from './components/Login';

// Create a component that acts as the dashboard layout
function DashboardLayout({ token, onLogout }) {
  const [activeTab, setActiveTab] = useState('leads');
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchLeads = () => {
    setLoading(true);
    fetch('/api/leads', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => {
        if (res.status === 401) onLogout();
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setLeads(data);
          if (selectedLead) {
            const updated = data.find(l => l.id === selectedLead.id);
            if (updated) setSelectedLead(updated);
          }
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching leads:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchLeads();
  }, [token]);

  const renderContent = () => {
    if (loading && leads.length === 0) return <div style={{color:'var(--text-secondary)', padding:'40px', textAlign:'center'}}>Loading GWD Sales CRM...</div>;
    
    switch (activeTab) {
      case 'dashboard': return <AgentControl onRefreshLeads={fetchLeads} />;
      case 'leads': return <LeadTable leads={leads} onSelectLeadForPreview={setSelectedLead} />;
      case 'preview': return <SitePreviewer leads={leads} selectedLead={selectedLead} onSelectLead={setSelectedLead} />;
      case 'reports': return <PipelineStats leads={leads} />;
      case 'settings': return <SettingsPanel />;
      default: return <LeadTable leads={leads} onSelectLeadForPreview={setSelectedLead} />;
    }
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="brand-section">
          <span className="brand-logo"><Zap fill="currentColor" size={24} /></span>
          <span className="brand-name" style={{ letterSpacing: '2px', fontWeight: 800 }}>GWD SALES</span>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <ul className="nav-menu">
            <li><div className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}><Terminal size={18} /> Control Center</div></li>
            <li><div className={`nav-item ${activeTab === 'leads' ? 'active' : ''}`} onClick={() => setActiveTab('leads')}><Table2 size={18} /> Leads CRM</div></li>
            <li><div className={`nav-item ${activeTab === 'preview' ? 'active' : ''}`} onClick={() => setActiveTab('preview')}><Globe size={18} /> Web Previews</div></li>
            <li><div className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => setActiveTab('reports')}><BarChart2 size={18} /> Stats</div></li>
            <li><div className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}><SettingsIcon size={18} /> Settings</div></li>
          </ul>
          <div style={{ marginTop: 'auto', padding: '16px' }}>
             <button onClick={onLogout} style={{ width: '100%', padding: '10px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#ef4444', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.2s' }}>
               <LogOut size={16} /> Secure Logout
             </button>
          </div>
        </nav>
      </aside>
      <main className="main-content">
        <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="page-title">
            <h1>GWD Sales Workspace</h1>
            <p style={{ color: 'var(--text-secondary)' }}>Centralized CRM & Agent Orchestration</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
             <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
             <span style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 600 }}>SYSTEM ONLINE</span>
          </div>
        </header>
        <div>{renderContent()}</div>
      </main>
    </div>
  );
}

// A simple preview wrapper component for public client URLs
function PublicPreview() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f8fafc', color: '#0f172a' }}>
      <div style={{ textAlign: 'center', padding: '40px', background: '#fff', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
        <Globe size={48} color="#3b82f6" style={{ margin: '0 auto 16px' }} />
        <h1 style={{ fontSize: '2rem', marginBottom: '16px', fontWeight: 800 }}>Your Custom Preview</h1>
        <p style={{ color: '#64748b', maxWidth: '400px', margin: '0 auto' }}>
          Please use the exact unique URL sent to you via WhatsApp to view your tailored website preview.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('gwd_token'));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('gwd_user') || 'null'));

  const handleLogin = (jwt, userData) => {
    setToken(jwt);
    setUser(userData);
    localStorage.setItem('gwd_token', jwt);
    localStorage.setItem('gwd_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('gwd_token');
    localStorage.removeItem('gwd_user');
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/client/:clientName" element={<PublicPreview />} />
        
        {/* Auth Route */}
        <Route path="/login" element={
          token ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
        } />
        
        {/* Protected Dashboard Route */}
        <Route path="/dashboard" element={
          token ? <DashboardLayout token={token} onLogout={handleLogout} /> : <Navigate to="/login" />
        } />
        
        {/* Default Redirect */}
        <Route path="*" element={<Navigate to={token ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
}

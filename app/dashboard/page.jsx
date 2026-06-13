"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Database, Table2, Settings as SettingsIcon, BarChart2, Zap, LogOut, Menu, X } from 'lucide-react';
import LeadTable from '@/src/components/LeadTable';
import AntigravitySync from '@/src/components/AntigravitySync';
import PipelineStats from '@/src/components/PipelineStats';
import SettingsPanel from '@/src/components/SettingsPanel';

export default function DashboardPage() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [activeTab, setActiveTab] = useState('leads');
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Authentication check
  useEffect(() => {
    const storedToken = localStorage.getItem('gwd_token');
    if (!storedToken || storedToken === 'undefined') {
      router.push('/login');
    } else {
      setToken(storedToken);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('gwd_token');
    localStorage.removeItem('gwd_user');
    router.push('/login');
  };

  const fetchLeads = () => {
    if (!token) return;
    setLoading(true);
    fetch('/api/leads', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => {
        if (res.status === 401) handleLogout();
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setLeads(data);
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

  if (!token) return null; // Avoid hydration mismatch before redirect

  const renderContent = () => {
    if (loading && leads.length === 0) return <div style={{color:'var(--text-secondary)', padding:'40px', textAlign:'center'}}>Loading GWD Sales CRM...</div>;
    
    switch (activeTab) {
      case 'sync': return <AntigravitySync onRefreshLeads={fetchLeads} />;
      case 'leads': return <LeadTable leads={leads} />;
      case 'reports': return <PipelineStats leads={leads} />;
      case 'settings': return <SettingsPanel />;
      default: return <LeadTable leads={leads} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Mobile Sticky Header Bar */}
      <header className="mobile-header mobile-only">
        <button 
          onClick={() => setDrawerOpen(!drawerOpen)}
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px' }}
        >
          <Menu size={24} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Zap fill="var(--accent-cyan)" color="var(--accent-cyan)" size={18} />
          <span style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '1.5px', color: '#ffffff' }}>GWD SALES</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
          <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 700, letterSpacing: '0.5px' }} className="desktop-only">ONLINE</span>
        </div>
      </header>

      {/* Drawer Overlay Backdrop for Mobile */}
      {drawerOpen && (
        <div className="drawer-backdrop mobile-only" onClick={() => setDrawerOpen(false)}></div>
      )}

      <div className="app-container">
        <aside className={`sidebar ${drawerOpen ? 'open' : ''}`}>
          <div className="brand-section" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="brand-logo"><Zap fill="currentColor" size={24} /></span>
              <span className="brand-name" style={{ letterSpacing: '2px', fontWeight: 800 }}>GWD SALES</span>
            </div>
            <button 
              className="mobile-only" 
              onClick={() => setDrawerOpen(false)}
              style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '4px' }}
            >
              <X size={20} />
            </button>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <ul className="nav-menu">
              <li><div className={`nav-item ${activeTab === 'sync' ? 'active' : ''}`} onClick={() => { setActiveTab('sync'); setDrawerOpen(false); }}><Database size={18} /> Antigravity Sync</div></li>
              <li><div className={`nav-item ${activeTab === 'leads' ? 'active' : ''}`} onClick={() => { setActiveTab('leads'); setDrawerOpen(false); }}><Table2 size={18} /> Leads CRM</div></li>
              <li><div className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => { setActiveTab('reports'); setDrawerOpen(false); }}><BarChart2 size={18} /> Stats</div></li>
              <li><div className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => { setActiveTab('settings'); setDrawerOpen(false); }}><SettingsIcon size={18} /> Settings</div></li>
            </ul>
            <div style={{ marginTop: 'auto', padding: '16px' }}>
               <button onClick={handleLogout} style={{ width: '100%', padding: '10px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#ef4444', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.2s' }}>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="desktop-only">
               <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
               <span style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 600 }}>SYSTEM ONLINE</span>
            </div>
          </header>
          <div>{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}

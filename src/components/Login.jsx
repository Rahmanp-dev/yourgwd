"use client";
import React, { useState } from 'react';
import { Zap, Lock, Mail, ArrowRight } from 'lucide-react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (data.success) {
        onLogin(data.token, data.user);
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Connection error');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#0f172a' }}>
      <div className="glass-panel" style={{ padding: '40px', width: '100%', maxWidth: '400px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Zap size={48} color="#3b82f6" style={{ margin: '0 auto 16px' }} />
          <h1 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>GWD Sales</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '8px' }}>Sign in to your team workspace</p>
        </div>
        
        {error && <div style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.85rem', textAlign: 'center', border: '1px solid rgba(239,68,68,0.2)' }}>{error}</div>}
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ position: 'relative' }}>
            <Mail size={18} style={{ position: 'absolute', top: '12px', left: '12px', color: '#64748b' }} />
            <input 
              type="email" 
              placeholder="Team Email"
              className="form-input" 
              style={{ paddingLeft: '40px', width: '100%', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '10px 10px 10px 40px', borderRadius: '8px' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={{ position: 'relative' }}>
            <Lock size={18} style={{ position: 'absolute', top: '12px', left: '12px', color: '#64748b' }} />
            <input 
              type="password" 
              placeholder="Password"
              className="form-input" 
              style={{ paddingLeft: '40px', width: '100%', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '10px 10px 10px 40px', borderRadius: '8px' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-primary" style={{ marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', background: '#3b82f6', color: '#fff', padding: '12px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
            Access CRM <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}


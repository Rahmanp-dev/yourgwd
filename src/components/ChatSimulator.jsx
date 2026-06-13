"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Send, Phone, Video, MoreVertical, CheckCheck, Smile, Paperclip } from 'lucide-react';

export default function ChatSimulator({ leads, selectedLead, onRefreshLeads, onSelectLead }) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef(null);

  const contactedLeads = leads.filter(l => l.status !== 'New');

  useEffect(() => {
    if (selectedLead) {
      loadChatHistory(selectedLead);
    } else if (contactedLeads.length > 0) {
      onSelectLead(contactedLeads[0]);
    }
  }, [selectedLead, leads]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const loadChatHistory = (lead) => {
    // Extrapolate chat messages from history array
    const chatMsgs = lead.history
      .filter(h => h.action.startsWith('Replied') || h.action === 'Contacted')
      .map(h => {
        const isAgent = h.action === 'Contacted' || h.message.startsWith('Agent:');
        let text = h.message;
        
        // Clean prefixes if any
        if (text.startsWith('Agent: "') || text.startsWith('Lead: "')) {
          text = text.substring(8, text.length - 1);
        } else if (text.startsWith('Agent: ') || text.startsWith('Lead: ')) {
          text = text.substring(7);
        } else if (h.action === 'Contacted' && text.startsWith('Outreach WhatsApp message sent: "')) {
          text = text.substring(32, text.length - 1);
        }
        
        return {
          id: h.timestamp + Math.random(),
          sender: isAgent ? 'agent' : 'lead',
          text: text,
          timestamp: new Date(h.timestamp)
        };
      });
      
    setMessages(chatMsgs);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim() || !selectedLead) return;

    const userText = inputText.trim();
    setInputText('');

    // Push local user message to chat immediately
    const userMsg = {
      id: Date.now().toString(),
      sender: 'lead',
      text: userText,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setTyping(true);

    // Call backend API to simulate AI response
    fetch(`/api/leads/${selectedLead.id}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userText })
    })
      .then(res => res.json())
      .then(data => {
        setTyping(false);
        if (data.success) {
          const aiMsg = {
            id: (Date.now() + 1).toString(),
            sender: 'agent',
            text: data.reply,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, aiMsg]);
          onRefreshLeads(); // update statuses in main app
        }
      })
      .catch(err => {
        console.error('Error in chat request:', err);
        setTyping(false);
      });
  };

  return (
    <div className="animate-slide-up" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', height: '620px', gap: '2px', background: 'var(--border-glass)', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-glass)', boxShadow: 'var(--shadow-strong)' }}>
      
      {/* Sidebar - Leads List */}
      <div style={{ background: '#070a13', borderRight: '1px solid var(--border-glass)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid var(--border-glass)' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>Contacted Channels</h3>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Simulate replies from leads</p>
        </div>
        <div style={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          {contactedLeads.length === 0 ? (
            <div style={{ padding: '24px', color: 'var(--text-muted)', fontSize: '0.8rem', fontStyle: 'italic', textAlign: 'center' }}>
              No leads have been contacted yet. Run the Outreach Agent first.
            </div>
          ) : (
            contactedLeads.map(lead => {
              const isSelected = selectedLead && lead.id === selectedLead.id;
              const lastMsg = lead.history[lead.history.length - 1];
              return (
                <div
                  key={lead.id}
                  onClick={() => onSelectLead(lead)}
                  style={{
                    padding: '16px 20px',
                    cursor: 'pointer',
                    background: isSelected ? 'rgba(79, 70, 229, 0.12)' : 'transparent',
                    borderBottom: '1px solid rgba(255,255,255,0.03)',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                  className="chat-lead-item"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 600, color: isSelected ? '#ffffff' : 'var(--text-primary)', fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '160px' }}>
                      {lead.name}
                    </span>
                    <span className={`status-pill ${lead.status.toLowerCase().replace(/\s+/g, '-')}`} style={{ fontSize: '0.6rem', padding: '2px 6px' }}>
                      {lead.status}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    🏢 {lead.niche} • 📍 {lead.city}
                  </span>
                  {lastMsg && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '4px' }}>
                      {lastMsg.message.startsWith('Agent:') || lastMsg.message.startsWith('Lead:') ? lastMsg.message.substring(7) : lastMsg.message}
                    </span>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Main WhatsApp Simulator Area */}
      <div style={{ background: '#0b111e', display: 'flex', flexDirection: 'column', height: '100%' }}>
        {selectedLead ? (
          <>
            {/* Header */}
            <div style={{ background: '#080d17', borderBottom: '1px solid var(--border-glass)', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--accent-cyan))', display: 'flex', alignItems: 'center', justifyAlignment: 'center', justifyContent: 'center', fontWeight: 700, color: 'white', fontSize: '1rem' }}>
                  {selectedLead.name.substring(0,2).toUpperCase()}
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 600 }}>{selectedLead.name}</h4>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                    📱 WhatsApp: {selectedLead.phone}
                  </span>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--text-secondary)' }}>
                <Phone size={18} style={{ cursor: 'pointer' }} />
                <Video size={18} style={{ cursor: 'pointer' }} />
                <div style={{ width: '1px', height: '20px', background: 'var(--border-glass)' }}></div>
                <span className={`status-pill ${selectedLead.status.toLowerCase().replace(/\s+/g, '-')}`} style={{ fontSize: '0.7rem' }}>
                  Pipeline: {selectedLead.status}
                </span>
                <MoreVertical size={18} style={{ cursor: 'pointer' }} />
              </div>
            </div>

            {/* Message Pane */}
            <div style={{ flexGrow: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', backgroundImage: 'radial-gradient(var(--border-glass) 1px, transparent 0)', backgroundSize: '24px 24px' }}>
              
              <div style={{ alignSelf: 'center', background: 'rgba(0, 0, 0, 0.4)', color: 'var(--text-secondary)', fontSize: '0.75rem', padding: '6px 12px', borderRadius: '6px', border: '1px solid var(--border-glass)', marginBottom: '8px' }}>
                🔒 Messages are simulated end-to-end between lead Meta API & Conversation Agent.
              </div>

              {messages.map(msg => {
                const isAgent = msg.sender === 'agent';
                return (
                  <div
                    key={msg.id}
                    style={{
                      alignSelf: isAgent ? 'flex-start' : 'flex-end',
                      maxWidth: '70%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}
                  >
                    <div
                      style={{
                        background: isAgent ? 'rgba(255,255,255,0.06)' : 'var(--primary)',
                        color: '#ffffff',
                        padding: '12px 16px',
                        borderRadius: isAgent ? '0px 14px 14px 14px' : '14px 14px 0px 14px',
                        fontSize: '0.9rem',
                        lineHeight: 1.4,
                        border: isAgent ? '1px solid var(--border-glass)' : 'none',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                      }}
                    >
                      {msg.text}
                    </div>
                    <div style={{ alignSelf: isAgent ? 'flex-start' : 'flex-end', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', fontSize: '0.7rem' }}>
                      <span>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      {!isAgent && <CheckCheck size={14} style={{ color: 'var(--accent-cyan)' }} />}
                    </div>
                  </div>
                );
              })}

              {typing && (
                <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.04)', color: 'var(--text-secondary)', padding: '10px 16px', borderRadius: '0px 12px 12px 12px', border: '1px solid var(--border-glass)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ display: 'flex', gap: '4px' }}>
                    <span className="dot" style={{ animation: 'bounce 1.2s infinite' }}>•</span>
                    <span className="dot" style={{ animation: 'bounce 1.2s infinite 0.2s' }}>•</span>
                    <span className="dot" style={{ animation: 'bounce 1.2s infinite 0.4s' }}>•</span>
                  </span>
                  <span>Conversation Agent is responding...</span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSend} style={{ background: '#080d17', borderTop: '1px solid var(--border-glass)', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Smile size={20} style={{ color: 'var(--text-secondary)', cursor: 'pointer' }} />
              <Paperclip size={20} style={{ color: 'var(--text-secondary)', cursor: 'pointer' }} />
              <input
                type="text"
                className="form-input"
                style={{ flexGrow: 1 }}
                placeholder="Type response as the Business Lead (e.g. 'How much does it cost?')..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={typing}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{ padding: '10px', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 'auto', background: inputText.trim() ? undefined : 'rgba(255,255,255,0.05)', boxShadow: inputText.trim() ? undefined : 'none' }}
                disabled={!inputText.trim() || typing}
              >
                <Send size={16} />
              </button>
            </form>
          </>
        ) : (
          <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: '3rem' }}>💬</div>
            <div>Select a Contacted lead from the sidebar to test chat interactions.</div>
          </div>
        )}
      </div>
      
      <style>{`
        .chat-lead-item:hover {
          background: rgba(255,255,255,0.03) !important;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>

    </div>
  );
}


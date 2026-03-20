import React from 'react';
import { Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Community = () => {
  const { t } = useLanguage();

  return (
    <section id="community" className="section">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">{t.community.title}</h2>
        
        <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {t.community.items.map((item, idx) => (
            <div key={idx} className={`glass-panel delay-${(idx + 1) * 100} animate-fade-in-up`} style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div className="md-timeline-icon" style={{ display: 'none', width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Users size={22} />
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff', margin: 0 }}>{item.role}</h3>
                  <div style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>{item.org}</div>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html:`
          @media (min-width: 768px) { .md-timeline-icon { display: flex !important; } }
      `}} />
    </section>
  );
};

export default Community;

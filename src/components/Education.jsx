import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="section" style={{ background: 'linear-gradient(to top, transparent, rgba(22, 22, 30, 0.4), transparent)' }}>
      <div className="container">
        <h2 className="section-title animate-fade-in-up">{t.education.title}</h2>
        
        <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {t.education.items.map((item, idx) => (
            <div key={idx} className={`glass-panel delay-${(idx + 1) * 100} animate-fade-in-up`} style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <GraduationCap size={24} />
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: '0.25rem' }}>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff', margin: 0 }}>{item.degree}</h3>
                  <div style={{ color: 'var(--accent-secondary)', fontWeight: 500, fontSize: '1rem', marginTop: '0.25rem' }}>{item.school}</div>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  {item.period}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;

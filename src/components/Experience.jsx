import React from 'react';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-title animate-fade-in-up">{t.experience.title}</h2>
        
        <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative' }}>
          {/* Vertical Timeline Line */}
          <div style={{ position: 'absolute', left: '24px', top: '0', bottom: '0', width: '2px', background: 'var(--border-color)', zIndex: -1 }} className="md-timeline-line"></div>
          
          {t.experience.jobs.map((exp, idx) => (
            <div key={idx} className={`delay-${(idx + 1) * 100} animate-fade-in-up`} style={{ display: 'flex', gap: '2rem' }}>
              
              <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center' }} className="md-timeline-icon">
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-base)', border: `2px solid var(--accent-primary)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', boxShadow: '0 0 15px var(--glow-primary)' }}>
                  <Briefcase size={20} />
                </div>
              </div>
              
              <div className="glass-panel" style={{ flex: 1, padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.25rem' }}>{exp.role}</h3>
                    <div style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>{exp.company}</div>
                  </div>
                  <span className="badge">{exp.period === '目前' || exp.period === 'Present' ? t.experience.present : t.experience.previous}</span>
                </div>
                
                <ul style={{ paddingLeft: '1.25rem' }}>
                  {exp.achievements.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.75rem', position: 'relative', color: 'var(--text-secondary)' }}>
                      <span style={{ position: 'absolute', left: '-1.25rem', color: 'var(--accent-primary)' }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html:`
          @media (min-width: 768px) { 
            .md-timeline-line { display: block !important; left: 24px !important; } 
            .md-timeline-icon { display: flex !important; margin-left: -1px; }
          }
          @media (max-width: 767px) {
            .md-timeline-line, .md-timeline-icon { display: none !important; }
          }
      `}} />
    </section>
  );
};

export default Experience;

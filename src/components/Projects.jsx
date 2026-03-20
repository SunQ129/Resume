import React from 'react';
import { Target, Server, Network } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  
  // Assign icons to projects based on index to decouple from data
  const getIcon = (idx) => {
    switch(idx) {
      case 0: return <Target size={28} />;
      case 1: return <Server size={28} />;
      default: return <Network size={28} />;
    }
  };

  return (
    <section id="projects" className="section" style={{ background: 'linear-gradient(to bottom, transparent, rgba(22, 22, 30, 0.4), transparent)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in-up">
          <h2 className="section-title">{t.projects.title}</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1rem auto 0' }}>
            {t.projects.subtitle}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {t.projects.list.map((proj, idx) => (
            <div key={idx} className={`glass-panel delay-${(idx + 1) * 100} animate-fade-in-up`} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '2rem', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ padding: '1rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: 'var(--radius-md)', color: 'var(--accent-primary)' }}>
                    {getIcon(idx)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{proj.title}</h3>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{proj.client}</div>
                  </div>
                </div>
                
                <ul style={{ paddingLeft: '1.25rem' }}>
                  {proj.highlights.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      <span style={{ position: 'absolute', left: '2.5rem', color: 'var(--accent-secondary)' }}>▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

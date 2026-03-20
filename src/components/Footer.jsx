import React from 'react';
import { Mail, MapPin, ExternalLink, BookOpen, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-base)', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>{t.footer.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              {t.footer.desc}
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="mailto:ycsun129@gmail.com" className="btn btn-outline" style={{ justifyContent: 'flex-start', border: 'none', padding: '0.75rem 1rem', background: 'var(--bg-surface)' }}>
              <Mail size={20} color="var(--accent-primary)" />
              <span style={{ color: 'var(--text-primary)' }}>ycsun129@gmail.com</span>
            </a>
            
            <a href="https://www.linkedin.com/in/jeremy-sun-0129sun/" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ justifyContent: 'flex-start', border: 'none', padding: '0.75rem 1rem', background: 'var(--bg-surface)' }}>
              <Linkedin size={20} color="#0a66c2" />
              <span style={{ color: 'var(--text-primary)' }}>LinkedIn</span>
            </a>

            <div className="btn btn-outline" style={{ justifyContent: 'flex-start', border: 'none', padding: '0.75rem 1rem', background: 'var(--bg-surface)', cursor: 'default' }}>
              <MapPin size={20} color="var(--accent-success)" />
              <span style={{ color: 'var(--text-primary)' }}>{t.footer.location}</span>
            </div>
            
            <a href="https://github.com/sunq129" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ justifyContent: 'flex-start', border: 'none', padding: '0.75rem 1rem', background: 'var(--bg-surface)' }}>
              <ExternalLink size={20} color="var(--accent-secondary)" />
              <span style={{ color: 'var(--text-primary)' }}>GitHub: sunq129</span>
            </a>

            <a href="https://hackmd.io/@ysun129?utm_source=overview&utm_medium=team-switcher" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ justifyContent: 'flex-start', border: 'none', padding: '0.75rem 1rem', background: 'var(--bg-surface)' }}>
              <BookOpen size={20} color="var(--accent-primary)" />
              <span style={{ color: 'var(--text-primary)' }}>HackMD: {t.nav.articles}</span>
            </a>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p>© {new Date().getFullYear()} Jeremy Sun. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>Designed with React & Vite.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

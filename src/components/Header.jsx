import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, BookOpen, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.education, href: '#education' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.certifications, href: '#certifications' },
    { name: t.nav.community, href: '#community' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-panel' : 'py-6 bg-transparent'}`} style={{ borderBottom: isScrolled ? '1px solid var(--border-color)' : 'none', borderRadius: 0 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, fontSize: '1.25rem', color: '#fff' }}>
          <div style={{ background: 'var(--accent-primary)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', display: 'flex' }}>
            <Shield size={20} color="#0a0a0f" />
          </div>
          <span className="md-logo-text">Jeremy<span style={{ color: 'var(--accent-primary)' }}>.</span>Sun</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="md-flex items-center">
          <ul style={{ display: 'flex', gap: '1.25rem', margin: 0, alignItems: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem' }}>
                  {link.name}
                </a>
              </li>
            ))}
            
            {/* HackMD Link */}
            <li>
              <a href="https://hackmd.io/@ysun129?utm_source=overview&utm_medium=team-switcher" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', fontWeight: 500, fontSize: '0.9rem' }}>
                <BookOpen size={16} />
                {t.nav.articles}
              </a>
            </li>

            {/* Language Toggle */}
            <li style={{ marginLeft: '1rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '1rem' }}>
              <button onClick={toggleLanguage} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>
                <Globe size={16} color="var(--accent-secondary)" />
                {language === 'zh' ? 'EN' : '中'}
              </button>
            </li>
          </ul>
        </nav>

        <style dangerouslySetInnerHTML={{__html:`
          @media (min-width: 992px) { .md-flex { display: flex !important; } .md-hidden { display: none !important; } }
          @media (max-width: 991px) { 
            .mobile-nav { display: flex; flex-direction: column; gap: 2rem; position: absolute; top: 100%; left: 0; right: 0; padding: 2rem; border-bottom: 1px solid var(--border-color); } 
            .md-logo-text { display: none; }
          }
        `}} />

        {/* Mobile controls: Toggle Lang + Menu */}
        <div className="md-hidden" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={toggleLanguage} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem', fontWeight: 600 }}>
            <Globe size={16} color="var(--accent-secondary)" />
            {language === 'zh' ? 'EN' : '中'}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="mobile-nav glass-panel md-hidden" style={{ borderRadius: '0 0 var(--radius-lg) var(--radius-lg)', margin: '0 1rem' }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.name} style={{ textAlign: 'center' }}>
                  <a href={link.href} onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 500 }}>
                    {link.name}
                  </a>
                </li>
              ))}
              <li style={{ textAlign: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <a href="https://hackmd.io/@ysun129?utm_source=overview&utm_medium=team-switcher" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--accent-primary)', fontSize: '1.1rem', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <BookOpen size={18} />
                  {t.nav.articles}
                </a>
              </li>
            </ul>
          </nav>
        )}

      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { ShieldCheck, Cloud, Lock, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}>
        
        <div className="animate-fade-in-up md-grid-2">
          <div style={{ maxWidth: '650px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid var(--border-highlight)', borderRadius: '999px', marginBottom: '1.5rem', color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600 }}>
              <ShieldCheck size={16} /> {t.hero.tag}
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', whiteSpace: 'pre-line' }}>
              {t.hero.titleP1}<span className="text-gradient">{t.hero.titleName}</span>{t.hero.titleP2}
            </h1>
            
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              {t.hero.description}
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#experience" className="btn btn-primary delay-100 animate-fade-in-up">
                {t.hero.btnExp}
              </a>
              <a href="https://hackmd.io/@ysun129?utm_source=overview&utm_medium=team-switcher" target="_blank" rel="noreferrer" className="btn btn-outline delay-200 animate-fade-in-up">
                <BookOpen size={18} />
                {t.nav.articles}
              </a>
              <a href="#contact" className="btn btn-outline delay-300 animate-fade-in-up">
                {t.hero.btnContact}
              </a>
            </div>
          </div>
          
          <div className="md-hero-cards delay-400 animate-fade-in-up" style={{ position: 'relative' }}>
            <div className="glass-panel" style={{ padding: '2rem', position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Cloud size={32} color="var(--accent-primary)" />
                <h3 style={{ margin: 0 }}>{t.hero.card1Title}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t.hero.card1Desc}</p>
            </div>
            
            <div className="glass-panel" style={{ padding: '2rem', position: 'absolute', top: '60%', left: '-10%', zIndex: 3, width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Lock size={32} color="var(--accent-success)" />
                <h3 style={{ margin: 0 }}>{t.hero.card2Title}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t.hero.card2Desc}</p>
            </div>
            
            {/* Decorative Glow */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'var(--glow-primary)', borderRadius: '50%', filter: 'blur(80px)', zIndex: 1 }} />
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html:`
          @media (min-width: 992px) { 
            .md-grid-2 { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 4rem; alignItems: center; } 
          }
          @media (max-width: 991px) {
            .md-hero-cards { display: none; }
          }
      `}} />
    </section>
  );
};

export default Hero;

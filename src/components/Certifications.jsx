import React from 'react';
import { Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Certifications = () => {
  const { t } = useLanguage();

  const certifications = [
    { vendor: 'ISC2', certs: 'CISSP, CC' },
    { vendor: 'AWS', certs: 'SAA' },
    { vendor: 'GCP', certs: 'PCA' },
    { vendor: 'Microsoft', certs: 'MCSA, AZ-900' },
    { vendor: 'CompTIA', certs: 'Security+' },
    { vendor: 'EC-Council', certs: 'CEH' },
    { vendor: 'Check Point', certs: 'CCSA, CCSE, CCTE, CCME, CCSM, CCES, CCCS, CCSM-E' },
    { vendor: 'Zscaler', certs: 'ZCSE, ZDTA' },
    { vendor: 'Infoblox', certs: 'CDCA, CDAT, DDIP, DSP, DIS, B1TD' },
    { vendor: 'Red Hat', certs: 'RHCE, RHCSA' }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">{t.certifications.title}</h2>
        
        <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {certifications.map((item, idx) => (
            <div key={idx} className={`glass-panel delay-${(idx % 5 + 1) * 100} animate-fade-in-up`} style={{ padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ color: 'var(--accent-primary)', marginTop: '2px' }}>
                <Award size={20} />
              </div>
              <div>
                <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.25rem' }}>{item.vendor}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                  {item.certs}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

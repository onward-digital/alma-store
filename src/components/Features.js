'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Hand, Users, Leaf, Truck } from 'lucide-react';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    { icon: <Hand size={24} />, title: t('f1_title'), desc: t('f1_desc'), color: 'var(--color-accent)' },
    { icon: <Users size={24} />, title: t('f2_title'), desc: t('f2_desc'), color: 'var(--color-green)' },
    { icon: <Leaf size={24} />, title: t('f3_title'), desc: t('f3_desc'), color: 'var(--color-accent)' },
    { icon: <Truck size={24} />, title: t('f4_title'), desc: t('f4_desc'), color: 'var(--color-green)' },
  ];

  return (
    <section id="features" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent)',
            letterSpacing: '0.15em', display: 'block', marginBottom: '0.75rem',
          }}>{t('features_tag')}</span>
          <div className="organic-divider-center" style={{ marginBottom: '1.25rem' }} />
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          }}>{t('features_title')}</h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.25rem',
        }}>
          {features.map((f, i) => (
            <div key={i} className="feature-card" style={{
              padding: '2rem', textAlign: 'center',
            }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '50%',
                background: `${f.color}12`, border: `1px solid ${f.color}20`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: f.color, margin: '0 auto 1.25rem',
              }}>{f.icon}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 600,
                fontSize: '1.1rem', marginBottom: '0.6rem',
              }}>{f.title}</h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                color: 'var(--color-text-secondary)', lineHeight: 1.7,
              }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

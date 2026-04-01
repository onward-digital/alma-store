'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const { t } = useLanguage();

  const reviews = [
    { text: t('r1_text'), name: t('r1_name'), product: t('r1_product'), rating: 5, initials: 'SM', avatarBg: '#b5632c', avatarColor: '#fff' },
    { text: t('r2_text'), name: t('r2_name'), product: t('r2_product'), rating: 5, initials: 'MK', avatarBg: '#5a7a5e', avatarColor: '#fff' },
    { text: t('r3_text'), name: t('r3_name'), product: t('r3_product'), rating: 5, initials: 'AL', avatarBg: '#c9b896', avatarColor: '#2c2418' },
  ];

  return (
    <section id="reviews" className="section-padding">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent)',
            letterSpacing: '0.15em', display: 'block', marginBottom: '0.75rem',
          }}>{t('reviews_tag')}</span>
          <div className="organic-divider-center" style={{ marginBottom: '1.25rem' }} />
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          }}>{t('reviews_title')}</h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {reviews.map((r, i) => (
            <div key={i} className="feature-card" style={{
              padding: '2rem', display: 'flex', flexDirection: 'column',
            }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} size={16} fill="var(--color-accent)" style={{ color: 'var(--color-accent)' }} />
                ))}
              </div>

              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.95rem',
                color: 'var(--color-text-secondary)', lineHeight: 1.8,
                marginBottom: '1.5rem', flex: 1,
              }}>"{r.text}"</p>

              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: r.avatarBg, color: r.avatarColor,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.8rem',
                  flexShrink: 0,
                }}>{r.initials}</div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 600,
                    fontSize: '1rem', marginBottom: '0.15rem',
                  }}>{r.name}</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                    color: 'var(--color-accent)', letterSpacing: '0.05em',
                  }}>{r.product}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

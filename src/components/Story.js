'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Story() {
  const { t } = useLanguage();

  const stats = [
    { num: t('story_stat_1_num'), label: t('story_stat_1_label') },
    { num: t('story_stat_2_num'), label: t('story_stat_2_label') },
    { num: t('story_stat_3_num'), label: t('story_stat_3_label') },
  ];

  return (
    <section id="story" className="section-padding">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem', alignItems: 'center',
        }}>
          {/* Image side */}
          <div style={{
            background: 'linear-gradient(135deg, #d4a57440, #8ba58e30, #c9b89620)',
            borderRadius: '20px', aspectRatio: '4/5', display: 'flex',
            alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: '10%', left: '10%', width: '60px', height: '60px',
              borderRadius: '50%', background: 'rgba(181, 99, 44, 0.1)',
              animation: 'float 4s ease-in-out infinite',
            }} />
            <div style={{
              position: 'absolute', bottom: '15%', right: '15%', width: '40px', height: '40px',
              borderRadius: '50%', background: 'rgba(90, 122, 94, 0.1)',
              animation: 'float 5s ease-in-out infinite 1s',
            }} />
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '5rem', display: 'block', marginBottom: '1rem' }}>🏺🧶🕯️</span>
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: '1.2rem',
                color: 'var(--color-text-secondary)', fontStyle: 'italic',
              }}>Made with soul</span>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent)',
              letterSpacing: '0.15em', display: 'block', marginBottom: '0.75rem',
            }}>{t('story_tag')}</span>
            <div className="organic-divider" style={{ marginBottom: '1.25rem' }} />
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1.5rem', lineHeight: 1.15,
            }}>{t('story_title')}</h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text-secondary)',
              lineHeight: 1.8, marginBottom: '1rem',
            }}>{t('story_p1')}</p>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text-secondary)',
              lineHeight: 1.8, marginBottom: '2.5rem',
            }}>{t('story_p2')}</p>

            {/* Stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem',
              padding: '1.5rem 0', borderTop: '1px solid var(--color-border)',
            }}>
              {stats.map((stat, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: '1.8rem', color: 'var(--color-accent)',
                  }}>{stat.num}</div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                    color: 'var(--color-text-secondary)', marginTop: '0.15rem',
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

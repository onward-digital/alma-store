'use client';

import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Truck, Hand, Heart } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: '7rem 1.5rem 4rem',
    }}>
      {/* Background */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-15%', width: '50%', height: '70%',
        background: 'radial-gradient(circle, rgba(181, 99, 44, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '-5%', width: '35%', height: '40%',
        background: 'radial-gradient(circle, rgba(90, 122, 94, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Left */}
          <div>
            <div className="animate-fade-in-up" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.45rem 1rem', background: 'var(--color-green-light)',
              border: '1px solid rgba(90, 122, 94, 0.15)', borderRadius: '100px',
              marginBottom: '1.75rem', fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem', color: 'var(--color-green)', letterSpacing: '0.1em',
            }}>
              <Hand size={14} /> {t('hero_tag')}
            </div>

            <h1 className="animate-fade-in-up delay-100" style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)', lineHeight: 1.1,
              marginBottom: '1.5rem', opacity: 0, color: 'var(--color-text)',
            }}>
              {t('hero_title_1')}<br />
              <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>{t('hero_title_2')}</span>
            </h1>

            <p className="animate-fade-in-up delay-200" style={{
              fontFamily: 'var(--font-body)', fontSize: '1.05rem',
              color: 'var(--color-text-secondary)', maxWidth: '480px',
              lineHeight: 1.8, marginBottom: '2rem', opacity: 0, fontWeight: 400,
            }}>
              {t('hero_subtitle')}
            </p>

            <div className="animate-fade-in-up delay-300" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem', opacity: 0 }}>
              <a href="#products" className="btn-primary">
                {t('hero_cta')} <ArrowRight size={18} />
              </a>
              <a href="#story" className="btn-secondary">
                {t('hero_cta2')}
              </a>
            </div>

            {/* Trust badges */}
            <div className="animate-fade-in-up delay-400" style={{
              display: 'flex', gap: '1.5rem', flexWrap: 'wrap', opacity: 0,
            }}>
              {[
                { icon: <Truck size={16} />, text: t('hero_badge_1') },
                { icon: <Hand size={16} />, text: t('hero_badge_2') },
                { icon: <Heart size={16} />, text: t('hero_badge_3') },
              ].map((badge, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                  color: 'var(--color-text-secondary)', fontWeight: 500,
                }}>
                  <span style={{ color: 'var(--color-green)' }}>{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product showcase */}
          <div className="animate-scale-in delay-300" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem',
            opacity: 0,
          }}>
            {[
              { overlay: 'rgba(181, 99, 44, 0.35)', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=400&fit=crop', label: t('hero_cat_ceramics') },
              { overlay: 'rgba(90, 122, 94, 0.35)',  image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop', label: t('hero_cat_textiles') },
              { overlay: 'rgba(201, 184, 150, 0.4)', image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop', label: t('hero_cat_candles') },
              { overlay: 'rgba(168, 147, 122, 0.35)', image: 'https://images.unsplash.com/photo-1616627777375-0eba5f18b8e0?w=400&h=400&fit=crop', label: t('hero_cat_decor') },
            ].map((item, i) => (
              <div key={i} style={{
                borderRadius: '16px', aspectRatio: '1', overflow: 'hidden',
                position: 'relative', cursor: 'pointer', transition: 'transform 0.3s ease',
                transform: i === 0 ? 'translateY(-10px)' : i === 3 ? 'translateY(-10px)' : 'translateY(10px)',
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-15px) scale(1.03)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = i === 0 || i === 3 ? 'translateY(-10px)' : 'translateY(10px)'}
              >
                <img src={item.image} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.9)' }} />
                <div style={{
                  position: 'absolute', inset: 0, background: item.overlay,
                  display: 'flex', alignItems: 'flex-end', padding: '0.9rem',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.85rem',
                    color: '#fff', fontWeight: 700, letterSpacing: '0.05em',
                    textShadow: '0 1px 4px rgba(0,0,0,0.4)',
                  }}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

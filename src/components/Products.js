'use client';

import { useLanguage } from '@/context/LanguageContext';
import { ShoppingBag, ArrowRight, Star } from 'lucide-react';

export default function Products() {
  const { t } = useLanguage();

  const products = [
    { name: t('p1_name'), cat: t('p1_category'), price: t('p1_price'), old: t('p1_old_price'), badge: t('p1_badge'), badgeType: t('p1_badge_type'), color: '#d4a574', emoji: '🏺', rating: 4.9 },
    { name: t('p2_name'), cat: t('p2_category'), price: t('p2_price'), old: t('p2_old_price'), badge: t('p2_badge'), badgeType: t('p2_badge_type'), color: '#8ba58e', emoji: '🧶', rating: 4.8 },
    { name: t('p3_name'), cat: t('p3_category'), price: t('p3_price'), old: t('p3_old_price'), badge: t('p3_badge'), badgeType: t('p3_badge_type'), color: '#c9b896', emoji: '🕯️', rating: 4.9 },
    { name: t('p4_name'), cat: t('p4_category'), price: t('p4_price'), old: t('p4_old_price'), badge: t('p4_badge'), badgeType: t('p4_badge_type'), color: '#b5906e', emoji: '🍶', rating: 5.0 },
    { name: t('p5_name'), cat: t('p5_category'), price: t('p5_price'), old: t('p5_old_price'), badge: t('p5_badge'), badgeType: t('p5_badge_type'), color: '#a8937a', emoji: '🪢', rating: 4.7 },
    { name: t('p6_name'), cat: t('p6_category'), price: t('p6_price'), old: t('p6_old_price'), badge: t('p6_badge'), badgeType: t('p6_badge_type'), color: '#c4a882', emoji: '👩‍🍳', rating: 4.8 },
  ];

  return (
    <section id="products" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent)',
            letterSpacing: '0.15em', display: 'block', marginBottom: '0.75rem',
          }}>{t('products_tag')}</span>
          <div className="organic-divider-center" style={{ marginBottom: '1.25rem' }} />
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '0.75rem',
          }}>{t('products_title')}</h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text-secondary)',
            maxWidth: '500px', margin: '0 auto', lineHeight: 1.7,
          }}>{t('products_subtitle')}</p>
        </div>

        {/* Product Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem', marginBottom: '3rem',
        }}>
          {products.map((p, i) => (
            <div key={i} className="product-card">
              {/* Image placeholder */}
              <div style={{
                background: `linear-gradient(135deg, ${p.color}40, ${p.color}20)`,
                height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
              }}>
                <span style={{ fontSize: '4rem' }}>{p.emoji}</span>
                {/* Badge */}
                <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                  <span className={`badge badge-${p.badgeType}`}>{p.badge}</span>
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '1.25rem' }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                  color: 'var(--color-text-secondary)', letterSpacing: '0.1em',
                  textTransform: 'uppercase', marginBottom: '0.4rem',
                }}>{p.cat}</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600,
                  fontSize: '1.1rem', marginBottom: '0.5rem',
                }}>{p.name}</h3>

                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.75rem' }}>
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} fill={j < Math.floor(p.rating) ? 'var(--color-accent)' : 'none'}
                      style={{ color: 'var(--color-accent)' }} />
                  ))}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginLeft: '0.25rem' }}>
                    {p.rating}
                  </span>
                </div>

                {/* Price + CTA */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700,
                      fontSize: '1.25rem', color: 'var(--color-text)',
                    }}>{p.price}</span>
                    {p.old && !p.old.includes('old_price') && (
                      <span style={{
                        fontFamily: 'var(--font-body)', fontSize: '0.85rem',
                        color: 'var(--color-text-secondary)', textDecoration: 'line-through',
                      }}>{p.old}</span>
                    )}
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>USD</span>
                  </div>
                </div>

                <button className="btn-cart" style={{ marginTop: '1rem' }}>
                  <ShoppingBag size={15} /> {t('products_cta')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div style={{ textAlign: 'center' }}>
          <a href="#" className="btn-secondary" style={{ borderColor: 'var(--color-text)', color: 'var(--color-text)' }}>
            {t('products_view_all')} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

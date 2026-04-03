'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { useScrollAnimation, staggerContainer, fadeInUp, productVariant } from '@/hooks/useScrollAnimation';
import { ShoppingBag, ArrowRight, Star, Check } from 'lucide-react';

export default function Products() {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const { ref, animate } = useScrollAnimation();
  const { ref: gridRef, animate: gridAnimate } = useScrollAnimation();

  const products = [
    { name: t('p1_name'), cat: t('p1_category'), price: t('p1_price'), old: t('p1_old_price'), badge: t('p1_badge'), badgeType: t('p1_badge_type'), color: '#d4a574', emoji: '🏺', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop', rating: 4.9 },
    { name: t('p2_name'), cat: t('p2_category'), price: t('p2_price'), old: t('p2_old_price'), badge: t('p2_badge'), badgeType: t('p2_badge_type'), color: '#8ba58e', emoji: '🧶', image: 'https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?w=400&h=400&fit=crop', rating: 4.8 },
    { name: t('p3_name'), cat: t('p3_category'), price: t('p3_price'), old: t('p3_old_price'), badge: t('p3_badge'), badgeType: t('p3_badge_type'), color: '#c9b896', emoji: '🕯️', image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop', rating: 4.9 },
    { name: t('p4_name'), cat: t('p4_category'), price: t('p4_price'), old: t('p4_old_price'), badge: t('p4_badge'), badgeType: t('p4_badge_type'), color: '#b5906e', emoji: '🍶', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop', rating: 5.0 },
    { name: t('p5_name'), cat: t('p5_category'), price: t('p5_price'), old: t('p5_old_price'), badge: t('p5_badge'), badgeType: t('p5_badge_type'), color: '#a8937a', emoji: '🪢', image: 'https://images.unsplash.com/photo-1622127922040-13cab637ee78?w=400&h=400&fit=crop', rating: 4.7 },
    { name: t('p6_name'), cat: t('p6_category'), price: t('p6_price'), old: t('p6_old_price'), badge: t('p6_badge'), badgeType: t('p6_badge_type'), color: '#c4a882', emoji: '👩‍🍳', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop', rating: 4.8 },
  ];

  return (
    <section id="products" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={animate}
          variants={staggerContainer}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <motion.span
            variants={fadeInUp}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent)',
              letterSpacing: '0.15em', display: 'block', marginBottom: '0.75rem',
            }}
          >{t('products_tag')}</motion.span>
          <motion.div variants={fadeInUp} className="organic-divider-center" style={{ marginBottom: '1.25rem' }} />
          <motion.h2
            variants={fadeInUp}
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '0.75rem',
            }}
          >{t('products_title')}</motion.h2>
          <motion.p
            variants={fadeInUp}
            style={{
              fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text-secondary)',
              maxWidth: '500px', margin: '0 auto', lineHeight: 1.7,
            }}
          >{t('products_subtitle')}</motion.p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridAnimate}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem', marginBottom: '3rem',
          }}
        >
          {products.map((p, i) => (
            <ProductCard key={i} product={p} onAddToCart={addToCart} ctaLabel={t('products_cta')} />
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={gridAnimate === 'visible' ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <motion.a
            href="#"
            className="btn-secondary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ borderColor: 'var(--color-text)', color: 'var(--color-text)' }}
          >
            {t('products_view_all')} <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product: p, onAddToCart, ctaLabel }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (added) return;
    setAdded(true);
    onAddToCart();
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <motion.div
      variants={productVariant}
      className="product-card"
      whileHover={{ y: -8, boxShadow: '0 24px 55px rgba(44, 36, 24, 0.13)', borderColor: 'var(--color-accent)', transition: { duration: 0.3 } }}
    >
      {/* Product image */}
      <div
        style={{
          height: '220px', position: 'relative', overflow: 'hidden',
          background: `linear-gradient(135deg, ${p.color}40, ${p.color}20)`,
        }}
      >
        <motion.img
          src={p.image}
          alt={p.name}
          whileHover={{ scale: 1.08, filter: 'brightness(1.05)' }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.95)', display: 'block' }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextSibling.style.display = 'flex';
          }}
        />
        <span style={{ fontSize: '4rem', display: 'none', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>{p.emoji}</span>

        {/* Badge */}
        <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
          <motion.span
            className={`badge badge-${p.badgeType}`}
            animate={p.badgeType === 'sale'
              ? { opacity: [1, 0.7, 1] }
              : {}
            }
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {p.badge}
          </motion.span>
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

        {/* Price */}
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

        <motion.button
          className="btn-cart"
          onClick={handleAddToCart}
          whileHover={!added ? { background: 'var(--color-accent)', color: '#fff' } : {}}
          whileTap={{ scale: 0.95 }}
          animate={added ? { background: '#5a7a5e', color: '#fff' } : {}}
          transition={{ duration: 0.25 }}
          style={{ marginTop: '1rem', position: 'relative', overflow: 'hidden' }}
        >
          {added ? <Check size={15} /> : <ShoppingBag size={15} />}
          {added ? '✓' : ctaLabel}
          {/* Slide-in reveal overlay */}
          <motion.span
            initial={{ y: '100%' }}
            whileHover={{ y: added ? '100%' : '0%' }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'absolute', inset: 0,
              background: 'var(--color-accent)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '0.4rem', color: '#fff',
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.85rem',
              pointerEvents: 'none',
            }}
          >
            <ShoppingBag size={15} /> {ctaLabel}
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
}

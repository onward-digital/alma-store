'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Truck, Hand, Heart } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const badgeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const categoryVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: {
      type: 'spring',
      stiffness: 160,
      damping: 18,
      delay: 0.3 + i * 0.1,
    },
  }),
};

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const badgesY = useTransform(scrollY, [0, 400], [0, -60]);
  const bgY = useTransform(scrollY, [0, 400], [0, -30]);

  const categories = [
    { overlay: 'rgba(181, 99, 44, 0.35)', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=400&fit=crop', label: t('hero_cat_ceramics') },
    { overlay: 'rgba(90, 122, 94, 0.35)',  image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop', label: t('hero_cat_textiles') },
    { overlay: 'rgba(201, 184, 150, 0.4)', image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop', label: t('hero_cat_candles') },
    { overlay: 'rgba(168, 147, 122, 0.35)', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop', label: t('hero_cat_decor') },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        position: 'relative', overflow: 'hidden', padding: '7rem 1.5rem 4rem',
      }}
    >
      {/* Background blobs with parallax */}
      <motion.div
        style={{
          position: 'absolute', top: '-10%', right: '-15%', width: '50%', height: '70%',
          background: 'radial-gradient(circle, rgba(181, 99, 44, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none', y: bgY,
        }}
      />
      <motion.div
        style={{
          position: 'absolute', bottom: '5%', left: '-5%', width: '35%', height: '40%',
          background: 'radial-gradient(circle, rgba(90, 122, 94, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none', y: bgY,
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Left — text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div
              variants={fadeInUp}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.45rem 1rem', background: 'var(--color-green-light)',
                border: '1px solid rgba(90, 122, 94, 0.15)', borderRadius: '100px',
                marginBottom: '1.75rem', fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem', color: 'var(--color-green)', letterSpacing: '0.1em',
              }}
            >
              <Hand size={14} /> {t('hero_tag')}
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)', lineHeight: 1.1,
                marginBottom: '1.5rem', color: 'var(--color-text)',
              }}
            >
              {t('hero_title_1')}<br />
              <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>{t('hero_title_2')}</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '1.05rem',
                color: 'var(--color-text-secondary)', maxWidth: '480px',
                lineHeight: 1.8, marginBottom: '2rem', fontWeight: 400,
              }}
            >
              {t('hero_subtitle')}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
            >
              <motion.a
                href="#products"
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                {t('hero_cta')} <ArrowRight size={18} />
                {/* Shimmer */}
                <motion.span
                  animate={{ x: ['-120%', '220%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)',
                    pointerEvents: 'none',
                  }}
                />
              </motion.a>
              <motion.a
                href="#story"
                className="btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {t('hero_cta2')}
              </motion.a>
            </motion.div>

            {/* Trust badges with stagger */}
            <motion.div
              variants={stagger}
              style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
            >
              {[
                { icon: <Truck size={16} />, text: t('hero_badge_1') },
                { icon: <Hand size={16} />, text: t('hero_badge_2') },
                { icon: <Heart size={16} />, text: t('hero_badge_3') },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={badgeVariant}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                    color: 'var(--color-text-secondary)', fontWeight: 500,
                  }}
                >
                  <span style={{ color: 'var(--color-green)' }}>{badge.icon}</span>
                  {badge.text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — product category grid */}
          <motion.div
            style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', y: badgesY,
            }}
          >
            {categories.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={categoryVariant}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.3 } }}
                style={{
                  borderRadius: '16px', aspectRatio: '1', overflow: 'hidden',
                  position: 'relative', cursor: 'pointer',
                  transform: i === 0 || i === 3 ? 'translateY(-10px)' : 'translateY(10px)',
                }}
              >
                <motion.img
                  src={item.image}
                  alt={item.label}
                  whileHover={{ scale: 1.08, filter: 'brightness(1.05)' }}
                  transition={{ duration: 0.5 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.9)' }}
                />
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

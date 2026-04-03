'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation, fadeInUp, staggerContainerSlow } from '@/hooks/useScrollAnimation';
import { Hand, Users, Leaf, Truck } from 'lucide-react';

export default function Features() {
  const { t } = useLanguage();
  const { ref, animate } = useScrollAnimation();
  const { ref: gridRef, animate: gridAnimate } = useScrollAnimation();

  const features = [
    { icon: <Hand size={24} />, title: t('f1_title'), desc: t('f1_desc'), color: 'var(--color-accent)' },
    { icon: <Users size={24} />, title: t('f2_title'), desc: t('f2_desc'), color: 'var(--color-green)' },
    { icon: <Leaf size={24} />, title: t('f3_title'), desc: t('f3_desc'), color: 'var(--color-accent)' },
    { icon: <Truck size={24} />, title: t('f4_title'), desc: t('f4_desc'), color: 'var(--color-green)' },
  ];

  return (
    <section id="features" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={animate}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <motion.span
            variants={fadeInUp}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent)',
              letterSpacing: '0.15em', display: 'block', marginBottom: '0.75rem',
            }}
          >{t('features_tag')}</motion.span>
          <motion.div variants={fadeInUp} className="organic-divider-center" style={{ marginBottom: '1.25rem' }} />
          <motion.h2
            variants={fadeInUp}
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            }}
          >{t('features_title')}</motion.h2>
        </motion.div>

        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridAnimate}
          variants={staggerContainerSlow}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="feature-card"
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(44, 36, 24, 0.1)', transition: { duration: 0.3 } }}
              style={{ padding: '2rem', textAlign: 'center' }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
                style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  background: `${f.color}12`, border: `1px solid ${f.color}20`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: f.color, margin: '0 auto 1.25rem',
                }}
              >{f.icon}</motion.div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 600,
                fontSize: '1.1rem', marginBottom: '0.6rem',
              }}>{f.title}</h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                color: 'var(--color-text-secondary)', lineHeight: 1.7,
              }}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

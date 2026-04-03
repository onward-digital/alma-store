'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation, fadeInLeft, fadeInRight } from '@/hooks/useScrollAnimation';

function AnimatedNumber({ target, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime = null;
    const duration = 1500;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };

    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Story() {
  const { t } = useLanguage();
  const { ref: imageRef, animate: imageAnimate } = useScrollAnimation();
  const { ref: textRef, animate: textAnimate } = useScrollAnimation();

  const statDefs = [
    { target: 40, suffix: '+' },
    { target: 6,  suffix: ''  },
    { target: 100, suffix: '%' },
  ];

  const stats = [
    { num: t('story_stat_1_num'), label: t('story_stat_1_label'), ...statDefs[0] },
    { num: t('story_stat_2_num'), label: t('story_stat_2_label'), ...statDefs[1] },
    { num: t('story_stat_3_num'), label: t('story_stat_3_label'), ...statDefs[2] },
  ];

  return (
    <section id="story" className="section-padding">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem', alignItems: 'center',
        }}>
          {/* Image side — fade from left */}
          <motion.div
            ref={imageRef}
            initial="hidden"
            animate={imageAnimate}
            variants={fadeInLeft}
            style={{
              borderRadius: '20px', aspectRatio: '4/5', position: 'relative', overflow: 'hidden',
              background: 'linear-gradient(135deg, #d4a57440, #8ba58e30, #c9b89620)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&h=400&fit=crop"
              alt="Artisan working with ceramics"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.95)', display: 'block' }}
            />
          </motion.div>

          {/* Text side — fade from right */}
          <motion.div
            ref={textRef}
            initial="hidden"
            animate={textAnimate}
            variants={fadeInRight}
          >
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

            {/* Animated stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem',
              padding: '1.5rem 0', borderTop: '1px solid var(--color-border)',
            }}>
              {stats.map((stat, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: '1.8rem', color: 'var(--color-accent)',
                  }}>
                    <AnimatedNumber target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                    color: 'var(--color-text-secondary)', marginTop: '0.15rem',
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

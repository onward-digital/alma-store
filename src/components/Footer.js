'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const { ref, animate } = useScrollAnimation();

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={animate === 'visible' ? { opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      style={{
        background: 'var(--color-text)', color: 'var(--color-bg)',
        padding: '4rem 1.5rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2.5rem', marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Leaf size={20} style={{ color: 'var(--color-accent)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.3rem' }}>
                alma<span style={{ color: 'var(--color-accent)' }}>.</span>
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.85rem',
              color: 'rgba(250, 246, 241, 0.6)', lineHeight: 1.7, maxWidth: '260px',
            }}>{t('footer_desc')}</p>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem' }}>
              {[<Instagram size={17} key="ig" />, <Facebook size={17} key="fb" />, <Twitter size={17} key="tw" />].map((icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)', scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    border: '1px solid rgba(250, 246, 241, 0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(250, 246, 241, 0.5)', textDecoration: 'none',
                  }}
                >{icon}</motion.a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>
              {t('footer_shop')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[t('footer_shop_1'), t('footer_shop_2'), t('footer_shop_3'), t('footer_shop_4')].map((link, i) => (
                <motion.a key={i} href="#"
                  whileHover={{ color: 'var(--color-accent)', x: 3 }}
                  transition={{ duration: 0.2 }}
                  style={{ textDecoration: 'none', color: 'rgba(250, 246, 241, 0.5)', fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}
                >{link}</motion.a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>
              {t('footer_company')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[t('footer_company_1'), t('footer_company_2'), t('footer_company_3')].map((link, i) => (
                <motion.a key={i} href="#"
                  whileHover={{ color: 'var(--color-accent)', x: 3 }}
                  transition={{ duration: 0.2 }}
                  style={{ textDecoration: 'none', color: 'rgba(250, 246, 241, 0.5)', fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}
                >{link}</motion.a>
              ))}
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>
              {t('footer_help')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[t('footer_help_1'), t('footer_help_2'), t('footer_help_3')].map((link, i) => (
                <motion.a key={i} href="#"
                  whileHover={{ color: 'var(--color-accent)', x: 3 }}
                  transition={{ duration: 0.2 }}
                  style={{ textDecoration: 'none', color: 'rgba(250, 246, 241, 0.5)', fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}
                >{link}</motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(250, 246, 241, 0.1)', paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(250, 246, 241, 0.4)' }}>
            © {new Date().getFullYear()} Alma Store. {t('footer_rights')}
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(250, 246, 241, 0.25)' }}>
            Powered by Onward Digital
          </span>
        </div>
      </div>
    </motion.footer>
  );
}

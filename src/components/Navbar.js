'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { Menu, X, Globe, ShoppingBag, Leaf } from 'lucide-react';

export default function Navbar() {
  const { lang, t, toggleLang } = useLanguage();
  const { cartCount, cartBounce } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#products', label: t('nav_shop') },
    { href: '#story', label: t('nav_about') },
    { href: '#features', label: t('nav_featured') },
    { href: '#reviews', label: t('nav_reviews') },
  ];

  return (
    <motion.nav
      initial={false}
      animate={{
        padding: scrolled ? '0.6rem 1.5rem' : '1rem 1.5rem',
        background: scrolled ? 'rgba(250, 246, 241, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
        boxShadow: scrolled ? '0 1px 20px rgba(44, 36, 24, 0.08)' : '0 0px 0px transparent',
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Leaf size={24} style={{ color: 'var(--color-green)' }} />
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.4rem',
            color: 'var(--color-text)', letterSpacing: '-0.02em',
          }}>
            alma<span style={{ color: 'var(--color-accent)' }}>.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}

          <motion.button
            onClick={toggleLang}
            whileHover={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.3rem',
              background: 'transparent', border: '1px solid var(--color-border)',
              borderRadius: '100px', padding: '0.35rem 0.7rem',
              color: 'var(--color-text-secondary)', cursor: 'pointer',
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem', transition: 'all 0.3s',
            }}
          >
            <Globe size={13} />{lang === 'en' ? 'ES' : 'EN'}
          </motion.button>

          {/* Cart */}
          <motion.button
            whileTap={{ rotate: [-5, 5, -3, 0], transition: { duration: 0.4 } }}
            style={{
              position: 'relative', background: 'none', border: 'none',
              color: 'var(--color-text)', cursor: 'pointer', padding: '0.25rem',
            }}
          >
            <ShoppingBag size={22} />
            <AnimatePresence mode="popLayout">
              <motion.span
                key={cartCount}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={cartBounce
                  ? { scale: [1, 1.35, 0.9, 1], opacity: 1 }
                  : { scale: 1, opacity: 1 }
                }
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: 'absolute', top: '-4px', right: '-6px',
                  width: '18px', height: '18px', borderRadius: '50%',
                  background: 'var(--color-accent)', color: '#fff',
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700,
                }}
              >
                {cartCount}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile */}
        <div className="md:hidden" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <motion.button
            whileTap={{ rotate: [-5, 5, -3, 0], transition: { duration: 0.4 } }}
            style={{ position: 'relative', background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer' }}
          >
            <ShoppingBag size={20} />
            <AnimatePresence mode="popLayout">
              <motion.span
                key={cartCount}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={cartBounce ? { scale: [1, 1.35, 0.9, 1], opacity: 1 } : { scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: 'absolute', top: '-4px', right: '-6px',
                  width: '16px', height: '16px', borderRadius: '50%',
                  background: 'var(--color-accent)', color: '#fff',
                  fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700,
                }}
              >
                {cartCount}
              </motion.span>
            </AnimatePresence>
          </motion.button>
          <button onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer' }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            style={{
              overflow: 'hidden',
              background: 'rgba(250, 246, 241, 0.98)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--color-border)',
            }}
            className="md:hidden"
          >
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                  style={{ textDecoration: 'none', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '1rem', padding: '0.5rem 0' }}>
                  {link.label}
                </a>
              ))}
              <button onClick={() => { toggleLang(); setIsOpen(false); }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', border: 'none', color: 'var(--color-accent)', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', padding: '0.5rem 0' }}>
                <Globe size={16} />{lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({ href, label }) {
  return (
    <a
      href={href}
      style={{ textDecoration: 'none', position: 'relative', display: 'inline-block' }}
    >
      <motion.span
        initial={{ color: 'var(--color-text-secondary)' }}
        whileHover={{ color: 'var(--color-accent)' }}
        transition={{ duration: 0.2 }}
        style={{
          fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 500,
          display: 'block',
        }}
      >
        {label}
      </motion.span>
      {/* Animated underline */}
      <motion.span
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
        style={{
          position: 'absolute', bottom: '-2px', left: 0, right: 0,
          height: '1.5px', background: 'var(--color-accent)',
          transformOrigin: 'center',
          display: 'block',
        }}
      />
    </a>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, Globe, ShoppingBag, Leaf } from 'lucide-react';

export default function Navbar() {
  const { lang, t, toggleLang } = useLanguage();
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
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '0.6rem 1.5rem' : '1rem 1.5rem',
      background: scrolled ? 'rgba(250, 246, 241, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
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

        {/* Desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} style={{
              textDecoration: 'none', color: 'var(--color-text-secondary)',
              fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 500, transition: 'color 0.3s',
            }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
            >{link.label}</a>
          ))}

          <button onClick={toggleLang} style={{
            display: 'flex', alignItems: 'center', gap: '0.3rem',
            background: 'transparent', border: '1px solid var(--color-border)',
            borderRadius: '100px', padding: '0.35rem 0.7rem',
            color: 'var(--color-text-secondary)', cursor: 'pointer',
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem', transition: 'all 0.3s',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
          >
            <Globe size={13} />{lang === 'en' ? 'ES' : 'EN'}
          </button>

          {/* Cart */}
          <button style={{
            position: 'relative', background: 'none', border: 'none',
            color: 'var(--color-text)', cursor: 'pointer', padding: '0.25rem',
          }}>
            <ShoppingBag size={22} />
            <span style={{
              position: 'absolute', top: '-4px', right: '-6px',
              width: '18px', height: '18px', borderRadius: '50%',
              background: 'var(--color-accent)', color: '#fff',
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700,
            }}>3</span>
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button style={{ position: 'relative', background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer' }}>
            <ShoppingBag size={20} />
            <span style={{
              position: 'absolute', top: '-4px', right: '-6px',
              width: '16px', height: '16px', borderRadius: '50%',
              background: 'var(--color-accent)', color: '#fff',
              fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700,
            }}>3</span>
          </button>
          <button onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer' }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(250, 246, 241, 0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--color-border)', padding: '1.5rem',
          display: 'flex', flexDirection: 'column', gap: '1rem',
        }} className="md:hidden">
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
      )}
    </nav>
  );
}

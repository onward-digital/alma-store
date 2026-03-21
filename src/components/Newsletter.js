'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const { t } = useLanguage();

  return (
    <section style={{
      padding: '5rem 1.5rem', background: 'var(--color-bg-secondary)',
    }}>
      <div style={{
        maxWidth: '700px', margin: '0 auto', textAlign: 'center',
        background: 'var(--color-bg-card)', borderRadius: '20px',
        padding: '3.5rem 2.5rem', border: '1px solid var(--color-border)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px',
          borderRadius: '50%', background: 'rgba(181, 99, 44, 0.05)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-15px', left: '-15px', width: '80px', height: '80px',
          borderRadius: '50%', background: 'rgba(90, 122, 94, 0.05)',
        }} />

        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '0.75rem',
          position: 'relative',
        }}>{t('newsletter_title')}</h2>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '0.95rem',
          color: 'var(--color-text-secondary)', maxWidth: '450px',
          margin: '0 auto 2rem', lineHeight: 1.7, position: 'relative',
        }}>{t('newsletter_subtitle')}</p>

        <div style={{
          display: 'flex', gap: '0.75rem', maxWidth: '420px', margin: '0 auto',
          position: 'relative', flexWrap: 'wrap', justifyContent: 'center',
        }}>
          <input type="email" placeholder={t('newsletter_placeholder')} style={{
            flex: 1, minWidth: '200px', padding: '0.85rem 1.25rem',
            background: 'var(--color-bg)', border: '1px solid var(--color-border)',
            borderRadius: '100px', color: 'var(--color-text)',
            fontFamily: 'var(--font-body)', fontSize: '0.9rem', outline: 'none',
            transition: 'border-color 0.3s',
          }}
            onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
          />
          <button className="btn-primary" onClick={() => alert('Subscribed! (Demo)')}>
            {t('newsletter_cta')} <Send size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

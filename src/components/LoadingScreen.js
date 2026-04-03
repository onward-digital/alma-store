'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const letters = ['a', 'l', 'm', 'a', '.'];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'var(--color-bg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          {/* Logo with handwritten effect */}
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 18, rotate: -4 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.13,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '3rem',
                  letterSpacing: '-0.02em',
                  color: letter === '.' ? 'var(--color-accent)' : 'var(--color-text)',
                  display: 'inline-block',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Pulsing dots */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.1, 0.8] }}
                transition={{
                  duration: 1.0,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--color-accent)',
                  display: 'block',
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

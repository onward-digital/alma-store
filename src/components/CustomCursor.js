'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [variant, setVariant] = useState('default');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 250, damping: 25 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover)');
    if (!mq.matches) return;
    setIsDesktop(true);

    const onMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);

    const bindTargets = () => {
      document.querySelectorAll('.product-card').forEach((el) => {
        el.addEventListener('mouseenter', () => setVariant('product'));
        el.addEventListener('mouseleave', () => setVariant('default'));
      });
      document.querySelectorAll('.btn-cart').forEach((el) => {
        el.addEventListener('mouseenter', () => setVariant('cart'));
        el.addEventListener('mouseleave', () => setVariant('default'));
      });
      document.querySelectorAll('a:not(.product-card), button:not(.btn-cart)').forEach((el) => {
        el.addEventListener('mouseenter', () => setVariant((v) => (v === 'default' ? 'link' : v)));
        el.addEventListener('mouseleave', () => setVariant('default'));
      });
    };

    // Bind after components have mounted
    setTimeout(bindTargets, 600);

    return () => window.removeEventListener('mousemove', onMove);
  }, [cursorX, cursorY]);

  if (!isDesktop) return null;

  const circleVariants = {
    default: { width: 35, height: 35, borderRadius: '50%', opacity: 0.55 },
    product: { width: 46, height: 46, borderRadius: '25%', opacity: 0.75 },
    cart:    { width: 52, height: 52, borderRadius: '50%', opacity: 0.85 },
    link:    { width: 44, height: 44, borderRadius: '50%', opacity: 0.65 },
  };

  return (
    <>
      {/* Small dot — follows cursor exactly */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 99999,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'var(--color-accent)',
        }}
      />
      {/* Outer circle — spring-follows with variants */}
      <motion.div
        animate={variant}
        variants={circleVariants}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 99998,
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          border: '1.5px solid var(--color-accent)',
          background: 'transparent',
        }}
      />
    </>
  );
}

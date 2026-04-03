'use client';

import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(3);
  const [cartBounce, setCartBounce] = useState(false);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
    setCartBounce(true);
    setTimeout(() => setCartBounce(false), 600);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, cartBounce }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

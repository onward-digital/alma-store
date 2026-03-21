'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Story from '@/components/Story';
import Features from '@/components/Features';
import Reviews from '@/components/Reviews';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Story />
      <Features />
      <Reviews />
      <Newsletter />
      <Footer />
    </main>
  );
}

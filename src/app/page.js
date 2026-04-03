'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Story from '@/components/Story';
import Features from '@/components/Features';
import Reviews from '@/components/Reviews';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import SectionWave from '@/components/SectionWave';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <main>
        <Navbar />
        <Hero />
        <SectionWave fillColor="var(--color-bg-secondary)" />
        <Products />
        <SectionWave fillColor="var(--color-bg)" flip />
        <Story />
        <SectionWave fillColor="var(--color-bg-secondary)" />
        <Features />
        <SectionWave fillColor="var(--color-bg)" flip />
        <Reviews />
        <SectionWave fillColor="var(--color-bg-secondary)" />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}

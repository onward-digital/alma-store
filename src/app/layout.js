import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata = {
  title: 'Alma Store — Handcrafted Goods for Mindful Living',
  description: 'Discover handmade ceramics, textiles, and home goods crafted by independent artisans across Latin America.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

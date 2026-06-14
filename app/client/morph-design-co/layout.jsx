import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  weight: ['400', '600', '700', '800', '900'] 
});

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'] 
});

export const metadata = {
  title: 'Morph Design Co. | Premium Avant-Garde & Art Deco Interior Architecture',
  description: 'Elevate your living spaces with Morph Design Co. Premium, bespoke interior design in Hyderabad and Bangalore featuring rich geometric patterns, deep emerald green, and luxury metallic gold accents.',
  openGraph: {
    title: 'Morph Design Co. | Premium Avant-Garde & Art Deco Interior Architecture',
    description: 'Elevate your living spaces with Morph Design Co. Premium, bespoke interior design in Hyderabad and Bangalore featuring rich geometric patterns, deep emerald green, and luxury metallic gold accents.',
    url: 'https://salesmachine.yourgwd.com/client/morph-design-co',
    siteName: 'Morph Design Co.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Morph Design Co. Avant-Garde Interior Living Space'
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function MorphLayout({ children }) {
  return (
    <div className={`${playfair.variable} ${inter.variable} min-h-screen bg-[#04160E] text-[#F3EFE0] font-sans antialiased`}>
      {children}
    </div>
  );
}

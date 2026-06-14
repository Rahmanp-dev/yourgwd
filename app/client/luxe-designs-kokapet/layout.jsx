import { Cinzel, Playfair_Display, Inter } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700', '800', '900']
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600']
});

export const metadata = {
  title: 'Luxe Designs Kokapet | Neo-Classical & French Luxury Interiors',
  description: 'Bespoke interior design studio in Kokapet, Hyderabad. Experience Neo-Classical elegance, French luxury, champagne gold accents, and rich bronze details tailored for premium residences.',
  openGraph: {
    title: 'Luxe Designs Kokapet | Premium Interior Architecture',
    description: 'Transforming premium villas and luxury apartments in Kokapet with champagne gold accents, marble surfaces, and editorial French neo-classical layouts.',
    url: 'https://salesmachine.yourgwd.com/client/luxe-designs-kokapet',
    siteName: 'Luxe Designs Kokapet',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Luxe Designs Kokapet - Luxury Neo-Classical Living Space'
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function LuxeDesignsLayout({ children }) {
  return (
    <div className={`${cinzel.variable} ${playfair.variable} ${inter.variable} min-h-screen bg-[#FCFAF6] text-[#2C2520] font-sans antialiased`}>
      {children}
    </div>
  );
}

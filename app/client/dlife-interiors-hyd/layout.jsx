import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: "D'LIFE Interiors | Luxury Art Deco Home Design Hyderabad",
  description: "Bespoke Art Deco and luxury residential interior designs in Attapur, Hyderabad. Custom material fitouts, gold-leaf details, and premium spatial styling.",
  openGraph: {
    title: "D'LIFE Interiors | Luxury Art Deco Home Design Hyderabad",
    description: "Bespoke Art Deco and luxury residential interior designs in Attapur, Hyderabad. Custom material fitouts, gold-leaf details, and premium spatial styling.",
    url: 'https://sales-machine.gwd.dev/client/dlife-interiors-hyd',
    siteName: "D'LIFE Interiors Attapur",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: "D'LIFE Interiors Luxury Art Deco Design Preview",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function DLifeInteriorsLayout({ children }) {
  return (
    <div className={`${playfair.variable} ${inter.variable} min-h-screen bg-[#021f1a] text-[#fbf8f3]`}>
      {children}
    </div>
  );
}

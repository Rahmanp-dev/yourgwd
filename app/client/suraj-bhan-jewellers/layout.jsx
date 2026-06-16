import { Cinzel, Inter } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700', '800', '900']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: 'Suraj Bhan Jewellers | Heritage Temple & Gold Jewellery Hyderabad',
  description: 'Exquisite, handcrafted traditional gold, gemstone, and temple jewelry since 1952. Discover our signature collections at Pathergatti, Near Charminar, Hyderabad.',
  openGraph: {
    title: 'Suraj Bhan Jewellers',
    description: 'Heritage temple, gold, and gemstone jewelry. Discover our signature collections at Pathergatti, Near Charminar, Hyderabad.',
    url: 'https://gwd-sales.com/client/suraj-bhan-jewellers',
    siteName: 'Suraj Bhan Jewellers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Suraj Bhan Jewellers Signature Collection'
      }
    ]
  }
};

export default function SurajBhanLayout({ children }) {
  return (
    <div className={`${cinzel.variable} ${inter.variable} font-sans min-h-screen bg-[#FAF9F6] text-[#27352B] antialiased`}>
      {children}
    </div>
  );
}

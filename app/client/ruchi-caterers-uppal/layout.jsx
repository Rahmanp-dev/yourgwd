import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: 'Ruchi Caterers | Premium Wedding & Event Catering Uppal',
  description: 'Experience classic culinary elegance in Uppal, Hyderabad. Offering royal traditional feasts, premium corporate catering, and bespoke wedding menus with pristine hygiene standards.',
  openGraph: {
    title: 'Ruchi Caterers | Premium Wedding & Event Catering Uppal',
    description: 'Experience classic culinary elegance in Uppal, Hyderabad. Offering royal traditional feasts, premium corporate catering, and bespoke wedding menus with pristine hygiene standards.',
    url: 'https://yourgwd.vercel.app/client/ruchi-caterers-uppal',
    siteName: 'Ruchi Caterers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Ruchi Caterers Premium Banquets'
      }
    ]
  }
};

export default function RuchiCaterersLayout({ children }) {
  return (
    <div className={`${playfair.variable} ${inter.variable} min-h-screen bg-[#FAFAF7] text-[#2C2C2C] antialiased`} style={{ fontFamily: 'var(--font-inter)' }}>
      {children}
    </div>
  );
}

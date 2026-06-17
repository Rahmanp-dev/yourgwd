import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700']
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'Balaji Caterers | Grand Vegetarian Event Catering Uppal',
  description: 'Pure vegetarian culinary excellence in Uppal, Hyderabad. Serving premium wedding buffets, corporate banquets, and high-class family events with strict hygiene and gourmet fusion menus.',
  openGraph: {
    title: 'Balaji Caterers | Grand Vegetarian Event Catering Uppal',
    description: 'Pure vegetarian culinary excellence in Uppal, Hyderabad. Serving premium wedding buffets, corporate banquets, and high-class family events with strict hygiene and gourmet fusion menus.',
    url: 'https://yourgwd.vercel.app/client/balaji-caterers-uppal',
    siteName: 'Balaji Caterers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Balaji Caterers Pure Vegetarian Feast'
      }
    ]
  }
};

export default function BalajiCaterersLayout({ children }) {
  return (
    <div className={`${cormorant.variable} ${plusJakarta.variable} min-h-screen bg-[#FAFAF7] text-[#2D2D2D] antialiased`} style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
      {children}
    </div>
  );
}

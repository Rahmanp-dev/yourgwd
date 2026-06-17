import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800']
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'Annapurna Caterers | Royal Traditional Feasts & Catering in Uppal, Hyderabad',
  description: 'Experience Hyderabad\'s grandest culinary legacy. Premium wedding catering, traditional vegetarian and non-vegetarian royal feasts, and live counters with pristine hygiene standards in Uppal.',
  openGraph: {
    title: 'Annapurna Caterers | Royal Traditional Feasts & Catering in Uppal, Hyderabad',
    description: 'Experience Hyderabad\'s grandest culinary legacy. Premium wedding catering, traditional vegetarian and non-vegetarian royal feasts, and live counters with pristine hygiene standards in Uppal.',
    url: 'https://yourgwd.vercel.app/client/annapurna-caterers-uppal',
    siteName: 'Annapurna Caterers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Annapurna Caterers Royal Banquet Spread'
      }
    ]
  }
};

export default function AnnapurnaCaterersLayout({ children }) {
  return (
    <div className={`${playfair.variable} ${plusJakarta.variable} font-sans min-h-screen bg-[#FFFDFD] text-[#332C2A] antialiased`}>
      {children}
    </div>
  );
}

import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800']
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: 'Shri Lakshmi Caterers Uppal | Traditional Wedding Catering Hyderabad',
  description: 'Legendary Telugu feasts, grand wedding catering, and traditional wood-fired recipes. Sourced with organic farm-to-table ingredients in Uppal, Hyderabad.',
  openGraph: {
    title: 'Shri Lakshmi Caterers Uppal | Traditional Wedding Catering',
    description: 'Experience authentic Telugu culinary heritage. Legendary feasts, wood-fired slow cooking, and ISO-certified hygiene standards in Uppal, Hyderabad.',
    url: 'https://yourgwd.vercel.app/client/shri-lakshmi-caterers-uppal',
    siteName: 'Shri Lakshmi Caterers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Shri Lakshmi Caterers Traditional South Indian Feast'
      }
    ]
  }
};

export default function ShriLakshmiCaterersLayout({ children }) {
  return (
    <div className={`${playfair.variable} ${plusJakarta.variable} font-sans min-h-screen bg-[#FCFBF9] text-[#1E3F20] antialiased`}>
      {children}
    </div>
  );
}

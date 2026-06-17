import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  weight: ['400', '600', '700', '900'] 
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'] 
});

export const metadata = {
  title: 'Amba Ji Sri Panchamukhi Caterers | Premium Catering in Uppal, Hyderabad',
  description: 'Experience Hyderabad\'s premium traditional catering legacy. Exquisite North & South Indian feasts, flawless hygiene standards, and client-tailored menus in Uppal.',
  openGraph: {
    title: 'Amba Ji Sri Panchamukhi Caterers | Traditional Feasts in Uppal',
    description: 'Experience Hyderabad\'s premium traditional catering legacy. Exquisite North & South Indian feasts, flawless hygiene standards, and client-tailored menus in Uppal.',
    url: 'https://yourgwd.vercel.app/client/amba-ji-caterers-uppal',
    siteName: 'Amba Ji Sri Panchamukhi Caterers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Amba Ji Sri Panchamukhi Caterers Royal Traditional Feast Setup'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  }
};

export default function AmbaJiCaterersLayout({ children }) {
  return (
    <div className={`${playfair.variable} ${jakarta.variable} min-h-screen bg-[#FAF9F6] text-[#2C2C2C] antialiased`}>
      {children}
    </div>
  );
}

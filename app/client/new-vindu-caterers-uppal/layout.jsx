import { Cinzel, Plus_Jakarta_Sans } from 'next/font/google';

const displayFont = Cinzel({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800', '900']
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'New Vindu Caterers | Premium Wedding & Event Catering in Uppal, Hyderabad',
  description: 'Experience authentic Telugu culinary heritage. From grand wedding feasts to corporate events, we bring legendary Andhra & Telangana wood-fired flavors to your tables in Uppal, Gachibowli & Secunderabad.',
  openGraph: {
    title: 'New Vindu Caterers - Royal Telugu Culinary Feasts',
    description: 'Authentic Telugu culinary heritage, royal wood-fired catering, and premium event services in Uppal, Hyderabad.',
    url: 'https://yourgwd.vercel.app/client/new-vindu-caterers-uppal',
    siteName: 'New Vindu Caterers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Royal Telugu Feast by New Vindu Caterers'
      }
    ]
  }
};

export default function VinduCaterersLayout({ children }) {
  return (
    <div className={`${displayFont.variable} ${bodyFont.variable} font-sans min-h-screen bg-[#FAF5EC] text-[#800020] antialiased`}>
      {children}
    </div>
  );
}

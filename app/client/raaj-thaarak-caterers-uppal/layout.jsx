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
  title: 'Raaj Thaarak Caterers | Aristocratic Banquets & Plated Service in Uppal, Hyderabad',
  description: 'Gourmet Telugu heritage catering with a modern plated presentation. Dedicated Satvik vegetarian and royal non-vegetarian dining for high-end weddings, engagements, and corporate galas in Hyderabad.',
  openGraph: {
    title: 'Raaj Thaarak Caterers - Aristocratic Flavors & Imperial Dining',
    description: 'Bespoke Telugu fine dining, silver-service plating, and premium event curation in Uppal, Hyderabad.',
    url: 'https://yourgwd.vercel.app/client/raaj-thaarak-caterers-uppal',
    siteName: 'Raaj Thaarak Caterers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Royal Plated Banquet by Raaj Thaarak Caterers'
      }
    ]
  }
};

export default function RaajThaarakCaterersLayout({ children }) {
  return (
    <div className={`${displayFont.variable} ${bodyFont.variable} font-sans min-h-screen bg-[#FAF5EC] text-[#800020] antialiased`}>
      {children}
    </div>
  );
}

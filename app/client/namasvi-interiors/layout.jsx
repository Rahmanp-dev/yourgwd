import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: 'Namasvi Interiors Attapur | Bespoke Biophilic & Organic Luxury Interiors',
  description: 'Experience nature-integrated luxury with Namasvi Interiors in Attapur, Hyderabad. Biophilic design, organic botanical aesthetics, and premium green home transformations.',
  openGraph: {
    title: 'Namasvi Interiors Attapur | Bespoke Biophilic & Organic Luxury Interiors',
    description: 'Experience nature-integrated luxury with Namasvi Interiors in Attapur, Hyderabad. Biophilic design, organic botanical aesthetics, and premium green home transformations.',
    url: 'https://salesmachine.yourgwd.com/client/namasvi-interiors',
    siteName: 'Namasvi Interiors',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Namasvi Interiors Biophilic Living Room Design'
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function NamasviLayout({ children }) {
  return (
    <div className={`${playfair.variable} ${inter.variable} min-h-screen bg-[#F4F8F4] text-[#1E3F20] font-sans antialiased`}>
      {children}
    </div>
  );
}

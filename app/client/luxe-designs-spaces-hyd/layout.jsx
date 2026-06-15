import { Cinzel, Playfair_Display, Inter } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700', '800', '900']
});

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
  title: 'Luxe Designs & Spaces | Neo-Classical & French Luxury Interiors Attapur',
  description: 'Private interior architecture studio in Attapur, Hyderabad. Specializing in Neo-Classical elegance, French luxury paneling, champagne gold trims, and rich bronze details.',
  openGraph: {
    title: 'Luxe Designs & Spaces | Premium French Classical Interiors Hyderabad',
    description: 'Transforming premium villas and elite apartments in Attapur with custom wainscoting, marble features, champagne gold leaves, and grand editorial layouts.',
    url: 'https://salesmachine.yourgwd.com/client/luxe-designs-spaces-hyd',
    siteName: 'Luxe Designs & Spaces',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Luxe Designs & Spaces - French Neo-Classical Luxury Living Salon'
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function LuxeDesignsLayout({ children }) {
  return (
    <div className={`${cinzel.variable} ${playfair.variable} ${inter.variable} min-h-screen bg-[#FAFAFA] text-[#4A3B32] font-sans antialiased`}>
      {children}
    </div>
  );
}

import { Outfit, Inter } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'Swagath Caterers | Premium Fusion Catering & Live Counters in Uppal, Hyderabad',
  description: 'Contemporary gourmet catering, artisanal live counter stations, and modern fusion banquets in Uppal, Hyderabad. Perfect for luxury weddings, corporate events, and boutique parties.',
  openGraph: {
    title: 'Swagath Caterers | Premium Fusion Catering & Live Counters in Uppal, Hyderabad',
    description: 'Contemporary gourmet catering, artisanal live counter stations, and modern fusion banquets in Uppal, Hyderabad. Perfect for luxury weddings, corporate events, and boutique parties.',
    url: 'https://yourgwd.vercel.app/client/swagath-caterers-uppal',
    siteName: 'Swagath Caterers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1530101121896-274f02f5a844?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Swagath Caterers Premium Live Catering'
      }
    ]
  }
};

export default function SwagathCaterersLayout({ children }) {
  return (
    <div className={`${outfit.variable} ${inter.variable} font-body min-h-screen bg-[#FFFDFD] text-[#2C2523] antialiased`}>
      {children}
    </div>
  );
}

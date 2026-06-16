import { Plus_Jakarta_Sans, Inter } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: 'Boom Interiors | Smart & Pastel Glassmorphic Interior Design',
  description: 'Bespoke modular interior design lounge in Attapur, Hyderabad. Experience modern pastel glassmorphic spaces, smart home systems, and dynamic budget planning with a 45-day delivery guarantee.',
  openGraph: {
    title: 'Boom Interiors | Smart Home & Pastel Glassmorphic Interiors',
    description: 'Transforming modern apartments and villas in Attapur with frosted glass aesthetics, pastel pink/purple/blue gradients, and seamless modular woodwork.',
    url: 'https://salesmachine.yourgwd.com/client/homelane-attapur',
    siteName: 'Boom Interiors',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Boom Interiors - Modern Smart Living Room with Frosted Pastel Accents'
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function BoomInteriorsLayout({ children }) {
  return (
    <div className={`${plusJakarta.variable} ${inter.variable} min-h-screen bg-[#0b0c16] text-[#e0e2ee] font-sans antialiased overflow-x-hidden`}>
      {children}
    </div>
  );
}

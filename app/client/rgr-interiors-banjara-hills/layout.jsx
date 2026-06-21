import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

export const metadata = {
  title: 'RGR Interiors & Designers | Luxury Interiors Banjara Hills',
  description: 'Principal Designer Rajgopal Reddy crafts bespoke platinum premium luxury residences in Banjara Hills, Hyderabad. Specializing in exquisite woodwork, false ceilings, and custom kitchens.',
  openGraph: {
    title: 'RGR Interiors & Designers | Luxury Interiors Banjara Hills',
    description: 'Principal Designer Rajgopal Reddy crafts bespoke platinum premium luxury residences in Banjara Hills, Hyderabad. Specializing in exquisite woodwork, false ceilings, and custom kitchens.',
    url: 'https://gwd-sales.com/client/rgr-interiors-banjara-hills',
    siteName: 'RGR Interiors & Designers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'RGR Interiors Luxury Living Room'
      }
    ]
  }
};

export default function RgrInteriorsLayout({ children }) {
  return (
    <div className={`${cormorant.variable} ${plusJakarta.variable} font-sans min-h-screen bg-[#F9F9F6] text-[#2E2B2A] antialiased`}>
      {children}
    </div>
  );
}

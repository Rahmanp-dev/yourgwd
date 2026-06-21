import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: 'Design Edge | Corporate Offices & Luxury Residential Banjara Hills',
  description: 'Bespoke turnkey interiors, luxury residential designs, and modern corporate offices by Ram K. Mahidhar in Banjara Hills, Hyderabad.',
  openGraph: {
    title: 'Design Edge - Banjara Hills',
    description: 'Bespoke turnkey interiors, luxury residential designs, and modern corporate offices by Ram K. Mahidhar in Banjara Hills, Hyderabad.',
    url: 'https://gwd-sales.com/client/design-edge-banjara-hills',
    siteName: 'Design Edge',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Design Edge Turnkey Commercial Office'
      }
    ]
  }
};

export default function DesignEdgeLayout({ children }) {
  return (
    <div className={`${quicksand.variable} font-sans min-h-screen bg-[#E8F8F5] text-[#1E3F20] antialiased`}>
      <style>{`
        .font-quicksand {
          font-family: var(--font-quicksand), sans-serif;
        }
      `}</style>
      {children}
    </div>
  );
}

import { Plus_Jakarta_Sans, Inter } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '600', '700', '800']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: 'Spice Route Cloud Kitchen | Gourmet Fusion Catering Uppal, Hyderabad',
  description: 'Gourmet coastal, pan-Asian, and North Indian fusion catering in Uppal, Hyderabad. Smart hygiene protocols, custom corporate packages, and award-winning chef expertise.',
  openGraph: {
    title: 'Spice Route Cloud Kitchen | Gourmet Catering Hyderabad',
    description: 'Distinctive fusion catering trace from Malabar Coast to Hyderabad. Instant pricing calculator for weddings and corporate gatherings.',
    url: 'https://yourgwd.vercel.app/client/spice-route-cloud-kitchen-uppal',
    siteName: 'Spice Route Cloud Kitchen',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Spice Route Cloud Kitchen Fusion Platter'
      }
    ]
  }
};

export default function SpiceRouteLayout({ children }) {
  return (
    <div className={`${plusJakarta.variable} ${inter.variable} font-[family-name:var(--font-inter)] min-h-screen bg-[#F8FAFC] text-[#334155] antialiased`}>
      {children}
    </div>
  );
}

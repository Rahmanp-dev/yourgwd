import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Sri Skin & Cosmetology Centre | Dr. D. Sudha Vani | Banjara Hills, Hyderabad',
  description: 'Premium dermatology & laser clinic by senior dermatologist Dr. D. Sudha Vani (MBBS, MD). Specializing in Vitiligo light therapy (PUVA/NBUVB), Q-switched laser, and skin tightening in Road No. 12, Hyderabad.',
  openGraph: {
    title: 'Sri Skin & Cosmetology Centre | Advanced Dermatology Hyderabad',
    description: 'Expert skin treatments by Dr. D. Sudha Vani. Vitiligo light therapy (PUVA/NBUVB), Q-switched laser resurfacing, and advanced skin tightening. Book your appointment today.',
    url: 'https://gwd-sales.com/client/sri-skin-clinic-banjara-hills',
    siteName: 'Sri Skin & Cosmetology Centre',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Sri Skin & Cosmetology Centre Treatment Suite',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function SriSkinBanjaraHillsLayout({ children }) {
  return (
    <div className={`${nunito.variable} font-sans min-h-screen bg-gradient-to-tr from-[#FFF7F5] via-[#FFFBFB] to-[#FFEBE6] text-[#2D2A2A] antialiased`}>
      {children}
    </div>
  );
}

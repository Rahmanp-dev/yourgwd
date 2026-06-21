import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Riyaanz Aesthetic | Dr. Namitha | Banjara Hills, Hyderabad',
  description: 'Premium aesthetic clinic by Cosmetologist Dr. Namitha in Road No. 12, Banjara Hills. Specialized in laser hair removal, weight loss treatments, and advanced skin tightening.',
  openGraph: {
    title: 'Riyaanz Aesthetic | Dr. Namitha | Banjara Hills',
    description: 'Advanced cosmetology and aesthetic solutions by Dr. Namitha. Laser hair removal, weight loss treatments, and skin tightening. Lavender Glassmorphism style.',
    url: 'https://gwd-sales.com/client/riyaanz-aesthetic-banjara-hills',
    siteName: 'Riyaanz Aesthetic',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Riyaanz Aesthetic Consultation Suite',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RiyaanzAestheticLayout({ children }) {
  return (
    <div className={`${outfit.variable} font-sans min-h-screen bg-violet-50/30 text-slate-800 antialiased`}>
      {children}
    </div>
  );
}

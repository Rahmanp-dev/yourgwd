import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'Transform Skin & Cosmetic Clinic | Dr. Madhuri T J | Banjara Hills, Hyderabad',
  description: 'Premium skin and cosmetic treatments by Dr. Madhuri T J (MBBS, DVL) in Road No. 3, Banjara Hills. Specialized in pigmentation treatment, laser scar revision, and anti-aging therapy.',
  openGraph: {
    title: 'Transform Skin & Cosmetic Clinic | Dr. Madhuri T J | Banjara Hills',
    description: 'Expert dermatological treatments by Dr. Madhuri T J. Pigmentation treatment, laser scar revision, anti-aging therapies. Clean Medical Mint design.',
    url: 'https://gwd-sales.com/client/transform-skin-clinic-banjara-hills',
    siteName: 'Transform Skin & Cosmetic Clinic',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Transform Skin & Cosmetic Clinic',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function TransformSkinClinicLayout({ children }) {
  return (
    <div className={`${plusJakartaSans.variable} font-sans min-h-screen bg-white text-slate-800 antialiased`}>
      {children}
    </div>
  );
}

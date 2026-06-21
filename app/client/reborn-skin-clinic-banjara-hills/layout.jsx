import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'Reborn Skin & Hair Clinic | Dr. Kakollu Sravani | Banjara Hills',
  description: 'Experience premium, customized skincare and advanced trichology at Reborn Skin & Hair Clinic, Banjara Hills, Hyderabad. Led by Dr. Kakollu Sravani, MD (DVL). book your consultation.',
  openGraph: {
    title: 'Reborn Skin & Hair Clinic - Banjara Hills',
    description: 'Transform your skin and hair with advanced Laser hair removal, PRP hair therapy, and Chemical peels by expert dermatologist Dr. Kakollu Sravani.',
    url: 'https://gwd-sales.com/client/reborn-skin-clinic-banjara-hills',
    siteName: 'Reborn Skin & Hair Clinic',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
        width: 800,
        height: 600,
        alt: 'Reborn Skin & Hair Clinic Treatment Suite'
      }
    ]
  }
};

export default function RebornSkinBanjaraHillsLayout({ children }) {
  return (
    <div className={`${plusJakartaSans.variable} font-sans min-h-screen bg-[#FAFAFA] text-[#1F2937] antialiased`}>
      {children}
    </div>
  );
}

import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300', '400', '600', '700', '800', '900']
});

export const metadata = {
  title: "Saanvi's Laser Skin & Hair Clinic | Dr. G.S.S. Sandeep | Banjara Hills, Hyderabad",
  description: 'Premium skin & hair treatments by Dr. G.S.S. Sandeep (MBBS, MD). Specializing in PRP hair therapy, Laser skin resurfacing, and Chemical peels in Hyderabad. Book your consultation.',
  openGraph: {
    title: "Saanvi's Laser Skin & Hair Clinic | Advanced Dermatology Banjara Hills",
    description: 'Expert skin and hair solutions by Dr. G.S.S. Sandeep. PRP hair therapy, Laser skin resurfacing, and Chemical peels. Book your priority session today.',
    url: 'https://gwd-sales.com/client/saanvis-laser-skin-clinic-banjara-hills',
    siteName: "Saanvi's Laser Skin & Hair Clinic",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: "Saanvi's Laser Skin & Hair Clinic Consultation Suite",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function SaanvisLaserSkinClinicLayout({ children }) {
  return (
    <div className={`${nunito.variable} font-sans min-h-screen bg-[#FFFDFB] text-[#4A3B32] antialiased`}>
      {children}
    </div>
  );
}

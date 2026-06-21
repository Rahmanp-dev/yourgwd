import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: 'Beauty World Cosmetic & Skin Clinic | Dr. Amarnath Patil | Road No. 1, Banjara Hills, Hyderabad',
  description: 'High-end cosmetic dermatology and medical spa services by Dr. Amarnath Patil (MBBS, MD). Specializing in Botox & fillers, Laser hair reduction, and Chemical peels.',
  openGraph: {
    title: 'Beauty World Cosmetic & Skin Clinic | Luxury Aesthetic Medicine Hyderabad',
    description: 'Bespoke aesthetic transformations by Dr. Amarnath Patil. Botox, premium fillers, and laser hair reduction in a high-end spa setting in Banjara Hills.',
    url: 'https://gwd-sales.com/client/beauty-world-skin-clinic-banjara-hills',
    siteName: 'Beauty World Cosmetic & Skin Clinic',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Beauty World Cosmetic & Skin Clinic Premium Spa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function BeautyWorldSkinClinicLayout({ children }) {
  return (
    <div className={`${playfair.variable} ${inter.variable} font-sans min-h-screen bg-[#FDFBF7] text-[#2C2520] antialiased`}>
      {children}
    </div>
  );
}

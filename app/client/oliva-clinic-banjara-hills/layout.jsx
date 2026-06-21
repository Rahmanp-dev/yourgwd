import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800']
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: 'Oliva Skin & Hair Clinic | Banjara Hills, Hyderabad',
  description: 'Experience premium skin and hair treatments including Laser Hair Reduction, Acne Scar Treatment, and Pigmentation Solutions at Oliva Banjara Hills under Dr. Chadalavada Pragathi.',
  openGraph: {
    title: 'Oliva Skin & Hair Clinic - Banjara Hills',
    description: 'Expert dermatologist Dr. Chadalavada Pragathi offers world-class Laser Hair Reduction, Acne Scar removal, and Pigmentation treatments in Hyderabad.',
    url: 'https://gwd-sales.com/client/oliva-clinic-banjara-hills',
    siteName: 'Oliva Skin & Hair Clinic',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Oliva Skin & Hair Clinic Banjara Hills'
      }
    ]
  }
};

export default function OlivaClinicBanjaraHillsLayout({ children }) {
  return (
    <div className={`${playfair.variable} ${plusJakarta.variable} font-sans min-h-screen bg-[#FDFBF7] text-[#2C2520] antialiased`}>
      {children}
    </div>
  );
}

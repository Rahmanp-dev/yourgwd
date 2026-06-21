import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700']
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'Kaya Clinic | Banjara Hills, Hyderabad',
  description: 'Expert skin and hair care at Kaya Clinic Banjara Hills. Specialized clinical treatments including Laser Hair Reduction, Acne Scar Treatment, and Chemical Peels under lead dermatologist Dr. Samatha Nuthalapati.',
  openGraph: {
    title: 'Kaya Clinic - Banjara Hills',
    description: 'Advanced clinical care under Dr. Samatha Nuthalapati. Permanent Laser Hair Reduction, Acne Scar Treatment, and Chemical Peels with FDA-approved technology.',
    url: 'https://gwd-sales.com/client/kaya-clinic-banjara-hills',
    siteName: 'Kaya Clinic',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Kaya Clinic Banjara Hills'
      }
    ]
  }
};

export default function KayaClinicBanjaraHillsLayout({ children }) {
  return (
    <div className={`${inter.variable} ${plusJakarta.variable} font-sans min-h-screen bg-white text-slate-800 antialiased`}>
      {children}
    </div>
  );
}

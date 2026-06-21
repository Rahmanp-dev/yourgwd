import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'Sikara Clinics | Laser, Skin & Acne Clinic Banjara Hills',
  description: 'Experience advanced skincare under Dr. Sanky Divya (MBBS, DDVL) at Banjara Hills, Hyderabad. Specializing in Laser hair reduction, Skin tightening, and Acne treatments.',
  openGraph: {
    title: 'Sikara Clinics - Laser, Skin & Acne Clinic Banjara Hills',
    description: 'Bespoke clinical dermatology and advanced aesthetic treatments under Dr. Sanky Divya. Book your premium skin assessment today at Banjara Hills, Hyderabad.',
    url: 'https://gwd-sales.com/client/sikara-clinics-banjara-hills',
    siteName: 'Sikara Clinics',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Sikara Clinics Banjara Hills',
      },
    ],
    type: 'website',
  },
};

export default function SikaraClinicsBanjaraHillsLayout({ children }) {
  return (
    <div className={inter.className}>
      {children}
    </div>
  );
}

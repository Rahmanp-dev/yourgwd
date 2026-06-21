import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Clinica Derm | Dr. Deepthi Atmakuri | Road No. 12, Banjara Hills, Hyderabad',
  description: 'Premium skin, hair & aesthetic clinic by Dr. Deepthi Atmakuri (MBBS, DDVL). USFDA-approved Morpheus8 RF microneedling, HydraFacial, and Laser hair reduction in Hyderabad.',
  openGraph: {
    title: 'Clinica Derm | Advanced Dermatology Clinic Banjara Hills',
    description: 'Expert aesthetic treatments by Dr. Deepthi Atmakuri. Specializing in Morpheus8 RF microneedling, HydraFacial, and Laser hair reduction. Book your priority session today.',
    url: 'https://gwd-sales.com/client/clinica-derm-banjara-hills',
    siteName: 'Clinica Derm',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Clinica Derm Banjara Hills Consultation Suite',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function ClinicaDermBanjaraHillsLayout({ children }) {
  return (
    <div className={`${outfit.variable} font-sans min-h-screen bg-[#FFF5F5] text-[#332222] antialiased`}>
      {children}
    </div>
  );
}

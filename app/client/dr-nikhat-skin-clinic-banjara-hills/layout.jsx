import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata = {
  title: "Dr. Syeda Nikhat's Skin Care Clinic | Pediatric & Aesthetic Dermatology",
  description: "Bespoke pediatric and aesthetic dermatology under Dr. Syeda Nikhat Baquer (MBBS, DDVL) in Banjara Hills, Hyderabad. Specializing in Pediatric dermatology, Hair loss, and Laser scar revision.",
  openGraph: {
    title: "Dr. Syeda Nikhat's Skin Care Clinic - Banjara Hills",
    description: "Pediatric dermatology & hair loss clinic by Dr. Syeda Nikhat Baquer. Expert treatment for acne scars, hair fall, and pediatric skin conditions in Banjara Hills, Hyderabad.",
    url: 'https://gwd-sales.com/client/dr-nikhat-skin-clinic-banjara-hills',
    siteName: "Dr. Syeda Nikhat's Skin Care Clinic",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: "Dr. Syeda Nikhat's Skin Care Clinic",
      },
    ],
    type: 'website',
  },
};

export default function DrNikhatSkinBanjaraHillsLayout({ children }) {
  return (
    <div className={nunito.className}>
      {children}
    </div>
  );
}

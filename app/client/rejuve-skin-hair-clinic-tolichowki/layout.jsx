import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'Rejuve Skin & Hair Clinic | Premium Aesthetic Care Tolichowki',
  description: 'Experience clinical luxury at Tolichowki. Advanced skin rejuvenation, hair restoration, and customized anti-aging treatments by top dermatologists in Hyderabad.',
  openGraph: {
    title: 'Rejuve Skin & Hair Clinic - Tolichowki',
    description: 'Transformative skin and hair treatments with cutting-edge medical aesthetics in a luxury orchid-and-plum setting. Located in Tolichowki, Hyderabad.',
    url: 'https://gwd-sales.com/client/rejuve-skin-hair-clinic-tolichowki',
    siteName: 'Rejuve Skin & Hair Clinic',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Rejuve Clinic Luxury Treatment Room'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  }
};

export default function RejuveClinicLayout({ children }) {
  return (
    <div className={`${cormorantGaramond.variable} ${plusJakarta.variable} font-sans min-h-screen bg-[#FAF5FF] text-[#4A154B] antialiased`}>
      {children}
    </div>
  );
}

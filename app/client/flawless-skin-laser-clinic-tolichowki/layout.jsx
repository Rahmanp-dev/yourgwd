import { Cinzel, Plus_Jakarta_Sans } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'Flawless Skin & Laser Clinic | Premium Laser & Aesthetic Center Tolichowki',
  description: 'Experience clinical perfection at Tolichowki. Advanced US-FDA approved laser therapies, chemical peels, and flawless aesthetic transformations.',
  openGraph: {
    title: 'Flawless Skin & Laser Clinic - Tolichowki',
    description: 'Precision skincare and world-class laser treatments in a premium orchid-and-plum setting. Authentic Tolichowki, Hyderabad clinical care.',
    url: 'https://gwd-sales.com/client/flawless-skin-laser-clinic-tolichowki',
    siteName: 'Flawless Skin & Laser Clinic',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Flawless Laser Treatment Facility'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  }
};

export default function FlawlessClinicLayout({ children }) {
  return (
    <div className={`${cinzel.variable} ${plusJakarta.variable} font-sans min-h-screen bg-[#FAF5FF] text-[#4A154B] antialiased`}>
      {children}
    </div>
  );
}

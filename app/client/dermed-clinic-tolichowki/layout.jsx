import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900']
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'Dermed Skin & Hair Clinic | Premium Dermatological Excellence Tolichowki',
  description: 'Experience elite skin, hair, and laser treatments at Dermed Clinic, Tolichowki. Advanced USFDA-approved therapies, chemical peels, and hair restoration. Book your premium consultation.',
  openGraph: {
    title: 'Dermed Skin & Hair Clinic - Tolichowki',
    description: 'Bespoke clinical dermatology, advanced laser skin rejuvenation, and hair restoration therapies. Visit us near Pillar No. 120, Tolichowki Main Road, Hyderabad.',
    url: 'https://gwd-sales.com/client/dermed-clinic-tolichowki',
    siteName: 'Dermed Skin & Hair Clinic',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Dermed Skin & Hair Clinic Consultation Room'
      }
    ]
  }
};

export default function DermedLayout({ children }) {
  return (
    <div className={`${playfair.variable} ${plusJakarta.variable} font-sans min-h-screen bg-[#FFF0EE] text-[#2A1A1C] antialiased`}>
      {children}
    </div>
  );
}

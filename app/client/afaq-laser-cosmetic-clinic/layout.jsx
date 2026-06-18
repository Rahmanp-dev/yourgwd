import { Cinzel, Montserrat } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700', '800', '900']
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Afaq Laser & Cosmetic Clinic | Premier Aesthetic Dermatology Tolichowki',
  description: 'Experience state-of-the-art laser treatments, carbon peels, hair transplantation, and cosmetic solutions at Afaq Clinic, Tolichowki, Hyderabad. Book your premium assessment today.',
  openGraph: {
    title: 'Afaq Laser & Cosmetic Clinic - Tolichowki',
    description: 'Premier laser and aesthetic dermatology clinic. Experience advanced chemical peels, laser hair removal, and skin rejuvenation treatments. Located near Kakatiya Nagar Colony Cross Road, Tolichowki.',
    url: 'https://gwd-sales.com/client/afaq-laser-cosmetic-clinic',
    siteName: 'Afaq Laser & Cosmetic Clinic',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Afaq Laser & Cosmetic Clinic Treatment Room'
      }
    ]
  }
};

export default function AfaqLayout({ children }) {
  return (
    <div className={`${cinzel.variable} ${montserrat.variable} font-sans min-h-screen bg-[#FFF0EE] text-[#2A1A1C] antialiased`}>
      {children}
    </div>
  );
}

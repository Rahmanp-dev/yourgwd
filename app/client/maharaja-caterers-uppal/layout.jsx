import { Cinzel, Plus_Jakarta_Sans } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '600', '700', '800', '900']
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'Maharaja Caterers Uppal | Premium Royal Banquets & Nizami Catering Hyderabad',
  description: 'Experience the grandeur of Maharaja Caterers in Uppal, Hyderabad. Offering authentic Nizami and royal cuisines, custom menus, and premium catering services.',
  openGraph: {
    title: 'Maharaja Caterers Uppal | Premium Royal Banquets & Nizami Catering Hyderabad',
    description: 'Experience the grandeur of Maharaja Caterers in Uppal, Hyderabad. Offering authentic Nizami and royal cuisines, custom menus, and premium catering services.',
    url: 'https://yourgwd.vercel.app/client/maharaja-caterers-uppal',
    siteName: 'Maharaja Caterers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Maharaja Caterers Royal Banquet'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  }
};

export default function Layout({ children }) {
  return (
    <div className={`${cinzel.variable} ${plusJakarta.variable} font-sans min-h-screen bg-[#FDFBF7] text-[#1E3A8A] antialiased`}>
      {children}
    </div>
  );
}

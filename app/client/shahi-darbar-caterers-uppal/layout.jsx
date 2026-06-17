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
  title: 'Shahi Darbar Caterers Uppal | Bespoke Nizami Feast & Luxury Catering Hyderabad',
  description: 'Savor the legacy of royal Asaf Jahi cuisine with Shahi Darbar Caterers in Uppal, Hyderabad. Exquisite slow-cooked biryanis, fine buffet arrangements, and elite hospitality.',
  openGraph: {
    title: 'Shahi Darbar Caterers Uppal | Bespoke Nizami Feast & Luxury Catering Hyderabad',
    description: 'Savor the legacy of royal Asaf Jahi cuisine with Shahi Darbar Caterers in Uppal, Hyderabad. Exquisite slow-cooked biryanis, fine buffet arrangements, and elite hospitality.',
    url: 'https://yourgwd.vercel.app/client/shahi-darbar-caterers-uppal',
    siteName: 'Shahi Darbar Caterers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Shahi Darbar Caterers Nizami Banquet'
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

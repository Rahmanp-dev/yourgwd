import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700', '800']
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'Srishti Cloud Kitchen & Caterers | Premium Catering Uppal, Hyderabad',
  description: 'Experience premium traditional & fusion catering in Uppal, Hyderabad. Customized menus for weddings, corporate events, and birthdays. Exceptional hygiene standards and master chef expertise.',
  openGraph: {
    title: 'Srishti Cloud Kitchen & Caterers | Uppal, Hyderabad',
    description: 'Bespoke traditional and modern catering for your events in Uppal, Gachibowli, Secunderabad. Get an instant price quote.',
    url: 'https://yourgwd.vercel.app/client/srishti-cloud-kitchen-uppal',
    siteName: 'Srishti Cloud Kitchen',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Srishti Cloud Kitchen Premium Catering'
      }
    ]
  }
};

export default function SrishtiLayout({ children }) {
  return (
    <div className={`${playfair.variable} ${plusJakarta.variable} font-[family-name:var(--font-plus-jakarta)] min-h-screen bg-[#F8FAFC] text-[#334155] antialiased`}>
      {children}
    </div>
  );
}

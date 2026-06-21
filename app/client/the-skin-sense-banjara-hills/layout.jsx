import { Merriweather, Open_Sans } from 'next/font/google';

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ['300', '400', '700', '900']
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  weight: ['300', '400', '600', '700', '800']
});

export const metadata = {
  title: 'The Skin Sensé by Dr. Alekya Singapore | Banjara Hills',
  description: 'Experience premium aesthetic solutions at The Skin Sensé by Dr. Alekya Singapore, Banjara Hills, Hyderabad. Specializing in Biostimulants (Sculptra/Radiesse), HydraFacials, and Double chin reduction.',
  openGraph: {
    title: 'The Skin Sensé by Dr. Alekya Singapore - Banjara Hills',
    description: 'Elevate your skin rejuvenation with elite Biostimulants, HydraFacials, and non-surgical double chin treatments by leading specialist Dr. Alekya Singapore.',
    url: 'https://gwd-sales.com/client/the-skin-sense-banjara-hills',
    siteName: 'The Skin Sensé by Dr. Alekya Singapore',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
        width: 800,
        height: 600,
        alt: 'The Skin Sensé Treatment Suite'
      }
    ]
  }
};

export default function TheSkinSenseBanjaraHillsLayout({ children }) {
  return (
    <div className={`${merriweather.variable} ${openSans.variable} font-sans min-h-screen bg-[#FDF6F0] text-[#2C2520] antialiased`}>
      {children}
    </div>
  );
}

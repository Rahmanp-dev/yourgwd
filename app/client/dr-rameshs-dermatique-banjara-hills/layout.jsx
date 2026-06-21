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
  title: "Dr. Ramesh's Dermatique | Advanced Dermatology & Lasers | Banjara Hills",
  description: "Experience premium, medical-grade skin and hair rejuvenation at Dr. Ramesh's Dermatique in Banjara Hills, Hyderabad. Led by Dr. Ramesh Vishwanath.",
  openGraph: {
    title: "Dr. Ramesh's Dermatique - Banjara Hills",
    description: "Premium advanced laser therapy, hair restoration, and skin rejuvenation treatments led by expert dermatologist Dr. Ramesh Vishwanath.",
    url: 'https://gwd-sales.com/client/dr-rameshs-dermatique-banjara-hills',
    siteName: "Dr. Ramesh's Dermatique",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
        width: 800,
        height: 600,
        alt: "Dr. Ramesh's Dermatique Clinic Suite"
      }
    ]
  }
};

export default function DrRameshsDermatiqueLayout({ children }) {
  return (
    <div className={`${merriweather.variable} ${openSans.variable} font-sans min-h-screen bg-[#FDF6F0] text-[#2C2520] antialiased`}>
      {children}
    </div>
  );
}

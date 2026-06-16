import { Prata, Plus_Jakarta_Sans } from 'next/font/google';

const prata = Prata({
  subsets: ['latin'],
  variable: '--font-prata',
  weight: ['400']
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'Akoya Pearls by Ghanshyamdas | Premium Pearl Jewellery Hyderabad',
  description: 'Discover bespoke organic pearl strings, floral chokers, and fine jewellery inspired by biophilic forms. Experience the heritage of Ghanshyamdas at Road No. 2, Banjara Hills, Hyderabad.',
  openGraph: {
    title: 'Akoya Pearls by Ghanshyamdas',
    description: 'Bespoke organic pearl strings, floral chokers, and fine jewellery. Experience the heritage of Ghanshyamdas at Road No. 2, Banjara Hills, Hyderabad.',
    url: 'https://gwd-sales.com/client/akoya-pearls-ghanshyamdas',
    siteName: 'Akoya Pearls by Ghanshyamdas',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Akoya Pearls Heritage Collection'
      }
    ]
  }
};

export default function AkoyaPearlsLayout({ children }) {
  return (
    <div className={`${prata.variable} ${plusJakarta.variable} font-sans min-h-screen bg-[#FAF8F4] text-[#2D3A31] antialiased`}>
      {children}
    </div>
  );
}

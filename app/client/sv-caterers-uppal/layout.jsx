import { Cormorant_Garamond, Inter } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'SV Caterers Uppal | Modern Artisanal Catering & Cloud Kitchen Hyderabad',
  description: 'Gourmet global-fusion catering, premium cloud kitchen hygiene, and eco-friendly zero-waste setups in Uppal, Hyderabad. Curated by top culinary artists.',
  openGraph: {
    title: 'SV Caterers Uppal | Modern Artisanal Catering',
    description: 'Eco-conscious presentation, global culinary fusion, and premium hygiene cloud kitchen serving Hyderabad’s finest corporate and private gatherings.',
    url: 'https://yourgwd.vercel.app/client/sv-caterers-uppal',
    siteName: 'SV Caterers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'SV Caterers Premium Plated Event Layout'
      }
    ]
  }
};

export default function SVCaterersLayout({ children }) {
  return (
    <div className={`${cormorant.variable} ${inter.variable} font-sans min-h-screen bg-[#FCFBF9] text-[#1E3F20] antialiased`}>
      {children}
    </div>
  );
}

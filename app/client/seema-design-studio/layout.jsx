import { Montserrat, Inter } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: "Seema Design Studio | Minimalist Boutique Interiors Hyderabad",
  description: "Bespoke minimalist and boutique interior designs in Attapur, Hyderabad. Clean neumorphic styles, soft shadow structures, and premium custom spacing.",
  openGraph: {
    title: "Seema Design Studio | Minimalist Boutique Interiors Hyderabad",
    description: "Bespoke minimalist and boutique interior designs in Attapur, Hyderabad. Clean neumorphic styles, soft shadow structures, and premium custom spacing.",
    url: 'https://sales-machine.gwd.dev/client/seema-design-studio',
    siteName: "Seema Design Studio Attapur",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: "Seema Design Studio Minimalist Boutique Design Preview",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function SeemaDesignStudioLayout({ children }) {
  return (
    <div className={`${montserrat.variable} ${inter.variable} min-h-screen bg-[#F0F0F3] text-[#3A3A3C]`}>
      {children}
    </div>
  );
}

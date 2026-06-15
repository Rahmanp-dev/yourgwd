import { Plus_Jakarta_Sans, Inter } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'] 
});

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'] 
});

export const metadata = {
  title: 'Simply Interiors Hyderabad | Modern Bento-Grid Custom Home Interiors',
  description: 'Bespoke contemporary modular homes by Simply Interiors Attapur, Hyderabad. Precision modular kitchens, wardrobes, and custom layouts in premium charcoal and burnt orange.',
  openGraph: {
    title: 'Simply Interiors Hyderabad | Modern Bento-Grid Custom Home Interiors',
    description: 'Bespoke contemporary modular homes by Simply Interiors Attapur, Hyderabad. Precision modular kitchens, wardrobes, and custom layouts in premium charcoal and burnt orange.',
    url: 'https://salesmachine.yourgwd.com/client/simply-interiors-hyd',
    siteName: 'Simply Interiors',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Simply Interiors Contemporary Modular Kitchen'
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function SimplyLayout({ children }) {
  return (
    <div className={`${jakarta.variable} ${inter.variable} min-h-screen bg-[#0E1317] text-[#ECECEC] font-sans antialiased`}>
      {children}
    </div>
  );
}

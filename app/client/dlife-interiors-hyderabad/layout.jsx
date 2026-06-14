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
  title: 'DLife Interiors Hyderabad | Premium Bento-Grid Contemporary Custom Homes',
  description: 'Design your dream home with DLife Interiors Hyderabad. Clean, contemporary bento grid layouts, high information density, and premium modular kitchens & wardrobes in charcoal and burnt orange.',
  openGraph: {
    title: 'DLife Interiors Hyderabad | Premium Bento-Grid Contemporary Custom Homes',
    description: 'Design your dream home with DLife Interiors Hyderabad. Clean, contemporary bento grid layouts, high information density, and premium modular kitchens & wardrobes in charcoal and burnt orange.',
    url: 'https://salesmachine.yourgwd.com/client/dlife-interiors-hyderabad',
    siteName: 'DLife Interiors',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'DLife Contemporary Modular Kitchen & Interiors'
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function DlifeLayout({ children }) {
  return (
    <div className={`${jakarta.variable} ${inter.variable} min-h-screen bg-[#0E0E0E] text-[#ECECEC] font-sans antialiased`}>
      {children}
    </div>
  );
}

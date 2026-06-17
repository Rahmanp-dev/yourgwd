import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'] 
});

export const metadata = {
  title: 'Sri Venkateshwara Caterers | Traditional Veg & Wedding Catering, Uppal',
  description: 'Hyderabad\'s premier catering service for pure vegetarian royal spreads, traditional banana leaf feasts, and premium wedding buffets. Crafted with heritage recipes and pristine hygiene standards.',
  openGraph: {
    title: 'Sri Venkateshwara Caterers | Traditional Veg & Wedding Catering, Uppal',
    description: 'Hyderabad\'s premier catering service for pure vegetarian royal spreads, traditional banana leaf feasts, and premium wedding buffets. Crafted with heritage recipes and pristine hygiene standards.',
    url: 'https://yourgwd.vercel.app/client/sri-venkateshwara-caterers-uppal',
    siteName: 'Sri Venkateshwara Caterers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Sri Venkateshwara Traditional Catering'
      }
    ]
  }
};

export default function SriVenkateshwaraLayout({ children }) {
  return (
    <div className={`${plusJakarta.variable} min-h-screen bg-[#F4F4F1] text-[#2C2C28] antialiased`}>
      {children}
    </div>
  );
}

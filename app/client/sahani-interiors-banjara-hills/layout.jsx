import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'Sahani Interiors | Premium Residential Woodwork & Space Maximization Hyderabad',
  description: 'Expert residential woodwork and smart space maximization by Sahani in Banjara Hills, Hyderabad. Specializing in space-efficient wardrobes, premium modular kitchens, and budget-friendly renovations.',
  openGraph: {
    title: 'Sahani Interiors | Coastal Wellness Home Design',
    description: 'Explore space-optimized residential woodwork and coastal wellness aesthetics in Banjara Hills, Hyderabad by Sahani.',
    url: 'https://gwd-sales.com/client/sahani-interiors-banjara-hills',
    siteName: 'Sahani Interiors',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Sahani Interiors Premium Woodwork'
      }
    ]
  }
};

export default function SahaniInteriorsLayout({ children }) {
  return (
    <div className={`${plusJakarta.variable} font-sans min-h-screen bg-[#F7FBFD] text-[#1F3A52] antialiased`}>
      {children}
    </div>
  );
}

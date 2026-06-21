import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Aamir & Hameeda Design Studio | Luxury Minimalist Interior Design Hyderabad',
  description: 'Elite avant-garde interior design studio in Banjara Hills, Hyderabad. Specializing in luxury minimalist residential design, urban chic retail & hospitality, and bespoke furniture curation.',
  openGraph: {
    title: 'Aamir & Hameeda Design Studio | Avant-Garde Luxury Interiors',
    description: 'Explore premium luxury minimalist design by Aamir & Hameeda in Banjara Hills, Hyderabad. Bespoke residential and retail transformations.',
    url: 'https://gwd-sales.com/client/aamir-hameeda-design-studio-banjara-hills',
    siteName: 'Aamir & Hameeda Design Studio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Aamir & Hameeda Luxury Interior Design'
      }
    ]
  }
};

export default function AamirHameedaDesignStudioLayout({ children }) {
  return (
    <div className={`${outfit.variable} font-sans min-h-screen bg-gradient-to-tr from-[#FFF0F5] via-[#F8F0FB] to-[#E6E6FA] text-[#2C1A38] antialiased`}>
      {children}
    </div>
  );
}

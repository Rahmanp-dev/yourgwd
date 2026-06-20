import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Orchids International School | Tolichowki, Hyderabad',
  description: 'Welcome to Orchids International School Tolichowki. A luxury pearl of academic excellence, top-tier international curriculum, and Ivy League readiness.',
  openGraph: {
    title: 'Orchids International School | Tolichowki',
    description: 'Nurture academic distinction with our premium international curriculum and world-class campus in Tolichowki.',
    images: ['https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200&h=630&auto=format&fit=crop'],
    type: 'website',
  },
};

export default function OrchidsLayout({ children }) {
  return (
    <div className={`${playfair.variable} ${inter.variable} font-[family-name:var(--font-inter)] text-slate-800 bg-[#FDFBF7] min-h-screen`}>
      {children}
    </div>
  );
}

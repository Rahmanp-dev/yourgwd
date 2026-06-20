import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: 'STEM Kids Preschool | Tolichowki, Hyderabad',
  description: 'Experience futuristic early childhood education at STEM Kids Tolichowki. Hands-on coding, science, robotics, and creative arts for young minds.',
  openGraph: {
    title: 'STEM Kids Preschool - Tolichowki',
    description: 'Empowering children with next-gen STEM learning, coding, and robotics in Tolichowki, Hyderabad.',
    url: 'https://gwd-sales.com/client/stem-kids-preschool-tolichowki',
    siteName: 'STEM Kids Preschool',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'STEM Kids Preschool Tolichowki',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function StemKidsLayout({ children }) {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen bg-slate-50 text-slate-900 antialiased`}>
      {children}
    </div>
  );
}

import { Plus_Jakarta_Sans, Inter } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: 'HomeLane Kokapet | Minimalist Scandinavian Interior Design',
  description: 'Bespoke modular interior design studio in Kokapet, Hyderabad. Experience functional Scandinavian elegance featuring warm light oak wood tones, forest green/sage accents, and organic spatial flow.',
  openGraph: {
    title: 'HomeLane Kokapet | Scandinavian Interior Architecture',
    description: 'Transforming residences in Kokapet with clean sans-serif typography, light oak textures, soft organic curves, and spacious modular grid systems.',
    url: 'https://salesmachine.yourgwd.com/client/homelane-kokapet',
    siteName: 'HomeLane Kokapet',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'HomeLane Kokapet - Minimalist Scandinavian Interior Living Area'
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function HomeLaneLayout({ children }) {
  return (
    <div className={`${plusJakarta.variable} ${inter.variable} min-h-screen bg-[#FAFAFA] text-[#2C3330] font-sans antialiased`}>
      {children}
    </div>
  );
}

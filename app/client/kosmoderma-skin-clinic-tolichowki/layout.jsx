import { Fredoka, Outfit } from 'next/font/google';

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
  weight: ['400', '500', '600', '700']
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'Kosmoderma Skin & Hair Clinic | Tolichowki, Hyderabad',
  description: 'Premium skin, hair, and body treatments at Kosmoderma Tolichowki. Advanced US-FDA approved technologies, top dermatologists, and personalized clinical care. Call 9988776655.',
  openGraph: {
    title: 'Kosmoderma Skin & Hair Clinic - Tolichowki',
    description: 'Advanced US-FDA approved skin & hair treatments. Leading dermatologists, personalized clinical care. Call 9988776655.',
    url: 'https://gwd-sales.com/client/kosmoderma-skin-clinic-tolichowki',
    siteName: 'Kosmoderma Skin & Hair Clinic',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Kosmoderma Skin & Hair Clinic Tolichowki'
      }
    ]
  }
};

export default function KosmodermaLayout({ children }) {
  return (
    <div className={`${fredoka.variable} ${outfit.variable} font-sans min-h-screen bg-[#F5EBE6] text-[#2D2320] antialiased`}>
      {children}
    </div>
  );
}

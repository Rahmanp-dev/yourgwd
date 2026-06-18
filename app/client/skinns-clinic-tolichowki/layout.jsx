import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';

const spaceGrotesque = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesque',
  weight: ['400', '500', '600', '700']
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'Skinns Clinic | Dermatology & Aesthetics Tolichowki, Hyderabad',
  description: 'Compassionate, personalized clinical skincare and hair loss therapies at Skinns Clinic Tolichowki. Advanced lasers, pediatric dermatology, and acne care. Call 9866123456.',
  openGraph: {
    title: 'Skinns Clinic - Tolichowki',
    description: 'Compassionate, personalized clinical skincare and hair loss therapies. Advanced FDA approved lasers and family dermatology. Call 9866123456.',
    url: 'https://gwd-sales.com/client/skinns-clinic-tolichowki',
    siteName: 'Skinns Clinic',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Skinns Clinic Tolichowki'
      }
    ]
  }
};

export default function SkinnsLayout({ children }) {
  return (
    <div className={`${spaceGrotesque.variable} ${plusJakarta.variable} font-sans min-h-screen bg-[#F5EBE6] text-[#2D2320] antialiased`}>
      {children}
    </div>
  );
}

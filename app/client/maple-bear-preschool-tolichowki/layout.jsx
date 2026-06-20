import { Lato, Lora } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
});

export const metadata = {
  title: 'Maple Bear Canadian Preschool | Tolichowki, Hyderabad',
  description: 'Experience top-tier Canadian early childhood education at Maple Bear Tolichowki. Play-based, bilingual, nurturing environment for children.',
  openGraph: {
    title: 'Maple Bear Canadian Preschool - Tolichowki',
    description: 'Bilingual play-based Canadian early education program in Tolichowki, Hyderabad. Nurturing young minds in a safe, warm environment.',
    url: 'https://gwd-sales.com/client/maple-bear-preschool-tolichowki',
    siteName: 'Maple Bear Preschool',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Maple Bear Preschool Tolichowki',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function MapleBearLayout({ children }) {
  return (
    <div className={`${lato.variable} ${lora.variable} ${lora.className} min-h-screen bg-[#FFFDF6] text-[#2C1810] antialiased`}>
      {children}
    </div>
  );
}

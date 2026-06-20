import { Merriweather, Open_Sans } from 'next/font/google';

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
});

export const metadata = {
  title: 'Kangaroo Kids International Preschool | Tolichowki, Hyderabad',
  description: 'Experience premium Nature Green learning at Kangaroo Kids Tolichowki. Fostering curiosity, active play, and holistic child development in Hyderabad.',
  openGraph: {
    title: 'Kangaroo Kids International Preschool | Tolichowki',
    description: 'Nurture your child\'s early years with our interactive Nature Green curriculum in Tolichowki.',
    images: ['https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1200&h=630&auto=format&fit=crop'],
    type: 'website',
  },
};

export default function KangarooKidsLayout({ children }) {
  return (
    <div className={`${merriweather.variable} ${openSans.variable} font-[family-name:var(--font-opensans)] text-slate-800 bg-[#FEFAE0] min-h-screen`}>
      {children}
    </div>
  );
}

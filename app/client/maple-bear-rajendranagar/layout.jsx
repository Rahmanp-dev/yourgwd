import { Fredoka, Nunito } from 'next/font/google';

const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka' });
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

export const metadata = {
  title: 'Maple Bear Canadian Preschool | Rajendranagar',
  description: 'Experience the best of Canadian bilingual education at Maple Bear Rajendranagar. Nurturing, playful, and child-focused learning environment.',
  openGraph: {
    title: 'Maple Bear Canadian Preschool | Rajendranagar',
    description: 'Experience the best of Canadian bilingual education at Maple Bear Rajendranagar. Enroll today!',
    images: ['https://maplebear.in/wp-content/uploads/2023/06/maple-bear-logo-share.png'],
    type: 'website',
  },
};

export default function MapleBearLayout({ children }) {
  return (
    <div className={`${fredoka.variable} ${nunito.variable} font-nunito bg-[#FDFBF7] text-[#3E2723] min-h-screen`}>
      {children}
    </div>
  );
}

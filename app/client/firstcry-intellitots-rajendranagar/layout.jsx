import { Outfit, Work_Sans } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-work-sans' });

export const metadata = {
  title: 'FirstCry Intellitots Preschool | Rajendranagar',
  description: 'FirstCry Intellitots Rajendranagar offers a smart, cognitive-based curriculum for 21st-century skills. Building strong foundations for your child.',
  openGraph: {
    title: 'FirstCry Intellitots Preschool | Rajendranagar',
    description: 'FirstCry Intellitots Rajendranagar offers a smart, cognitive-based curriculum for 21st-century skills.',
    images: ['https://www.firstcryintellitots.com/wp-content/uploads/2022/11/Intellitots-Logo-Final.png'],
    type: 'website',
  },
};

export default function FirstCryLayout({ children }) {
  return (
    <div className={`${outfit.variable} ${workSans.variable} font-work-sans bg-[#FAFAFA] text-[#1E293B] min-h-screen`}>
      {children}
    </div>
  );
}

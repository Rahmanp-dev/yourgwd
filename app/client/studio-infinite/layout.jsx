import { Cinzel, Josefin_Sans } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' });
const josefin = Josefin_Sans({ subsets: ['latin'], variable: '--font-josefin' });

export const metadata = {
  title: 'Studio Infinite | Luxury Architecture',
  description: 'Defining the skyline of tomorrow. Premier luxury architecture firm based in Kollur, Hyderabad.',
  openGraph: {
    title: 'Studio Infinite | Luxury Architecture',
    description: 'Defining the skyline of tomorrow. Premier luxury architecture firm based in Kollur, Hyderabad.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Studio Infinite Architecture'
      }
    ]
  }
};

export default function StudioInfiniteLayout({ children }) {
  return (
    <div className={`${cinzel.variable} ${josefin.variable} min-h-screen bg-black text-white`}>
      {children}
    </div>
  );
}

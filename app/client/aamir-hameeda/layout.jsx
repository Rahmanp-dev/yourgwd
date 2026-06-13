import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Aamir & Hameeda | Commercial Architecture',
  description: 'Innovative and bold commercial architecture firm designing workspaces and retail hubs in Kollur, Hyderabad.',
  openGraph: {
    title: 'Aamir & Hameeda | Commercial Architecture',
    description: 'Innovative and bold commercial architecture firm designing workspaces and retail hubs in Kollur, Hyderabad.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Aamir & Hameeda Commercial Projects'
      }
    ]
  }
};

export default function AamirHameedaLayout({ children }) {
  return (
    <div className={`${inter.variable} min-h-screen bg-[#F5F5F5] text-[#111111]`}>
      {children}
    </div>
  );
}

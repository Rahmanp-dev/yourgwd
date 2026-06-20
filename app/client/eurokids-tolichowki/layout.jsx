import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Eurokids Tolichowki | Top Rated Preschool & Nursery',
  description: 'Eurokids Tolichowki is a premium pre-school in Tolichowki, Hyderabad. Nurturing children with next-gen smart classrooms, certified teachers, and safe playground.',
  openGraph: {
    title: 'Eurokids Tolichowki',
    description: 'Nurturing future leaders in Tolichowki, Hyderabad. Modern curriculum, secure smart campus, and child-safe play areas.',
    url: 'https://gwd-sales.com/client/eurokids-tolichowki',
    siteName: 'Eurokids Tolichowki',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Eurokids Tolichowki Preview'
      }
    ]
  }
};

export default function EurokidsLayout({ children }) {
  return (
    <div className={`${inter.variable} font-sans min-h-screen bg-[#F8FAFC] text-slate-700 antialiased`}>
      <style dangerouslySetInnerHTML={{__html: `
        .font-inter { font-family: var(--font-inter), sans-serif; }
      `}} />
      <div className="font-inter">
        {children}
      </div>
    </div>
  );
}

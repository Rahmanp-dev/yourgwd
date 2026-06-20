import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Little Millennium Tolichowki | Best Preschool & Daycare in Tolichowki',
  description: 'Top-rated preschool in Tolichowki, Hyderabad. Nurturing children with our award-winning Seven-Petal curriculum, safe environment, and play-based learning.',
  openGraph: {
    title: 'Little Millennium Tolichowki',
    description: 'Award-winning Seven-Petal curriculum, safe play areas, and premium early education in Tolichowki.',
    url: 'https://gwd-sales.com/client/little-millennium-tolichowki',
    siteName: 'Little Millennium Tolichowki',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Little Millennium Tolichowki Preview'
      }
    ]
  }
};

export default function LittleMillenniumLayout({ children }) {
  return (
    <div className={`${poppins.variable} font-sans min-h-screen bg-[#FFFDF9] text-slate-800 antialiased`}>
      <style dangerouslySetInnerHTML={{__html: `
        .font-poppins { font-family: var(--font-poppins), sans-serif; }
      `}} />
      <div className="font-poppins">
        {children}
      </div>
    </div>
  );
}

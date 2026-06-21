import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap'
});

export const metadata = {
  title: 'Infinite Architecture Studio | Bespoke Architecture Banjara Hills',
  description: 'Principal Architect V. Sandeep crafts modern residential, traditional Indian, and minimalistic designs in Banjara Hills, Hyderabad. Book a private consultation today.',
  openGraph: {
    title: 'Infinite Architecture Studio | Bespoke Architecture Banjara Hills',
    description: 'Principal Architect V. Sandeep crafts modern residential, traditional Indian, and minimalistic designs in Banjara Hills, Hyderabad. Book a private consultation today.',
    url: 'https://gwd-sales.com/client/infinite-architecture-studio-banjara-hills',
    siteName: 'Infinite Architecture Studio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Infinite Architecture Studio Residence'
      }
    ]
  }
};

export default function InfiniteArchitectureStudioLayout({ children }) {
  return (
    <div className={`${nunito.variable} font-sans min-h-screen bg-[#FDF2E9] text-[#334155] antialiased`}>
      {children}
    </div>
  );
}

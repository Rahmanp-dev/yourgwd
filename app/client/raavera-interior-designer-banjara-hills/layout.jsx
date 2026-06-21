import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'Raavera Interior Designer | Warm Neumorphic Spaces Banjara Hills',
  description: 'Elevated residential interiors and space planning by Principal Designer Raavera. Experience warm luxury custom home decor in Banjara Hills, Hyderabad.',
  openGraph: {
    title: 'Raavera Interior Designer - Banjara Hills',
    description: 'Elevated residential interiors and space planning by Principal Designer Raavera. Experience warm luxury custom home decor in Banjara Hills, Hyderabad.',
    url: 'https://gwd-sales.com/client/raavera-interior-designer-banjara-hills',
    siteName: 'Raavera Interior Designer',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Raavera Premium Residential Interiors'
      }
    ]
  }
};

export default function RaaveraInteriorDesignerLayout({ children }) {
  return (
    <div className={`${poppins.variable} font-sans min-h-screen bg-[#FAF8F5] text-[#3E2E20] antialiased`}>
      <style>{`
        .font-poppins {
          font-family: var(--font-poppins), sans-serif;
        }
      `}</style>
      {children}
    </div>
  );
}

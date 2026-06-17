import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800']
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: 'Vantillu Caterers Uppal | Traditional Wedding Catering Hyderabad',
  description: 'Savor authentic Telugu culinary heritage with Vantillu Caterers. Premium wood-fired slow cooking, Nizami feasts, grand wedding banquets, and ISO-certified kitchen standards in Uppal, Hyderabad.',
  openGraph: {
    title: 'Vantillu Caterers Uppal | Traditional Wedding & Event Catering',
    description: 'Experience genuine culinary legacy. Authentic slow wood-fired cooking, artisanal menu customizers, and top-tier hygiene in Uppal, Hyderabad.',
    url: 'https://yourgwd.vercel.app/client/vantillu-caterers-uppal',
    siteName: 'Vantillu Caterers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Vantillu Caterers Traditional Telugu Feast'
      }
    ]
  }
};

export default function VantilluCaterersLayout({ children }) {
  return (
    <div className={`${playfair.variable} ${plusJakarta.variable} font-sans min-h-screen bg-[#F5EBE6] text-[#2E2522] antialiased`}>
      {children}
    </div>
  );
}

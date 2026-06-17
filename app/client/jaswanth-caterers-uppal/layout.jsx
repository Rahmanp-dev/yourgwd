import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'] 
});

export const metadata = {
  title: 'Jaswanth Caterers | Premium Wedding & Event Catering in Uppal, Hyderabad',
  description: 'Specialized in premium live food counters, authentic Hyderabadi wedding banquets, and modern fusion catering. Serving corporate gatherings and private events in Uppal, Gachibowli, and Secunderabad.',
  openGraph: {
    title: 'Jaswanth Caterers | Premium Wedding & Event Catering in Uppal, Hyderabad',
    description: 'Specialized in premium live food counters, authentic Hyderabadi wedding banquets, and modern fusion catering. Serving corporate gatherings and private events in Uppal, Gachibowli, and Secunderabad.',
    url: 'https://yourgwd.vercel.app/client/jaswanth-caterers-uppal',
    siteName: 'Jaswanth Caterers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Jaswanth Caterers Premium Catering Services'
      }
    ]
  }
};

export default function JaswanthCaterersLayout({ children }) {
  return (
    <div className={`${plusJakarta.variable} min-h-screen bg-[#F4F4F1] text-[#2C2C28] antialiased`}>
      {children}
    </div>
  );
}

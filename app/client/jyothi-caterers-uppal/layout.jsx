import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';

const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800', '900'] 
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'] 
});

export const metadata = {
  title: 'Jyothi Caterers | Premium Multi-Cuisine Catering in Uppal, Hyderabad',
  description: 'Elite multi-cuisine catering service in Uppal, Hyderabad. Customized menus, live counters, fusion food, and impeccable hygiene for weddings and corporate events.',
  openGraph: {
    title: 'Jyothi Caterers | Elite Multi-Cuisine Catering in Uppal',
    description: 'Elite multi-cuisine catering service in Uppal, Hyderabad. Customized menus, live counters, fusion food, and impeccable hygiene for weddings and corporate events.',
    url: 'https://yourgwd.vercel.app/client/jyothi-caterers-uppal',
    siteName: 'Jyothi Caterers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Jyothi Caterers Modern Gourmet Catering Setup'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  }
};

export default function JyothiCaterersLayout({ children }) {
  return (
    <div className={`${outfit.variable} ${jakarta.variable} min-h-screen bg-[#F4F7FB] text-[#2C3E50] antialiased`}>
      {children}
    </div>
  );
}

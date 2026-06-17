import { Cinzel, Inter } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700', '800']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: 'Ulavacharu Cloud Kitchen Uppal | Premium Coastal Andhra Delivery Hyderabad',
  description: 'Savor coastal Andhra seafood curries, premium pulav boxes, and gourmet meal deliveries. Order online from Ulavacharu Cloud Kitchen in Uppal, Hyderabad.',
  openGraph: {
    title: 'Ulavacharu Cloud Kitchen Uppal | Premium Coastal Andhra Deliveries',
    description: 'Experience gourmet seafood curries and premium meal boxes. Sourced fresh daily and cooked with authentic regional recipes in Uppal, Hyderabad.',
    url: 'https://yourgwd.vercel.app/client/ulavacharu-cloud-kitchen-uppal',
    siteName: 'Ulavacharu Cloud Kitchen',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Ulavacharu Cloud Kitchen Spicy Coastal Curry'
      }
    ]
  }
};

export default function UlavacharuCloudKitchenLayout({ children }) {
  return (
    <div className={`${cinzel.variable} ${inter.variable} font-sans min-h-screen bg-[#F5EBE6] text-[#2E2522] antialiased`}>
      {children}
    </div>
  );
}

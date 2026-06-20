import { Josefin_Sans, Open_Sans } from 'next/font/google'

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-josefin',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
})

export const metadata = {
  title: 'Footprints Play School Tolichowki | Premium Play School & Daycare',
  description: 'Welcome to Footprints Play School Tolichowki, offering a scientifically-researched curriculum, warm terracotta-themed sandboxes, and top-tier daycare.',
  openGraph: {
    title: 'Footprints Play School Tolichowki',
    description: 'Welcome to Footprints Play School Tolichowki, offering a scientifically-researched curriculum, warm terracotta-themed sandboxes, and top-tier daycare.',
    url: 'https://footprints-play-school-tolichowki.example.com',
    siteName: 'Footprints Play School Tolichowki',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Footprints Play School Tolichowki Campus',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
}

export default function FootprintsLayout({ children }) {
  return (
    <div className={`${josefinSans.variable} ${openSans.variable} font-sans bg-[#FBF9F6] text-[#3D405B] min-h-screen selection:bg-[#F2CC8F] selection:text-[#3D405B]`}>
      <style>{`
        .heading-font {
          font-family: var(--font-josefin), sans-serif;
        }
        .body-font {
          font-family: var(--font-open-sans), sans-serif;
        }
        .bg-terracotta-warmth {
          background: linear-gradient(135deg, #FBF9F6 0%, #F4F1DE 50%, #FAF0E6 100%);
        }
        .footprints-divider {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='30' viewBox='0 0 80 30'%3E%3Cpath d='M15 15c-1-2-3-3-5-2s-3 3-2 5 3 3 5 2 3-3 2-5zm2-4c0.5-0.8 0.2-1.8-0.6-2.2s-1.8-0.2-2.2 0.6c-0.5 0.8-0.2 1.8 0.6 2.2 0.8 0.4 1.8 0.2 2.2-0.6zm6 3c0.8-0.5 1-1.5 0.5-2.3s-1.5-1-2.3-0.5c-0.8 0.5-1 1.5-0.5 2.3 0.5 0.8 1.5 1 2.3 0.5zm27 1c-1-2-3-3-5-2s-3 3-2 5 3 3 5 2 3-3 2-5zm2-4c0.5-0.8 0.2-1.8-0.6-2.2s-1.8-0.2-2.2 0.6c-0.5 0.8-0.2 1.8 0.6 2.2 0.8 0.4 1.8 0.2 2.2-0.6zm6 3c0.8-0.5 1-1.5 0.5-2.3s-1.5-1-2.3-0.5c-0.8 0.5-1 1.5-0.5 2.3 0.5 0.8 1.5 1 2.3 0.5z' fill='%23E07A5F' fill-opacity='0.25'/%3E%3C/svg%3E");
          height: 30px;
          background-repeat: repeat-x;
        }
      `}</style>
      {children}
    </div>
  )
}

import { Quicksand, Nunito } from 'next/font/google'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito',
})

export const metadata = {
  title: 'Little Elly Preschool Tolichowki | Premium Play School & Daycare',
  description: 'Welcome to Little Elly Tolichowki, the premier pastel rainbow preschool offering Playgroup, Nursery, LKG, UKG, and daycare. Nurturing children with love and creativity.',
  openGraph: {
    title: 'Little Elly Preschool Tolichowki',
    description: 'Welcome to Little Elly Tolichowki, the premier pastel rainbow preschool offering Playgroup, Nursery, LKG, UKG, and daycare. Nurturing children with love and creativity.',
    url: 'https://little-elly-preschool-tolichowki.example.com',
    siteName: 'Little Elly Preschool Tolichowki',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Little Elly Preschool Tolichowki Classroom',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
}

export default function LittleEllyLayout({ children }) {
  return (
    <div className={`${quicksand.variable} ${nunito.variable} font-sans bg-[#FAF5FF] text-[#1E1B4B] min-h-screen selection:bg-[#FFB3C6] selection:text-[#1E1B4B]`}>
      <style>{`
        .heading-font {
          font-family: var(--font-quicksand), sans-serif;
        }
        .body-font {
          font-family: var(--font-nunito), sans-serif;
        }
        .bg-pastel-gradient {
          background: linear-gradient(135deg, #FAF5FF 0%, #FFF5F7 50%, #F0FDFA 100%);
        }
        .bubble-float {
          animation: floatBubble 6s ease-in-out infinite alternate;
        }
        @keyframes floatBubble {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-15px) scale(1.05); }
        }
      `}</style>
      {children}
    </div>
  )
}

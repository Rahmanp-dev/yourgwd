import { Varela_Round, Nunito_Sans } from 'next/font/google'

const varelaRound = Varela_Round({ subsets: ['latin'], weight: '400' })
const nunitoSans = Nunito_Sans({ subsets: ['latin'], weight: ['300', '400', '600', '700'] })

export const metadata = {
  title: 'Eminent Tiny Tots | Organic & Calming Early Learning',
  description: 'A natural, soft, and clean preschool experience in Rajendranagar, Hyderabad. Fostering growth in a mindful environment.',
  openGraph: {
    title: 'Eminent Tiny Tots',
    description: 'A natural, soft, and clean preschool experience in Rajendranagar, Hyderabad. Fostering growth in a mindful environment.',
    url: 'https://eminent-tiny-tots.example.com',
    siteName: 'Eminent Tiny Tots',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Eminent Tiny Tots Learning Environment',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
}

export default function EminentTinyTotsLayout({ children }) {
  return (
    <div className={`${nunitoSans.className} bg-[#F0FDF4] text-[#064E3B] min-h-screen selection:bg-[#059669] selection:text-white`}>
      <style>{`
        .heading-font {
          font-family: ${varelaRound.style.fontFamily}, sans-serif;
        }
        .leaf-radius {
          border-radius: 2rem 0 2rem 0;
        }
      `}</style>
      {children}
    </div>
  )
}

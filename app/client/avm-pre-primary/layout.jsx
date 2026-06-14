import { Fredoka, Nunito } from 'next/font/google'

const fredoka = Fredoka({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const nunito = Nunito({ subsets: ['latin'], weight: ['300', '400', '600', '700'] })

export const metadata = {
  title: 'AVM Pre-primary | Nurturing Bright Futures',
  description: 'A vibrant and playful preschool environment in Rajendranagar, Hyderabad. Enroll your child today for a joyful learning journey.',
  openGraph: {
    title: 'AVM Pre-primary | Nurturing Bright Futures',
    description: 'A vibrant and playful preschool environment in Rajendranagar, Hyderabad. Enroll your child today for a joyful learning journey.',
    url: 'https://avm-pre-primary.example.com',
    siteName: 'AVM Pre-primary',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'AVM Pre-primary Kids Playing',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
}

export default function AVMPrePrimaryLayout({ children }) {
  return (
    <div className={`${nunito.className} bg-[#FEFCE8] text-[#1E1B4B] min-h-screen selection:bg-[#F43F5E] selection:text-white`}>
      <style>{`
        .heading-font {
          font-family: ${fredoka.style.fontFamily}, sans-serif;
        }
        .blob-shape {
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        }
        .blob-shape-2 {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }
      `}</style>
      {children}
    </div>
  )
}

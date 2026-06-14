export const metadata = {
  title: 'Bachpan Play School - Rajendranagar, Hyderabad',
  description: 'Nurturing young minds at Bachpan Play School in Rajendranagar. Enroll your child in our playful, safe, and engaging preschool programs.',
  openGraph: {
    title: 'Bachpan Play School - Rajendranagar',
    description: 'Admissions Open! Give your child the best start with Bachpan Play School. Safe environment, modern facilities, and caring teachers.',
    url: 'https://yourdomain.com/client/bachpan-play-school-rajendranagar',
    siteName: 'Bachpan Play School',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Bachpan Play School Rajendranagar',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <div className="antialiased text-gray-900 bg-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
      {children}
    </div>
  )
}

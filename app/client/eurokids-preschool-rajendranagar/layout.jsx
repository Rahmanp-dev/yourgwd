export const metadata = {
  title: 'EuroKids Preschool - Rajendranagar',
  description: 'Welcome to EuroKids Rajendranagar. Experience our mindful curriculum, EUNOIA, designed to help your child thrive in a safe, premium environment.',
  openGraph: {
    title: 'EuroKids Preschool - Rajendranagar',
    description: 'Enroll now at EuroKids Rajendranagar! Premium preschool with mindful learning, child-first environment, and top-tier safety.',
    url: 'https://yourdomain.com/client/eurokids-preschool-rajendranagar',
    siteName: 'EuroKids Preschool',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'EuroKids Preschool Rajendranagar',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <div className="antialiased text-slate-800 bg-slate-50" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {children}
    </div>
  )
}

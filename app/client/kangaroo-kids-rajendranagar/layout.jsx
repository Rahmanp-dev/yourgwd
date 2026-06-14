export const metadata = {
  title: 'Kangaroo Kids International Preschool | Rajendranagar',
  description: 'Welcome to Kangaroo Kids International Preschool in Rajendranagar. We nurture young minds with interactive and engaging learning experiences.',
  openGraph: {
    title: 'Kangaroo Kids Rajendranagar',
    description: 'Nurturing young minds with interactive and engaging learning experiences in Rajendranagar.',
    url: 'https://kangaroo-kids-rajendranagar.vercel.app',
    siteName: 'Kangaroo Kids',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Kangaroo Kids Rajendranagar Preschool',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function KangarooKidsLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#FFFDF8]">
      {children}
    </div>
  );
}

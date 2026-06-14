export const metadata = {
  title: 'Kidzee Rajendranagar | A Great Place to Grow',
  description: 'Welcome to Kidzee Rajendranagar. We provide a warm, nurturing environment where children discover, learn, and grow at their own pace.',
  openGraph: {
    title: 'Kidzee Rajendranagar',
    description: 'A warm, nurturing preschool environment where children discover, learn, and grow at their own pace.',
    url: 'https://kidzee-rajendranagar.vercel.app',
    siteName: 'Kidzee',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Kidzee Rajendranagar Preschool',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function KidzeeLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {children}
    </div>
  );
}

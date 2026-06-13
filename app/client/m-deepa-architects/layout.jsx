export const metadata = {
  title: 'M Deepa Architects | Sustainable Design',
  description: 'M Deepa Architects creates harmonious, sustainable, and eco-friendly spaces in Kollur, Hyderabad.',
  openGraph: {
    title: 'M Deepa Architects | Sustainable Eco-Design',
    description: 'Connecting nature with living spaces through sustainable architecture.',
    url: 'https://antigravity.com/client/m-deepa-architects',
    siteName: 'M Deepa Architects',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Sustainable Architecture Preview',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function Layout({ children }) {
  // We'll inject Google Fonts for a distinct typography
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C3E2D] font-sans selection:bg-[#4A7856] selection:text-white">
      {children}
    </div>
  );
}

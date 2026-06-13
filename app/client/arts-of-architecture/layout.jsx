export const metadata = {
  title: 'Arts of Architecture | Modern Architectural Solutions',
  description: 'Arts of Architecture provides premium, modern architectural solutions and minimalist designs in Kollur, Hyderabad.',
  openGraph: {
    title: 'Arts of Architecture | Modern Architectural Solutions',
    description: 'Transforming spaces with premium minimalist designs.',
    url: 'https://antigravity.com/client/arts-of-architecture',
    siteName: 'Arts of Architecture',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Modern Architecture Preview',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-amber-500/30">
      {children}
    </div>
  );
}

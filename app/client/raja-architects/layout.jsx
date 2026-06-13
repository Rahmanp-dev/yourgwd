export const metadata = {
  title: 'Raja Architects | Spaces that Breathe',
  description: 'Premium modern and minimal architecture and interior design in Kollur, Hyderabad.',
  openGraph: {
    title: 'Raja Architects | Spaces that Breathe',
    description: 'Transforming homes and spaces into minimal, beautiful sanctuaries.',
    url: 'https://raja-architects.com',
    siteName: 'Raja Architects',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Minimalist Interior',
      },
    ],
    type: 'website',
  },
};

export default function RajaLayout({ children }) {
  return (
    <div className="font-sans text-neutral-800 bg-[#fbf9f6] min-h-screen">
      {children}
    </div>
  );
}

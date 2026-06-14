export const metadata = {
  title: 'Metal & More Interiors | Industrial Chic & Neo-Brutalist Design',
  description: 'Custom industrial metalwork, raw concrete textures, and stark grid layouts. Premium commercial & residential interior design in Hyderabad by Metal & More Interiors.',
  openGraph: {
    title: 'Metal & More Interiors | Industrial Chic & Neo-Brutalism',
    description: 'Explore custom steel joinery, raw concrete surfaces, and bold rustic amber aesthetics. Bespoke architectural metalwork in Hyderabad.',
    url: 'https://metalandmore.in',
    siteName: 'Metal & More Interiors',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&h=630&q=85',
        width: 1200,
        height: 630,
        alt: 'Metal & More Interiors - Industrial Loft Showcase',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function MetalAndMoreLayout({ children }) {
  return (
    <div className="bg-[#121212] text-[#F3F4F6] min-h-screen font-mono antialiased selection:bg-[#F97316] selection:text-black">
      {children}
    </div>
  );
}

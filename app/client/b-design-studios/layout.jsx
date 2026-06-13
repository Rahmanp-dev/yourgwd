export const metadata = {
  title: 'B-Design Studios | Commercial & Luxury Architecture',
  description: 'Award-winning high-rise and commercial architecture in Hyderabad.',
  openGraph: {
    title: 'B-Design Studios | Commercial Architecture',
    description: 'Pioneering skyline-defining architecture in Kollur, Hyderabad.',
    url: 'https://b-design-studios.com',
    siteName: 'B-Design Studios',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'High Rise Architecture',
      },
    ],
    type: 'website',
  },
};

export default function BDesignLayout({ children }) {
  return (
    <div className="font-sans text-white bg-[#0A0A0A] min-h-screen selection:bg-[#D4AF37] selection:text-black">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Syncopate:wght@400;700&display=swap');
      `}} />
      {children}
    </div>
  );
}

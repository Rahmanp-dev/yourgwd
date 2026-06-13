export const metadata = {
  title: 'Tara Design Solutions | Architecture & Residential',
  description: 'Premium modern architecture and residential design in Kollur, Hyderabad.',
  openGraph: {
    title: 'Tara Design Solutions',
    description: 'Bespoke architecture and modern residential designs tailored for your lifestyle in Kollur, Hyderabad.',
    url: 'https://taradesign.com',
    siteName: 'Tara Design Solutions',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
        width: 1200,
        height: 630,
        alt: 'Tara Design Solutions - Modern Architecture',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TaraDesignLayout({ children }) {
  return (
    <div className="bg-neutral-950 text-neutral-50 min-h-screen font-sans selection:bg-orange-500 selection:text-white">
      {children}
    </div>
  );
}

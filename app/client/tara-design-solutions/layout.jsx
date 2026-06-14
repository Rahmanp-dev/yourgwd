export const metadata = {
  title: 'Tara Design Solutions | Japandi Fusion Architecture & Interiors',
  description: 'Experience the stillness of Japan and the warmth of Scandinavia. Bespoke Japandi Fusion residential designs and interiors in Hyderabad by Tara Design Solutions.',
  openGraph: {
    title: 'Tara Design Solutions | Japandi Fusion Architecture',
    description: 'Bespoke Japandi Fusion residential designs and interiors. Merging clean plaster, bamboo beige, and deep slate in Hyderabad.',
    url: 'https://taradesign.com',
    siteName: 'Tara Design Solutions',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&h=630&q=85',
        width: 1200,
        height: 630,
        alt: 'Tara Design Solutions - Japandi Fusion Architecture',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TaraDesignLayout({ children }) {
  return (
    <div className="bg-[#FAF9F5] text-[#2C302E] min-h-screen font-sans antialiased selection:bg-[#E5DFD3] selection:text-[#2C302E]">
      {children}
    </div>
  );
}

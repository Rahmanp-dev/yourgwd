export const metadata = {
  title: 'Rhythm & Emphasis Design Studio | Residential Interiors',
  description: 'Warm, elegant, and timeless residential interiors in Kollur, Hyderabad.',
  openGraph: {
    title: 'Rhythm & Emphasis Design Studio',
    description: 'Transforming houses into homes with elegant, warm, and inviting residential interior designs in Kollur.',
    url: 'https://rhythmemphasis.com',
    siteName: 'Rhythm & Emphasis Design',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        width: 1200,
        height: 630,
        alt: 'Rhythm & Emphasis Design Studio - Warm Interiors',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RhythmEmphasisLayout({ children }) {
  return (
    <div className="bg-[#FAF8F5] text-[#4A4238] min-h-screen font-serif selection:bg-[#C2A888] selection:text-white">
      {/* Adding a Google Font import for serif elegance */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans-alt { font-family: 'Outfit', sans-serif; }
      `}} />
      {children}
    </div>
  );
}

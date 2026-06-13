export const metadata = {
  title: 'MORIQ | Contemporary Residential Architecture',
  description: 'Designing spaces that breathe. Award-winning contemporary residential architecture by MORIQ.',
  openGraph: {
    title: 'MORIQ | Contemporary Residential Architecture',
    description: 'Award-winning contemporary residential architecture. Discover spaces designed for life, light, and luxury.',
    url: 'https://antigravity.design/client/moriq',
    siteName: 'MORIQ Architects',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'MORIQ Contemporary Villa',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function MoriqLayout({ children }) {
  return (
    <div className="moriq-theme bg-[#f8f7f5] text-[#2c2b29] min-h-screen selection:bg-[#d8cdc1] selection:text-[#2c2b29] font-sans">
      {children}
    </div>
  );
}

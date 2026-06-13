export const metadata = {
  title: 'SEP Architects | Commercial Architecture Redefined',
  description: 'Bold, structural, and dynamic commercial spaces by SEP Architects.',
  openGraph: {
    title: 'SEP Architects | Commercial Architecture Redefined',
    description: 'Pioneering structural commercial architecture. We build the future of corporate and retail environments.',
    url: 'https://antigravity.design/client/sep-architects',
    siteName: 'SEP Architects',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'SEP Architects Commercial Building',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function SepArchitectsLayout({ children }) {
  return (
    <div className="sep-theme bg-[#0a0a0a] text-[#ffffff] min-h-screen selection:bg-[#00f0ff] selection:text-black font-mono">
      {children}
    </div>
  );
}

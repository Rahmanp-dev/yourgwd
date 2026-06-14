export const metadata = {
  title: 'Treasure Land Crèche & Preschool | Nurturing Young Minds',
  description: 'A magical, safe, and playful environment for your child in Rajendranagar, Hyderabad. Enroll your little one today!',
  openGraph: {
    title: 'Treasure Land Crèche & Preschool',
    description: 'A magical, safe, and playful environment for your child in Rajendranagar. Enroll today!',
    url: 'https://yourdomain.com/client/treasure-land-creche',
    siteName: 'Treasure Land Crèche',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1545607593-010375dc0b90?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Treasure Land Crèche preview image',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TreasureLandLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans">
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Quicksand:wght@500;700&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --font-display: 'Quicksand', sans-serif;
          --font-body: 'Nunito', sans-serif;
          --color-mint: #A8E6CF;
          --color-peach: #FFD3B6;
          --color-coral: #FFAAA5;
          --color-sky: #A0C4FF;
        }
        .treasure-font-display { font-family: var(--font-display); }
        .treasure-font-body { font-family: var(--font-body); }
        .blob-shape { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        .blob-shape-2 { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
      `}} />
      <div className="treasure-font-body text-slate-700">
        {children}
      </div>
    </div>
  );
}

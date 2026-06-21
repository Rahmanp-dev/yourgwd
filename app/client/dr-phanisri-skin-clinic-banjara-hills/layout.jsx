import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: "Dr. Phanisri Skin Clinic | Acne Scar & Laser Specialist | Banjara Hills",
  description: "Experience premium dermatology treatments at Dr. Phanisri Skin Clinic in Banjara Hills, Hyderabad. Specializing in Acne scar revision, Laser resurfacing, and Anti-aging.",
  openGraph: {
    title: "Dr. Phanisri Skin Clinic - Banjara Hills",
    description: "Advanced Acne scar revision, Laser resurfacing, and Anti-aging procedures led by Dr. Phanisri J., clinical dermatologist in Banjara Hills.",
    url: 'https://gwd-sales.com/client/dr-phanisri-skin-clinic-banjara-hills',
    siteName: "Dr. Phanisri Skin Clinic",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
        width: 800,
        height: 600,
        alt: "Dr. Phanisri Skin Clinic Treatment Room"
      }
    ]
  }
};

export default function DrPhanisriSkinClinicLayout({ children }) {
  return (
    <div className={`${plusJakartaSans.variable} font-sans min-h-screen bg-[#FDFEFE] text-[#1F2937] antialiased`}>
      {children}
    </div>
  );
}

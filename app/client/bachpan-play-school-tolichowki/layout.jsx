import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata = {
  title: 'Bachpan Play School Tolichowki - Premium Preschool & Daycare',
  description: 'Explore Bachpan Play School Tolichowki, Hyderabad. Providing a premium, cheerful glassmorphic learning environment for early childhood education and development.',
};

export default function BachpanPlaySchoolLayout({ children }) {
  return (
    <div className={nunito.className}>
      {children}
    </div>
  );
}

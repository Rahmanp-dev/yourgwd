import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'Kidzee Tolichowki - Fresh Neumorphic Preschool & Daycare',
  description: 'Welcome to Kidzee Tolichowki, Hyderabad. Providing interactive learning, modern playgroup, daycare programs and a nurturing environment.',
};

export default function KidzeeTolichowkiLayout({ children }) {
  return (
    <div className={plusJakarta.className}>
      {children}
    </div>
  );
}

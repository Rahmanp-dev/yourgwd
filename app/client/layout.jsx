import Script from 'next/script';

export default function ClientLayout({ children }) {
  return (
    <>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      {children}
    </>
  );
}

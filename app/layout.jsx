import '../src/index.css';

export const metadata = {
  title: 'GWD Sales | CRM',
  description: 'Automated B2B Sales Machine',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}

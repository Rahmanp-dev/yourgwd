import fs from 'fs';
import path from 'path';

const clientsDir = path.join(process.cwd(), 'app', 'client');

// Read all directories in app/client
const dirs = fs.readdirSync(clientsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && dirent.name !== '[clientName]')
  .map(dirent => dirent.name);

dirs.forEach(slug => {
  // Convert slug to Title Case
  // e.g. aarthi-scans -> Aarthi Scans
  const name = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const layoutPath = path.join(clientsDir, slug, 'layout.jsx');
  
  const layoutContent = `export const metadata = {
  title: '${name} - Official Website Preview',
  description: 'Welcome to the new premium website preview for ${name}. Discover our services and book an appointment today.',
  openGraph: {
    title: '${name} - Official Website Preview',
    description: 'Welcome to the new premium website preview for ${name}. Discover our services and book an appointment today.',
    siteName: '${name}'
  }
};

export default function Layout({ children }) {
  return children;
}
`;

  fs.writeFileSync(layoutPath, layoutContent, 'utf-8');
  console.log(`Created layout with metadata for: ${slug}`);
});

console.log('Finished generating metadata layouts.');

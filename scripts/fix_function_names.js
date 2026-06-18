import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const missingClinics = [
  'cura-skin-hair-clinic',
  'eternelle-aesthetics-tolichowki',
  'clear-skin-centre-tolichowki',
  'sree-skin-care-clinic-tolichowki',
  'labelle-skin-hair-clinic-tolichowki'
];

missingClinics.forEach(slug => {
  const dir = path.join(__dirname, '..', 'app', 'client', slug);
  
  if (fs.existsSync(dir)) {
    const pagePath = path.join(dir, 'page.jsx');
    const layoutPath = path.join(dir, 'layout.jsx');
    
    if (fs.existsSync(pagePath)) {
      let pageContent = fs.readFileSync(pagePath, 'utf-8');
      // Fix function names like "export default function Clear SkinClinicPage"
      pageContent = pageContent.replace(/export default function ([A-Za-z\s]+)(ClinicPage|Page)\(\)/g, (match, p1, p2) => {
        return `export default function ${p1.replace(/\s+/g, '')}${p2}()`;
      });
      fs.writeFileSync(pagePath, pageContent);
    }
    
    if (fs.existsSync(layoutPath)) {
      let layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      // Fix function names like "export default function Clear SkinLayout"
      layoutContent = layoutContent.replace(/export default function ([A-Za-z\s]+)Layout\(\{ children \}\)/g, (match, p1) => {
        return `export default function ${p1.replace(/\s+/g, '')}Layout({ children })`;
      });
      fs.writeFileSync(layoutPath, layoutContent);
    }
  }
});

console.log("Fixed function names with spaces in generated pages.");

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const missingClinics = [
  { slug: 'cura-skin-hair-clinic', name: 'Cura Skin', fullName: 'Cura Skin, Hair & Laser Clinic', color: '#4A90E2' },
  { slug: 'eternelle-aesthetics-tolichowki', name: 'Eternelle', fullName: 'Eternelle Aesthetics', color: '#C5A880' },
  { slug: 'clear-skin-centre-tolichowki', name: 'Clear Skin', fullName: 'Clear Skin Centre', color: '#6BB8A5' },
  { slug: 'sree-skin-care-clinic-tolichowki', name: 'Sree Skin Care', fullName: 'Sree Skin Care Clinic', color: '#9B8BB4' },
  { slug: 'labelle-skin-hair-clinic-tolichowki', name: 'Labelle', fullName: 'Labelle Skin & Hair Clinic', color: '#F08A5D' }
];

const sourceDir = path.join(__dirname, '..', 'app', 'client', 'dermed-clinic-tolichowki');
const pageContent = fs.readFileSync(path.join(sourceDir, 'page.jsx'), 'utf-8');
const layoutContent = fs.readFileSync(path.join(sourceDir, 'layout.jsx'), 'utf-8');

missingClinics.forEach(clinic => {
  const targetDir = path.join(__dirname, '..', 'app', 'client', clinic.slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Replace name and color in page
  let newPage = pageContent
    .replace(/Dermed Skin & Hair Clinic/g, clinic.fullName)
    .replace(/Dermed/g, clinic.name)
    .replace(/DermedClinicPage/g, clinic.name.replace(/\s+/g, '') + 'Page')
    .replace(/#B76E79/g, clinic.color);

  // Replace name in layout
  let newLayout = layoutContent
    .replace(/Dermed Skin & Hair Clinic/g, clinic.fullName)
    .replace(/Dermed/g, clinic.name);

  fs.writeFileSync(path.join(targetDir, 'page.jsx'), newPage);
  fs.writeFileSync(path.join(targetDir, 'layout.jsx'), newLayout);
  
  console.log(`Generated page for ${clinic.fullName}`);
});

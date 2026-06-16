import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const updateMapping = [
  {
    slug: 'tara-design-solutions-attapur',
    replacements: [
      { search: '+91 91234 56789', replace: '+91 76750 99724' },
      { search: '+91 99999 88888', replace: '+91 76750 99724' },
      { search: 'consult@taradesign.in', replace: 'info@taradesignsolutions.com' },
      { search: 'rahul@gmail.com', replace: 'info@taradesignsolutions.com' }
    ]
  },
  {
    slug: 'livspace-attapur',
    newSlug: 'kj-interior-designs-attapur',
    replacements: [
      { search: 'LivspaceAttapurPage', replace: 'KjInteriorDesignsAttapurPage' },
      { search: 'LIVSPACE', replace: 'KJ INTERIORS' },
      { search: 'Livspace Attapur', replace: 'KJ Interior Designs' },
      { search: 'Livspace', replace: 'KJ Interior Designs' },
      { search: '+91 98765 43210', replace: '+91 90301 13269' },
      { search: '+91 98765 11111', replace: '+91 90301 13269' },
      { search: 'attapur.studio@livspace.com', replace: 'Kjinteriorhyd12@gmail.com' },
      { search: 'care@livspace.com', replace: 'Kjinteriorhyd12@gmail.com' },
      { search: 'shalini@gmail.com', replace: 'Kjinteriorhyd12@gmail.com' },
      { search: 'Opposite Happy Homes, PVNR Expressway Pillar 130, Attapur, Hyderabad - 500048', replace: 'Opposite Fish Building, Attapur, Hyderabad - 500052' },
      { search: 'Ring Road Attapur', replace: 'Attapur' }
    ]
  },
  {
    slug: 'dasos-cabinets-hyderabad',
    replacements: [
      { search: '+91 98480 22338', replace: '+91 85858 58587' },
      { search: 'ananya@gmail.com', replace: 'hello@dasoscabinets.com' }
    ]
  },
  {
    slug: 'mak-homes-construction',
    replacements: [
      { search: '+91 99630 11994', replace: '+91 78429 60039' },
      { search: 'engineering@makhomes.com', replace: 'makhomesconstruction@gmail.com' },
      { search: 'khan@makhomes.com', replace: 'makhomesconstruction@gmail.com' }
    ]
  },
  {
    slug: 'luxe-designs-spaces-hyd',
    replacements: [
      { search: '+91 98765 43210', replace: '+91 98660 70908' },
      { search: '+91 91234 56789', replace: '+91 98660 70908' },
      { search: 'concierge@luxedesigns.spaces', replace: 'info@luxedesigns.ltd' }
    ]
  },
  {
    slug: 'homelane-attapur',
    newSlug: 'boom-interiors-attapur',
    replacements: [
      { search: 'HomelaneAttapurPage', replace: 'BoomInteriorsAttapurPage' },
      { search: 'HOMELANE', replace: 'BOOM INTERIORS' },
      { search: 'HomeLane Attapur', replace: 'Boom Interiors' },
      { search: 'HomeLane', replace: 'Boom Interiors' },
      { search: '+91 98765 43210', replace: '+91 81255 13400' },
      { search: '+91 98765 01234', replace: '+91 81255 13400' },
      { search: 'attapur.design@homelane.com', replace: 'boominteriors.in@gmail.com' },
      { search: 'care@homelane.com', replace: 'boominteriors.in@gmail.com' }
    ]
  },
  {
    slug: 'apple-interiors-hyd',
    replacements: [
      { search: '+91 98765 43210', replace: '+91 96039 60337' },
      { search: '+91 91008 22100', replace: '+91 96039 60337' },
      { search: 'attapur@appleinteriors.in', replace: 'aravind.bandaru@appleinteriors.in' },
      { search: 'sreenivas@domain.com', replace: 'aravind.bandaru@appleinteriors.in' }
    ]
  },
  {
    slug: 'metal-and-more',
    replacements: [
      { search: '+91 99887 76655', replace: '+91 83286 40392' },
      { search: '+91 99488 55400', replace: '+91 83286 40392' },
      { search: 'shop@metalandmore.in', replace: 'info@metalandmore.in' },
      { search: 'anand@gmail.com', replace: 'info@metalandmore.in' }
    ]
  },
  {
    slug: 'namasvi-interiors',
    replacements: [
      { search: '+91 91540 68899', replace: '+91 87120 10801' },
      { search: 'studio@namasviinteriors.com', replace: 'namasviinteriors@gmail.com' },
      { search: 'srikkanth@gmail.com', replace: 'namasviinteriors@gmail.com' }
    ]
  },
  {
    slug: 'simply-interiors-hyd',
    replacements: [
      { search: '+91 40 4880 7777', replace: '+91 93410 74074' },
      { search: 'consulting@simplyinteriorshyd.com', replace: 'enquiry@simplyinteriors.in' },
      { search: 'srikkanth@gmail.com', replace: 'enquiry@simplyinteriors.in' }
    ]
  },
  {
    slug: 'dlife-interiors-hyd',
    replacements: [
      { search: '+91 91008 82345', replace: '+91 94950 87777' },
      { search: '+91 91008 82346', replace: '+91 94950 87777' },
      { search: '+91 98765 43210', replace: '+91 94950 87777' },
      { search: 'atelier.hyd@dlifeinteriors.com', replace: 'info@dlifeinteriors.com' },
      { search: 'enquiry@dlifeinteriors-hyd.com', replace: 'info@dlifeinteriors.com' },
      { search: 'anand@outlook.com', replace: 'info@dlifeinteriors.com' }
    ]
  },
  {
    slug: 'seema-design-studio',
    replacements: [
      { search: '+91 90100 81223', replace: '+91 96760 28887' },
      { search: '+91 90000 12345', replace: '+91 96760 28887' },
      { search: 'hello@seemadesignstudio.in', replace: 'studioseemadesign@gmail.com' },
      { search: 'enquiries@seemadesignstudio.in', replace: 'studioseemadesign@gmail.com' },
      { search: 'sanjay@gmail.com', replace: 'studioseemadesign@gmail.com' }
    ]
  },
  {
    slug: 'designcafe-hyderabad',
    newSlug: 'sun-shine-interiors-mehdipatnam',
    replacements: [
      { search: 'DesigncafeHyderabadPage', replace: 'SunShineInteriorsMehdipatnamPage' },
      { search: 'DESIGNCAFE', replace: 'SUN SHINE INTERIORS' },
      { search: 'DesignCafe', replace: 'Sun Shine Interiors' },
      { search: '+91 90001 23456', replace: '+91 73370 64870' },
      { search: 'attapur@designcafe.com', replace: 'sunshineinteriors.hyd@gmail.com' },
      { search: 'kavitha.reddy@gmail.com', replace: 'sunshineinteriors.hyd@gmail.com' },
      { search: 'Opp. Sarojini Devi Hospital, Mehdipatnam, Hyderabad - 500028', replace: 'Opp. Sarojini Devi Hospital, Mehdipatnam, Hyderabad - 500028' }
    ]
  },
  {
    slug: 'bonito-designs-hyderabad',
    newSlug: 'happy-living-interiors-manikonda',
    replacements: [
      { search: 'BonitoDesignsHyderabadPage', replace: 'HappyLivingInteriorsManikondaPage' },
      { search: 'BONITO DESIGNS', replace: 'HAPPY LIVING INTERIORS' },
      { search: 'Bonito Designs', replace: 'Happy Living Interiors' },
      { search: '+91 91000 87654', replace: '+91 98488 56000' },
      { search: 'commission@bonitohyderabad.com', replace: 'info@happylivinginteriors.com' },
      { search: 'vikram.sen@outlook.com', replace: 'info@happylivinginteriors.com' }
    ]
  },
  {
    slug: 'decorpot-hyderabad',
    replacements: [
      { search: '+919848022338', replace: '+91 91086 02000' },
      { search: '+91 98480 22338', replace: '+91 91086 02000' },
      { search: 'hyderabad@decorpot.com', replace: 'hello@decorpot.com' },
      { search: 'vikram@gmail.com', replace: 'hello@decorpot.com' }
    ]
  },
  {
    slug: 'chary-interiors',
    replacements: [
      { search: '+919848022338', replace: '+91 91821 64142' },
      { search: '+91 98480 22338', replace: '+91 91821 64142' },
      { search: 'contact@charyinteriors.com', replace: 'charyinteriors@gmail.com' },
      { search: 'satish@outlook.com', replace: 'charyinteriors@gmail.com' }
    ]
  },
  {
    slug: 'ss-interiors-secunderabad',
    replacements: [
      { search: '+91 90009 88721', replace: '+91 99123 64302' },
      { search: '+91 98765 43210', replace: '+91 99123 64302' },
      { search: 'design@ss-interiors.in', replace: 'info@ssinteriorshyderabad.in' },
      { search: 'vikram@gmail.com', replace: 'info@ssinteriorshyderabad.in' }
    ]
  },
  {
    slug: 'icon-interior-design-attapur',
    replacements: [
      { search: '+91 91000 66524', replace: '+91 98667 93847' },
      { search: '+91 99009 99009', replace: '+91 98667 93847' },
      { search: 'hello@iconinteriors.in', replace: 'info@iconinteriordesign.com' },
      { search: 'kavitha@gmail.com', replace: 'info@iconinteriordesign.com' }
    ]
  },
  {
    slug: 'elements-design-lab',
    newSlug: 'linear-ads-attapur',
    replacements: [
      { search: 'ElementsDesignLabPage', replace: 'LinearAdsAttapurPage' },
      { search: 'ELEMENTS DESIGN LAB', replace: 'LINEAR A.D.S.' },
      { search: 'Elements Design Lab', replace: 'Linear A.D.S.' },
      { search: '+91 98850 72120', replace: '+91 98498 50348' },
      { search: 'handshake@elementsdesignlab.in', replace: 'linearads@gmail.com' },
      { search: 'OPERATOR_EMAIL@DOMAIN.COM', replace: 'linearads@gmail.com' },
      { search: 'C81 Cellar, Chenoy Trade Center, Parklane, Secunderabad, Telangana - 500003', replace: '12-4-74/A, First Floor, Sayeed Manzil Complex, Upparpally, Pillar No. 184, PVNR Express Way, Attapur, Hyderabad - 500048' }
    ]
  },
  {
    slug: 'style-home-interiors-attapur',
    replacements: [
      { search: '+91 91212 98450', replace: '+91 73309 23363' },
      { search: '+91 99880 77660', replace: '+91 73309 23363' },
      { search: 'studio@stylehomeinteriors.co.in', replace: 'stylehome96@gmail.com' },
      { search: 'anand@outlook.com', replace: 'stylehome96@gmail.com' }
    ]
  }
];

function runRenamingAndUpdates() {
  console.log("Starting codebase renaming & rebranding process...\n");
  
  for (const entry of updateMapping) {
    const currentPath = path.join('app', 'client', entry.slug);
    const targetSlug = entry.newSlug || entry.slug;
    const targetPath = path.join('app', 'client', targetSlug);

    // 1. Rename directory if needed
    if (entry.newSlug) {
      if (fs.existsSync(currentPath)) {
        try {
          console.log(`Renaming: ${entry.slug} -> ${entry.newSlug}`);
          execSync(`git mv "${currentPath}" "${targetPath}"`);
        } catch (e) {
          console.log(`Git mv failed, trying standard fs.rename...`);
          fs.renameSync(currentPath, targetPath);
        }
      } else if (!fs.existsSync(targetPath)) {
        console.error(`Error: Source directory ${currentPath} does not exist.`);
        continue;
      }
    }

    // 2. Perform search-and-replace in page.jsx and layout.jsx
    const files = [
      path.join(targetPath, 'page.jsx'),
      path.join(targetPath, 'layout.jsx')
    ];

    for (const filePath of files) {
      if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        continue;
      }

      console.log(`Processing file: ${filePath}`);
      let content = fs.readFileSync(filePath, 'utf8');
      let updated = false;

      // Apply all specified replacements
      for (const rep of entry.replacements) {
        if (content.includes(rep.search)) {
          content = content.split(rep.search).join(rep.replace);
          console.log(`  Replaced "${rep.search}" with "${rep.replace}"`);
          updated = true;
        }
      }

      if (updated) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  Successfully wrote updates to ${filePath}`);
      } else {
        console.log(`  No matching strings found in ${filePath}`);
      }
    }
  }

  console.log("\nCodebase renaming and contact updates completed successfully.");
}

runRenamingAndUpdates();

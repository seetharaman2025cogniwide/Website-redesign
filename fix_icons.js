const fs = require('fs');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix simpleicons
  content = content.replace(/https:\/\/cdn\.simpleicons\.org\/([a-zA-Z0-9]+)\/\1(?:\.svg)?/g, 'https://cdn.simpleicons.org/$1');
  
  // Restore .svg for github devicons if missing
  content = content.replace(/(https:\/\/raw\.githubusercontent\.com\/devicons\/devicon\/master\/icons\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+)(?!.*?\.svg)['"]/g, '$1.svg"');
  
  fs.writeFileSync(filePath, content);
}

fixFile('components/home/TechStack.tsx');
fixFile('components/products/cogniassist/IntegrationsSection.tsx');
fixFile('app/services/quality-engineering/page.tsx');

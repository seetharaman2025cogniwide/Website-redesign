const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all files
const output = execSync("find . -type f -name '*.tsx' -not -path '*/node_modules/*' -not -path '*/.next/*'");
const files = output.toString().trim().split('\n');

const missing = new Set();

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match /images/...
  const matches = content.match(/\/images\/[a-zA-Z0-9_./-]+\.(png|jpg|jpeg|svg|webp|gif)/g);
  if (matches) {
    matches.forEach(img => {
      const fullPath = path.join(process.cwd(), 'public', img);
      if (!fs.existsSync(fullPath)) {
        missing.add(`${img} (in ${file})`);
      }
    });
  }
});

if (missing.size > 0) {
  console.log("Missing images:");
  missing.forEach(m => console.log(m));
} else {
  console.log("All local images exist!");
}

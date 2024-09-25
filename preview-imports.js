import { readdirSync, statSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Convert __dirname using ES module equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Directory where your source files are located (usually 'src' folder)
const srcDir = join(__dirname, 'src');

// Function to scan files recursively
const getFilesRecursively = (dir) => {
  let results = [];
  const list = readdirSync(dir);
  list.forEach((file) => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    if (stat && stat.isDirectory()) {
      // Recursively search in subdirectories
      results = results.concat(getFilesRecursively(filePath));
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      // Only push JavaScript files
      results.push(filePath);
    }
  });
  return results;
};

// Regular expression to match incorrect import paths (adjust as necessary)
const importRegex = /import\s+.*?\s+from\s+['"](.*?)['"]/g;

// Function to preview incorrect imports
const previewImportsInFile = (filePath) => {
  const content = readFileSync(filePath, 'utf8');

  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];

    // Check if it's an incorrect absolute import path (modify this as per your specific case)
    if (!importPath.startsWith('./') && !importPath.startsWith('../') && !importPath.startsWith('node_modules')) {
      const fixedPath = `./${importPath}`;  // What the fixed path would be
      console.log(`Found incorrect import in ${filePath}: ${importPath} -> Would be changed to: ${fixedPath}`);
    }
  }
};

// Function to start the import preview process
const previewAllImports = () => {
  const files = getFilesRecursively(srcDir);
  files.forEach((filePath) => {
    previewImportsInFile(filePath);
  });
  console.log('Preview complete! No files were changed.');
};

previewAllImports();

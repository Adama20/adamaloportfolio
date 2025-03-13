
/**
 * Ce script aide à détecter les importations incorrectes dans le projet
 * qui utilisent 'src/' au lieu de '@/' pour les chemins d'accès.
 * 
 * Pour l'exécuter: node src/import-check.js
 */

const fs = require('fs');
const path = require('path');

// Fonction pour parcourir récursivement les répertoires
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

// Fonction pour vérifier les importations dans un fichier
function checkImports(filePath) {
  // Ignorer les fichiers non JS/TS
  if (!/\.(js|jsx|ts|tsx)$/.test(filePath)) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const badImportRegex = /from\s+['"]src\//g;
  const matches = content.match(badImportRegex);
  
  if (matches) {
    console.log(`Importation incorrecte trouvée dans ${filePath}:`);
    console.log(`  ${matches.length} importations utilisent 'src/' au lieu de '@/'`);
    
    // Obtenir plus de contexte pour chaque problème
    let lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (badImportRegex.test(lines[i])) {
        console.log(`  Ligne ${i+1}: ${lines[i].trim()}`);
        console.log(`    Remplacer par: ${lines[i].trim().replace(/from\s+['"]src\//, `from "@/`)}`);
      }
    }
  }
}

// Commencer à vérifier à partir du répertoire src
console.log('Vérification des importations incorrectes utilisant "src/" au lieu de "@/"...');
walkDir('./src', checkImports);
console.log('Vérification terminée.');

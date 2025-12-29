import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

async function replaceOptimizedImages() {
  try {
    const files = fs.readdirSync(publicDir);
    const optimizedFiles = files.filter(f => f.startsWith('optimized_'));

    if (optimizedFiles.length === 0) {
      console.log('❌ No optimized files found. Run "npm run optimize-images" first.');
      return;
    }

    console.log('🔄 Replacing original images with optimized versions...\n');

    for (const optimizedFile of optimizedFiles) {
      const originalName = optimizedFile.replace('optimized_', '');
      const optimizedPath = path.join(publicDir, optimizedFile);
      const originalPath = path.join(publicDir, originalName);

      try {
        // Delete original if it exists
        if (fs.existsSync(originalPath)) {
          fs.unlinkSync(originalPath);
        }

        // Rename optimized to original
        fs.renameSync(optimizedPath, originalPath);

        const size = fs.statSync(originalPath).size;
        console.log(`✓ Replaced ${originalName} (${Math.round(size/1024)}KB)`);
      } catch (error) {
        console.error(`✗ Error replacing ${originalName}:`, error.message);
        console.log(`  → Try closing your dev server and IDE, then run this script again.`);
      }
    }

    console.log('\n✅ Done! Original images have been replaced with optimized versions.');
    console.log('💾 Backups are still available as backup_*.webp');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

replaceOptimizedImages();

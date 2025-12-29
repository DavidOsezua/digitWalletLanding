import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesToOptimize = [
  "about.webp",
  "buyAndSellHero.webp",
  "solutionsLayoutMobile.webp",
  "phone.webp",
  "cryptoGateway.webp",
  "digitWallet.webp",
  "aboutHeroMobile.webp",
];

async function createPlaceholder(imageName) {
  const inputPath = path.join(__dirname, "public", imageName);
  const outputPath = path.join(
    __dirname,
    "public",
    imageName.replace(".webp", "-placeholder.webp")
  );

  try {
    await sharp(inputPath)
      .resize(20) // Very small width
      .blur(3)
      .webp({ quality: 20 })
      .toFile(outputPath);

    const stats = fs.statSync(outputPath);
    console.log(
      `✓ Created placeholder for ${imageName} (${Math.round(
        stats.size / 1024
      )}KB)`
    );
  } catch (error) {
    console.error(
      `✗ Error creating placeholder for ${imageName}:`,
      error.message
    );
  }
}

async function optimizeImage(imageName) {
  const inputPath = path.join(__dirname, "public", imageName);
  const backupPath = path.join(__dirname, "public", "backup_" + imageName);
  const optimizedPath = path.join(
    __dirname,
    "public",
    "optimized_" + imageName
  );

  try {
    // Create backup if it doesn't exist
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(inputPath, backupPath);
    }

    // Get original size
    const originalSize = fs.statSync(inputPath).size;

    // Optimize to a new file
    await sharp(inputPath)
      .webp({ quality: 80, effort: 6 })
      .toFile(optimizedPath);

    const newSize = fs.statSync(optimizedPath).size;
    const savedPercent = Math.round(
      ((originalSize - newSize) / originalSize) * 100
    );

    console.log(
      `✓ Optimized ${imageName}: ${Math.round(
        originalSize / 1024
      )}KB → ${Math.round(newSize / 1024)}KB (saved ${savedPercent}%)`
    );
    console.log(`  → Saved as: optimized_${imageName}`);
  } catch (error) {
    console.error(`✗ Error optimizing ${imageName}:`, error.message);
  }
}

async function main() {
  console.log("🖼️  Starting image optimization...\n");

  console.log("Creating placeholders...");
  for (const image of imagesToOptimize) {
    await createPlaceholder(image);
  }

  console.log("\nOptimizing full-size images...");
  for (const image of imagesToOptimize) {
    await optimizeImage(image);
  }

  console.log("\n✅ Done!");
  console.log("📁 Backup files: backup_*.webp");
  console.log("🎯 Optimized files: optimized_*.webp");
  console.log(
    "📝 Review the optimized files, then manually replace the originals if satisfied."
  );
  console.log("\nTo replace originals on Windows:");
  console.log("  1. Stop your dev server (Ctrl+C)");
  console.log("  2. In public folder, delete the original files");
  console.log('  3. Rename optimized_*.webp to remove the "optimized_" prefix');
  console.log("  4. Restart your dev server");
}

main();

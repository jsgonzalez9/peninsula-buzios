const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './original-images';
const outputDir = './images';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Optimize images
async function optimizeImages() {
    const files = fs.readdirSync(inputDir);
    
    for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png|gif)$/i)) {
            const inputPath = path.join(inputDir, file);
            const outputPath = path.join(outputDir, `optimized-${file}`);
            
            await sharp(inputPath)
                .resize(1920, null, { // Max width 1920px, maintain aspect ratio
                    withoutEnlargement: true
                })
                .jpeg({ quality: 80 }) // Adjust quality as needed
                .toFile(outputPath);
            
            console.log(`Optimized: ${file}`);
        }
    }
}

optimizeImages().catch(console.error);
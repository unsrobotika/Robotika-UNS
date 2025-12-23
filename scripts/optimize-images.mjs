// scripts/optimize-images.mjs
// Run with: node scripts/optimize-images.mjs

import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const INPUT_DIR = join(__dirname, '../public/images');
const OUTPUT_DIR = join(__dirname, '../public/images/optimized');

// Config for different image types
const configs = {
    // Main Logo - displayed at 50x50, resize to 100x100 for retina
    mainLogo: {
        pattern: /MainLogo\.(png|jpg|jpeg)$/i,
        width: 100,
        height: 100,
        quality: 90,
    },
    // Logos - displayed at ~130x130, resize to 260x260 for retina
    logos: {
        pattern: /_logo\.(png|jpg|jpeg|webp)$/i,
        width: 260,
        height: 260,
        quality: 80,
    },
    // Bot images - displayed at ~400x400
    bots: {
        pattern: /_bot\.(png|jpg|jpeg|webp)$/i,
        width: 800,
        height: 800,
        quality: 80,
    },
    // Hero background - large but should be compressed
    hero: {
        pattern: /hero.*\.(png|jpg|jpeg|webp)$/i,
        width: 1920,
        height: 1080,
        quality: 75,
    },
    // Placeholder images
    placeholder: {
        pattern: /placeholder\.(png|jpg|jpeg|webp)$/i,
        width: 400,
        height: 300,
        quality: 75,
    }
};

async function optimizeImage(inputPath, outputPath, config) {
    try {
        const info = await sharp(inputPath).metadata();
        console.log(`  Original: ${info.width}x${info.height}`);

        await sharp(inputPath)
            .resize(config.width, config.height, {
                fit: 'cover',
                withoutEnlargement: true,
            })
            .webp({ quality: config.quality })
            .toFile(outputPath);

        const inputStats = await stat(inputPath);
        const outputStats = await stat(outputPath);
        const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

        console.log(`  Optimized: ${config.width}x${config.height}`);
        console.log(`  Size: ${(inputStats.size / 1024).toFixed(0)} KB → ${(outputStats.size / 1024).toFixed(0)} KB (${savings}% saved)`);

        return { inputSize: inputStats.size, outputSize: outputStats.size };
    } catch (error) {
        console.error(`  Error: ${error.message}`);
        return null;
    }
}

async function main() {
    console.log('🖼️  Image Optimization Script\n');

    // Create output directory
    try {
        await mkdir(OUTPUT_DIR, { recursive: true });
    } catch (e) { }

    const files = await readdir(INPUT_DIR);
    const imageFiles = files.filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f));

    let totalInputSize = 0;
    let totalOutputSize = 0;

    for (const file of imageFiles) {
        const inputPath = join(INPUT_DIR, file);
        const outputName = basename(file, extname(file)) + '.webp';
        const outputPath = join(OUTPUT_DIR, outputName);

        // Find matching config
        let config = null;
        for (const [key, cfg] of Object.entries(configs)) {
            if (cfg.pattern.test(file)) {
                config = cfg;
                console.log(`\n📁 ${file} (${key})`);
                break;
            }
        }

        if (!config) {
            console.log(`\n⏭️  ${file} (skipped - no matching config)`);
            continue;
        }

        const result = await optimizeImage(inputPath, outputPath, config);
        if (result) {
            totalInputSize += result.inputSize;
            totalOutputSize += result.outputSize;
        }
    }

    console.log('\n' + '='.repeat(50));
    console.log(`✅ Total: ${(totalInputSize / 1024 / 1024).toFixed(2)} MB → ${(totalOutputSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📉 Total savings: ${((1 - totalOutputSize / totalInputSize) * 100).toFixed(1)}%`);
    console.log('\n⚠️  Remember to replace original files with optimized versions from:');
    console.log(`   ${OUTPUT_DIR}`);
}

main().catch(console.error);

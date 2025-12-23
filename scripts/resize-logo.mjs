import sharp from 'sharp';

async function resizeLogo() {
    try {
        await sharp('public/MainLogo.jpg')
            .resize(100, 100, { fit: 'cover' })
            .webp({ quality: 90 })
            .toFile('public/MainLogo.webp');

        console.log('✅ MainLogo resized successfully: 100x100 WebP');
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

resizeLogo();

export function generateMetaImages(imageSrc) {
    // Si imageSrc est vide, définir l'image par défaut
    if (!imageSrc) {
        imageSrc = 'https://africtivistes.com/images/logo_africtivistes.png';
    }

    return [
        {
        name: `og:image`,
        content: imageSrc,
        },
        {
        name: `twitter:image`,
        content: imageSrc,
        }
    ]
}
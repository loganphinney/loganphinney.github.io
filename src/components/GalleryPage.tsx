import { useState } from 'react';
import type { FC } from 'react';

interface GalleryPageProps {
    navigate: (page: 'main' | 'resume' | 'gallery') => void;
}

const GalleryPage: FC<GalleryPageProps> = ({ navigate }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const imageData = [
        {
            camera: 'Ricoh GR IIIx',
            path: 'ricoh',
            images: [
                { file: 'springtime.JPG', alt: 'Spring Time' },
                { file: 'curves.JPG', alt: 'Curvy Architecture' },
                { file: 'isolated.JPG', alt: 'Sunset Streetlamp' },
                { file: 'nuclear.JPG', alt: 'Nuclear Power Plant' },
                { file: 'coolerthanyou.JPG', alt: 'Street photography' },
                { file: 'youknowthevibe.jpg', alt: 'You know the vibe' },
                { file: 'greenhouse.JPG', alt: 'Greenhouse' },
                { file: 'bessie_cropped.JPG', alt: 'Bessie' },
                { file: 'appalachians1.JPG', alt: 'Appalachian Mountains' },
                { file: 'camp-north-end.jpg', alt: 'Camp North End' },
                { file: 'dry_cleaners.jpeg', alt: 'Dry Cleaners' },
                { file: 'red_bridge.jpeg', alt: 'Red Bridge' },
                { file: 'red_flower.jpeg', alt: 'Red Flower' },
                { file: 'pink-butterfly.JPG', alt: 'Pink Flowers and Butterfly' },
                { file: 'greenandpurple.JPG', alt: 'Green and Purple Plants' },
                { file: 'bird_statue.jpeg', alt: 'Bird Statue' },
                { file: 'porsche.JPG', alt: 'Porsche 356' },
            ],
        },
        {
            camera: 'Pentax Super Program',
            subtitle: 'SMC-A 50mm f1.4',
            path: 'pentax',
            images: [
                { file: 'snowycar.jpg', alt: 'Snowy Car' },
                { file: 'powerline.jpg', alt: 'Powerline' },
                { file: 'stormysky.jpg', alt: 'Stormy Sky' },
            ],
        },
        {
            camera: 'Nikon Coolpix S9900',
            path: 'nikon',
            images: [
                { file: 'heron.jpeg', alt: 'Blue Heron' },
                { file: 'scarlet_macaw.jpeg', alt: 'Scarlet Macaw' },
                { file: 'collared_aracari.jpeg', alt: 'Collared Aracari' },
                { file: 'moon.jpeg', alt: 'The Moon' },
            ],
        },
        {
            camera: 'iPhone',
            path: 'iphone',
            images: [
                { file: 'quetzal.jpeg', alt: 'Quetzal' },
                { file: 'Sayde.jpeg', alt: 'Vizsla Dog' },
                { file: 'space.jpeg', alt: 'Space' },
            ],
        },
    ];

    return (
        <div id="wrapper">
            <article id="gallery">
                <div className="section-header">
                    <h2 className="major">Image Gallery</h2>
                    <button onClick={() => navigate('main')} className="back-button">
                        Back to Home
                    </button>
                </div>
                {imageData.map(({ camera, subtitle, path, images }) => (
                    <div key={camera}>
                        <h3 className="camera-title">
                            {camera}
                            {subtitle && <em style={{ fontSize: '0.8em' }}> - {subtitle}</em>}
                        </h3>
                        <div className="image-grid">
                            {images.map(({ file, alt }) => (
                                <figure key={file}>
                                    <img src={`/images/${path}/${file}`} alt={alt} loading="lazy" onClick={() => setSelectedImage(`/images/${path}/${file}`)} />
                                </figure>
                            ))}
                        </div>
                    </div>
                ))}
            </article>
            {selectedImage && (
                <div className="image-modal" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="Enlarged view" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;

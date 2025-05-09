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
                <h3 className="camera-title">Ricoh GR IIIx</h3>
                <div className="image-grid">
                    <figure>
                        <img src="/images/springtime.JPG" alt="Spring Time" loading="lazy" onClick={() => setSelectedImage('/images/springtime.JPG')} />
                    </figure>
                    <figure>
                        <img src="/images/curves.JPG" alt="Curvy Architecture" loading="lazy" onClick={() => setSelectedImage('/images/curves.JPG')} />
                    </figure>
                    <figure>
                        <img src="/images/isolated.JPG" alt="Sunset Streetlamp" loading="lazy" onClick={() => setSelectedImage('/images/isolated.JPG')} />
                    </figure>
                    <figure>
                        <img src="/images/nuclear.JPG" alt="Nuclear Power Plant" loading="lazy" onClick={() => setSelectedImage('/images/nuclear.JPG')} />
                    </figure>
                    <figure>
                        <img src="/images/coolerthanyou.JPG" alt="Street photography" loading="lazy" onClick={() => setSelectedImage('/images/coolerthanyou.JPG')} />
                    </figure>
                    <figure>
                        <img src="/images/youknowthevibe.jpg" alt="You know the vibe" loading="lazy" onClick={() => setSelectedImage('/images/youknowthevibe.jpg')} />
                    </figure>
                    <figure>
                        <img src="/images/greenhouse.JPG" alt="Greenhouse" loading="lazy" onClick={() => setSelectedImage('/images/greenhouse.JPG')} />
                    </figure>
                    <figure>
                        <img src="/images/bessie_cropped.JPG" alt="Bessie" loading="lazy" onClick={() => setSelectedImage('/images/bessie_cropped.JPG')} />
                    </figure>
                    <figure>
                        <img src="/images/appalachians1.JPG" alt="Appalachian Mountains" loading="lazy" onClick={() => setSelectedImage('/images/appalachians1.JPG')} />
                    </figure>
                    <figure>
                        <img src="/images/camp-north-end.jpg" alt="Camp North End" loading="lazy" onClick={() => setSelectedImage('/images/camp-north-end.jpg')} />
                    </figure>
                    <figure>
                        <img src="/images/dry_cleaners.jpeg" alt="Dry Cleaners" loading="lazy" onClick={() => setSelectedImage('/images/dry_cleaners.jpeg')} />
                    </figure>
                    <figure>
                        <img src="/images/red_bridge.jpeg" alt="Red Bridge" loading="lazy" onClick={() => setSelectedImage('/images/red_bridge.jpeg')} />
                    </figure>
                    <figure>
                        <img src="/images/red_flower.jpeg" alt="Red Flower" loading="lazy" onClick={() => setSelectedImage('/images/red_flower.jpeg')} />
                    </figure>
                    <figure>
                        <img src="/images/pink-butterfly.JPG" alt="Pink Flowers and Butterfly" loading="lazy" onClick={() => setSelectedImage('/images/pink-butterfly.JPG')} />
                    </figure>
                    <figure>
                        <img src="/images/greenandpurple.JPG" alt="Green and Purple Plants" loading="lazy" onClick={() => setSelectedImage('/images/greenandpurple.JPG')} />
                    </figure>
                    <figure>
                        <img src="/images/bird_statue.jpeg" alt="Bird Statue" loading="lazy" onClick={() => setSelectedImage('/images/bird_statue.jpeg')} />
                    </figure>
                    <figure>
                        <img src="/images/porsche.JPG" alt="Porsche 356" loading="lazy" onClick={() => setSelectedImage('/images/porsche.JPG')} />
                    </figure>
                </div>
                <h3 className="camera-title">
                    Pentax Super Program - <em style={{ fontSize: '0.8em' }}>SMC-A 50mm f1.4</em>
                </h3>
                <div className="image-grid">
                    <figure>
                        <img src="/images/snowycar.jpg" alt="Snowy Car" loading="lazy" onClick={() => setSelectedImage('/images/snowycar.jpg')} />
                    </figure>
                    <figure>
                        <img src="/images/powerline.jpg" alt="Powerline" loading="lazy" onClick={() => setSelectedImage('/images/powerline.jpg')} />
                    </figure>
                    <figure>
                        <img src="/images/stormysky.jpg" alt="Stormy Sky" loading="lazy" onClick={() => setSelectedImage('/images/stormysky.jpg')} />
                    </figure>
                </div>
                <h3 className="camera-title">Nikon Coolpix S9900</h3>
                <div className="image-grid">
                    <figure>
                        <img src="/images/heron.jpeg" alt="Blue Heron" loading="lazy" onClick={() => setSelectedImage('/images/heron.jpeg')} />
                    </figure>
                    <figure>
                        <img src="/images/scarlet_macaw.jpeg" alt="Scarlet Macaw" loading="lazy" onClick={() => setSelectedImage('/images/scarlet_macaw.jpeg')} />
                    </figure>
                    <figure>
                        <img src="/images/collared_aracari.jpeg" alt="Collared Aracari" loading="lazy" onClick={() => setSelectedImage('/images/collared_aracari.jpeg')} />
                    </figure>
                    <figure>
                        <img src="/images/moon.jpeg" alt="The Moon" loading="lazy" onClick={() => setSelectedImage('/images/moon.jpeg')} />
                    </figure>
                </div>
                <h3 className="camera-title">iPhone</h3>
                <div className="image-grid">
                    <figure>
                        <img src="/images/quetzal.jpeg" alt="Quetzal" loading="lazy" onClick={() => setSelectedImage('/images/quetzal.jpeg')} />
                    </figure>
                    <figure>
                        <img src="/images/Sayde.jpeg" alt="Vizsla Dog" loading="lazy" onClick={() => setSelectedImage('/images/Sayde.jpeg')} />
                    </figure>
                    <figure>
                        <img src="/images/space.jpeg" alt="Space" loading="lazy" onClick={() => setSelectedImage('/images/space.jpeg')} />
                    </figure>
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

import { useState } from 'react';
import type { FC } from 'react';

interface GalleryPageProps {
    navigate: (page: 'main' | 'resume' | 'gallery') => void;
}

const GalleryPage: FC<GalleryPageProps> = ({ navigate }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                        <img src="/images/bessie_cropped.JPG" alt="Bessie" loading="lazy" onClick={() => setSelectedImage('/images/bessie_cropped.JPG')} />
                    </figure>
                    <figure>
                        <img src="/images/camp-north-end.jpg" alt="Camp North End" loading="lazy" onClick={() => setSelectedImage('/images/camp-north-end.jpg')} />
                    </figure>
                    <figure>
                        <img src="/images/dry_cleaners.jpeg" alt="Dry Cleaners" loading="lazy" onClick={() => setSelectedImage('/images/dry_cleaners.jpeg')} />
                    </figure>
                    <figure>
                        <img src="/images/appalachians1.JPG" alt="Appalachian Mountains" loading="lazy" onClick={() => setSelectedImage('/images/appalachians1.JPG')} />
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

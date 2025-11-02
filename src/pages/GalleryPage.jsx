import React from 'react';
import { Container } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import './GalleryPage.css';

function GalleryPage() {
  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1563379926898-05f4575a457f?q=80&w=1931&auto=format&fit=crop',
      width: 4,
      height: 3
    },
    {
      src: 'https://images.unsplash.com/photo-1598515214211-89d3c7373058?q=80&w=2070&auto=format&fit=crop',
      width: 4,
      height: 3
    },
    {
      src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop',
      width: 3,
      height: 4
    },
    // Tambahkan lebih banyak foto jika Anda mau
  ];

  return (
    <section className="gallery-section">
      <Container>
        <h2 className="section-title">Galeri Momen & Hidangan</h2>
        <p className="section-subtitle">
          Lihat lebih dekat kelezatan masakan kami dan suasana hangat di Padang Delights.
        </p>
        
        {/* Hapus 'renderImage' untuk sementara */}
        <Gallery photos={photos} />
      </Container>
    </section>
  );
}

export default GalleryPage;
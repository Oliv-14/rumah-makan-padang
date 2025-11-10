import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./GalleryPage.css";

function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const photos = [
    {
      src: `${import.meta.env.BASE_URL}/images/fotbar.jpg`,
    },
    {
      src: `${import.meta.env.BASE_URL}/images/abgsndr.jpg`,
    },
    {
      src: `${import.meta.env.BASE_URL}/images/fotbar2.jpg`,
    },
    {
      src: `${import.meta.env.BASE_URL}/images/terong.jpg`,
    },
    {
      src: `${import.meta.env.BASE_URL}/images/ikan.jpg`,
    },
    {
      src: `${import.meta.env.BASE_URL}/images/telur.jpg`,
    },
    {
      src: `${import.meta.env.BASE_URL}/images/ayam.jpg`,
    },
    {
      src: `${import.meta.env.BASE_URL}/images/rendang.jpg`,
    },
    {
      src: `${import.meta.env.BASE_URL}/images/perkedel.jpg`,
    },
  ];

  const handleImageClick = (clickedIndex) => {
    setIndex(clickedIndex);
    setOpen(true);
  };

  return (
    <>
      <section className="gallery-section">
        <Container>
          <h2 className="section-title">Galeri Momen & Hidangan</h2>
          <p className="section-subtitle">
            Lihat lebih dekat kelezatan masakan kami dan suasana hangat di
            Padang Delights.
          </p>

          <Row xs={1} sm={2} lg={3} className="g-5">
            {photos.map((photo, idx) => (
              <Col
                key={idx}
                onClick={() => handleImageClick(idx)}
                className="gallery-col"
              >
                <Image
                  src={photo.src}
                  thumbnail
                  fluid
                  className="gallery-thumbnail"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={photos}
        index={index}
      />
    </>
  );
}

export default GalleryPage;

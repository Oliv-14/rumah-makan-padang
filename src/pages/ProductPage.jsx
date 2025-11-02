import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard.jsx'; 
// Ganti nama file CSS yang diimpor
import './ProductPage.css'; 

// Ganti nama fungsinya
function ProductPage() { 
  const menuItems = [
    { id: 1, image: 'https://i.ibb.co/mG7g2Fz/rendang.png', title: 'Rendang Sapi', price: 'Rp 28.000', rating: 5 },
    { id: 2, image: 'https://i.ibb.co/fDb0zZg/ayam-pop.png', title: 'Ayam Pop', price: 'Rp 22.000', rating: 5 },
    { id: 3, image: 'https://i.ibb.co/YcXJ0sC/gulai-cincang.png', title: 'Gulai Cincang', price: 'Rp 25.000', rating: 5 },
    { id: 4, image: 'https://i.ibb.co/3zd0b4h/dendeng-balado.png', title: 'Dendeng Balado', price: 'Rp 26.000', rating: 4 },
    { id: 5, image: 'https://i.ibb.co/mG7g2Fz/rendang.png', title: 'Gulai Tunjang', price: 'Rp 24.000', rating: 4 },
    { id: 6, image: 'https://i.ibb.co/fDb0zZg/ayam-pop.png', title: 'Ayam Bakar', price: 'Rp 22.000', rating: 5 },
    { id: 7, image: 'https://i.ibb.co/YcXJ0sC/gulai-cincang.png', title: 'Gulai Otak', price: 'Rp 20.000', rating: 4 },
    { id: 8, image: 'https://i.ibb.co/3zd0b4h/dendeng-balado.png', title: 'Ikan Asam Padeh', price: 'Rp 23.000', rating: 5 },
  ];

  return (
    // Ganti className section jika perlu, tapi ini opsional
    <section className="product-section"> 
      <Container>
        <h2 className="section-title">Jelajahi Menu Lengkap Kami</h2>
        <p className="section-subtitle">
          Dari rendang legendaris hingga gulai yang menggugah selera, temukan hidangan favorit Anda di sini.
        </p>

        <Row xs={1} sm={2} lg={4} className="g-4">
          {menuItems.map((item) => (
            <Col key={item.id}>
              <ProductCard 
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

// Jangan lupa ganti nama di export
export default ProductPage;
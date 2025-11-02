import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard.jsx';
import './BestSeller.css';

function BestSeller() {
  // Data produk (nanti bisa diambil dari API)
  const products = [
    { id: 1, image: 'https://i.ibb.co/mG7g2Fz/rendang.png', title: 'Rendang Sapi', price: 'Rp 28.000', rating: 5 },
    { id: 2, image: 'https://i.ibb.co/fDb0zZg/ayam-pop.png', title: 'Ayam Pop', price: 'Rp 22.000', rating: 5 },
    { id: 3, image: 'https://i.ibb.co/YcXJ0sC/gulai-cincang.png', title: 'Gulai Cincang', price: 'Rp 25.000', rating: 5 },
    { id: 4, image: 'https://i.ibb.co/3zd0b4h/dendeng-balado.png', title: 'Dendeng Balado', price: 'Rp 26.000', rating: 4 },
  ];

  return (
    <section className="bestseller-section">
      <Container>
        <h2 className="section-title">Produk Terlaris Minggu Ini!</h2>
        <p className="section-subtitle">
          Cicipi hidangan favorit pelanggan kami yang disajikan dengan bumbu otentik dan resep turun-temurun, menghadirkan cita rasa Padang asli ke meja Anda.
        </p>
        
        {/* Membuat Grid untuk Produk */}
        <Row xs={1} md={2} lg={4} className="g-4">
          {/* `xs={1}`: 1 kolom di layar extra small */}
          {/* `md={2}`: 2 kolom di layar medium */}
          {/* `lg={4}`: 4 kolom di layar large */}
          {/* `g-4`: gap (jarak) antar kolom sebesar 4 unit */}
          
          {products.map((product) => (
            <Col key={product.id}>
              <ProductCard 
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default BestSeller;
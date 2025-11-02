import { Card } from 'react-bootstrap';
import './ProductCard.css'; // Kita akan buat file CSS ini

// Props: 'image', 'title', 'price' akan dikirim dari BestSeller
function ProductCard({ image, title, price, rating }) {
  // Fungsi untuk membuat bintang rating
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} style={{ color: i < rating ? '#ff9900' : '#ddd' }}>
          &#9733; {/* Karakter bintang */}
        </span>
      );
    }
    return stars;
  };

  return (
    <Card className="product-card h-100"> {/* h-100 agar semua kartu sama tinggi */}
      <Card.Img variant="top" src={image} className="product-image"/>
      <Card.Body className="d-flex flex-column">
        <div className="product-rating mb-2">{renderStars()}</div>
        <Card.Title className="product-title">{title}</Card.Title>
        <Card.Text className="product-price mt-auto">{price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
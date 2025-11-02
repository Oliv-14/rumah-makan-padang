import { Container, Button } from 'react-bootstrap';
// Impor ikon sosial media
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <p className="hero-subtitle">RUMAH MAKAN PADANG TERBAIK</p>
        <h1 className="hero-title">
          Masakan Asli dari <br />
          Dapur Minang <br />
          Terbaik
        </h1>
        <Button variant="warning" size="lg" className="hero-button">
          Pesan Sekarang
        </Button>
      </Container>
      
      {/* Tambahkan ikon sosial media di sisi kanan */}
      <div className="social-icons">
        <a href="#twitter"><FaTwitter /></a>
        <a href="#instagram"><FaInstagram /></a>
        <a href="#linkedin"><FaLinkedinIn /></a>
      </div>
    </section>
  );
}

export default Hero;
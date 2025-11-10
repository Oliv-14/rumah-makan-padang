import { Container } from 'react-bootstrap';
// Impor ikon sosial media dari react-icons
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'; // Impor CSS kita

function Footer() {
  // Mendapatkan tahun saat ini secara dinamis
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <Container>
        <div className="footer-content">
          <h3 className="footer-brand">
            <span className="brand-highlight">RM</span> Putri Sulung
          </h3>
          <p className="footer-tagline">
            Menyajikan Cita Rasa Minang Asli Sejak 2024.
          </p>
        </div>
      </Container>
      <Container>
        <div className="footer-copyright">
          © {currentYear} RM Putri Sulung. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
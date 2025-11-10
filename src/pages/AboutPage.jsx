import { Container, Row, Col, Image } from "react-bootstrap";
import "./AboutPage.css"; // Impor file CSS yang baru kita buat

function AboutPage() {
  return (
    <section className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12} className="mb-4 mb-lg-0">
            <p className="about-subtitle">TENTANG KAMI</p>
            <h2 className="about-title">
              Kisah Dibalik Rasa Otentik RM Putri Sulung
            </h2>
            <p className="about-text">
              Berawal dari kecintaan kami terhadap masakan Minang yang kaya akan
              rempah dan rasa, <b>RM Putri Sulung</b> lahir untuk menyajikan
              hidangan otentik yang diwariskan dari generasi ke generasi. Kami
              berkomitmen untuk menggunakan bahan-bahan segar berkualitas
              terbaik dan resep asli untuk menghadirkan pengalaman kuliner yang
              tak terlupakan bagi Anda.
            </p>
            <p className="about-text mt-3">
              Setiap hidangan di Padang Delights adalah cerminan dari dedikasi
              dan passion kami dalam melestarikan warisan kuliner Nusantara.
              Selamat menikmati!
            </p>
          </Col>
          <Col lg={5} md={12}>
            <Image
              src={`${import.meta.env.BASE_URL}/images/RMPutriSulung.jpg`}
              alt="Pemilik Padang Delights"
              className="about-image"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutPage;

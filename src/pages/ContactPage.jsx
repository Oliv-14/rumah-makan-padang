import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactPage.css';

function ContactPage() {
  return (
    <section className="contact-section">
      <Container fluid>
        <div className="text-center">
          <h2 className="contact-title">Hubungi Kami</h2>
          <p className="contact-subtitle">
            Punya pertanyaan, kritik, atau saran? Jangan ragu untuk menghubungi kami.
          </p>
        </div>

        {/* gunakan justify-content-between dan align-items-start */}
       <Row className="mt-5 justify-content-start align-items-start">
  <Col xl={4} lg={4} md={6} className="mb-5 mb-lg-0 left-info-col">
    <div className="contact-info">
      <h3 className="info-title">Informasi Kontak</h3>

      <div className="info-item">
        <strong>Alamat:</strong>
        <span>Jl. Kuliner Raya No. 123, Jakarta, Indonesia</span>
      </div>

      <div className="info-item">
        <strong>Telepon:</strong>
        <span>+62 812-1234-5678</span>
      </div>

      <div className="info-item">
        <strong>Email:</strong>
        <span>info@padangdelights.com</span>
      </div>

      <h3 className="info-title mt-4">Jam Buka</h3>

      <div className="info-item">
        <strong>Senin - Jumat:</strong>
        <span>10:00 - 22:00</span>
      </div>

      <div className="info-item">
        <strong>Sabtu - Minggu:</strong>
        <span>09:00 - 23:00</span>
      </div>
    </div>
  </Col>

  <Col xl={6} lg={7} md={10} className="right-form-col">
            <Form className="contact-form">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Nama Anda" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email Anda" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Control as="textarea" rows={6} placeholder="Pesan Anda" />
              </Form.Group>

              <Button variant="warning" type="submit" className="submit-button">
                Kirim Pesan
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactPage;

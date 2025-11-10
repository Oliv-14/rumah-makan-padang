import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./ContactPage.css"; // Pastikan file CSS ini diimpor

function ContactPage() {
   // Buat state untuk nama dan pesan
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Nomor tujuan.
    const phoneNumber = "6283840685252"; 
    
    // Format pesan baru
    // %0A adalah kode untuk baris baru.
    const message = `Halo, nama saya ${formData.name}.%0A%0ASaya ingin bertanya tentang:%0A${formData.message}`;
    
    // Buat URL WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Buka URL di tab baru
    window.open(whatsappURL, '_blank');
  };
  return (
    <div className="contact-bg">
      {" "}
      {/* Ganti <section> dengan <div> */}
      <Container className="contact-container">
        <div className="text-center mb-5">
          <h2 className="contact-title">Hubungi Kami</h2>
          <p className="contact-subtitle">
            Punya pertanyaan, kritik, atau saran? Jangan ragu untuk menghubungi
            kami.
          </p>
        </div>

        <Row>
          <Col lg={5} md={12} className="mb-5 mb-lg-0">
            <h3 className="info-title">Informasi Kontak</h3>
            <div className="info-block">
              <p>
                <strong>Alamat:</strong>Jl. Imanan Residence, Serang, Cikarang
                Sel., Kabupaten Bekasi, Jawa Barat 17530
              </p>
              <p>
                <strong>Telepon:</strong> +62 838-4068-5252
              </p>
            </div>
            <h3 className="info-title mt-4">Jam Buka</h3>
            <div className="info-block">
              <p>
                <strong>Senin - Jumat:</strong> 08:00 - 22:00
              </p>
              <p>
                <strong>Sabtu - Minggu:</strong> 09:00 - 23:00
              </p>
            </div>
          </Col>

             <Col lg={7} md={12}>
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Control 
                  type="text" 
                  placeholder="Nama Anda" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Control 
                  as="textarea" 
                  rows={6} 
                  placeholder="Pesan Anda" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              
              <Button variant="warning" type="submit" className="submit-button">
                Kirim Pesan via WhatsApp
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactPage;

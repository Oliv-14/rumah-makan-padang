import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
// Impor ikon dari react-icons
import { BsTelephoneFill, BsSearch } from "react-icons/bs";
// Impor file CSS kita
import "./Header.css";

function Header() {
  return (
    // Kita gunakan className custom agar bisa di-styling
<<<<<<< HEAD
    <Navbar expand="lg" className="navbar-custom" variant="dark" sticky="top">
      <Container fluid>
        {" "}
        {/* `fluid` agar container memenuhi lebar layar */}
        {/* Grup Kiri: Logo + Kontak */}
=======
    <Navbar expand="lg" className="navbar-custom" variant="dark">
      <Container fluid> 
>>>>>>> 45ced8a4608a4b3f876aa47845fbcf22147d0699
        <div className="d-flex align-items-center">
          <Navbar.Brand as={NavLink} to="/">
            <span className="brand-highlight">RM</span> Putri Sulung
          </Navbar.Brand>
<<<<<<< HEAD
          <div className="contact-info d-none d-lg-flex">
            {" "}
            {/* Sembunyikan di layar kecil */}
=======
          <div className="contact-info d-none d-lg-flex"> 
>>>>>>> 45ced8a4608a4b3f876aa47845fbcf22147d0699
            <BsTelephoneFill className="icon" />
            <div>
              <span className="label">Pesan Sekarang</span>
              <span>+62 812-1234-5678</span>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        {/* Tombol Hamburger (muncul di layar kecil) */}
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        {/* Grup Kanan: Navigasi + Pencarian */}
=======
        <Navbar.Toggle aria-controls="main-navbar-nav" />

>>>>>>> 45ced8a4608a4b3f876aa47845fbcf22147d0699
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto align-items-center">
<<<<<<< HEAD
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About Us
            </Nav.Link>
            {/* Ganti nama menu sesuai kebutuhan Anda */}
            <Nav.Link as={NavLink} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/product">
              Product
            </Nav.Link>
            <Nav.Link as={NavLink} to="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact Us
            </Nav.Link>
=======
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
            <Nav.Link as={NavLink} to="/product">Product</Nav.Link>
            <Nav.Link as={NavLink} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
>>>>>>> 45ced8a4608a4b3f876aa47845fbcf22147d0699
            <BsSearch className="search-icon" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

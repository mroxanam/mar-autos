import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavbarMenu() {
  const [show, setShow] = useState(false); // Estado para controlar el Offcanvas

  const handleClose = () => setShow(false); // Cerrar Offcanvas
  const handleShow = () => setShow(true);   // Abrir Offcanvas

  return (
    <Navbar bg="dark" variant="dark" expand={false} className="mb-3">
      <Container fluid>
        {/* Logo + nombre */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-white" onClick={handleClose}>
          <img
            src={logo}
            alt="Mar Autos"
            width="50"
            height="50"
            className="d-inline-block align-top me-2"
          />
          <span className="fw-bold">Mar Autos</span>
        </Navbar.Brand>

        {/* Botón hamburguesa */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="border-0" onClick={handleShow} />

        {/* Menú lateral */}
        <Navbar.Offcanvas
          show={show}
          onHide={handleClose}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="offcanvas-custom"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id="offcanvasNavbarLabel" className="text-white">
              Menú
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 offcanvas-nav">
              <Nav.Link as={Link} to="/" onClick={handleClose}>Inicio</Nav.Link>
              <Nav.Link as={Link} to="/autos" onClick={handleClose}>Autos</Nav.Link>
              <Nav.Link as={Link} to="/contacto" onClick={handleClose}>Contacto</Nav.Link>
              <Nav.Link as={Link} to="/ubicacion" onClick={handleClose}>Ubicación</Nav.Link>
              <Nav.Link as={Link} to="/quienes-somos" onClick={handleClose}>Quiénes Somos</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;


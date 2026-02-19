import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavbarMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" variant="dark" expand={false} className="mb-3">
      <Container fluid>

        {/* Logo + nombre */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center text-white"
          onClick={handleClose}
        >
          <img
            src={logo}
            alt="Automotores Ramos Logo"
            width="50"
            height="50"
            className="d-inline-block align-top me-2"
          />
          <span className="fw-bold">Automotores Ramos</span>
        </Navbar.Brand>

        {/* Botón hamburguesa */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className="border-0"
          onClick={handleShow}
        />

        {/* Menú lateral */}
        <Navbar.Offcanvas
          show={show}
          onHide={handleClose}
          id="offcanvasNavbar"
          placement="end"
          className="offcanvas-custom"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title
              id="offcanvasNavbarLabel"
              className="text-white"
            >
              Menú
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 offcanvas-nav">

              <Nav.Link as={Link} to="/" onClick={handleClose}>
                Inicio
              </Nav.Link>

              <Nav.Link as={Link} to="/autos" onClick={handleClose}>
                Autos
              </Nav.Link>

              {/* 🔽 SOLO AGREGADO */}
              <Nav.Link as={Link} to="/camionetas" onClick={handleClose}>
                Camionetas
              </Nav.Link>

              <Nav.Link as={Link} to="/motos" onClick={handleClose}>
                Motos
              </Nav.Link>

              <Nav.Link as={Link} to="/cuatriciclos" onClick={handleClose}>
                Cuatriciclos
              </Nav.Link>

              <Nav.Link as={Link} to="/lanchas" onClick={handleClose}>
                Lanchas
              </Nav.Link>
              {/* 🔼 FIN AGREGADO */}

              <Nav.Link as={Link} to="/contacto" onClick={handleClose}>
                Contacto
              </Nav.Link>

              <Nav.Link as={Link} to="/ubicacion" onClick={handleClose}>
                Ubicación
              </Nav.Link>

              <Nav.Link as={Link} to="/quienes-somos" onClick={handleClose}>
                Quiénes Somos
              </Nav.Link>

            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;



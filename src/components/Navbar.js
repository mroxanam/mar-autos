import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function NavbarMenu() {
  return (
    <Navbar bg="dark" variant="dark" expand={false} className="mb-3">
      <Container fluid>
        {/* Logo + nombre */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-white">
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
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="border-0" />

        {/* Menú lateral */}
        <Navbar.Offcanvas
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
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/autos">Autos</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
              <Nav.Link as={Link} to="/ubicacion">Ubicación</Nav.Link>
              <Nav.Link as={Link} to="/quienes-somos">Quiénes Somos</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;

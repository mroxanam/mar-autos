import { Container, Button, Badge } from "react-bootstrap";
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaFacebook, 
  FaInstagram ,FaTiktok} from "react-icons/fa";


 function Contacto() {
  const whatsappNumber = "5493548591003";
  const whatsappVisible = "03548 15-591003";
  const email = "automotoresramos@gmail.com";

  const mensajeWhatsapp = encodeURIComponent(
    "Hola Marcelo, quiero consultar sobre un vehículo"
  );

  const redes = {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  };

  return (
    <Container className="mt-5 text-center mb-5">
      <h2 className="fw-bold mb-3">Contacto y Redes</h2>
      <p className="text-muted mb-4">
        Seguinos y consultanos por cualquier medio:
      </p>

      <div
        className="d-flex flex-column gap-3 mx-auto"
        style={{ maxWidth: "350px" }}
      >
        {/* WHATSAPP */}
        <div>
          <Button
            as="a"
            variant="link"
            aria-label="Contactar por WhatsApp"
            href={`https://wa.me/${whatsappNumber}?text=${mensajeWhatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn btn-whatsapp w-100 d-flex align-items-center justify-content-center shadow-sm rounded-pill py-2 fw-bold"
          >
            <FaWhatsapp size={20} style={{ color: "white" }} className="me-2" />
            WhatsApp
          </Button>
          <div className="small text-muted mt-1">{whatsappVisible}</div>
        </div>

        {/* INSTAGRAM */}
        <Button
          as="a"
          variant="link"
          aria-label="Seguinos en Instagram"
          href={redes.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn btn-instagram w-100 d-flex align-items-center justify-content-center shadow-sm rounded-pill py-2 fw-bold"
        >
          <FaInstagram size={20} style={{ color: "white" }} className="me-2" />
          Instagram
        </Button>

        {/* FACEBOOK */}
        <Button
          as="a"
          variant="link"
          aria-label="Seguinos en Facebook"
          href={redes.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn btn-facebook w-100 d-flex align-items-center justify-content-center shadow-sm rounded-pill py-2 fw-bold"
        >
          <FaFacebook size={20} style={{ color: "white" }} className="me-2" />
          Facebook
        </Button>

        {/* TIKTOK */}
        <Button
          as="a"
          variant="link"
          aria-label="Seguinos en TikTok"
          href={redes.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn btn-tiktok w-100 d-flex align-items-center justify-content-center shadow-sm rounded-pill py-2 fw-bold"
        >
          <FaTiktok size={20} style={{ color: "white" }} className="me-2" />
          TikTok
        </Button>

        {/* EMAIL */}
        <Button
          as="a"
          variant="link"
          aria-label="Enviar email"
          href={`mailto:${email}`}
          className="w-100 d-flex align-items-center justify-content-center shadow-sm rounded-pill py-2 fw-bold"
          style={{
            backgroundColor: "#f8f9fa",
            color: "#6c757d",
            border: "1px solid #dee2e6",
          }}
        >
          <FaEnvelope size={18} className="me-2" />
          Email
        </Button>
      </div>

      <div className="mt-5 p-3 bg-light rounded border">
        <Badge bg="info" text="dark" className="mb-2">
          Info
        </Badge>
        <p className="small mb-0 text-secondary">
          Hacé clic para abrir directamente en tu celular o computadora.
        </p>
      </div>

      <footer className="mt-4 text-muted small">
        © 2025 Automotores Ramos - Todos los derechos reservados
      </footer>
    </Container>
  );
}

export default Contacto;
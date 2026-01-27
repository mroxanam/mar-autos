import { Container, Button, Badge } from "react-bootstrap";
import { FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function Contacto() {
  const whatsappNumber = "5493548591003"; // 
  const whatsappVisible = "03548 15-591003"; // 
  const email = "automotoresramos@gmail.com";
  
  const facebookUrl = "https://facebook.com";
  const instagramUrl = "https://instagram.com";
  const tiktokUrl = "https://tiktok.com";

  return (
    <Container className="mt-5 text-center mb-5">
      <h2 className="fw-bold mb-3">Contacto y Redes</h2>
      <p className="text-muted mb-4">Seguinos y consultanos por cualquier medio:</p>

      <div className="d-flex flex-column gap-3 mx-auto" style={{ maxWidth: "350px" }}>
        
        {/* WHATSAPP */}
        <div className="mb-2">
          <Button
            as="a"
            href={`https://wa.me/${whatsappNumber}?text=Hola%20Marcelo,%20quiero%20consultar%20sobre%20un%20vehículo`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-100 d-flex align-items-center justify-content-center shadow-sm rounded-pill py-2 fw-bold"
          >
            <FaWhatsapp className="me-2" size={24} /> WhatsApp
          </Button>
          <div className="small text-muted mt-1">{whatsappVisible}</div>
        </div>

        {/* INSTAGRAM */}
        <Button
          as="a"
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-instagram w-100 d-flex align-items-center justify-content-center shadow-sm rounded-pill py-2 fw-bold border-0 text-white"
        >
          <FaInstagram className="me-2" size={24} /> Instagram
        </Button>

        {/* FACEBOOK */}
        <Button
          as="a"
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-facebook w-100 d-flex align-items-center justify-content-center shadow-sm rounded-pill py-2 fw-bold text-white"
        >
          <FaFacebook className="me-2" size={24} /> Facebook
        </Button>

        {/* TIKTOK */}
        <Button
          as="a"
          href={tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-tiktok w-100 d-flex align-items-center justify-content-center shadow-sm rounded-pill py-2 fw-bold text-white"
        >
          <FaTiktok className="me-2" size={24} /> TikTok
        </Button>

        {/* EMAIL */}
        <Button
          as="a"
          href={`mailto:${email}`}
          variant="outline-secondary"
          className="w-100 d-flex align-items-center justify-content-center shadow-sm rounded-pill py-2 fw-bold"
        >
          <FaEnvelope className="me-2" size={20} /> Email
        </Button>

      </div>

      <div className="mt-5 p-3 bg-light rounded border">
        <Badge bg="info" text="dark" className="mb-2">Info</Badge>
        <p className="small mb-0 text-secondary">
          Hacé clic para abrir directamente en tu celular o computadora. 
        </p>
      </div>
    </Container>
  );
}

export default Contacto;
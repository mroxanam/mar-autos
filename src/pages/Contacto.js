import { Container, Button } from "react-bootstrap";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Contacto() {
  const whatsappNumber = "543548591003"; // tu número completo
  const email = "marauto@gmail.com";

  return (
    <Container className="mt-4 text-center">
      <h2 className="mb-3">Contacto</h2>
      <p className="mb-4">Elegí cómo querés comunicarte con nosotros:</p>

      <div className="d-flex flex-column gap-3 mx-auto" style={{ maxWidth: "300px" }}>
        {/* Botón WhatsApp */}
        <Button
          as="a"
          href={`https://wa.me/${whatsappNumber}?text=Hola,%20quiero%20consultar%20sobre%20un%20vehículo`}
          target="_blank"
          rel="noopener noreferrer"
          variant="light"
          className="w-100 d-flex align-items-center justify-content-center border shadow-sm rounded-pill text-decoration-none"
        >
          <FaWhatsapp style={{ marginRight: "8px", fontSize: "1.5rem", color: "#25D366" }} />
          WhatsApp
        </Button>

        {/* Botón Correo */}
        <Button
          as="a"
          href={`mailto:${email}?subject=Consulta%20sobre%20vehículo&body=Hola,%20quiero%20consultar%20sobre%20un%20vehículo`}
          variant="light"
          className="w-100 d-flex align-items-center justify-content-center border shadow-sm rounded-pill text-decoration-none"
        >
          <FaEnvelope style={{ marginRight: "8px", fontSize: "1.5rem", color: "#0d6efd" }} />
          Email
        </Button>
      </div>
    </Container>
  );
}

export default Contacto;

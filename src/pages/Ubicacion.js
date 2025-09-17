import { Container } from "react-bootstrap";

function Ubicacion() {
  return (
    <Container className="my-4 text-center">
      <h2>Nuestra Ubicación</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18..."
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Mapa Mar Autos"
      ></iframe>
    </Container>
  );
}
export default Ubicacion;

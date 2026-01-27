import { Container } from "react-bootstrap";

function Ubicacion() {
  // Coordenadas convertidas para el modo embed de Google Maps
  const lat = "-30.882556";
  const lng = "-64.537250";
  const zoom = "15"; // Nivel de acercamiento (1-21)
  
  const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  return (
    <Container className="my-4 text-center">
      <h2>Ubicación en Capilla del Monte</h2>
      <div className="ratio ratio-16x9" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <iframe
          src={googleMapsUrl}
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación GPS"
        ></iframe>
      </div>
      <p className="mt-3 text-muted">
        Coordenadas: 30°52'57.2"S 64°32'14.1"W
      </p>
    </Container>
  );
}

export default Ubicacion;

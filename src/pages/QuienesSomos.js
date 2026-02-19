import { Container } from "react-bootstrap";
import fondo from "../assets/images/fondo-quienes-somos.jpg";

function QuienesSomos() {
  return (
    <>
      {/* IMAGEN SOLA */}
      <div style={{ width: "100%" }}>
        <img
          src={fondo}
          alt="Automotores Ramos"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* CONTENIDO */}
      <Container className="my-5 text-center">
        <h2>Quiénes Somos</h2>
        <p>
          En <strong>Automotores Ramos</strong> nos dedicamos a ofrecer los
          mejores vehículos usados. Nuestro compromiso es brindarte confianza,
          calidad y asesoramiento personalizado.
        </p>
      </Container>
    </>
  );
}

export default QuienesSomos;
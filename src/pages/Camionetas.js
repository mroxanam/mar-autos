import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import AutoCard from "../components/AutoCard";

function Camionetas() {
  const [camionetas, setCamionetas] = useState([]);
  const [cargando, setCargando] = useState(true); // Estado de carga inicial

  useEffect(() => {
    fetch("/data/camionetas.json")
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar el archivo");
        return res.json();
      })
      .then((data) => {
        setCamionetas(data);
        setCargando(false); // Ya tenemos los datos
      })
      .catch((err) => {
        console.error("Error:", err);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" variant="primary" />
        <p>Buscando las mejores camionetas...</p>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Nuestra Selección de Camionetas</h2>
      <Row className="g-4 justify-content-center">
        {camionetas.map((camioneta) => (
          <Col
            key={camioneta.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center"
          >
            <AutoCard auto={camioneta} />
          </Col>
        ))}
      </Row>
    </Container>
  );
  
}

export default Camionetas;

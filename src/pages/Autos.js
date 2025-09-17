import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AutoCard from "../components/AutoCard";

function Autos() {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    fetch("/data/autos.json")
      .then((res) => res.json())
      .then((data) => setAutos(data))
      .catch((err) => console.error("Error cargando autos:", err));
  }, []);

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Autos Disponibles</h2>
      <Row className="justify-content-center">
        {autos.map((auto) => (
          <Col key={auto.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <AutoCard auto={auto} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Autos;

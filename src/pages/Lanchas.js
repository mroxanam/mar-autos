import {
  useEffect, useState
} from "react";
import {
  Container, Row, Col, Spinner
} from "react-bootstrap";
import AutoCard from "../components/AutoCard";

function Lanchas() {
  const [lanchas, setLanchas
  ] = useState([]);
  const [cargando, setCargando
  ] = useState(true); // Estado de carga inicial

  useEffect(() => {
    fetch("/data/lanchas.json")
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar el archivo");
        return res.json();
      })
      .then((data) => {
        setLanchas(data);
        setCargando(false); // Ya tenemos los datos
      })
      .catch((err) => {
        console.error("Error:", err);
        setCargando(false);
      });
  },
    []);

  if (cargando) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" variant="primary" />
        <p>Buscando las mejores Lanchas...</p>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Nuestra Selección de Usados</h2>
      <Row className="g-4 justify-content-center"> { /* 'g-4' añade espacio (gutter) entre tarjetas */}
        {lanchas.map((lancha) => (
          <Col key={lancha.id
          } xs={
            12
          } sm={
            6
          } md={
            4
          } lg={
            3
          } className="d-flex justify-content-center">
            <AutoCard auto={lancha
            } />
          </Col>
        ))
        }
      </Row>
    </Container>
  );
}

export default Lanchas;
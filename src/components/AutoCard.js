// src/components/AutoCard.js
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Importante para no recargar la página
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function AutoCard({ auto }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Verificamos si existe auto.images (array) o usamos la imagen única
  const images = auto.images && auto.images.length > 0
    ? auto.images
    : [auto.imagen]; // Asegúrate que en el JSON la ruta sea directa (ej: "/images/auto1.jpg")

  return (
    <>
      <motion.div
        whileHover={{
          y: -10, // Efecto de elevación
          scale: 1.02,
        }}

        className="auto-card"
        style={{ cursor: "pointer" }}
      >
        <Card.Img
          variant="top"
          src={images[0]}
          alt={auto.modelo}
          onClick={() => setOpen(true)}
          style={{ height: "200px", objectFit: "cover" }}
          />
        <Card.Body>
          <Card.Title className="fw-bold">{auto.marca} {auto.modelo}</Card.Title>
          <Card.Text>
            <strong>Año:</strong> {auto.anio} <br />
            <strong>Combustible:</strong> {auto.combustible} <br />
            <span className="text-primary fw-bold fs-5">${auto.precio?.toLocaleString()}</span>
          </Card.Text>

          {/* Usamos Link en lugar de href para SPA */}
          <Button as={Link} to="/contacto" variant="primary" className="w-100 shadow-sm">
            Consultar
          </Button>
        </Card.Body>
      </motion.div>

      {/* El Lightbox solo se renderiza si hay imágenes y está abierto */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((src) => ({ src }))}
        plugins={[Thumbnails]}
        on={{ view: ({ index }) => setIndex(index) }} // Actualiza el índice correctamente
      />
    </>
  );
}
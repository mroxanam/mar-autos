// src/components/AutoCard.js
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "../App.css"; // importa estilos de auto-card

export default function AutoCard({ auto }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = auto.images || [`/autos/${auto.imagen}`];

  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.03,
          boxShadow:
            "12px 12px 24px rgba(0,0,0,0.2), -12px -12px 24px rgba(255,255,255,0.7)"
        }}
        transition={{ duration: 0.3 }}
        className="auto-card"
      >
        <Card.Img
          variant="top"
          src={images[0]}
          alt={auto.modelo}
          onClick={() => setOpen(true)}
        />
        <Card.Body>
          <Card.Title>{auto.marca} {auto.modelo}</Card.Title>
          <Card.Text>
            Año: {auto.anio} <br />
            Combustible: {auto.combustible} <br />
            
          </Card.Text>
          <Button variant="primary" href="/contacto" className="w-100">
            Consultar
          </Button>
        </Card.Body>
      </motion.div>

      {open && (
        <Lightbox
          open={open}
          index={index}
          close={() => setOpen(false)}
          slides={images.map((img) => ({ src: img }))}
          plugins={[Thumbnails]}
          thumbnails={{ vignette: true }}
          on={{ slideChange: (idx) => setIndex(idx) }}
        />
      )}
    </>
  );
}

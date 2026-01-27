import autopantalla from "../assets/images/autopantalla.png";
import "./Home.css"; 

function Home() {
  return (
    
    <div className="container d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
      
      {/* Contenedor para limitar el tamaño de la imagen */}
      <div style={{ maxWidth: "600px" }}>
        <img
          src={autopantalla}
          alt="Auto de exhibición Mar Autos"
          className="img-fluid rounded mx-auto d-block portada-img shadow-lg"
        />
      </div>

      {/* Texto de bienvenida con tipografía más destacada */}
      <h1 className="display-4 mt-4 fw-bold text-dark">
        Bienvenido a Mar Autos
      </h1>
      <p className="lead text-secondary">
        La mejor selección de autos usados en un solo lugar.
      </p>
      
      {/* Sugerencia: Un botón de acción para mejorar la navegación */}
      <a href="/autos" className="btn btn-primary btn-lg mt-3 px-5 shadow">
        Ver Catálogo
      </a>
    </div>
  );
}

export default Home;
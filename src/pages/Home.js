import autopantalla from "../assets/images/autopantalla.png";
import { Link } from "react-router-dom"; // Importamos Link para que no recargue la página

function Home() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
      
      {/* Contenedor de la imagen */}
      <div style={{ maxWidth: "600px" }}>
        <img
          src={autopantalla}
          alt="Auto de exhibición Mar Autos"
          // Mantenemos tus clases: portada-img es la que definimos en App.css
          className="img-fluid rounded mx-auto d-block portada-img shadow-lg"
        />
      </div>

      {/* Texto de bienvenida */}
      <h1 className="display-4 mt-4 fw-bold text-dark">
        Bienvenido a Mar Autos
      </h1>
      <p className="lead text-secondary">
        La mejor selección de autos usados en un solo lugar.
      </p>
      
      {/* CORRECCIÓN: Cambiamos <a> por <Link> para que navegue rápido en el celu */}
      <Link to="/autos" className="btn btn-primary btn-lg mt-3 px-5 shadow">
        Ver Catálogo
      </Link>
    </div>
  );
}

export default Home;
import autopantalla from "../assets/images/autopantalla.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center text-center min-vh-100">

      {/* Imagen */}
      <div style={{ maxWidth: "600px" }}>
        <img
          src={autopantalla}
          alt="Auto de exhibición Mar Autos"
          className="img-fluid rounded mx-auto d-block portada-img shadow-lg"
        />
      </div>

      {/* Texto */}
      <h1 className="display-4 mt-4 fw-bold text-dark">
        Bienvenido a Automotores Ramos
      </h1>

      <p className="lead text-secondary">
        La mejor selección de vehículos usados en un solo lugar.
      </p>

      {/* Botones */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">

        <Link to="/autos" className="btn btn-primary btn-lg px-4 shadow">
          Autos
        </Link>

        <Link to="/camionetas" className="btn btn-primary btn-lg px-4 shadow">
          Camionetas
        </Link>

        <Link to="/motos" className="btn btn-primary btn-lg px-4 shadow">
          Motos
        </Link>

        <Link to="/cuatriciclos" className="btn btn-primary btn-lg px-4 shadow">
          Cuatriciclos
        </Link>

        <Link to="/lancha" className="btn btn-primary btn-lg px-4 shadow">
          Lanchas
        </Link>

      </div>
    </div>
  );
}

export default Home;
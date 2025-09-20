import autopantalla from "../assets/images/autopantalla.png";

function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      {/* Imagen de portada animada */}
      <img
        src={autopantalla}
        alt="Auto principal"
        className="img-fluid rounded mx-auto d-block portada-img"
      />

      {/* Texto de bienvenida */}
      <h2 className="mt-4">Bienvenido a Mar Autos </h2>
      <p>La mejor selección de autos usados en un solo lugar.</p>
    </div>
  );
}

export default Home;

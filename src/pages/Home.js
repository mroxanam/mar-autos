import autopantalla from "../assets/images/autopantalla.png";

function Home() {
  return (
    <div className="text-center mt-4">
      {/* Imagen de portada animada */}
      <img
        src={autopantalla}
        alt="Auto principal"
        className="img-fluid rounded portada-img"
      />

      {/* Texto de bienvenida */}
      <h2 className="mt-4">Bienvenido a Mar Autos </h2>
      <p>La mejor selección de autos usados en un solo lugar.</p>
    </div>
  );
}

export default Home;

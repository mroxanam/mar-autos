import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMenu from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Autos from "./pages/Autos";
import Contacto from "./pages/Contacto";
import Ubicacion from "./pages/Ubicacion";
import QuienesSomos from "./pages/QuienesSomos";

function App() {
  return (
    <Router>
      {/* Layout en columna que ocupa toda la altura */}
      <div className="d-flex flex-column min-vh-100">
        <NavbarMenu />
        
        {/* Contenido principal que crece */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/autos" element={<Autos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/ubicacion" element={<Ubicacion />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;




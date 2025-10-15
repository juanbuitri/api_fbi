import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Detalle from "./Detalle";
import Favoritos from "./Favoritos";
import Informativa from "./Informativa";
import General from "./General";
import Estadisticas from "./Estadisticas";
import { FavoritosProvider, FavoritosContext } from "./General/FavoritosContext";
import { useContext } from "react";

function Navbar() {
  const { favoritos } = useContext(FavoritosContext);

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/estadisticas" style={styles.link}>Estadísticas</Link>
      <Link to="/favoritos" style={styles.link}>
        ⭐ Favoritos ({favoritos.length})
      </Link>
      <Link to="/informativa" style={styles.link}>Informativa</Link>
    </nav>
  );
}

export default function App() {
  return (
    <FavoritosProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalle/:id" element={<Detalle />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/informativa" element={<Informativa />} />
          <Route path="/estadisticas" element={<Estadisticas />} />
        </Routes>
      </BrowserRouter>
    </FavoritosProvider>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#002244",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

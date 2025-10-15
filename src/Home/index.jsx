import { useState, useEffect, useContext } from "react";
import { FavoritosContext } from "../General/FavoritosContext";
import "./style.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const { favoritos, toggleFavorito } = useContext(FavoritosContext);

  useEffect(() => {
    fetch("https://api.fbi.gov/wanted/v1/list")
      .then((res) => res.json())
      .then((info) => setData(info.items))
      .catch((err) => console.error("Error al cargar datos del FBI:", err));
  }, []);

  const filtered = data.filter((item) =>
    (item.title || item.aliases?.[0] || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const isFavorite = (uid) => favoritos.some((f) => f.uid === uid);

  return (
    <div className="home-container">
      <h1>Lista de los Más Buscados del FBI</h1>

      <input
        type="text"
        placeholder="Buscar sospechoso..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="grid">
        {filtered.map((item) => {
          const nombre = item.title || item.aliases?.[0] || "Nombre no disponible";
          const crimen =
            item.subjects?.[0] ||
            item.description ||
            "Delito no especificado";
          const imagen =
            item.images?.[0]?.thumb ||
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

          return (
            <div key={item.uid} className="card">
              <img src={imagen} alt={nombre} />
              <h3>{nombre}</h3>
              <p className="crime">{crimen}</p>
              <button
                className={`fav-btn ${isFavorite(item.uid) ? "active" : ""}`}
                onClick={() => toggleFavorito(item)}
              >
                {isFavorite(item.uid) ? "❤️ Quitar" : "🤍 Agregar"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

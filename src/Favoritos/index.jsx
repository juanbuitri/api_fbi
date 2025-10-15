import { useContext } from "react";
import { FavoritosContext } from "../General/FavoritosContext";
import "./style.css";

export default function Favoritos() {
  const { favoritos, eliminarFavorito } = useContext(FavoritosContext);

  return (
    <div className="favoritos-container">
      <h1>Mis Favoritos ❤️</h1>

      {favoritos.length === 0 ? (
        <p>No tienes favoritos guardados.</p>
      ) : (
        <div className="grid">
          {favoritos.map((item) => (
            <div key={item.uid} className="card">
              <img src={item.images?.[0]?.thumb || ""} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.subjects?.[0]}</p>
              <button
                className="remove-btn"
                onClick={() => eliminarFavorito(item.uid)}
              >
                🗑️ Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

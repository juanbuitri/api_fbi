import { createContext, useState, useEffect } from "react";

export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favs);
  }, []);

  const toggleFavorito = (item) => {
    const existe = favoritos.some((f) => f.uid === item.uid);
    let updated;

    if (existe) {
      updated = favoritos.filter((f) => f.uid !== item.uid);
    } else {
      updated = [...favoritos, item];
    }

    setFavoritos(updated);
    localStorage.setItem("favoritos", JSON.stringify(updated));
  };

  const eliminarFavorito = (uid) => {
    const updated = favoritos.filter((f) => f.uid !== uid);
    setFavoritos(updated);
    localStorage.setItem("favoritos", JSON.stringify(updated));
  };

  return (
    <FavoritosContext.Provider
      value={{ favoritos, toggleFavorito, eliminarFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}

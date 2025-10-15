import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

function Detalle() {
  const { id } = useParams();
  const [detalle, setDetalle] = useState(null);

  useEffect(() => {
    fetch(`https://api.fbi.gov/wanted/v1/${id}`)
      .then((res) => res.json())
      .then((data) => setDetalle(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!detalle) return <p>Cargando detalle...</p>;

  return (
    <div className="detalle-container">
      <h2>{detalle.title}</h2>
      <img src={detalle.images?.[0]?.original || ""} alt={detalle.title} />
      <p>{detalle.description}</p>
      <p><strong>Alias:</strong> {detalle.aliases?.join(", ") || "N/A"}</p>
      <p><strong>Sexo:</strong> {detalle.sex || "N/A"}</p>
    </div>
  );
}

export default Detalle;

import "./style.css";

function General() {
  return (
    <div className="general-container">
      <h2>General</h2>
      <p>
        Proyecto desarrollado en React con Vite, que consume la API pública del
        FBI. Permite listar, ver detalles y guardar en favoritos.
      </p>
      <ul>
        <li>Framework: React</li>
        <li>Build Tool: Vite</li>
        <li>Fuente de datos: FBI API</li>
        <li>Autor: Diego Buitrago</li>
      </ul>
    </div>
  );
}

export default General;

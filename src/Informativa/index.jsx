import "./style.css";

function Informativa() {
  return (
    <div className="info-container">
      <h2>Información sobre la API del FBI</h2>
      <p>
        Esta aplicación usa la API pública del FBI para mostrar datos reales
        sobre las personas más buscadas. La información proviene directamente
        de <a href="https://api.fbi.gov/wanted/v1/list">api.fbi.gov</a>.
      </p>
    </div>
  );
}

export default Informativa;

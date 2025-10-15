import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./style.css";

export default function Estadisticas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.fbi.gov/wanted/v1/list")
      .then((res) => res.json())
      .then((info) => setData(info.items));
  }, []);

  const hombres = data.filter((p) => p.sex === "Male").length;
  const mujeres = data.filter((p) => p.sex === "Female").length;
  const recompensa = data.filter((p) => p.reward_text).length;

  const chartData = [
    { name: "Hombres", value: hombres },
    { name: "Mujeres", value: mujeres },
    { name: "Con recompensa", value: recompensa },
  ];

  const COLORS = ["#003366", "#ff6699", "#00cc66"];

  return (
    <div className="estadisticas-container">
      <h1>Estadísticas de los Más Buscados</h1>

      <PieChart width={400} height={400}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={130}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {chartData.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

      <p>Total de registros: {data.length}</p>
    </div>
  );
}

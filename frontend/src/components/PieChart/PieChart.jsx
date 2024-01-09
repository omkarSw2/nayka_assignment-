import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const generateRandomColors = (count, dence) => {
  const colors = [];
  for (let i = 0; i < count; i++) {
    const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${dence})`;
    colors.push(color);
  }
  return colors;
};

const PieChart = (d) => {
  let lab = d.data?.map((i) => i.name);
  let count = d.data?.map((i) => i.count);

  const data = {
    labels: lab,

    datasets: [
      {
        data: count,
        backgroundColor: generateRandomColors(d.data.length, 0.5),
        borderColor: "rgba(0, 0, 0, 0.7)",
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;

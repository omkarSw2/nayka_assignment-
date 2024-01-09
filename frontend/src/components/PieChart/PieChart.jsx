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

const PieChart = () => {
  const data = {
    labels: ["male", "female"],
    datasets: [
      {
        data: [12, 19],
        backgroundColor: generateRandomColors(2, 0.2),
        borderColor: generateRandomColors(2, 0.5),
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;

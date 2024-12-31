import React from "react";
import '@/styles/barchart.css'
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart: React.FC = () => {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Active",
        data: [25, 30, 15, 25, 30, 10, 20],
        backgroundColor: "green",
        borderRadius: 5,
      },
      {
        label: "Inactive",
        data: [15, 10, 10, 15, 10, 5, 10],
        backgroundColor: "lightgray",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <h3 className="chart-title">User Status Overview</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;

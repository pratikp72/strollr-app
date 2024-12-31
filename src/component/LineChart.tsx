import React from "react";
import '@/styles/linechart.css'
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const LineChart: React.FC = () => {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Reach",
        data: [100, 150, 200, 250, 300, 200, 250],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "#fff",
        tension: 0.4,
      },
      {
        label: "Impression",
        data: [50, 100, 120, 180, 250, 150, 200],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        pointBorderColor: "#fff",
        tension: 0.4,
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
    <div className="line-chart-container">
      <h3 className="chart-title">Reach and Impressions</h3>
      <div className="summary">
        <div className="summary-item">
          {/* Replace emoji with an image */}
          <div className="icon">
            <img
              src="Totalreach.svg"  // Path to the image in the public folder
              alt="Reach Icon"
              style={{ width: 30, height: 30 }}
            />
          </div>
          <div>
            <h4>111,741</h4>
            <p>Total Reach</p>
          </div>
        </div>
        <div className="summary-item">
          {/* Replace emoji with an image */}
          <div className="icon">
            <img
              src="/TotalImpression.svg"  // Path to the image in the public folder
              alt="Impressions Icon"
              style={{ width: 30, height: 30 }}
            />
          </div>
          <div>
            <h4>134,812</h4>
            <p>Total Impressions</p>
          </div>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;

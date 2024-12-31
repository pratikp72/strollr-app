import React from "react";
import "@/styles/ActivityPerformance.css";

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Filler);

const ActivityPerformanceOverview: React.FC = () => {
  const data = {
    labels: ["Outdoor Activities", "Paid Activities", "Free Activities", "At Home Activities"],
    datasets: [
      {
        data: [85, 50, 97, 90],
        backgroundColor: ["#f94144", "#577590", "#f9c74f", "#a05195"],
        hoverBackgroundColor: ["#f94144cc", "#577590cc", "#f9c74fcc", "#a05195cc"],
        borderWidth: 0, // Ensures there are no white borders between segments
        cutout: "80%", // Makes the inner circle larger, giving a thin appearance
        spacing: 10, // Adds space between the arcs
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: { enabled: false }, // Disable tooltips for a clean design
      legend: { display: false }, // Hides the legend
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="performance-container">
      <h3 className="title">Activity Performance Overview</h3>
      <div className="chart-container">
        <Doughnut data={data} options={options} />
      </div>
      <div className="participation-rate">
        <h4>Participation Rate</h4>
        <div className="rate-item">
          <span>Outdoor Activities</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "85%", backgroundColor: "#f94144" }}></div>
          </div>
          <span>85%</span>
        </div>
        <div className="rate-item">
          <span>Paid Activities</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "50%", backgroundColor: "#577590" }}></div>
          </div>
          <span>50%</span>
        </div>
        <div className="rate-item">
          <span>Free Activities</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "97%", backgroundColor: "#f9c74f" }}></div>
          </div>
          <span>97%</span>
        </div>
        <div className="rate-item">
          <span>At Home Activities</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "90%", backgroundColor: "#a05195" }}></div>
          </div>
          <span>90%</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityPerformanceOverview;

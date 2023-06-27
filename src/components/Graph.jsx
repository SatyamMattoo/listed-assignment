import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "../styles/app.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    y: {
      ticks: {
        suggestedMin: 0,
        suggestedMax: 500,
        stepSize: 100,
      },
      title: {
        display: true,
        text: "",
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};



const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

export const data = {
  labels,
  datasets: [
    {
      data: [100, 50, 150, 270, 100, 40],
      label: "Guest",
      borderColor: "rgba(233, 160, 160, 1)",
      backgroundColor: "rgba(233, 160, 160, 1)",
      tension: "0.4",
      pointRadius: "0",
    },
    {
      data: [400, 10, 300, 30, 440, 50],
      label: "User",
      borderColor: "rgba(155, 221, 124, 1)",
      backgroundColor: "rgba(155, 221, 124, 1)",
      tension: "0.4",
      pointRadius: "0",
    },
  ],
};

const Graph = () => {
  return (
    <>
      <div className="graph">
        <div className="right">
          <p className="graphHeading">Acitivities</p>
          <p className="date">June-July 2023</p>
        </div>
        <div className="legend">
          <div className="red"></div>
          <p className="user">User</p>
          <div className="green"></div>
          <p className="guest">Guest</p>
        </div>
      </div>
      <Line options={options} data={data} />
    </>
  );
};

export default Graph;

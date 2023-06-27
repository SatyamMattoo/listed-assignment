import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Basic Tees", "Custom Pants", "Super Hoodies"],
  datasets: [
    {
      label: "%",
      data: [55, 31, 14],
      backgroundColor: [
        "rgba(233, 160, 160, 1)",
        "rgba(246, 220, 125, 1)",
        "rgba(155, 221, 124, 1)",
      ],
      borderColor: [
        "rgba(233, 160, 160, 1)",
        "rgba(246, 220, 125, 1)",
        "rgba(155, 221, 124, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Piechart = () => {
  return <Pie data={data} options={options} />;
};

export default Piechart;

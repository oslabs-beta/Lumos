import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// import { InfoContext } from "../containers/MainContainer.jsx";

ChartJS.register(ArcElement, Tooltip, Legend);

function UsageDoughnut() {
  const [userInfo, setUserInfo] = useContext(InfoContext);

  const data = {
    labels: [
      "Lambda 1",
      "Lambda 2",
      "Lambda 3",
      "Lambda 4",
      "Lambda 5",
      "Lambda 6",
    ],
    datasets: [
      {
        label: "# of Invocations",
        data: [5, 4, 8, 3, 1, 9],
        backgroundColor: [
          "rgba(112, 104, 244, 0.4)",
          "rgba(123, 31, 162, 0.4)",
          "rgba(162, 31, 118, 0.4)",
          "rgba(255, 100, 180, 0.4)",
          "rgba(255, 125, 69, 0.4)",
          "rgba(255, 217, 74, 0.4)",
        ],
        borderColor: [
          "rgba(112, 104, 244, 1)",
          "rgba(123, 31, 162, 1)",
          "rgba(162, 31, 118, 1)",
          "rgba(255, 100, 180, 1)",
          "rgba(255, 125, 69, 1)",
          "rgba(255, 217, 74, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default UsageDoughnut;
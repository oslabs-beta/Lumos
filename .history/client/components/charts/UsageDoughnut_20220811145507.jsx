import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// import { InfoContext } from "../containers/MainContainer.jsx";

ChartJS.register(ArcElement, Tooltip, Legend);

function UsageDoughnut() {
  // const [userInfo, setUserInfo] = useContext(InfoContext);

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
          "#d86613",
          "#DC7521",
          "#E0852E",
          "#E4943C",
          "#E8A449",
          "#ECB357",
        ],
        borderColor: [
          "#d86613",
          "#DC7521",
          "#E0852E",
          "#E4943C",
          "#E8A449",
          "#ECB357",
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
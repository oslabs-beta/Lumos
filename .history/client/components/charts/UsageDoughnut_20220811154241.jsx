import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { InfoContext } from "../../containers/MainContainer.jsx";

ChartJS.register(ArcElement, Tooltip, Legend);

function UsageDoughnut() {
  const [userInfo, setUserInfo] = useContext(InfoContext);

  const data = {
    labels: [
      "us_east_add",
      "us_east_cool",
      "us_east_count",
      "us_east_subtract"
    ],
    datasets: [
      {
        label: "# of Invocations",
        data: [5, 4, 8, 3],
        backgroundColor: [
          "#d86613",
          "#DC7521",
          "#E0852E",
          "#E4943C"
        ],
        borderColor: [
          "#d86613",
          "#DC7521",
          "#E0852E",
          "#E4943C"
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
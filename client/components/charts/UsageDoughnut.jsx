import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { InfoContext } from "../../containers/MainContainer.jsx";

ChartJS.register(ArcElement, Tooltip, Legend);

function UsageDoughnut() {
  const [userInfo, setUserInfo] = useContext(InfoContext);

  let funcNames = [];
  let funcInvocations = [];

  userInfo.lambdaFuncs.forEach((el) => {
    funcNames.push(el.funcName);
    funcInvocations.push(el.totalInvocations);
  });

  const borderColor1 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  const borderColor2 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  const borderColor3 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  const borderColor4 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  const data = {
    labels: funcNames,
    datasets: [
      {
        label: "# of Invocations",
        data: funcInvocations,
        backgroundColor: [
          borderColor1,
          borderColor2,
          borderColor3,
          borderColor4,
        ],
        borderColor: [borderColor1, borderColor2, borderColor3, borderColor4],
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

import React, { useContext, useEffect } from "react";
import { InfoContext } from "../../containers/MainContainer.jsx";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

function TestChart() {
  const [userInfo] = useContext(InfoContext);
  useEffect(() => {}, [userInfo]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      yAxes: {
        beginAtZero: true,
      },
    },
  };

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDay = new Date(year, month, 0).getDate();

  const getLabels = () => {
    console.log("labels inside getLabels: ", labels);
    if (userInfo.timePeriod === "month") {
      return Array.from(Array(lastDay)).map((_, i) =>
        new Date(year, month, (i += 1)).toLocaleDateString()
      );
    }
    if (userInfo.timePeriod === "week") {
      const lastWeek = new Date(year, month, date.getDate());
      const lastWeekArr = [];
      for (let i = 0; i < 7; i += 1) {
        const lastWeekDate = lastWeek.getDate();
        lastWeekArr.push(
          new Date(year, month, lastWeekDate - i).toLocaleDateString()
        );
      }
      return lastWeekArr.reverse();
    }
    if (userInfo.timePeriod === "day") {
      const dayArr = [];

      for (let i = 0; i < 24; i++) {
        const date = new Date() - i * 3600 * 1000;
        dayArr.push(
          new Date(date).toLocaleTimeString([], {
            hour: "2-digit",
          })
        );
      }

      return dayArr.reverse();
    }
  };

  const labels = getLabels();
  const datasets = [];

  for (let i = 0; i < userInfo.lambdaFuncs.length; i += 1) {
    const func = userInfo.lambdaFuncs[i];
    const data = [];

    for (let i = 0; i < labels.length; i += 1) {
      const time = labels[i];

      if (userInfo.timePeriod !== "day") {
        if (func.formattedTimeStamps.includes(time)) {
          let sum = 0;

          for (let i = 0; i < func.formattedTimeStamps.length; i++) {
            if (func.formattedTimeStamps[i] === time) {
              sum += func.invocationsArray[i];
            }
          }

          data.push({ x: time, y: sum });
        } else {
          data.push({ x: time, y: 0 });
        }
      } else {
        if (func.formattedTime && func.formattedTime.includes(time)) {
          let sum = 0;
          
          for (let i = 0; i < func.formattedTime.length; i++) {
            if (func.formattedTime[i] === time) {
              sum += func.invocationsArray[i];
            }
          }

          data.push({ x: time, y: sum });
        } else {
          data.push({ x: time, y: 0 });
        }
      }
    }

    const borderColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    const backgroundColor = `rgba(${borderColor.slice(
      4,
      borderColor.length - 1
    )}, 0.5)`;

    datasets.push({
      label: func.funcName,
      data: data,
      borderColor: borderColor,
      backgroundColor: backgroundColor,
      spanGaps: true,
      tension: 0.5,
    });
  }

  console.log("datasets: ", datasets);
  const data = {
    labels: labels,
    datasets: datasets,
  };

  return <Line options={options} data={data} />;
}

export default TestChart;

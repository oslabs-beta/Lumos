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
    // scales: {
    //   x: {
    //     type: "time",
    //     time: {
    //       unit: "day",
    //     },
    //     beginAtZero: true,
    //   },

    //   yAxes: {
    //     beginAtZero: true,
    //   },
    // },
  };

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDay = new Date(year, month, 0).getDate();

  const getLabels = () => {
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
      for (let i = 0; i <= 24; i++) {
        const date = new Date() - i * 3600 * 1000;
        dayArr.push(new Date(date).toLocaleTimeString());
      }
      return dayArr.reverse();
    }
  };

  const labels = getLabels();
  console.log("LABELS ", labels);
  const datasets = [];
  const testDataSet = [];

  for (let i = 0; i < userInfo.lambdaFuncs.length; i += 1) {
    const func = userInfo.lambdaFuncs[i];
    // const data = func.formattedTimeStamps.map((time, i) => ({
    //   x: time,
    //   y: func.invocationsArray[i],
    // }));

    testDataSet.push({
      x: userInfo.lambdaFuncs[i].invocationsArray[i],
      y: userInfo.lambdaFuncs[i].formattedTimeStamps[i],
    });

    // SAMPLE 7 DAY OBJ RESPONSE
    //   {
    //     funcName: 'newFuncLamb',
    //     invocationsArray: [ 32, 76, 87, 12, 6, 51, 16 ],
    //     totalInvocations: 280,
    //     totalErrors: 0,
    //     totalDuration: 377.42,
    //     totalCost: 0.000168,
    //     timeStamps: [
    //       2022-08-20T14:40:00.000Z,
    //       2022-08-20T14:41:00.000Z,
    //       2022-08-23T00:44:00.000Z,
    //       2022-08-23T01:06:00.000Z,
    //       2022-08-23T15:12:00.000Z,
    //       2022-08-23T15:13:00.000Z,
    //       2022-08-23T20:47:00.000Z
    //     ],
    //     formattedTimeStamps: [ '8/23/2022', '8/23/2022', '8/23/2022', '8/22/2022', '8/22/2022', '8/20/2022', '8/20/2022' ]
    //  }

    // x: userInfo.lambdaFuncs[i].totalInvocations, <- should be sorted in place once timestamps get grouped
    // y: userInfo.lambdaFuncs[i].timeStamps <- will be an array that gets grouped

    // console.log("data test", data);

    datasets.push({
      label: userInfo.lambdaFuncs[i].funcName,
      data: testDataSet,
      borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      spanGaps: true,
      tension: 0.5,
    });
  }

  const data = {
    labels,
    datasets,
  };

  return <Line options={options} data={data} />;
}

export default TestChart;

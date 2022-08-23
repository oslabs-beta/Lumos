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
        const lastWeekDate = lastWeek.getDate(); // this is read only
        lastWeekArr.push(
          new Date(year, month, lastWeekDate - i).toLocaleDateString()
        ); // i seems to be hours for some reason
        console.log(
          "lastweekarr at end of for loop: ",
          lastWeekArr[lastWeekArr.length - 1]
        );
      }

      console.log("LAST WEEK ARRAY: ", lastWeekArr, lastWeekArr.length);
      return lastWeekArr.reverse();

      // return lastWeek;
    }
    //
    if (userInfo.timePeriod === "day") {
      const dayArr = [];

      for (let i = 0; i <= 24; i++) {
        const date = new Date() - i * 3600 * 1000;
        dayArr.push(new Date(date).toLocaleTimeString());
      }

      return dayArr.reverse();
    } else {
      //
    }
  };

  const labels = getLabels();

  const datasets = [];
  // for (let i = 0; i < userInfo.lambdaFuncs.length; i += 1) {
  //   const func = userInfo.lambdaFuncs[i];
  //   const data = func.timeStamps.map((time, i) => ({
  //     x: new Date(time),
  //     y: func.invocationsArray[i],
  //   }));

  for (let i = 0; i < userInfo.lambdaFuncs.length; i += 1) {
    const func = userInfo.lambdaFuncs[i];
    // const data = func.formattedTimeStamps.map((time, i) => {
    //   labels.includes(time)
    //     ? { x: new Date(time), y: func.invocationsArray[i] }
    //     : { x: new Date(time), y: 0 };
    // });

    const data = [];

    // for (let i = 0; i < func.formattedTimeStamps.length; i += 1) {
    //   const time = func.formattedTimeStamps[i];
    //   labels.includes(time)
    //     ? data.push({ x: time, y: func.invocationsArray[i] })
    //     : data.push({ x: time, y: 0 });
    // }

    for (let i = 0; i < labels.length; i += 1) {
      const time = labels[i];

      if (func.formattedTimeStamps.includes(time)) {
        const index = func.formattedTimeStamps.indexOf(time);
        data.push({ x: time, y: func.invocationsArray[index] });
      } else {
        data.push({ x: time, y: 0 });
      }

      // func.formattedTimeStamps.includes(time)
      //   ? data.push({ x: time, y: func.invocationsArray[i] })
      //   : data.push({ x: time, y: 0 });
    }

    datasets.push({
      label: func.funcName,
      data: data,
      borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      spanGaps: true,
      tension: 0.5,
    });
    console.log("DATA: ", data);
  }

  // {
  //        funcName: 'newFuncLamb',
  //        invocationsArray: [ 51, 6, 12, 87 ],
  //        totalInvocations: 156,
  //        totalErrors: 0,
  //        totalDuration: 233.92000000000004,
  //        totalCost: 0.0000936,
  //        timeStamps: [
  //          2022-08-23T15:13:00.000Z,
  //          2022-08-23T15:12:00.000Z,
  //          2022-08-23T01:06:00.000Z,
  //          2022-08-23T00:44:00.000Z
  //        ],
  //        formattedTimeStamps: [ '8/22', '8/22', '8/23', '8/23' ]
  // }

  console.log("carmen data test", data);

  const data = {
    labels: labels,
    datasets: datasets,
  };

  // console.log("labels: ", labels);
  // console.log("datasets: ", datasets);

  console.log("data end of file: ", data);

  return <Line options={options} data={data} />;
}

export default TestChart;

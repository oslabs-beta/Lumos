import React, { useContext, useEffect } from "react";
import { InfoContext } from "../../containers/MainContainer.jsx";

import { Paper, Box, Typography } from "@mui/material";
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
// import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
  },
  // scales: {
  //   y: {
  // type: "time",
  // time: {
  //   displayFormats: {
  //     //
  //   },
  // },
  // },
  // x: {
  //   type: "time",
  //   time: {
  //     displayFormats: {
  //       //
  //     },
  //   },
  // },
  // },
  // },
};
// x-axis, this needs to be updated depending on the .length of the timestamps array

// this all gets done AFTER state object has been populated from Login's successful verification
// we'll need 3 buttons created at the Header for 24 Hour / 7 Day / 30 Day time frames that each make fetch calls with different start/end dates


function Latency() {
  const [userInfo, setUserInfo] = useContext(InfoContext);

  console.log(userInfo);

  const labels = [
    // "8/5", // 50 invocations
    // "8/6",
    // "8/7",
    // "8/8",
    // "8/9",
    // "8/10",
    // "8/11"
  ];

  //lambdaMetrics: [], // { invocations: "",

  const data = {
    labels,
    datasets: [
      // new datasets object needs to be created depending on how many Lambda funcs we get back
      // {
      //   // update this name to lambda name
      //   label: userInfo.lambdaFuncs[1].funcName,
      //   // we gotta update array of values here
      //   data: userInfo.lambdaFuncs[1].funcValues,
      //   // let's change these weird ass colors xD okay;) ( ͡° ͜ʖ ͡°)
      //   borderColor: "rgba(123, 31, 162)",
      //   backgroundColor: "rgba(123, 31, 162, 0.5)",
      //   borderWidth: 1,
      // },
      // {
      //   label: "us_east_func_multiply",
      //   // ( ͡° ͜ʖ ͡°)
      //   data: [1, 2, 4, 9, 4, 1, 5, 6, 4, 9, 5, 4, 1, 9],
      //   borderColor: "rgb(255, 125, 69)",
      //   backgroundColor: "rgb(255, 125, 69, 0.5)",
      //   borderWidth: 1,
      // },
    ],
  };

  let testLabels = [];

  if (userInfo.timePeriod === "month") {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const lastDay = new Date(year, month, 0).getDate();

    for (let i = 1; i <= lastDay; i += 1) {
      testLabels.push(`${month}/${i}`);
    }

    data.labels = testLabels;
  }

  userInfo.lambdaFuncs.forEach((el) => {
    const borderColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    const backgroundColor = `rgba(${borderColor.slice(
      4,
      borderColor.length - 1
    )}, 0.5)`;

    let resultArr = [];
    for (let x in Object.keys(data.labels)) {
      const keys = data.labels[x];
      for (let y = 0; y < el.formattedTimeStamps.length; y++) {
        const time = el.formattedTimeStamps[y];
        console.log(
          el.funcName,
          "looking @ timestamp",
          time,
          keys,
          "match ?",
          time === keys
        );

        if (time === keys) {
          resultArr.push(10);
        }
        if (time !== keys) {
          resultArr.push(-1);
        }
      }
    }

    data.datasets.push({
      label: el.funcName,
      data: [el.totalInvocations],
      borderColor: borderColor,
      backgroundColor: backgroundColor,
      borderWidth: 1,
      spanGaps: true,
    });
  });

  useEffect(() => {}, [userInfo]);

  return <Line options={options} data={data} />;
}

export default Latency;

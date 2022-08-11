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
};

// x-axis, this needs to be updated depending on the .length of the timestamps array


// this all gets done AFTER state object has been populated from Login's successful verification
// we'll need 3 buttons created at the Header for 24 Hour / 7 Day / 30 Day time frames that each make fetch calls with different start/end dates

//bet

function Latency() {
  const [userInfo, setUserInfo] = useContext(InfoContext);

  const labels = [
    
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

  const timeStamp2 = [];
  const data2 = [];

  userInfo.lambdaFuncs.forEach((el) => {

    const borderColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    const backgroundColor = `rgba(${borderColor.slice(4,borderColor.length - 1)}, 0.5)`;

    timeStamp2.push(el.timestamps);

    data.datasets.push({
      label: el.funcName,
      data: el.funcValues,
      borderColor: borderColor,
      backgroundColor: backgroundColor,
      borderWidth: 1,
    })
  })

  console.log('timeStamp: ', timeStamp2)

  let timeStamp3 = timeStamp2.flat(Infinity)
  console.log('timeStamp3: ', timeStamp3);

  timeStamp3.forEach((el) => {

    if (el) {
      labels.push(el.slice(0, 10))
    }    // labels.push(el.slice(0, 9));
  });

  // console.log('timeStamp2: ', timeStamp2);
  // console.log('test inside of latency: ', data2);


  // here is where we update 'data' array of lambda values into our y-axis of invocation counts

  useEffect(() => { }, [userInfo]);

  // if (userInfo.transactions.length > 0 && userInfo.incomeArray.length > 0) {
  //   // run through transaction array
  //   for (let trans of userInfo.lambdaMetrics) {
  //     const month = moment(trans.dates).format("MMMM");
  //     const index = labels.indexOf(month);
  //     const amount = parseFloat(trans.amount.slice(1).split(",").join(""));
  //     data.datasets[0].data[index] -= amount;
  //   }

  //   // run through income array
  //   for (let income of userInfo.incomeArray) {
  //     const month = moment(income.dates).format("MMMM");
  //     const index = labels.indexOf(month);
  //     const amount = parseFloat(income.amount.slice(1).split(",").join(""));
  //     data.datasets[0].data[index] += amount;
  //   }

  //   if (userInfo.savingsGoal) {
  //     for (let trans of userInfo.savingsGoal) {
  //       const month = moment(trans.date).format("MMMM");
  //       const index = labels.indexOf(month);
  //       const amount = parseFloat(trans.amount);
  //       data.datasets[1].data[index] += amount;
  //     }

  //     console.log(data.datasets[1].data);
  //   }
  // }

  return <Line options={options} data={data} />;
}

export default Latency;
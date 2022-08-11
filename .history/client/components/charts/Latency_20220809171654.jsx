import React, { useContext, useEffect } from "react";
import { InfoContext } from "../containers/MainContainer.jsx";

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

const labels = [
  "Day 1",
  "Day 2",
  "Day 3",
  "Day 4",
  "Day 5",
  "Day 6",
  "Day 7",
  "Day 8",
  "Day 9",
  "Day 10",
  "Day 11",
  "Day 12",
  "Day 13",
  "Day 14"
];

function Latency() {
  // const [userInfo, setUserInfo] = useContext(InfoContext);

  const data = {
    labels,
    datasets: [
      {
        label: "Lambda 1",
        data: [300, 510, 124, 337, 710, 61, 97, 184, 517, 334, 414, 41, 941, 347],
        borderColor: "rgba(123, 31, 162)",
        backgroundColor: "rgba(123, 31, 162, 0.5)",
        borderWidth: 1,
      },
      {
        label: "Lambda 2",
        data: [145, 234, 415, 948, 454, 157, 548, 687, 425, 91, 514, 487, 148, 912],
        borderColor: "rgb(255, 125, 69)",
        backgroundColor: "rgb(255, 125, 69, 0.5)",
        borderWidth: 1,
      },
    ],
  };

  // useEffect(() => { }, [userInfo]);

  // if (userInfo.transactions.length > 0 && userInfo.incomeArray.length > 0) {
  //   // run through transaction array
  //   for (let trans of userInfo.transactions) {
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
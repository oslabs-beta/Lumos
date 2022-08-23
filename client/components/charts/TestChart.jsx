import React, { useContext } from "react";
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

const TestChart = () => {
  const [userInfo] = useContext(InfoContext);

  const options = {
    scales: {
      x: {
        type: "time",
      },

      yAxes: {
        beginAtZero: true,
      },
    },
  };

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDay = new Date(year, month, 0).getDate();
  // const today = new Date(day)

  const getLabels = () => {
    if (userInfo.timePeriod === "month") {
      const labels = Array.from(Array(lastDay)).map(
        (_, i) => new Date(year, month, (i += 1))
      );

      let labelsObj = [];

      for (let i = 0; i < labels.length; i += 1) {
        const currentLabel = labels[i];
        labelsObj.push({ x: currentLabel, y: 0 });
      }

      return labelsObj;
    }
    if (userInfo.timePeriod === "week") {
      // return Array.from(Array(lastDay)).map((_, i) => {
      //   new Date(year, month, (i += 1));
      //   console.log(i);
      //   if (i === 7) return;
      // });
      //
    } else {
      //
    }
  };

  const labels = getLabels();
  // let labelsObj = [];

  // for (let i = 0; i < labels.length; i += 1) {
  //   const currentLabel = labels[i];
  //   labelsObj.push({ x: currentLabel, y: 0 });
  // }

  // console.log(labelsObj);

  const datasets = [];
  for (let i = 0; i < userInfo.lambdaFuncs.length; i += 1) {
      const func = userInfo.lambdaFuncs[i];
      // const data = func.timeStamps.map((time, i) => ({
        //   x: time,
        //   y: func.invocationsArray[i],
        // }));
        // const data = func.timeStamps.forEach((time, i) => labelsObj[0]);
      
      // const data = func.invocationsArray;
      
    //   userInfo.lambdaFuncs.forEach((el) => {
    //     let resultArr = []
    // for (let x in Object.keys(data.labels)) {
    //   const keys = data.labels[x];
    //   for (let y = 0; y < el.timeStamps.length; y++) {
    //     const time = el.timeStamps[y];
    //     console.log(
    //       el.funcName,
    //       "looking @ timestamp",
    //       time,
    //       keys,
    //       "match ?",
    //       time === keys
    //     );
        
    //     if (time === keys) {
    //       resultArr.push(10);
    //     }
    //     if(time !== keys){
    //       resultArr.push(-1)
    //     }
    //   }
    // }

    console.log("data test", data);

    datasets.push({
      label: func.funcName,
      data: resultsArr,
      borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      spanGaps: true,
    });
  }

  const data = {
    labels,
    datasets,
  };

  console.log("labels: ", labels);
  console.log("datasets: ", datasets);

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default TestChart;

/*
   // need to update for labels (time) and data (metric)
        // parse through valueArray and house our timestampArr and metricsArr
        const lineChartData = []
        const timestampArr = [];
        let metricsArr = [];
        let timeArrBuilt = false;
        // iterating through out object
        for (let [topic, value] of Object.entries(topicData)) {
            for (let i = 0; i < value.length; i++) { // { topic: [timestamp , another time] }
                if (!timeArrBuilt) {
                    let currDate = new Date(Number(value[i][0]) * 1000).toLocaleTimeString(); // mult by 1000 given value comes in as seconds
                    // console.log('currDate', currDate)
                    let splittedString = currDate.split(":");
                    currDate = splittedString.slice(0, -1).join(':') + splittedString[2].slice(-2);
                    timestampArr.push(currDate);
                }
                metricsArr.push(Number(value[i][1]));
            }
            // given times for all metrics are the same after pull, only aggregate once
            timeArrBuilt = true;

            lineChartData.push({
                label: topic,
                data: metricsArr,
                borderColor: getRandomColor()
            });
            // reset for next topic
            metricsArr = [];
        }
        return [timestampArr, lineChartData]
    }

*/

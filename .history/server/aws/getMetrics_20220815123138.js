const {
  ListMetricsCommand,
  GetMetricDataCommand,
  GetMetricStatisticsCommand,
  CloudWatchClient,
} = require("@aws-sdk/client-cloudwatch");
const getLambdaFuncs = require("./getLambdaFuncs.js");

const getMetrics = async (
  startTime,
  endTime,
  metricName,
  period = 60,
  funcName = undefined,
  metricStat = "Sum"
) => {
  try {
    const client = await new CloudWatchClient({ region: "us-east-1" });
    if (funcName === undefined) {
      const funcNames = await getLambdaFuncs();
      const queries = [];

      funcNames.forEach((func, index) => {
        const query = [{
          Id: `m${Math.floor(Math.random() * 812903819023)}`,
          Label: `Lambda ${metricName} ${func}`,
          MetricStat: {
            Metric: {
              Namespace: `AWS/Lambda`,
              MetricName: `${metricName}`,
              Dimensions: [
                {
                  Name: `FunctionName`,
                  Value: `${func}`,
                },
              ],
            },
            Period: `${period}`,
            Stat: `${metricStat}`,
          },
        },
        {
          Id: `m${Math.floor(Math.random() * 897123891273)}`,
          Label: `Lambda Errors ${func}`,
          MetricStat: {
            Metric: {
              Namespace: `AWS/Lambda`,
              MetricName: `Errors`,
              Dimensions: [
                {
                  Name: `FunctionName`,
                  Value: `${func}`,
                },
              ],
            },
            Period: `${period}`,
            Stat: `${metricStat}`,
          },
        }
      ];
        // console.log(query)
        queries.push(query);
      });

      // console.log(queries);

      const res = [];

      for (let i = 0; i < queries.length; i += 1) {
        const data = await client.send(
          new GetMetricDataCommand({
            StartTime: new Date(startTime),
            EndTime: new Date(endTime),
            MetricDataQueries: queries[i],
          })
        );

        res.push({
            funcName: queries[i][0].MetricStat.Metric.Dimensions[0].Value, // label
            totalInvocations: data.MetricDataResults[0].Values.reduce((a, b) => a + b, 0), // total sum
            totalErrors: data.MetricDataResults[1].Values.reduce((a, b) => a + b, 0),
            timestamps: data.MetricDataResults[0].Timestamps,
            funcValues: data.MetricDataResults[0].Values, 
          });
      }
      // console.log('res: ', res.MetricDataResults);
      return res;
    } else {
      
      const data = await client.send(
        new GetMetricDataCommand({
          StartTime: new Date(startTime), //new Date("August 6, 2022 13:30:30"), <- needs variable where we can send in a start date from frontend
          EndTime: new Date(endTime), //new Date("August 6, 2022 16:00:00"),<- needs variable where we can send in a start date from frontend
          MetricDataQueries: [
            {
              Id: "test",
              MetricStat: {
                Metric: {
                  MetricName: metricName,
                  Namespace: "AWS/Lambda",
                  Dimensions: [
                    {
                      Name: "FunctionName",
                      Value: funcName,
                    },
                  ],
                },
                Period: period,
                Stat: metricStat,
              },
            },
          ],
        })
      );

      return {
        funcName: funcName,
        totalInvocations: data.MetricDataResults[0].Values.reduce((a, b) => a + b, 0),
        timeStamps: data.MetricDataResults[0].Timestamps,
        funcValues: data.MetricDataResults[0].Values
      };
    }
  } catch (err) {
    return err;
  }
};

getMetrics(
  "August 1, 2022 15:30:30",
  "August 10, 2022 18:00:00",
  "Invocations",
  period = 60,
);

// // we need this getMetrics in a controller function so we can invoke this from a frontend route

// const getMetrics = async(startTime, endTime, metricName, period = 60, funcName = undefined) => {
//     const client = await new CloudWatchClient({region: "us-east-1"})
//   try {
//     if (!funcName) {
//       const funcNames = getLambdaFuncs();
//       // funcNames.forEach((func) => {
//       //   const data = await client.send(
//       //   new GetMetricDataCommand({
//       //     StartTime: new Date(startTime), //new Date("August 6, 2022 13:30:30"), <- needs variable where we can send in a start date from frontend
//       //     EndTime: new Date(endTime), //new Date("August 6, 2022 16:00:00"),<- needs variable where we can send in a start date from frontend
//       //     MetricDataQueries: [
//       //       {
//       //         Id: "test",
//       //         // Expression: 'SELECT SUM(Invocations) FROM SCHEMA("AWS/Lambda", FunctionName) GROUP BY FunctionName ORDER BY SUM() DESC',
//       //         MetricStat: {
//       //           Metric: {
//       //             MetricName: metricName, //"Errors",
//       //             Namespace: "AWS/Lambda",
//       //             Dimensions: [{
//       //               Name: 'FunctionName',
//       //               Value: func
//       //             }]
//       //           },
//       //         Period: period,
//       //         Stat: 'Sum',
//       //         },
//       //       },
//       //     ],

//       //   })
//       // );
//       // })

//       return data.MetricDataResults;
//     } else {
//       const data = await client.send(
//         new GetMetricDataCommand({
//           StartTime: new Date(startTime), //new Date("August 6, 2022 13:30:30"), <- needs variable where we can send in a start date from frontend
//           EndTime: new Date(endTime), //new Date("August 6, 2022 16:00:00"),<- needs variable where we can send in a start date from frontend
//           MetricDataQueries: [
//             {
//               Id: "test",
//               // Expression: 'SELECT SUM(Invocations) FROM SCHEMA("AWS/Lambda", FunctionName) GROUP BY FunctionName ORDER BY SUM() DESC',
//               MetricStat: {
//                 Metric: {
//                   MetricName: metricName, //"Errors",
//                   Namespace: "AWS/Lambda",
//                   Dimensions: [{
//                     Name: 'FunctionName',
//                     Value: funcName
//                   }]
//                 },
//               Period: period,
//               Stat: 'Sum',
//               },
//             },
//           ],

//         }))
//     }
//   } catch (err) {
//     return err
//   }
// }

// getMetrics(new Date("August 1, 2022 15:30:30"), new Date("August 10, 2022 18:00:00"), "Invocations", 60);

// const date = new Date();

// date.setHours(5)

// console.log(date)

module.exports = getMetrics;

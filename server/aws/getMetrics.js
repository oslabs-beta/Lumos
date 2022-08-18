const {
  GetMetricDataCommand,
  CloudWatchClient,
} = require('@aws-sdk/client-cloudwatch');
const getLambdaFuncs = require('./getLambdaFuncs.js');

const getMetrics = async (
  startTime,
  endTime,
  period = 60,
  funcName = undefined,
) => {
  try {
    const client = new CloudWatchClient({ region: 'us-east-1' });
    if (funcName === undefined) {
      const funcNames = await getLambdaFuncs();
      const queries = funcNames.map((func) => [
        {
          Id: `id${Math.floor(Math.random() * 812903819023)}`,
          Label: `Lambda Invocations ${func}`,
          MetricStat: {
            Period: `${period}`,
            Stat: 'Average',
            Metric: {
              Namespace: `AWS/Lambda`,
              MetricName: 'Invocations',
              Dimensions: [
                {
                  Name: `FunctionName`,
                  Value: `${func}`,
                },
              ],
            },
          },
        },
        {
          Id: `id${Math.floor(Math.random() * 897123891273)}`,
          Label: `Lambda Errors ${func}`,
          MetricStat: {
            Period: `${period}`,
            Stat: 'Average',
            Metric: {
              Namespace: 'AWS/Lambda',
              MetricName: 'Errors',
              Dimensions: [
                {
                  Name: 'FunctionName',
                  Value: `${func}`,
                },
              ],
            },
          },
        },
        {
          Id: `id${Math.floor(Math.random() * 8929031920)}`,
          Label: `Lambda Throttles ${func}`,
          MetricStat: {
            Period: `${period}`,
            Stat: 'Average',
            Metric: {
              Namespace: 'AWS/Lambda',
              MetricName: 'Throttles',
              Dimensions: [
                {
                  Name: 'FunctionName',
                  Value: `${func}`,
                },
              ],
            },
          },
        },
        {
          Id: `id${Math.floor(Math.random() * 981723891)}`,
          Label: `Lambda Duration ${func}`,
          MetricStat: {
            Period: `${period}`,
            Stat: 'Average',
            Metric: {
              Namespace: 'AWS/Lambda',
              MetricName: 'Duration',
              Dimensions: [
                {
                  Name: 'FunctionName',
                  Value: `${func}`,
                },
              ],
            },
          },
        },
      ]);

      const data = [];

      for (let i = 0; i < queries.length; i += 1) {
        const queriedData = await client.send(
          new GetMetricDataCommand({
            StartTime: new Date(startTime),
            EndTime: new Date(endTime),
            MetricDataQueries: queries[i],
          }),
        );

        data.push({
          funcName: queries[i][0].MetricStat.Metric.Dimensions[0].Value,
          totalInvocations: queriedData.MetricDataResults[0].Values.reduce(
            (a, b) => a + b,
            0,
          ),
          totalErrors: queriedData.MetricDataResults[1].Values.reduce(
            (a, b) => a + b,
            0,
          ),
          totalDuration: queriedData.MetricDataResults[2].Values.reduce(
            (a, b) => a + b,
            0,
          ),
          totalCost:
            queriedData.MetricDataResults[0].Values.reduce((a, b) => a + b, 0) *
              0.2 +
            queriedData.MetricDataResults[0].Values.reduce((a, b) => a + b, 0) *
              0.0000166667,
          timeStamps: queriedData.MetricDataResults[0].Timestamps,
        });
      }

      return data;
    } else {
      const queriedData = await client.send(
        new GetMetricDataCommand({
          StartTime: new Date(startTime),
          EndTime: new Date(endTime),
          MetricDataQueries: [
            {
              Id: Math.floor(Math.random() * 64544324),
              MetricStat: {
                Period: period,
                Stat: metricStat,
                Metric: {
                  MetricName: metricName,
                  Namespace: 'AWS/Lambda',
                  Dimensions: [
                    {
                      Name: 'FunctionName',
                      Value: funcName,
                    },
                  ],
                },
              },
            },
          ],
        }),
      );

      return {
        funcName: queries[i][0].MetricStat.Metric.Dimensions[0].Value,
        totalInvocations: queriedData.MetricDataResults[0].Values.reduce(
          (a, b) => a + b,
          0,
        ),
        totalErrors: queriedData.MetricDataResults[1].Values.reduce(
          (a, b) => a + b,
          0,
        ),
        totalDuration: queriedData.MetricDataResults[2].Values.reduce(
          (a, b) => a + b,
          0,
        ),
        totalCost:
          queriedData.MetricDataResults[0].Values.reduce((a, b) => a + b, 0) *
            0.2 +
          queriedData.MetricDataResults[0].Values.reduce((a, b) => a + b, 0) *
            0.0000166667,
        timeStamps: queriedData.MetricDataResults[0].Timestamps,
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

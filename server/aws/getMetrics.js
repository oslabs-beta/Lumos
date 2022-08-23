const {
  GetMetricDataCommand,
  CloudWatchClient,
} = require("@aws-sdk/client-cloudwatch");

const dayjs = require("dayjs");

const getLambdaFuncs = require("./getLambdaFuncs.js");

const getMetrics = async (
  startTime,
  endTime,
  period = 60,
  funcName = undefined
) => {
  try {
    const client = new CloudWatchClient({ region: "us-east-1" });
    if (funcName === undefined) {
      const funcNames = await getLambdaFuncs();
      const queries = funcNames.map((func) => [
        {
          Id: `id${Math.floor(Math.random() * 812903819023)}`,
          Label: `Lambda Invocations ${func}`,
          MetricStat: {
            Period: `${period}`,
            Stat: "Sum", //should be sum
            Metric: {
              Namespace: `AWS/Lambda`,
              MetricName: "Invocations",
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
            Stat: "Sum",
            Metric: {
              Namespace: "AWS/Lambda",
              MetricName: "Errors",
              Dimensions: [
                {
                  Name: "FunctionName",
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
            Stat: "Sum",
            Metric: {
              Namespace: "AWS/Lambda",
              MetricName: "Throttles",
              Dimensions: [
                {
                  Name: "FunctionName",
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
            Stat: "Sum",
            Metric: {
              Namespace: "AWS/Lambda",
              MetricName: "Duration",
              Dimensions: [
                {
                  Name: "FunctionName",
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
          })
        );

        // console.log("queried data: ", queriedData.MetricDataResults);

        data.push({
          funcName: queries[i][0].MetricStat.Metric.Dimensions[0].Value,
          invocationsArray: queriedData.MetricDataResults[0].Values.reverse(),
          totalInvocations: queriedData.MetricDataResults[0].Values.reduce(
            (a, b) => a + b,
            0
          ),
          totalErrors: queriedData.MetricDataResults[1].Values.reduce(
            (a, b) => a + b,
            0
          ),
          totalDuration: queriedData.MetricDataResults[3].Values.reduce(
            (a, b) => a + b,
            0
          ),
          totalCost:
            queriedData.MetricDataResults[0].Values.reduce((a, b) => a + b, 0) *
            0.0000006,
          // dayjs('2018-04-04T16:00:00.000Z').format('DD/MM/YYYY') -> 04/04/2018 -> 4/4
          timeStamps: queriedData.MetricDataResults[0].Timestamps.reverse(),
          formattedTimeStamps: queriedData.MetricDataResults[0].Timestamps.map(
            (time) => dayjs(time).format("M/D/YYYY")
          ).reverse(),
        });
      }

      console.log("UPDATED DATA: ", data);
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
                  Namespace: "AWS/Lambda",
                  Dimensions: [
                    {
                      Name: "FunctionName",
                      Value: funcName,
                    },
                  ],
                },
              },
            },
          ],
        })
      );

      return {
        funcName: queries[i][0].MetricStat.Metric.Dimensions[0].Value,
        invocationsArray: queriedData.MetricDataResults[0].Values,
        totalInvocations: queriedData.MetricDataResults[0].Values.reduce(
          (a, b) => a + b,
          0
        ),
        totalErrors: queriedData.MetricDataResults[1].Values.reduce(
          (a, b) => a + b,
          0
        ),
        totalDuration: queriedData.MetricDataResults[2].Values.reduce(
          (a, b) => a + b,
          0
        ),
        totalCost:
          queriedData.MetricDataResults[0].Values.reduce((a, b) => a + b, 0) *
          0.0000006,
        timeStamps: queriedData.MetricDataResults[0].Timestamps,
      };
    }
  } catch (err) {
    return err;
  }
};

getMetrics("August 1, 2022 15:30:30", "August 18, 2022 18:00:00");

module.exports = getMetrics;

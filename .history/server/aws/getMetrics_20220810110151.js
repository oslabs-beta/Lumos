const {
  ListMetricsCommand,
  GetMetricDataCommand,
  GetMetricStatisticsCommand,
  CloudWatchClient,
} = require("@aws-sdk/client-cloudwatch");

const getMetrics = async(startTime, endTime, metricName, period) => {
    const client = await new CloudWatchClient({region: "us-east-1"})
  try {
          const data = await client.send(
        new GetMetricDataCommand({
          Namespace: "AWS/Lambda",
          MetricName: metricName, //"Errors",
          StartTime: startTime, //new Date("August 6, 2022 13:30:30"),
          EndTime: endTime, //new Date("August 6, 2022 16:00:00"),
          MetricDataQueries: [
            {
              Id: "test",
              MetricStat: {
                Metric: {
                  MetricName: metricName, //"Errors",
                  Namespace: "AWS/Lambda",
                },
                Period: period || 60,
                Stat: "Maximum",
              },
            },
          ],
        })
      );
      console.log('hi')
console.log(data.MetricDataResults[0]);
      return data;
  } catch (err) {
    return err
  }      
}

getMetrics(new Date("August 1, 2022 15:30:30"), new Date("August 9, 2022 18:00:00"), "Invocations", 30);

// const date = new Date();

// date.setHours(5)

// console.log(date)
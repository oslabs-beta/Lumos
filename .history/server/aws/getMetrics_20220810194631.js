const {
  ListMetricsCommand,
  GetMetricDataCommand,
  GetMetricStatisticsCommand,
  CloudWatchClient,
} = require("@aws-sdk/client-cloudwatch");

// we need this getMetrics in a controller function so we can invoke this from a frontend route

const getMetrics = async(startTime, endTime, metricName, period = 60, stat) => {
    const client = await new CloudWatchClient({region: "us-east-1"})
  try {
        const data = await client.send(
        new GetMetricDataCommand({
          // Namespace: "AWS/Lambda",
          // MetricName: metricName, //"Errors",
          StartTime: new Date(startTime), //new Date("August 6, 2022 13:30:30"), <- needs variable where we can send in a start date from frontend
          EndTime: new Date(endTime), //new Date("August 6, 2022 16:00:00"),<- needs variable where we can send in a start date from frontend
          MetricDataQueries: [
            {
              Id: "test",
              // Expression: 'SELECT SUM(Invocations) FROM SCHEMA("AWS/Lambda", FunctionName) GROUP BY FunctionName ORDER BY SUM() DESC',
              MetricStat: {
                Metric: {
                  MetricName: metricName, //"Errors",
                  Namespace: "AWS/Lambda",
                  Dimensions: [{
                    Name: 'FunctionName',
                    Value: ['add']
                  }]
                },
              Period: period,
              Stat: stat,
              },
            },
          ],
          
        })
      );
      // console.log('hi');
      console.log(data);
      return data.MetricDataResults;
  } catch (err) {
    return err
  }      
}

getMetrics(new Date("August 1, 2022 15:30:30"), new Date("August 10, 2022 18:00:00"), "Invocations", 60, "Sum");

// const date = new Date();

// date.setHours(5)

// console.log(date)

module.exports = getMetrics;
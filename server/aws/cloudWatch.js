const {
  ListMetricsCommand,
  GetMetricDataCommand,
  GetMetricStatisticsCommand,
  CloudWatchClient,
} = require("@aws-sdk/client-cloudwatch");

const {
  CloudWatchLogsClient,
  CreateLogStreamCommand,
  GetLogEventsCommand,
  DescribeLogGroupsCommand,
  DescribeLogStreamsCommand,
} = require("@aws-sdk/client-cloudwatch-logs");


const getMetric = () => {

      const client = await new CloudWatchClient({region: "us-east-1"});

      const data = await client.send(
        new GetMetricDataCommand({
          Namespace: "AWS/Lambda",
          MetricName: "Errors",
          StartTime: new Date("August 6, 2022 13:30:30"),
          EndTime: new Date("August 6, 2022 16:00:00"),
          MetricDataQueries: [
            {
              Id: "test",
              MetricStat: {
                Metric: {
                  MetricName: "Errors",
                  Namespace: "AWS/Lambda",
                },
                Period: 60,
                Stat: "Maximum",
              },
            },
          ],
        })
      );
      
      console.log(data.MetricDataResults[0]);
}    

getCloudwatchData();

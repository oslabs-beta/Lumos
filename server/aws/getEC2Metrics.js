const {
  CloudWatchClient,
  GetMetricDataCommand,
} = require('@aws-sdk/client-cloudwatch');

const getEC2 = require('./getEC2');

// https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html

const getEC2Metrics = async (startTime, endTime, metricName, period) => {
  try {
    // Finish later
    const instances = await getEC2();
    const client = new CloudWatchClient({ region: 'us-east-1' });
    const command = new GetMetricDataCommand({});
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    return err;
  }
};

getEC2Metrics();

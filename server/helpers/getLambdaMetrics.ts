import {
  CloudWatchClient,
  GetMetricStatisticsCommand,
  GetMetricStatisticsCommandInput,
} from '@aws-sdk/client-cloudwatch';

interface GetLambdaMetricsParams {
  region: string;
  func_name: string;
  metric_name: string;
  start_time: Date;
  end_time: Date;
  period: number;
}

interface ParsedDataPoint {
  timestamp: Date;
  sampleCount: number;
  average: number;
  sum: number;
  minimum: number;
  maximum: number;
}

export default async function getLambdaMetrics(
  params: GetLambdaMetricsParams,
): Promise<ParsedDataPoint[] | void> {
  const { region, func_name, metric_name, start_time, end_time, period } =
    params;
  const client = new CloudWatchClient({ region });
  try {
    const input: GetMetricStatisticsCommandInput = {
      StartTime: start_time,
      EndTime: end_time,
      MetricName: metric_name,
      Period: period,
      Namespace: 'AWS/Lambda',
      Statistics: ['Sum', 'Maximum', 'Minimum', 'Average'],
      Dimensions: [
        {
          Name: 'FunctionName',
          Value: func_name,
        },
      ],
    };
    const command = new GetMetricStatisticsCommand(input);
    const data = await client.send(command);

    if (!data.Datapoints) {
      return [];
    }

    const parsedDataPoints: ParsedDataPoint[] = data.Datapoints.map(
      (datapoint) => ({
        timestamp: datapoint.Timestamp!,
        sampleCount: datapoint.SampleCount!,
        average: datapoint.Average!,
        sum: datapoint.Sum!,
        minimum: datapoint.Minimum!,
        maximum: datapoint.Maximum!,
      }),
    );
    return parsedDataPoints;
  } catch (err) {
    return console.error(
      'Error retrieving Cloudwatch Metrics in getLambdaMetrics',
      err,
    );
  }
}

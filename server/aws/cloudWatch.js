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



  // const params = {
  //   Dimensions: [
  //     {
  //       Name: "LambdaInvocations" /* required */,
  //     },
  //   ],
  //   MetricName: "Invocations",
  //   Namespace: "AWS/Lambda",
  // };

    // const data = await client.send(new ListMetricsCommand({Namespace: 'AWS/Lambda'}));

    // const params = {
    //   Dimensions: [
    //     {
    //       Name: "lolololooololoolol dude aws sucks" /* required */,
    //     },
    //   ],
    //   MetricName: "IncomingLogEvents",
    //   Namespace: "AWS/Logs",
    // };

// const getLogs = (logGroup, limit) => {

//       const client = await new CloudWatchLogsClient({region: "us-east-1"})

//       if (!logGroup) {
//         const logGroupsList = await client.send(
//           new DescribeLogGroupsCommand(
//             { limit: 50 }
//           )
//         );
  
//       const streamsArr = [];
  
  
//       for (let i = 0; i < logGroupsList.logGroups.length; i++) {
//         const stream = await client.send(
//           new DescribeLogStreamsCommand({
//             logGroupName: logGroupsList.logGroups[i].logGroupName,
//           })
//         );
          
//         const tempArr = [];
  
//         tempArr.push(logGroupsList.logGroups[i].logGroupName)
//         tempArr.push(stream);
  
//         streamsArr.push(tempArr);
//       }
  
  
//      for (let i = 0; i < streamsArr.length; i++) {
//        for (let j = 0; j < streamsArr[i][1].logStreams.length; j ++) {
//          const events = await client.send(new GetLogEventsCommand({
//            logGroupName: streamsArr[i][0],
//            logStreamName: streamsArr[i][1].logStreams[j].logStreamName
//          }))
//          console.log(events);
//        }
//      }
//     } else {
//       //
//     }

      // const client = await new CloudWatchLogsClient({region: "us-east-1"})

const getMetric = () => {
  
}

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
      // console.log("Success. Metrics:", JSON.stringify(data.Metrics));
      console.log(data.MetricDataResults[0]);    

  // const config = {
  //   StackName: "LUMOSSTACK",
  //   Capabilities: ["CAPABILITY_IAM"],
  //   TemplateBody: `
  //     Resources:
  //       LumosUser:
  //           Type: AWS::IAM::User
  //           Properties:
  //               ManagedPolicyArns:
  //                   - arn:aws:iam::aws:policy/CloudWatchFullAccess
  //                   - arn:aws:iam::aws:policy/AWSLambda_FullAccess
  //     Outputs:
  //       outputArn:
  //           Description: ARN
  //           Value: !GetAtt LumosUser.Arn
  //   `,
  // };
// };



getCloudwatchData();

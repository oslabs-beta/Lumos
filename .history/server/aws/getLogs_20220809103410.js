const {
  CloudWatchLogsClient,
  GetLogEventsCommand,
  DescribeLogGroupsCommand,
  DescribeLogStreamsCommand,
} = require('@aws-sdk/client-cloudwatch-logs');

const getLogs = async (logGroup = undefined, limit = 50) => {
  try {
    const client = new CloudWatchLogsClient({ region: 'us-east-1' });
    if (!logGroup) {
      // Get a list of user's log groups
      const logGroupsList = await client.send(
        new DescribeLogGroupsCommand({ limit }),
      );
      // Parse data to include only names of log groups
      const logGroups = logGroupsList.logGroups.map((log) => log.logGroupName);
      // Get log stream data for each log group
      const logStreams = logGroups.map((group) =>
        client.send(DescribeLogStreamsCommand({ logGroupName: group })),
      );
    } else {
      const stream = await client.send(
        new DescribeLogStreamsCommand({
          logGroupName: logGroup,
        }),
      );
      return stream;
    }
  } catch (err) {
    return err;
  }
};

// const {
//   CloudWatchLogsClient,
//   CreateLogStreamCommand,
//   GetLogEventsCommand,
//   DescribeLogGroupsCommand,
//   DescribeLogStreamsCommand,
// } = require("@aws-sdk/client-cloudwatch-logs");

// const getLogs = async(logGroup, limit) => {

//   const client = await new CloudWatchLogsClient({region: "us-east-1"})

//   if (!logGroup) {
//       const logGroupsList = await client.send(
//         new DescribeLogGroupsCommand(
//           { limit: 50 }
//         )
//       );

//     const streamsArr = [];


//     for (let i = 0; i < logGroupsList.logGroups.length; i++) {
//       const stream = await client.send(
//         new DescribeLogStreamsCommand({
//           logGroupName: logGroupsList.logGroups[i].logGroupName,
//         })
//       );
        
//       const tempArr = [];

//       tempArr.push(logGroupsList.logGroups[i].logGroupName)
//       tempArr.push(stream);

//       streamsArr.push(tempArr);
//     }


//   for (let i = 0; i < streamsArr.length; i++) {
//     for (let j = 0; j < streamsArr[i][1].logStreams.length; j ++) {
//       const events = await client.send(new GetLogEventsCommand({
//         logGroupName: streamsArr[i][0],
//         logStreamName: streamsArr[i][1].logStreams[j].logStreamName
//       }))
//       console.log(events);
//     }
//   }
//   } else {
//     const stream = await client.send(
//       new DescribeLogStreamsCommand({
//         logGroupName: logGroup
//       })
//     );

//     console.log(stream)
//   }
// }

// getLogs(undefined, 50);
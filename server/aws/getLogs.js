const {
  CloudWatchLogsClient,
  CreateLogStreamCommand,
  GetLogEventsCommand,
  DescribeLogGroupsCommand,
  DescribeLogStreamsCommand,
} = require("@aws-sdk/client-cloudwatch-logs");

const getLogs = async(logGroup, limit) => {

  const client = await new CloudWatchLogsClient({region: "us-east-1"})

  if (!logGroup) {
      const logGroupsList = await client.send(
        new DescribeLogGroupsCommand(
          { limit: 50 }
        )
      );

    const streamsArr = [];


    for (let i = 0; i < logGroupsList.logGroups.length; i++) {
      const stream = await client.send(
        new DescribeLogStreamsCommand({
          logGroupName: logGroupsList.logGroups[i].logGroupName,
        })
      );
        
      const tempArr = [];

      tempArr.push(logGroupsList.logGroups[i].logGroupName)
      tempArr.push(stream);

      streamsArr.push(tempArr);
    }


  for (let i = 0; i < streamsArr.length; i++) {
    for (let j = 0; j < streamsArr[i][1].logStreams.length; j ++) {
      const events = await client.send(new GetLogEventsCommand({
        logGroupName: streamsArr[i][0],
        logStreamName: streamsArr[i][1].logStreams[j].logStreamName
      }))
      console.log(events);
    }
  }
  } else {
    const stream = await client.send(
      new DescribeLogStreamsCommand({
        logGroupName: logGroup
      })
    );

    console.log(stream)
  }
}

getLogs(undefined, 50);
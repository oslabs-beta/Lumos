const {
  ListMetricsCommand,
  GetMetricData,
  GetMetricStatistics,
  CloudWatchClient,
} = require("@aws-sdk/client-cloudwatch");
// const { STSClient, AssumeRoleCommand } = require("@aws-sdk/client-sts");

const getCloudwatchData = async () => {
  // const client = await new STSClient({
  //   region: "us-east-1",
  //   credentials: {
  //     accessKeyId: "AKIAXC2JQ4LLWWRGIPM5",
  //     secretAccessKey: "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",
  //   },
  // });

  // const role = await client.send(
  //   new AssumeRoleCommand({ RoleSessionName: "LUMOS", RoleArn: arn })
  // );

  const client = await new CloudWatchClient({
    region: "us-east-1",
    credentials: {
      accessKeyId: "AKIAXC2JQ4LLWWRGIPM5",
      secretAccessKey: "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",
    },
  });

  const params = {
    Dimensions: [
      {
        Name: "LambdaInvocations" /* required */,
      },
    ],
    MetricName: "Invocations",
    Namespace: "AWS/Lambda",
  };

  // console.log(role);

  try {
    const data = await client.send(new ListMetricsCommand(params));
    console.log("Success. Metrics:", JSON.stringify(data.Metrics));
    return data;
  } catch (err) {
    console.log("Error", err);
  }

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
};

getCloudwatchData();

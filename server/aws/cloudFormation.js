const {
  CloudFormationClient,
  CreateStackCommand,
} = require("@aws-sdk/client-cloudformation");

const createStack = async () => {
  const client = await new CloudFormationClient({ region: "us-east-1" });

  const config = {
    StackName: "LUMOSSTACK",
    Capabilities: ["CAPABILITY_IAM"],
    TemplateBody: `
      Resources:
        LumosUser:
            Type: AWS::IAM::User
            Properties:
                ManagedPolicyArns:
                    - arn:aws:iam::aws:policy/CloudWatchFullAccess
                    - arn:aws:iam::aws:policy/AWSLambda_FullAccessa
      Outputs:
        outputArn:
            Description: ARN
            Value: !GetAtt LumosUser.Arn
    `,
  };

  const command = await new CreateStackCommand(config);

  const response = await client.send(command);

  return response;
};

createStack().then((response) => console.log(response))

module.exports = createStack;

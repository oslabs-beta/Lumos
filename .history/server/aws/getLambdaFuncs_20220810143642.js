const {
  LambdaClient,
  ListFunctionsCommand,
  GetFunctionCommand,
} = require('@aws-sdk/client-lambda');

const getLambdaFuncs = async () => {
  try {
    const client = new LambdaClient({ region: 'us-east-1' });
    const command = new ListFunctionsCommand({ FunctionVersion: 'ALL' });
    const response = await client.send(command);
    console.log(response.Functions);
    // This returns FunctionArn and FunctionName
    return response.Functions;
  } catch (err) {
    return err;
  }
};

getLambdaFuncs()
module.exports = getLambdaFuncs;
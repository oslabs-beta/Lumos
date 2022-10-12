const {
  LambdaClient,
  ListFunctionsCommand,
} = require('@aws-sdk/client-lambda');



const getLambdaFuncs = async () => {
  try {
    const client = new LambdaClient({ region: 'us-east-1' });
    const command = new ListFunctionsCommand({ FunctionVersion: 'ALL' });
    const response = await client.send(command);
    // This returns FunctionArn and FunctionName
    const funcNames = response.Functions.map((func) => func.FunctionName)
    return funcNames;
  } catch (err) {
    return err;
  }
};

module.exports = getLambdaFuncs;
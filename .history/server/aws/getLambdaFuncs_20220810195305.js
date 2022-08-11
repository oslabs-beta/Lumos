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
    const funcNames = response.Functions.map((func) => func.FunctionName)
    return funcNames;
  } catch (err) {
    return err;
  }
};

const getFunc = async () => {
  try {
    const client = new LambdaClient({ region: 'us-east-1' });
    const command = new GetFunctionCommand({ FunctionName: 'arn:aws:lambda:us-east-1:528832648632:function:add:$LATEST' });
    const response = await client.send(command)
    console.log(response)
  } catch (err) {
    return err
  }
}

getLambdaFuncs()
module.exports = getLambdaFuncs;
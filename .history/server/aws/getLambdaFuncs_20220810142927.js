const {LambdaClient, ListFunctionsCommand, GetFunctionCommand} = require('@aws-sdk/client-lambda');

const getLambdaFuncs = async () => {
  try {
    const client = new LambdaClient({region: 'us-east-1'});
    const command = new ListFunctionsCommand({});
    const response = await client.send(command);
    console.log(response)
    // This returns FunctionArn
  } catch (err) {
    return err
  }
}

module.exports = getLambdaFuncs
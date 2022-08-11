const {
  LambdaClient, ListFunctionsCommand
} = require('@aws-sdk/client-lambda');

const getLambdaFuncs = async () => {
  const client = new LambdaClient({region: 'us-east-1'})
}
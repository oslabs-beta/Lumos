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
    console.log(funcNames)
    return funcNames;
  } catch (err) {
    return err;
  }
};

const allLambdaFuncs = [
  {
  funcName: "", // label
  totalInvocations: this.funcValues.reduce((a, b) => a + b, 0), // total sum
  totalErrors: 0,
  timestamps: [1,1,1,1,1,1,1,2,2,2,2,2,2],
  funcValues: [78, 28]
  }
]

// const getFunc = async () => {
//   try {
//     const client = new LambdaClient({ region: 'us-east-1' });
//     const command = new GetFunctionCommand({ FunctionName: 'arn:aws:lambda:us-east-1:528832648632:function:add:$LATEST' });
//     const response = await client.send(command)
//     console.log(response)
//   } catch (err) {
//     return err
//   }
// }

module.exports = getLambdaFuncs;
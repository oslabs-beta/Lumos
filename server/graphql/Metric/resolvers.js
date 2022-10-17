import { LambdaClient, ListFunctionsCommand } from '@aws-sdk/client-lambda';

export default {
  Query: {
    listLambdaFuncs: async () => {
      try {
        const client = new LambdaClient({ region: 'us-east-1' });
        const command = new ListFunctionsCommand({ FunctionVersion: 'ALL' });
        const response = await client.send(command);
        // This returns FunctionArn and FunctionName
        const funcNames = response.Functions.map((func) => func.FunctionName);
        console.log(funcNames);
        return funcNames;
      } catch (err) {
        return err;
      }
    },
  },
};

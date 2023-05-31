import {
  LambdaClient,
  ListFunctionsCommand,
  ListFunctionsResponse,
} from '@aws-sdk/client-lambda';

// This functions returns an array Lambda func names

export default async function getLambdaFuncs(): Promise<string[]> {
  try {
    const client = new LambdaClient({ region: 'us-east-1' });
    const command = new ListFunctionsCommand({ FunctionVersion: 'ALL' });
    const response: ListFunctionsResponse = await client.send(command); // This returns FunctionArn and FunctionName
    // @ts-ignore
    return response.Functions?.map((f) => f.FunctionName);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

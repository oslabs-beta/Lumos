import { LambdaClient, ListFunctionsCommand } from '@aws-sdk/client-lambda';
import {
  CloudWatchLogsClient,
  DescribeLogGroupsCommand,
} from '@aws-sdk/client-cloudwatch-logs';

const CREDENTIALS = {};

export default {
  Query: {
    listLambdaFuncs: async () => {
      try {
        const client = new LambdaClient({
          region: 'us-east-1',
          credentials: CREDENTIALS,
        });
        const command = new ListFunctionsCommand({ FunctionVersion: 'ALL' });
        const response = await client.send(command);
        const funcNames = response.Functions.map((func) => func.FunctionName);
        return funcNames;
      } catch (err) {
        return err;
      }
    },

    getLogGroups: async () => {
      try {
        const client = new CloudWatchLogsClient({
          region: 'us-east-1',
          credentials: CREDENTIALS,
        });
        const command = new DescribeLogGroupsCommand({ limit: 50 });
        const response = await client.send(command);
        const logGroups = response.logGroups.map((group) => ({
          arn: group.arn,
          logGroupName: group.logGroupName,
        }));
        return logGroups;
      } catch (error) {
        return error;
      }
    },
  },
};

import { STSClient, AssumeRoleCommand } from '@aws-sdk/client-sts';

const resolvers = {
  Query: {
    getCredentials: async (_, { roleArn, externalId }) => {
      try {
        const client = new STSClient({
          region: process.env.REGION,
        });
        const response = await client.send(
          new AssumeRoleCommand({
            RoleArn: roleArn,
            ExternalId: externalId,
            RoleSessionName: 'Lumos',
          }),
        );
        return {
          accessKeyId: response.Credentials.AccessKeyId,
          secretAccessKey: response.Credentials.SecretAccessKey,
          sessionToken: response.Credentials.SessionToken,
        };
      } catch (err) {
        console.log(err);
        return err;
      }
    },
  },
};

export default resolvers;

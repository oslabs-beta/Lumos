import { STSClient, AssumeRoleCommand } from '@aws-sdk/client-sts';
import bcrypt from 'bcrypt';

export default {
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
        return err;
      }
    },

    getArn: (_, { id }, { db }) => {
      const res = db
        .query(`SELECT arn FROM users WHERE id=${id}`)
        .then((data) => data.rows[0])
        .catch((err) => err);
      return res;
    },

    validatePassword: (_, { email, password }, { db }) => {
      const res = db
        .query(`SELECT password FROM users WHERE email = '${email}'`)
        .then((data) => data.rows[0].password)
        .then((hash) => bcrypt.compareSync(password, hash))
        .catch((err) => err);
      return res;
    },
  },

  Mutation: {
    createUser: (_, { email, password, arn }, { db }) => {
      const hash = bcrypt.hashSync(password, 10);
      const res = db
        .query(
          `INSERT INTO users(email, password, arn) VALUES('${email}', '${hash}', '${arn}') RETURNING id, arn`,
        )
        .then((data) => data.rows[0])
        .catch((err) => err);
      return res;
    },
  },
};

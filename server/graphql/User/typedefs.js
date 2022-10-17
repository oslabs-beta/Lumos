export default `#graphql
  type Credentials {
    accessKeyId: String!
    secretAccessKey: String!
    sessionToken: String!
  }

  type Query {
    getCredentials(roleArn: String!, externalId: String!): Credentials!
  }
`;

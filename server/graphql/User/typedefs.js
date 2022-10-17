export default `#graphql
  type Credentials {
    accessKeyId: String!
    secretAccessKey: String!
    sessionToken: String!
  }

  type User {
    id: ID!
    arn: String!
  }

  type Query {
    getCredentials(roleArn: String!, externalId: String!): Credentials!
    getArn(id: String!): User!
  }

  type Mutation {
    createUser(email: String!, password: String!, arn: String!): User!
  }

`;

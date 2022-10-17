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
    authenticateUser(email: String!, password: String!): Boolean!
  }

  type Mutation {
    createUser(email: String!, password: String!, arn: String!): User!
  }

`;

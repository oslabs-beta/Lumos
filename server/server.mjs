import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import UserType from './graphql/User/typedefs.js';
import UserResolvers from './graphql/User/resolvers.js';

// Use context object to store auth
const server = new ApolloServer({
  typeDefs: UserType,
  resolvers: UserResolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`server ready at ${url}`);

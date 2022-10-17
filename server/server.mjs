import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import UserType from './graphql/User/typedefs.js';
import UserResolvers from './graphql/User/resolvers.js';
import db from './db/index.cjs';

const server = new ApolloServer({
  typeDefs: UserType,
  resolvers: UserResolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => ({
    db,
  }),
});
console.log(`server ready at ${url}`);

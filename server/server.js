import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs, resolvers } from './graphql/index.js';
import db from './db/index.cjs';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return { db };
  },
});
console.log(`server ready at ${url}`);

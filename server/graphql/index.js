import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

import UserTypes from './User/typedefs.js';
import UserResolvers from './User/resolvers.js';
import MetricTypes from './Metric/typedefs.js';
import MetricResolvers from './Metric/resolvers.js';

const typeDefs = mergeTypeDefs([UserTypes, MetricTypes]);
const resolvers = mergeResolvers([UserResolvers, MetricResolvers]);

export { typeDefs, resolvers };

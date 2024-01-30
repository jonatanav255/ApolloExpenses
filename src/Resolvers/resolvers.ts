// Combining resolvers in resolvers.js
import { userResolvers } from './userResolvers';
import { categoryResolvers } from './categoryResolvers';

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...categoryResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    // ...categoryResolvers.Mutation (if you have mutations for categories)
  },
  // Include other types like Subscription if you have them
};

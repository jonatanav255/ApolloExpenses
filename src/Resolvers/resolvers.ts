// Combining resolvers in resolvers.js
import { userResolvers } from "./userResolvers";
import { categoryResolvers } from "./categoryResolvers";
import { searchResolvers } from "./searchResolvers";

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...categoryResolvers.Query,
    ...searchResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    // ...categoryResolvers.Mutation (if you have mutations for categories)
  },
  SearchResult: {
    __resolveType(obj: any, context: any, info: any) {
      if (obj.__typename) {
        return obj.__typename;
      }
      return null; // Ideally, this case should never be reached
    },
  },
  // Include other types like Subscription if you have them
};

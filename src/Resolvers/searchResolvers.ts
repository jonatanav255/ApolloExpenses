// ./Resolvers/searchResolvers.ts
import pool from "../database/database";

export const searchResolvers = {
  Query: {
    search: async (_: any, { term }: { term: string }) => {
      const userResults = await pool.query("SELECT * FROM users WHERE name ILIKE $1 OR email ILIKE $1", [`%${term}%`]);
      const categoryResults = await pool.query("SELECT * FROM categories WHERE name ILIKE $1", [`%${term}%`]);

      const users = userResults.rows.map(user => ({ ...user, __typename: 'User' }));
      const categories = categoryResults.rows.map(category => ({ ...category, __typename: 'Category' }));

      return [...users, ...categories];
    }
  }
};

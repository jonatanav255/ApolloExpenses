import pool from "./database";
import { addUser } from "./userDataAccess";

interface CreateUserArgs {
  name: string;
  email: string;
}

export const resolvers = {
  Query: {
    users: async () => {
      try {
        const { rows } = await pool.query("SELECT * FROM users");
        return rows;
      } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch users");
      }
    },
    usersByName: async (_: any, { name }: { name: string }) => {
      // Assuming you're using a SQL database
      const query = "SELECT * FROM users WHERE name = $1";
      const values = [name];

      try {
        const result = await pool.query(query, values);
        return result.rows;
      } catch (err) {
        console.error(err);
        throw new Error("Error fetching users by name");
      }
    },
    // },
    categories: async () => {
      const { rows } = await pool.query("SELECT * FROM categories");
      return rows;
    },
    expenses: async () => {
      const { rows } = await pool.query("SELECT * FROM expenses");
      return rows;
    },
  },
  Mutation: {
    createUser: async (_: any, args: { name: string; email: string }) => {
      return addUser(args);
    },
  },
};

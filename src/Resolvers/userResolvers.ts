import pool from "../database/database";
import { addUser } from "../userDataAccess";
import { deleteUser } from "../userDataAccess";
import { updateUser } from "../userDataAccess";

export const userResolvers = {
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

    userById: async (_: any, { user_id }: { user_id: string }) => {
      const query = "SELECT * FROM USERS WHERE user_id = $1";
      const values = [user_id];

      try {
        const { rows } = await pool.query(query, values);
        if (rows.length === 0) {
          throw new Error("User not found");
        }
        return rows;
      } catch (err) {
        console.error(err);
        throw new Error("Error fetching users by ID");
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

    usersByEmail: async (_: any, { email }: { email: string }) => {
      // Assuming you're using a SQL database
      const query = "SELECT * FROM users WHERE email = $1";
      const values = [email];

      try {
        const result = await pool.query(query, values);
        return result.rows;
      } catch (err) {
        console.error(err);
        throw new Error("Error fetching users by name");
      }
    },
  },
  Mutation: {
    createUser: async (_: any, args: { name: string; email: string }) => {
      return addUser(args);
    },
    deleteUser: async (_: any, { user_id }: { user_id: string }) => {
      return deleteUser(user_id);
    },
    updateUser: async (
      _: any,
      args: { user_id: string; name?: string; email?: string }
    ) => {
      return updateUser(args);
    },
  },
};

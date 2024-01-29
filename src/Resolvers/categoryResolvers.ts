import pool from "../database/database";

export const categoryResolvers = {
  Query: {
    categories: async () => {
      const { rows } = await pool.query("SELECT * FROM categories");
      return rows;
    },
    expenses: async () => {
      const { rows } = await pool.query("SELECT * FROM expenses");
      return rows;
    },
  },
};

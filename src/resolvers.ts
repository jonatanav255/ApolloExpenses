
import pool from './database';

export const resolvers = {
  Query: {
    users: async () => {
      try {
        const { rows } = await pool.query('SELECT * FROM users');
        return rows;
      } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch users');
      }
    },
    categories: async () => {
      const { rows } = await pool.query('SELECT * FROM categories');
      return rows;
    },
    expenses: async () => {
      const { rows } = await pool.query('SELECT * FROM expenses');
      return rows;
    },
  },
};
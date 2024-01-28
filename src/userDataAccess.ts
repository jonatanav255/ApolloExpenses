// src/userDataAccess.ts

import pool from './database';

export async function addUser({ name, email }: { name: string; email: string }) {
  const insertQuery = `
    INSERT INTO users (name, email)
    VALUES ($1, $2)
    RETURNING *;
  `;

  try {
    const { rows } = await pool.query(insertQuery, [name, email]);
    return rows[0];
  } catch (err: any) { // Type assertion here
    // Properly check for the 'message' property before using it
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error(err);
    throw new Error('Error creating user: ' + errorMessage);
  }
}

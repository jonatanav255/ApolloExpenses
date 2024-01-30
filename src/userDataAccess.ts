// src/userDataAccess.ts

import pool from "./database/database";

export async function addUser({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const insertQuery = `
    INSERT INTO users (name, email)
    VALUES ($1, $2)
    RETURNING *;
  `;

  try {
    const { rows } = await pool.query(insertQuery, [name, email]);
    return rows[0];
  } catch (err: any) {
    // Type assertion here
    // Properly check for the 'message' property before using it
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error(err);
    throw new Error("Error creating user: " + errorMessage);
  }
}

// esta es para borrar el usuario
export async function deleteUser(user_id: string) {
  const deleteQuery = `
  DELETE FROM users
  WHERE user_id = $1
  RETURNING *;
`;

  try {
    const { rows } = await pool.query(deleteQuery, [user_id]);

    if (rows.length === 0) {
      throw new Error("User not found");
    }
    return rows[0];
  } catch (err: any) {
    // Type assertion here
    // Properly check for the 'message' property before using it
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error(err);
    throw new Error("Error deleting the user: " + errorMessage);
  }
}

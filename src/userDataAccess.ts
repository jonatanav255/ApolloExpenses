// src/userDataAccess.ts

import pool from "./database/database";

interface UpdateUserParams {
  user_id: string;
  name?: string;
  email?: string;
}

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


// esta es para modificar el usuario
export async function updateUser({user_id, name, email}: UpdateUserParams ){
  const updateQuery = `
    UPDATE users
    SET name = COALESCE($2, name), email = COALESCE($3, email)
    WHERE user_id = $1
    RETURNING *;
  `;

  try {
    const { rows } = await pool.query(updateQuery, [user_id, name, email]);

    if (rows.length === 0) {
      throw new Error("User not found");
    }
    return rows[0];
  } catch (err: any) {
    // Type assertion here
    // Properly check for the 'message' property before using it
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error(err);
    throw new Error("Error updating user: " + errorMessage);
  }
}

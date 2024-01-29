import { Pool } from 'pg';

// Database connection parameters
const pool = new Pool({
  user: 'jonatanav255',
  host: 'localhost',
  database: 'jonatanav255',
  password: '',
  port: 5432, // Default port for PostgreSQL
});

// Export the pool to use it elsewhere in your app
export default pool;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Database connection parameters
const pool = new pg_1.Pool({
    user: 'jonatanav255',
    host: 'localhost',
    database: 'jonatanav255',
    password: '',
    port: 5432, // Default port for PostgreSQL
});
// Export the pool to use it elsewhere in your app
exports.default = pool;

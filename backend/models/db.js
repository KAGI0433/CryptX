const mysql = require('mysql2');
require('dotenv').config(); 

// Create a connection pool to the MySQL database
const pool = mysql.createPool({
  host: process.env.DB_HOST,     
  user: process.env.DB_USER,     
  password: process.env.DB_PASS, 
  database: process.env.DB_NAME,
  waitForConnections: true,      
  connectionLimit: 10,           
  queueLimit: 0                  
});

// Export a promise-based connection pool
const db = pool.promise();

module.exports = db;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { pool } = require('../models/db'); 

// User registration
const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`;
    const result = await pool.query(query, [username, email, hashedPassword]);
    res.status(201).json({ message: 'User registered successfully', user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err });
  }
};

// User login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const query = `SELECT * FROM users WHERE email = $1`;
    const result = await pool.query(query, [email]);
    if (result.rows.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Create JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in user', error: err });
  }
};

module.exports = { register, login };



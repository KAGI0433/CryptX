const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes'); // Auth routes
const cryptoRoutes = require('./routes/cryptoRoutes'); // Crypto routes

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use the routes
app.use('/api/auth', authRoutes);
app.use('/api/crypto', cryptoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

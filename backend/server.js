const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');  
const { authenticateJWT } = require('./middleware/authMiddleware'); 

dotenv.config(); 

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Routes
app.use('/api/auth', authRoutes); 
app.get('/api/dashboard', authenticateJWT, (req, res) => {
  res.status(200).json({ message: 'Welcome to the CryptX Dashboard' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// backend/routes/cryptoRoutes.js
const express = require('express');
const { getBTCData } = require('../controllers/cryptoController');

const router = express.Router();

// Define route to fetch BTC data
router.get('/btc', getBTCData);

module.exports = router;

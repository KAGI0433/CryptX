// backend/controllers/cryptoController.js
const axios = require('axios');

exports.getBTCData = async (req, res) => {
  try {
    // Fetch Bitcoin price data from CoinGecko API
    const { data } = await axios.get(
      'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart',
      {
        params: { vs_currency: 'usd', days: '180' }, // Fetch data for the last 180 days
      }
    );

    // Respond with the fetched data
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching BTC data:', error.message);
    res.status(500).json({ error: 'Failed to fetch BTC data' });
  }
};

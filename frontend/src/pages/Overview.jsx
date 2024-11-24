import React, { useEffect, useState } from 'react';
import './Overview.css';
import axios from 'axios'; // Make sure axios is installed for API calls
import BTCGraph from '../components/BTCGraph'; // Assuming you have a BTCGraph component

const Overview = () => {
  const [bitcoinStats, setBitcoinStats] = useState({
    price: null,
    change: null,
    marketCap: null,
    volume: null,
  });

  useEffect(() => {
    // Fetch Bitcoin stats from a cryptocurrency API
    const fetchBitcoinStats = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin'
        );
        const data = response.data.market_data;
        setBitcoinStats({
          price: data.current_price.usd,
          change: data.price_change_percentage_24h,
          marketCap: data.market_cap.usd,
          volume: data.total_volume.usd,
        });
      } catch (error) {
        console.error('Error fetching Bitcoin stats:', error);
      }
    };

    fetchBitcoinStats();
  }, []);

  return (
    <div className="overview">
      <h1>Overview</h1>
      <div className="stats">
        <div className="stat-item">
          <h2>Current Price</h2>
          <p>${bitcoinStats.price ? bitcoinStats.price.toLocaleString() : 'Loading...'}</p>
        </div>
        <div className="stat-item">
          <h2>24h Change</h2>
          <p>{bitcoinStats.change ? `${bitcoinStats.change.toFixed(2)}%` : 'Loading...'}</p>
        </div>
        <div className="stat-item">
          <h2>Market Cap</h2>
          <p>${bitcoinStats.marketCap ? bitcoinStats.marketCap.toLocaleString() : 'Loading...'}</p>
        </div>
        <div className="stat-item">
          <h2>Volume</h2>
          <p>${bitcoinStats.volume ? bitcoinStats.volume.toLocaleString() : 'Loading...'}</p>
        </div>
      </div>
      <div className="graph-section">
        <h2>Bitcoin Price Chart</h2>
        <BTCGraph />
      </div>
    </div>
  );
};

export default Overview;

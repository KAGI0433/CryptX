import React, { useEffect, useState } from 'react';
import './LiveMarket.css';
import axios from 'axios';
import Ethereumicon from '../images/ethereumicon.png';
import Bitcoinicon from '../images/bitcoin-icon.png';
import Litecoinicon from '../images/litecoinicon.png';
import Cardinoicon from '../images/cardinoicon.png';
import One from '../images/one.png';
import Two from '../images/two.png';
import Three from '../images/three.png';
import Four from '../images/four.png';

const LiveMarket = () => {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from CoinGecko API
  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets', {
            params: {
              vs_currency: 'usd',
              ids: 'bitcoin,ethereum,litecoin,cardano',
            },
          }
        );
        console.log(response.data); // Check the data in the console
        setMarketData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching market data');
        setLoading(false);
        console.error('Error fetching market data:', error);
      }
    };

    fetchMarketData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="live-market">
      <div className="heading">Live Market</div>
      {marketData.map((item, index) => {
        // Determine the change color (green for positive, red for negative)
        const changeColor = item.price_change_percentage_24h >= 0 ? '#1ecb4f' : '#ff8d4d';
        const graphImage = [One, Two, Three, Four][index]; // Using pre-defined images for each crypto

        return (
          <div className="row" key={index}>
            <img
              src={
                item.id === 'bitcoin'
                  ? Bitcoinicon
                  : item.id === 'ethereum'
                  ? Ethereumicon
                  : item.id === 'litecoin'
                  ? Litecoinicon
                  : Cardinoicon
              }
              alt={`${item.name} icon`}
              className="icon"
            />
            <div className="name-pair-wrapper">
              <div className="name">{item.name}</div>
              <div className="pair">{`${item.symbol.toUpperCase()} / USDT`}</div>
            </div>
            <div className="change-wrapper">
              <div className="label">Change</div>
              <div className="change" style={{ color: changeColor }}>
                {item.price_change_percentage_24h.toFixed(2)}%
              </div>
            </div>
            <div className="price-wrapper">
              <div className="label">Price</div>
              <div className="price">
                {/* Ensure that the current price is available and formatted correctly */}
                {item.current_price
                  ? `$${item.current_price.toLocaleString()}`
                  : 'Price not available'}
              </div>
            </div>
            <img src={graphImage} alt="graph" className="graph" />
          </div>
        );
      })}
    </div>
  );
};

export default LiveMarket;

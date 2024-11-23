import React from 'react';
import './LiveMarket.css';
import Ethereumicon from '../images/ethereumicon.png';
import Bitcoinicon from '../images/bitcoin-icon.png';
import Litecoinicon from '../images/litecoinicon.png';
import Cardinoicon from '../images/cardinoicon.png';
import One from '../images/one.png';
import Two from '../images/two.png';
import Three from '../images/three.png';
import Four from '../images/four.png'
const LiveMarket = () => {
  const data = [
    {
      name: 'Ethereum',
      pair: 'ETH / USDT',
      change: '+14.02%',
      price: '39,786 USD',
      changeColor: '#1ecb4f',
      graph: One,
      icon: Ethereumicon,
    },
    {
      name: 'Bitcoin',
      pair: 'BTC / USDT',
      change: '+4.02%',
      price: '21,786 USD',
      changeColor: '#1ecb4f',
      graph: Two,
      icon: Bitcoinicon,
    },
    {
      name: 'Litecoin',
      pair: 'LTC / USDT',
      change: '-4.02%',
      price: '9,786 USD',
      changeColor: '#ff8d4d',
      graph: Three,
      icon: Litecoinicon,
    },
    {
      name: 'Cardano',
      pair: 'ADA / USDT',
      change: '+0.02%',
      price: '4,786 USD',
      changeColor: '#1ecb4f',
      graph: Four,
      icon: Cardinoicon,
    },
  ];

  return (
    <div className="live-market">
      <div className="heading">Live Market</div>
      {data.map((item, index) => (
        <div className="row" key={index}>
          <img src={item.icon} alt={`${item.name} icon`} className="icon" />
          <div className="name-pair-wrapper">
            <div className="name">{item.name}</div>
            <div className="pair">{item.pair}</div>
          </div>
          <div className="change-wrapper">
            <div className="label">Change</div>
            <div className="change" style={{ color: item.changeColor }}>
              {item.change}
            </div>
          </div>
          <div className="price-wrapper">
            <div className="label">Price</div>
            <div className="price">{item.price}</div>
          </div>
          <img src={item.graph} alt="graph" className="graph" />
        </div>
      ))}
    </div>
  );
};

export default LiveMarket;




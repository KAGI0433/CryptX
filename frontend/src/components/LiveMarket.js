import React from 'react';
import './LiveMarket.css';

const LiveMarket = () => {
  const data = [
    {
      name: 'Ethereum',
      pair: 'ETH / USDT',
      change: '+14.02%',
      price: '39,786 USD',
      changeColor: '#1ecb4f',
      graph: 'https://placeholder.pics/svg/162x40',
      icon: 'https://placeholder.pics/svg/50x50',
    },
    {
      name: 'Bitcoin',
      pair: 'ETH / USDT',
      change: '+4.02%',
      price: '21,786 USD',
      changeColor: '#1ecb4f',
      graph: 'https://placeholder.pics/svg/162x40',
      icon: 'https://placeholder.pics/svg/50x50',
    },
    {
      name: 'Litecoin',
      pair: 'ITC / USDT',
      change: '-4.02%',
      price: '9,786 USD',
      changeColor: '#ff8d4d',
      graph: 'https://placeholder.pics/svg/162x40',
      icon: 'https://placeholder.pics/svg/50x50',
    },
    {
      name: 'Cardano',
      pair: 'ADA / USDT',
      change: '+0.02%',
      price: '4,786 USD',
      changeColor: '#1ecb4f',
      graph: 'https://placeholder.pics/svg/162x40',
      icon: 'https://placeholder.pics/svg/50x50',
    },
  ];

  return (
    <div className="live-market">
      <div className="heading">Live Market</div>
      {data.map((item, index) => (
        <div className="row" key={index}>
          <img src={item.icon} alt={`${item.name} icon`} className="icon" />
          <div className="name">{item.name}</div>
          <div className="pair">{item.pair}</div>
          <div className="change" style={{ color: item.changeColor }}>
            {item.change}
          </div>
          <div className="price">{item.price}</div>
          <img src={item.graph} alt="graph" className="graph" />
        </div>
      ))}
    </div>
  );
};

export default LiveMarket;

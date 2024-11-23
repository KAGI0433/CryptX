import React from 'react';
import './LiveMarket.css';
import Ethereumicon from '../images/ethereumicon.png'
import Bitcoinicon from '../images/bitcoin-icon.png'
import Litecoinicon from '../images/litecoinicon.png'
import Cardinoicon from '../images/cardinoicon.png'

const LiveMarket = () => {
  const data = [
    {
      name: 'Ethereum',
      pair: 'ETH / USDT',
      change: '+14.02%',
      price: '39,786 USD',
      changeColor: '#1ecb4f',
      graph: 'https://placeholder.pics/svg/162x40',
      icon: Ethereumicon ,
    },
    {
      name: 'Bitcoin',
      pair: 'ETH / USDT',
      change: '+4.02%',
      price: '21,786 USD',
      changeColor: '#1ecb4f',
      graph: 'https://placeholder.pics/svg/162x40',
      icon: Bitcoinicon,
    },
    {
      name: 'Litecoin',
      pair: 'ITC / USDT',
      change: '-4.02%',
      price: '9,786 USD',
      changeColor: '#ff8d4d',
      graph: 'https://placeholder.pics/svg/162x40',
      icon: Litecoinicon,
    },
    {
      name: 'Cardano',
      pair: 'ADA / USDT',
      change: '+0.02%',
      price: '4,786 USD',
      changeColor: '#1ecb4f',
      graph: 'https://placeholder.pics/svg/162x40',
      icon: Cardinoicon,
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

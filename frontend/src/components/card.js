import React from 'react';
import './CardContent.css';
import Ethereum from '../images/ethereum.png';
import Green from '../images/green.png'
const CardContent = () => {
  return (
    <div className="card-content">
      <div className="icon">
        <img src={ Ethereum } alt="Ethereum icon" />
      </div>
      <div className="info">
        <div className="amount">$18,291</div>
        <div className="description">Ethereum - ETH</div>
      </div>
      <div className="change">
        <img src= { Green } alt="Arrow up" />
        <span>+0.25%</span>
      </div>
    </div>
  );
};

export default CardContent;

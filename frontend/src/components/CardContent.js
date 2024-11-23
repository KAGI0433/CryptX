import React from 'react';
import './CardContent.css';
import Bitcoin from '../images/bitcoin.png'
import Green from '../images/green.png'
const CardContent = () => {
  return (
    <div className="card-content">
      <div className="icon">
        <img src={Bitcoin} alt="Bitcoin icon" />
      </div>
      <div className="info">
        <div className="amount">$40,291</div>
        <div className="description">Bitcoin - BTC</div>
      </div>
      <div className="change">
        <img src= { Green } alt="Arrow up" />
        <span>+0.25%</span>
      </div>
    </div>
  );
};

export default CardContent;

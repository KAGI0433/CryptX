import React from 'react';
import './CardContent.css';

const CardContent = () => {
  return (
    <div className="card-content">
      <div className="icon">
        <img src="https://placeholder.pics/svg/52x52" alt="Ethereum icon" />
      </div>
      <div className="info">
        <div className="amount">$18,291</div>
        <div className="description">Ethereum - ETH</div>
      </div>
      <div className="change">
        <img src="https://placeholder.pics/svg/18x18" alt="Arrow up" />
        <span>+0.25%</span>
      </div>
    </div>
  );
};

export default CardContent;

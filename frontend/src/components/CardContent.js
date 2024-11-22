import React from 'react';
import './CardContent.css';

const CardContent = () => {
  return (
    <div className="card-content">
      <div className="icon">
        <img src="https://placeholder.pics/svg/52x52" alt="Bitcoin icon" />
      </div>
      <div className="info">
        <div className="amount">$40,291</div>
        <div className="description">Bitcoin - BTC</div>
      </div>
      <div className="change">
        <img src="https://placeholder.pics/svg/18x18" alt="Arrow up" />
        <span>+0.25%</span>
      </div>
    </div>
  );
};

export default CardContent;

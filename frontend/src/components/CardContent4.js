import React from 'react';
import './CardContent.css';

const CardContent = () => {
  return (
    <div className="card-content">
      <div className="icon">
        <img src="https://placeholder.pics/svg/52x52" alt="Cardano icon" />
      </div>
      <div className="info">
        <div className="amount">$3,291</div>
        <div className="description">Cardano - ADA</div>
      </div>
      <div className="change">
        <img src="https://placeholder.pics/svg/18x18" alt="Arrow down" />
        <span className="negative">-2.05%</span>
      </div>
    </div>
  );
};

export default CardContent;

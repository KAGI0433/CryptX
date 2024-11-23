import React from 'react';
import './CardContent.css';
import Cardano from '../images/cardano.png'
import Orange from '../images/orange.png'

const CardContent = () => {
  return (
    <div className="card-content">
      <div className="icon">
        <img src={Cardano} alt="Cardano icon" />
      </div>
      <div className="info">
        <div className="amount">$3,291</div>
        <div className="description">Cardano - ADA</div>
      </div>
      <div className="chance">
        <img src= { Orange } alt="Arrow down" />
        <span className="negative">-2.05%</span>
      </div>
    </div>
  );
};

export default CardContent;

import React from 'react';
import './CardContent.css';
import Litecoin from '../images/litecoin.png'
import Green from '../images/green.png'

const CardContent = () => {
  return (
    <div className="card-content">
      <div className="icon">
        <img src={ Litecoin} alt="Litecoin icon" />
      </div>
      <div className="info">
        <div className="amount">$8,291</div>
        <div className="description">Litecoin - ITL</div>
      </div>
      <div className="change">
        <img src= { Green } alt="Arrow up" />
        <span>+0.25%</span>
      </div>
    </div>
  );
};

export default CardContent;

import React from 'react';
import './Statistic.css';

const Statistic = () => {
  return (
    <div className="statistic">
      <div className="heading">BTC Prices</div>
      <div className="chart">
        <div className="amounts">
          <div>$800</div>
          <div>$600</div>
          <div>$400</div>
          <div>$200</div>
          <div>0</div>
        </div>
       
        <div className="tooltip">
          <div className="tooltip-dot"></div>
          <div className="tooltip-rectangle"></div>
          <div className="tooltip-text">$25,240</div>
        </div>
        <div className="months">
          <div>Jan</div>
          <div>Mar</div>
          <div>May</div>
          <div>Jul</div>
          <div>Sep</div>
          <div>Nov</div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;

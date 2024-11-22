import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://placeholder.pics/svg/36x20" alt="logo" />
        <span>CryptX</span>
      </div>
      <div className="menu">
        <div className="menu-item active">
          <img src="https://placeholder.pics/svg/24x24" alt="overview-icon" />
          <span>Overview</span>
          <div className="active-dot"></div>
        </div>
        <div className="menu-item">
          <img src="https://placeholder.pics/svg/24x24" alt="chart-icon" />
          <span>Chart</span>
        </div>
        <div className="menu-item">
          <img src="https://placeholder.pics/svg/24x24" alt="transactions-icon" />
          <span>Transactions</span>
        </div>
        <div className="menu-item">
          <img src="https://placeholder.pics/svg/24x24" alt="wallet-icon" />
          <span>Wallet</span>
        </div>
        <div className="menu-item">
          <img src="https://placeholder.pics/svg/24x24" alt="mailbox-icon" />
          <span>Mail Box</span>
        </div>
        <div className="menu-item">
          <img src="https://placeholder.pics/svg/24x24" alt="setting-icon" />
          <span>Setting</span>
        </div>
        <div className="menu-item">
          <img src="https://placeholder.pics/svg/24x24" alt="logout-icon" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
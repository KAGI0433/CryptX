import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search type of keywords" className="search-input" />
        <button className="search-button">
          <img src="https://placeholder.pics/svg/18x18" alt="search icon" />
        </button>
      </div>
      <div className="icons">
        <img src="https://placeholder.pics/svg/24x24" alt="notification icon" className="icon" />
        <img src="https://placeholder.pics/svg/24x24" alt="help icon" className="icon" />
      </div>
      <div className="profile">
        <img src="https://placeholder.pics/svg/40x40" alt="profile" className="profile-pic" />
        <div className="profile-info">
          <span className="profile-name">Laurice</span>
          <span className="profile-username">@laurice22</span>
          <img src="https://placeholder.pics/svg/24x24" alt="arrow down icon" className="arrow-icon" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;


import React from 'react';
import './SearchBar.css';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { CiCircleQuestion } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search type of keywords" className="search-input" />
        <button className="search-button">
        <FaMagnifyingGlass />
        </button>
      </div>
      <div className="icons">
      <GoBell />
      <CiCircleQuestion />
      </div>
      <div className="profile">
        <img src="https://placeholder.pics/svg/40x40" alt="profile" className="profile-pic" />
        <div className="profile-info">
          <span className="profile-name">Laurice</span>
          <span className="profile-username">@laurice22</span>
          <div> <FaAngleDown className="arrow-icon" /></div>
         
        </div>
      </div>
    </div>
  );
};

export default SearchBar;


import React from 'react';
import './Sidebar.css';
import Logo from '../images/Logo.png'
import { TbLogout2 } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";
import { IoCardOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { IoPieChartOutline } from "react-icons/io5";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src= { Logo } alt="logo" />
        <span>CryptX</span>
      </div>
      <div className="menu">
        <div className="menu-item">
        <IoGridOutline />
          <span>Overview</span>
        </div>
        <div className="menu-item">
        <IoPieChartOutline />
          <span>Chart</span>
        </div>
        <div className="menu-item">
        <IoCardOutline />
          <span>Transactions</span>
        </div>
        <div className="menu-item">
        <LuWallet />
          <span>Wallet</span>
        </div>
        <div className="menu-item">
        <IoMailOutline />
          <span>Mail Box</span>
        </div>
        <div className="menu-item">
        <IoSettingsOutline />
          <span>Setting</span>
        </div>
        <div className="menu-item">
        <TbLogout2 />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
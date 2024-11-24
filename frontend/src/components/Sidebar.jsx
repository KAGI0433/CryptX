import React from 'react';
import './Sidebar.css';
import { useNavigate, NavLink } from 'react-router-dom';
import Logo from '../images/Logo.png';
import { TbLogout2 } from "react-icons/tb";
import { IoSettingsOutline, IoMailOutline, IoCardOutline, IoGridOutline, IoPieChartOutline } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";

const Sidebar = () => {
  const navigate = useNavigate();

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Assuming JWT token is stored in localStorage
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>CryptX</span>
      </div>
      <div className="menu">
        <NavLink to="/overview" className="menu-item" activeClassName="active">
          <IoGridOutline />
          <span>Overview</span>
        </NavLink>
        <NavLink to="/chart" className="menu-item" activeClassName="active">
          <IoPieChartOutline />
          <span>Chart</span>
        </NavLink>
        <NavLink to="/transactions" className="menu-item" activeClassName="active">
          <IoCardOutline />
          <span>Transactions</span>
        </NavLink>
        <NavLink to="/wallet" className="menu-item" activeClassName="active">
          <LuWallet />
          <span>Wallet</span>
        </NavLink>
        <NavLink to="/mailbox" className="menu-item" activeClassName="active">
          <IoMailOutline />
          <span>Mail Box</span>
        </NavLink>
        <NavLink to="/settings" className="menu-item" activeClassName="active">
          <IoSettingsOutline />
          <span>Setting</span>
        </NavLink>
        <div className="menu-item logout" onClick={handleLogout}>
          <TbLogout2 />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

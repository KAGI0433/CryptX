import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import BTCGraph from '../components/BTCGraph';
import TransactionsSection from '../components/TransactionsSection';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check if the user is authenticated by verifying if the token exists
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect to login if no token is found
    } else {
      setLoading(false); // If token exists, proceed to dashboard
    }
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while checking the token
  }

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar Component */}
      <Sidebar />

      <div style={{ flex: 1, padding: '20px' }}>
        {/* Header Component */}
        <Header />

        {/* Dashboard Content */}
        <h2>Dashboard</h2>
        <div>
          <BTCGraph />
          <TransactionsSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import Sidebar from './Sidebar';
import BTCGraph from './BTCGraph';
import TransactionsSection from './TransactionsSection';
import Header from './Header';
import LiveMarket from './LiveMarket';
import CardContent from './CardContent';

const DashboardBody = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f9f9f9' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        {/* Header */}
        <Header />

        {/* Cards and BTC Graph Side by Side */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            margin: '20px 0',
          }}
        >
          {/* Cards Section */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
            }}
          >
            <CardContent title="Bitcoin - BTC" value="$40,291" change="+0.25%" />
            <CardContent title="Ethereum - ETH" value="$18,291" change="+0.25%" />
            <CardContent title="Litecoin - ITL" value="$8,291" change="+0.25%" />
            <CardContent title="Cardano - ADA" value="$3,291" change="-2.05%" />
          </div>

          {/* BTC Graph Section */}
          <BTCGraph />
        </div>

        {/* Live Market and Transactions */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          <LiveMarket />
          <TransactionsSection />
        </div>
      </div>
    </div>
  );
};

export default DashboardBody;

import React, { useEffect, useState } from 'react';
import './Transactions.css';
import Eth from '../images/eth.png';
import Bit from '../images/bit.png';

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    { name: 'Ethereum', action: 'Received', amount: null, time: 'Today, 19:30', icon: Eth },
    { name: 'Bitcoin', action: 'Buy', amount: null, time: 'Today, 14:32', icon: Bit },
    { name: 'Bitcoin', action: 'Buy', amount: null, time: 'Today, 13:50', icon: Bit },
    { name: 'Litecoin', action: 'Buy', amount: null, time: 'Today, 09:38', icon: Bit },
  ]);

  const fetchLivePrices = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd');
      const data = await response.json();

      // Update transactions with current prices
      const updatedTransactions = transactions.map((transaction) => {
        let price;
        switch (transaction.name.toLowerCase()) {
          case 'ethereum':
            price = `$${data.ethereum.usd}`;
            break;
          case 'bitcoin':
            price = `$${data.bitcoin.usd}`;
            break;
          case 'litecoin':
            price = `$${data.litecoin.usd}`;
            break;
          default:
            price = 'N/A';
        }
        return { ...transaction, amount: price };
      });

      setTransactions(updatedTransactions);
    } catch (error) {
      console.error('Error fetching live prices:', error);
    }
  };

  useEffect(() => {
    fetchLivePrices();
  }, []);

  return (
    <div className="transactions">
      <div className="heading">Transactions</div>
      {transactions.map((transaction, index) => (
        <div className="transaction-row" key={index}>
          <img src={transaction.icon} alt={`${transaction.name} icon`} className="icon" />
          <div className="transaction-details">
            <div className="name">{transaction.name}</div>
            <div className="action">{transaction.action}</div>
          </div>
          <div className="amount-time-wrapper">
            <div className="amount">{transaction.amount || 'Loading...'}</div>
            <div className="time">{transaction.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;






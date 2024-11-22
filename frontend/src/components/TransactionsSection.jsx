import React from 'react';
import './Transactions.css';

const Transactions = () => {
  const transactions = [
    {
      name: 'Ethereum',
      action: 'Received',
      amount: '$24,102',
      time: 'Today, 19:30',
      icon: 'https://placeholder.pics/svg/40x40',
    },
    {
      name: 'Bitcoin',
      action: 'Buy',
      amount: '$4,157',
      time: 'Today, 14:32',
      icon: 'https://placeholder.pics/svg/40x40',
    },
    {
      name: 'Bitcoin',
      action: 'Buy',
      amount: '$64,784',
      time: 'Today, 13:50',
      icon: 'https://placeholder.pics/svg/40x40',
    },
    {
      name: 'Litecoin',
      action: 'Buy',
      amount: '$14,265',
      time: 'Today, 09:38',
      icon: 'https://placeholder.pics/svg/40x40',
    },
  ];

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
          <div className="amount">{transaction.amount}</div>
          <div className="time">{transaction.time}</div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;

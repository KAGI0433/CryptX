import React, { useEffect, useState } from 'react';
import './Overview.css'
// Mock data for transactions
const mockTransactions = [
    { id: 1, type: 'Buy', date: '2024-11-15', amount: 0.5, price: 30000, status: 'Completed' },
    { id: 2, type: 'Sell', date: '2024-11-14', amount: 0.2, price: 32000, status: 'Pending' },
    { id: 3, type: 'Buy', date: '2024-11-12', amount: 1.0, price: 28000, status: 'Completed' },
    { id: 4, type: 'Sell', date: '2024-11-10', amount: 0.3, price: 31000, status: 'Completed' },
];

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Replace with your backend API call for real transaction data
        // For example:
        // fetch('http://localhost:5000/api/transactions')
        //     .then(response => response.json())
        //     .then(data => setTransactions(data))
        //     .catch(error => console.error('Error fetching transactions:', error));
        
        // Mock data setup
        setTransactions(mockTransactions);
    }, []);

    return (
        <div>
            <h1>Transaction History</h1>
            <table className="transactions-table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Amount (BTC)</th>
                        <th>Price (USD)</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length > 0 ? (
                        transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.type}</td>
                                <td>{transaction.date}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.price}</td>
                                <td>{transaction.status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No transactions available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;

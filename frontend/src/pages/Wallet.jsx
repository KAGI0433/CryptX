import React, { useEffect, useState } from 'react';
import './Overview.css'
// Mock data for wallet balance and transactions
const mockBalance = 2.5; // in BTC
const mockTransactions = [
    { id: 1, type: 'Deposit', date: '2024-11-15', amount: 1.0, status: 'Completed' },
    { id: 2, type: 'Withdraw', date: '2024-11-14', amount: 0.5, status: 'Pending' },
    { id: 3, type: 'Deposit', date: '2024-11-12', amount: 0.5, status: 'Completed' },
];

const Wallet = () => {
    const [balance, setBalance] = useState(mockBalance);
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Replace with real API calls to fetch balance and transactions
        // Example:
        // fetch('http://localhost:5000/api/wallet/balance')
        //     .then(response => response.json())
        //     .then(data => {
        //         setBalance(data.balance);
        //         setTransactions(data.transactions);
        //         setLoading(false);
        //     })
        //     .catch(error => {
        //         console.error('Error fetching wallet data:', error);
        //     });

        // For now, use mock data
        setTransactions(mockTransactions);
        setLoading(false);
    }, []);

    return (
        <div>
            <h1>My Wallet</h1>
            {loading ? (
                <p>Loading wallet data...</p>
            ) : (
                <>
                    <div className="wallet-info">
                        <h2>Balance: {balance} BTC</h2>
                        <div>
                            <button>Deposit</button>
                            <button>Withdraw</button>
                        </div>
                    </div>

                    <h3>Transaction History</h3>
                    <table className="transactions-table">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Amount (BTC)</th>
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
                                        <td>{transaction.status}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No transactions available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default Wallet;

import React, { useState, useEffect } from 'react';
import './Overview.css'
// Mock data for mailbox messages
const mockMessages = [
    { id: 1, subject: 'Transaction Alert', sender: 'CryptX Support', date: '2024-11-15', content: 'Your recent transaction of 0.5 BTC was successful.', read: false },
    { id: 2, subject: 'Security Notification', sender: 'CryptX', date: '2024-11-14', content: 'Your account has been logged into from a new device.', read: true },
    { id: 3, subject: 'Deposit Confirmation', sender: 'CryptX', date: '2024-11-12', content: 'A deposit of 1.0 BTC has been credited to your account.', read: true },
];

const MailBox = () => {
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);

    useEffect(() => {
        // Simulate fetching messages from an API
        // Example: fetch('http://localhost:5000/api/messages')
        //     .then(response => response.json())
        //     .then(data => setMessages(data))
        //     .catch(error => console.error('Error fetching messages:', error));

        // Set mock data initially
        setMessages(mockMessages);
    }, []);

    const handleMessageClick = (message) => {
        // Mark the message as read when clicked
        if (!message.read) {
            message.read = true;
            setMessages([...messages]);
        }
        setSelectedMessage(message);
    };

    return (
        <div>
            <h1>Mail Box</h1>
            <div className="mailbox-container">
                {/* Mail List */}
                <div className="mail-list">
                    <h3>Inbox</h3>
                    <ul>
                        {messages.map((message) => (
                            <li
                                key={message.id}
                                onClick={() => handleMessageClick(message)}
                                className={message.read ? '' : 'unread'}
                            >
                                <span>{message.subject}</span>
                                <small>({message.sender})</small>
                                <small>{message.date}</small>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Message Details */}
                {selectedMessage && (
                    <div className="message-details">
                        <h3>{selectedMessage.subject}</h3>
                        <p><strong>From: </strong>{selectedMessage.sender}</p>
                        <p>{selectedMessage.content}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MailBox;

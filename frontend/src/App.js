import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import Google OAuth provider
import DashboardBody from './components/DashboardBody';
import LoginForm from './pages/Login';
import Register from './pages/Register';
import Overview from './pages/Overview';
import Chart from './pages/Chart';
import MailBox from './pages/MailBox'
import Wallet from './pages/Wallet'
import Settings from './pages/Settings'
import Transactions  from './pages/Transactions';


function App() {
    const handleLogin = (response) => {
        console.log('Google login response:', response);
        if (response?.credential) {
            const googleToken = response.credential;
            fetch('http://localhost:5000/api/auth/google-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: googleToken }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('User data:', data);
            })
            .catch(error => {
                console.error('Error during Google login:', error);
            });
        }
    };

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <Router>
                <div style={{ display: 'flex', height: '100vh' }}>
                   
                    <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
                        <Routes>
                            {/* Existing Routes */}
                            <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
                            <Route path="/dashboard" element={<DashboardBody />} />
                            <Route path="/register" element={<Register />} />

                            {/* New Routes for Sidebar Links */}
                            <Route path="/overview" element={<Overview />} />
                            <Route path="/chart" element={<Chart />} />
                            <Route path="/transactions" element={<Transactions />} />
                            <Route path="/wallet" element={<Wallet />} />
                            <Route path="/mailbox" element={<MailBox />} />
                            <Route path="/settings" element={<Settings />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </GoogleOAuthProvider>
    );
}

export default App;










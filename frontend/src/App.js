import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import Google OAuth provider
import DashboardBody from './components/DashboardBody';
import LoginForm from './pages/Login';
import Register from './pages/Register';

function App() {
    const handleLogin = (response) => {
        // Handle the response from Google login
        console.log('Google login response:', response);
        if (response?.credential) {
            const googleToken = response.credential;
            // Use the googleToken, for example, send it to the backend for validation
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
                // Handle the received data (e.g., store the user info, redirect to dashboard, etc.)
            })
            .catch(error => {
                console.error('Error during Google login:', error);
            });
        }
    };

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <Router>
                <div style={{ height: '100vh', padding: '20px', overflowY: 'auto' }}>
                    <Routes>
                        <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
                        <Route path="/dashboard" element={<DashboardBody />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </div>
            </Router>
        </GoogleOAuthProvider>
    );
}

export default App;









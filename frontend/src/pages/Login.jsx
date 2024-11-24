import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google'; // Import Google OAuth component
import './login.css'; // Import the CSS file for styling
import Logo from '../images/Logo.png' // Import your logo



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      localStorage.setItem('authToken', 'my-auth-token');
      localStorage.setItem('username', username); // Store username in localStorage
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };
  
  // Handle Google login
  const handleGoogleLogin = (response) => {
    if (response.credential) {
      const token = response.credential;
      localStorage.setItem('authToken', token);
      localStorage.setItem('username', 'GoogleUser'); // Store a placeholder or actual user info from Google
      navigate('/dashboard');
    } else {
      alert('Google login failed');
    }
  };
  
  return (
    <div className="login-container">
     

      {/* Logo centered with animation */}
      <div className="logo-container">
        <img src={ Logo } alt="Logo" className="logo" />
      </div>

      <div className="email-container">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
      </div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
      <div className="google-login-container">
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => alert('Login Failed')}
          useOneTap
        />
      </div>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
}

export default Login;




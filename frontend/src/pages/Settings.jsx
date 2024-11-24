import React, { useState } from 'react';
import './Overview.css'
const Settings = () => {
    // State to handle form inputs
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleSaveProfile = (e) => {
        e.preventDefault();
        // Add logic to save profile updates (e.g., API call)
        console.log('Profile updated:', { username, email });
    };

    const handleChangePassword = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match');
        } else {
            // Add logic to change the password (e.g., API call)
            console.log('Password changed');
        }
    };

    const handleToggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // Add logic to toggle dark mode (e.g., save in local storage or context)
        document.body.classList.toggle('dark-mode', isDarkMode);
    };

    return (
        <div>
            <h1>Settings</h1>

            {/* Profile Settings */}
            <div className="settings-section">
                <h3>Profile Settings</h3>
                <form onSubmit={handleSaveProfile}>
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Save Profile</button>
                </form>
            </div>

            {/* Password Settings */}
            <div className="settings-section">
                <h3>Change Password</h3>
                <form onSubmit={handleChangePassword}>
                    <div>
                        <label>New Password</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Change Password</button>
                </form>
            </div>

            {/* Dark Mode Toggle */}
            <div className="settings-section">
                <h3>Display Settings</h3>
                <label>
                    Dark Mode
                    <input
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={handleToggleDarkMode}
                    />
                </label>
            </div>

            {/* Account Deletion */}
            <div className="settings-section">
                <h3>Account Deletion</h3>
                <button>Delete Account</button>
            </div>
        </div>
    );
};

export default Settings;

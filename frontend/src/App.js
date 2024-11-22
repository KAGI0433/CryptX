import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardBody from './components/DashboardBody';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <DashboardBody />
      </div>
    </Router>
  );
}

export default App;



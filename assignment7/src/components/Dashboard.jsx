import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard({ user }) {
  const navigate = useNavigate();
  const token = localStorage.getItem('jwtToken');

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/login');
  };

  return (
    <div className="dashboard-card">
      <div className="dashboard-header">
        <h2>Protected Dashboard</h2>
        <button onClick={handleLogout} className="btn-logout">Logout</button>
      </div>

      <div className="dashboard-body">
        <h3>Welcome, <span>{user || 'User'}</span>! 👋</h3>
        <p>You have successfully passed the route protection barrier.</p>
        
        <div className="token-display">
          <h4>Simulated JWT Token:</h4>
          <code>{token}</code>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
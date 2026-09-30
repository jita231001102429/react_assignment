import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const navigate = useNavigate();

  // "Remember User" ফিচার টেস্ট করার জন্য
  useEffect(() => {
    const savedUser = localStorage.getItem('rememberedUsername');
    if (savedUser) {
      setUsername(savedUser);
      setRememberMe(true);
    }
  }, []);

  // Password Strength Checker Logic
  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);

    if (val.length === 0) {
      setPasswordStrength('');
    } else if (val.length < 6) {
      setPasswordStrength('Weak');
    } else if (val.length >= 6 && /[A-Z]/.test(val) && /[0-9]/.test(val)) {
      setPasswordStrength('Strong');
    } else {
      setPasswordStrength('Medium');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError('Username is required!');
      return;
    }
    if (!password.trim()) {
      setError('Password is required!');
      return;
    }

    // JWT Token Simulation (ফাংশনাল টোকেন ডেমো)
    const fakeJwtToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.user_${Date.now()}`;

    localStorage.setItem('jwtToken', fakeJwtToken);

    if (rememberMe) {
      localStorage.setItem('rememberedUsername', username);
    } else {
      localStorage.removeItem('rememberedUsername');
    }

    setError('');
    onLoginSuccess(username);
    navigate('/dashboard');
  };

  return (
    <div className="login-card">
      <h2>System Login</h2>
      {error && <div className="alert-error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordStrength && (
            <div className={`strength-meter ${passwordStrength.toLowerCase()}`}>
              Strength: {passwordStrength}
            </div>
          )}
        </div>

        <div className="form-checkbox">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
        </div>

        <button type="submit" className="btn-login">Login</button>
      </form>
    </div>
  );
}

export default Login;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [enteredCaptcha, setEnteredCaptcha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  const handleLogin = () => {
    setError('');
    if (!username || !mobile || !password || !enteredCaptcha) {
      setError('Please fill in all fields');
      return;
    }

    if (enteredCaptcha !== captcha) {
      setError('Captcha is incorrect');
      generateCaptcha();
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const matchedUser = users.find(
      user =>
        user.username === username &&
        user.mobile === mobile &&
        user.password === password
    );

    if (!matchedUser) {
      setError('Invalid credentials or not registered');
      return;
    }

    alert('Login successful');
    navigate('/dashboard');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#f1f7ff',
      fontFamily: 'Arial',
      boxSizing: 'border-box',
      padding: '20px'
    }}>
      <div style={{
        width: '50%',
        minWidth: '400px',
        maxWidth: '700px',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '30px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login Form</h2>

        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />

        <label>Mobile Number:</label>
        <input
          type="text"
          value={mobile}
          onChange={e => setMobile(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />

        <label>
          Captcha: <strong>{captcha}</strong>
          <button
            type="button"
            onClick={generateCaptcha}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              backgroundColor: '#ddd',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          >
            Refresh
          </button>
        </label>
        <input
          type="text"
          value={enteredCaptcha}
          onChange={e => setEnteredCaptcha(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />

        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Login
        </button>

        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
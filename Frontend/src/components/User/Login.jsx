import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        toast.success('Login successful!');
        setTimeout(() => navigate('/'), 2000);
      } else {
        toast.error(data.message || 'Login failed.');
      }
    } catch (error) {
      toast.error('Server error. Try again later.');
    }
  };

  return (
    <div className="auth-container">
      <ToastContainer style={{ marginTop:'5.2vmax' }} />
      <div className="auth-card fade-in-up">
        <h2 className="auth-title">Welcome Back</h2>
        <form className="auth-form" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="auth-switch">Don’t have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;

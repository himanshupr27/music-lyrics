import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../css/Login.css';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: form.firstName,
          last_name: form.lastName,
          emailid: form.email,
          phone_no: form.phone,
          password: form.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Signup successful! Redirecting...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        toast.error(data.message || 'Signup failed.');
      }
    } catch (error) {
      toast.error('Server error. Try again later.');
    }
  };

  return (
    <div className="auth-container">
      <ToastContainer />
      <div className="auth-card slide-in">
        <h2 className="auth-title">Create Account</h2>
        <form className="auth-form" onSubmit={handleSignup}>
          <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <p className="auth-switch">Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Signup;

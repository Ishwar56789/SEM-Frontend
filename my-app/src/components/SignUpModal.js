import React, { useState } from 'react';
import './styles/SignUpModal.module.css';

const SignUpModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    currencyPreference: 'INR',
  });

  const [message, setMessage] = useState({ text: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const currencies = ['USD', 'EUR', 'GBP', 'INR', 'JPY'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setMessage({ text: 'Please enter your full name', type: 'error' });
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.emailAddress)) {
      setMessage({ text: 'Please enter a valid email', type: 'error' });
      return false;
    }
    if (formData.password.length < 8) {
      setMessage({ text: 'Password must be at least 8 characters', type: 'error' });
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: 'Passwords do not match', type: 'error' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: '', type: '' });

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8081/api/user/sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: 'Registration successful!', type: 'success' });
        setTimeout(onClose, 1500);
      } else {
        setMessage({ text: data.message || 'Registration failed', type: 'error' });
      }
    } catch (error) {
      setMessage({ text: 'Network error. Please try again.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose} disabled={isLoading}>
          &times;
        </button>
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="emailAddress"
              placeholder="Email Address"
              value={formData.emailAddress}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
          </div>

          <div className="form-group password-group">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password (min 8 characters)"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(prev => !prev)}
              tabIndex={-1}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <div className="form-group password-group">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowConfirmPassword(prev => !prev)}
              tabIndex={-1}
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <div className="form-group">
            <select
              name="currencyPreference"
              className="currency-select"
              value={formData.currencyPreference}
              onChange={handleChange}
              disabled={isLoading}
            >
              {currencies.map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>

        {message.text && (
          <p className={`message ${message.type}`}>
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUpModal;

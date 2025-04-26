import React, { useState } from 'react';
import styles from './styles/SignInModal.module.css';
// import { useNavigate } from 'react-router-dom';

const SignInModal = ({ onClose, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    registeredUserEmail: '',
    registeredUserPassword: ''
  });
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!/^\S+@\S+\.\S+$/.test(formData.registeredUserEmail)) {
      setMessage({ text: 'Please enter a valid email', type: 'error' });
      return false;
    }
    if (formData.registeredUserPassword.length < 8) {
      setMessage({ text: 'Password must be at least 8 characters', type: 'error' });
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
      // Step 1: Sign-in request to get JWT token
      const response = await fetch('http://localhost:8081/api/user/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        const token = data.data?.token;
        const backendMessage = data.message;
  
        if (token) {
          localStorage.setItem('token', token);
          console.log('JWT Token:', token);
  
          setMessage({ text: backendMessage || 'Login successful!', type: 'success' });

          onLoginSuccess?.();
          // navigate('/expenses');
        } else {
          setMessage({ text: 'Token not found in response', type: 'error' });
        }
      } else {
        setMessage({ text: data.message || 'Login failed', type: 'error' });
      }
    } catch (error) {
      console.error('Sign-in error:', error);
      setMessage({ text: 'Network error. Please try again.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };
  
  

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          disabled={isLoading}
        >
          &times;
        </button>

        <h2 className={styles.modalTitle}>Welcome Back 👋</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              name="registeredUserEmail"
              className={styles.input}
              value={formData.registeredUserEmail}
              onChange={handleChange}
              disabled={isLoading}
              required
              placeholder="email@example.com"
            />
          </div>

          <div className={`${styles.formGroup} ${styles.passwordGroup}`}>
            <label className={styles.label}>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="registeredUserPassword"
              className={styles.input}
              value={formData.registeredUserPassword}
              onChange={handleChange}
              disabled={isLoading}
              required
              placeholder="********"
            />
            <button
              type="button"
              className={styles.togglePassword}
              onClick={togglePasswordVisibility}
              disabled={isLoading}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        {message.text && (
          <p className={`${styles.message} ${styles[message.type]}`}>
            {message.text}
          </p>
        )}

        <div className={styles.footerLinks}>
          <button className={styles.linkButton}>Forgot password?</button>
          <button className={styles.linkButton}>Create new account</button>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;

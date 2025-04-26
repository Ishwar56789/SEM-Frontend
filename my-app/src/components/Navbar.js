// src/components/Navbar.js
import React from 'react';
import styles from './styles/Navbar.module.css';

const Navbar = ({ onSignInClick }) => {  // Accepting onSignInClick as a prop
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Smart Expense Manager</div>
      <ul className={styles.navLinks}>
        <li><a href="/" className={styles.navLink}>Home</a></li>
        <li><a href="#features" className={styles.navLink}>Features</a></li>
        <li><a href="#about" className={styles.navLink}>About</a></li>
        <li>
          <a 
            href="#sign-in" 
            onClick={(e) => {
              e.preventDefault();
              onSignInClick();
            }} 
            className={styles.navLink}
          >
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
